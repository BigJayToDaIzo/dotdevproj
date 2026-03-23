---
title: "Neovim + .NET: The Completion Fix Nobody Wrote Yet"
description: "Override completions in Neovim with roslyn.nvim and nvim-cmp are silently broken. Here's the 90-minute debugging saga and the monkey-patch that fixes it."
pubDate: 2026-02-27
tags: ["neovim", "dotnet", "csharp", "roslyn", "lsp", "developer-experience"]
---

- sequel to the EF Core post — was trying to learn the ORM, got stuck fighting the editor instead
- override completions (`OnConfiguring`, `OnModelCreating`, etc.) silently break in nvim-cmp + roslyn.nvim
- keywords complete fine, method scaffolds don't — the kind of bug that makes you question your entire config
- spent 90 minutes with Claude debugging this layer by layer — it was wrong five times before it was right, but it was a relentless pair partner
- the root cause: `cmp-nvim-lsp` sends completion commands directly to the Roslyn server, bypassing every client-side handler Neovim and roslyn.nvim provide
- roslyn.nvim already ships the fix (`lua/roslyn/lsp/commands.lua`) — `cmp-nvim-lsp` just never calls it
- the `.client.` in `roslyn.client.completionComplexEdit` is the tell — it's a client-side command, the server literally can't handle it
- fix is a monkey-patch on the roslyn client's `request` method — intercept before it hits the wire, route to the local handler
- but cmp already applied its textEdit before the command fires, so the buffer state is wrong for the complexEdit's ranges
- undo scoping: `<C-G>u` break point before `cmp.confirm()` so `silent! undo` only reverts cmp's edit, not the whole insert session
- then autopairs fires on `confirm_done` and injects stray `()` after the scaffold — because of course it does
- buffer-local flag (`vim.b.roslyn_complex_edit`) to suppress autopairs during complexEdit completions
- cursor positioning: Roslyn parks you after the `;` but the natural spot is inside the base call's parens
- three files touched: `roslyn.lua`, `completion.lua`, and your sanity
- the code works, is labeled as AI-generated spaghetti in the comments, and I'm not sorry
- this is the kind of DX gap that makes people give up on non-VS-Code .NET development
- nobody should have to debug LSP protocol routing just to get method completions working
- the fix is reusable — anyone running roslyn.nvim + nvim-cmp will hit this wall eventually
- point readers to the repo: [EntityFrameworkCore learning project](https://github.com/YOURUSER/EntityFrameworkCore) — `roslyn.lua` and `completion.lua` are the files, documented inline
- broader point: Neovim .NET dev is possible and genuinely good once you clear these hurdles — but clearing them is an unreasonable ask without someone else having done it first
- this post is that someone else
