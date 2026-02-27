---
title: "Freshening My C# (After 2 Years of Gleam & Rust)"
description: "Returning to C# after two years of functional programming with Gleam and Rust. Exercism exercises, editor friction, and paradigm whiplash."
pubDate: 2026-02-15
tags: ["csharp", "gleam", "rust", "dotnet", "exercism", "learning"]
---

I spent about six months learning Rust — wrote a dicing library, got comfortable with the borrow checker — and then discovered Gleam and fell MADLY in love immediately. No classes, no objects, no mutability, no worrying about pointers or whether you're passing by reference or value. Just data in, data out, build iteratively. Simple. I never looked back. Then I decided to come back to C# and the relearning process has been equal parts humbling and hilarious.

I'm using [Exercism](https://exercism.org) as the vehicle. Pre-written test suites, focused exercises, no project scaffolding to fuss with. The idea was to spend my time thinking about C# instead of thinking about everything around C#.

That lasted about four hours.

## The Setup Gauntlet

I run Arch. I chose Helix over VS Code because swimming against the current was the point — I wanted to earn my dev environment, not click "install extension" and forget what's underneath.

The LSP situation ate an entire evening. I started with csharp-ls as the lightweight option. Turns out it was silently broken in Helix — the config existed in `languages.toml` but was never actually wired in until a fix landed in December 2025. Even after that fix, csharp-ls sends `registerCapability` requests that Helix doesn't handle, so completions, hover, and go-to-definition all silently fail. The worst kind of broken: no errors, just nothing happening.

OmniSharp works. It's heavier, slower to initialize, and has its own warts — null message crashes, contradictory diagnostics when `.sln` files are involved — but features actually function. That's the bar for non-VS-Code C# development: "it works" is a win.

Then there's asdf managing dotnet runtimes, `DOTNET_ROOT` environment variables haunting you across sessions, cached build artifacts silently using the wrong runtime version. `dotnet clean` became a reflex. And the MCP servers I use for AI-assisted learning? Those need their own runtimes wired through asdf too. Even my AI tooling has dependency chains.

The theme: non-VS-Code C# dev is an earned experience, not a supported one.

## Swimming Against the Current

Here's the tension I didn't expect. Choosing Helix was philosophically motivated — I wanted the friction, the learning. But Helix is pushing back on C# in ways that compound.

The core issue isn't C# support specifically. It's Helix's selection-first model (select, then act) versus Vim's verb-noun model (act, then target). After months of use, navigation and selection never became muscle memory. Vim's motions just feel more natural to me. I miss `s/old/new/g` — the `ed` lineage of regex search-and-replace that Vim carries and Helix dropped. Helix's replacement workflow feels like extra steps for a solved problem.

I'm missing Neovim more each day Helix pushes back on my dotnet dev kit. Helix was a recent adoption, not a long-term investment, so the switching cost is low. The signal is clear: if you're still fighting the editor instead of thinking about the code, the editor is wrong.

There's a blog post in the tension between "earning your dev environment" and "knowing when the tax is too high." I haven't resolved it yet.

## The Paradigm Whiplash

Two years of functional thinking rewires your brain in ways you don't notice until you're back in OOP land.

In Gleam, there are no classes. No objects. No inheritance hierarchies. You have functions that take data and return data. You build programs by composing those functions with the pipe operator: `value |> transform |> format |> send`. Every function is explicit about what it takes and what it gives back.

Coming back to C#, I suddenly need to care about *where* state lives again. Static vs instance — a distinction that doesn't exist in functional land. The discovery pattern is different too: in functional code you ask "what functions take this type?" In OOP you ask "what methods does this type have?" The pipe `|>` versus the dot `.` — they're different mental models for composition, and switching between them is genuinely disorienting.

It's not that C# is hard. It's that Gleam strips away all the ceremony, and when you come back to a language that has ceremony, you feel every bit of it.

## Convention Friction

Rust and Gleam both use `snake_case`. After two years, `get_balance` comes out of my fingers automatically. C# wants `GetBalance` for methods, `camelCase` for locals, `_underscore` for private fields, and PascalCase even for constants — no `SCREAMING_SNAKE` allowed. Catch this early or you're refactoring everything later.

Then there's indentation. My preference is 2 spaces. Gleam uses 2 spaces. Exercism's `.editorconfig` enforces 4 because that's the C# convention. Surrendering to the ecosystem is part of relearning the language, but the muscle memory fights back.

And line width — Rust and terminal habits push 80 characters, but the C# ecosystem happily runs 120+. Meanwhile every corpo pushes mobile-first web design where content sits in a skinny column using 15% of a 27" monitor. God forbid the user turn their neck to enjoy the full width of their device. We optimize code for wide screens but web content for phone screens — on the same monitor.

## Death by a Thousand Suffixes

C#'s type system doesn't let you be lazy. `m` for decimal, `f` for float — every numeric literal needs its suffix or the compiler rejects it. No implicit conversion across the base-2 / base-10 boundary. Mixing a decimal comparison with a double literal won't even compile. It's intentional strictness, and Rust's compiler yells at you too, but for different reasons.

The highlight was discovering `BigInteger.ModPow` during the Diffie-Hellman exercise. Without it you'd call `Pow` and then `%`, which is astronomically slow on big numbers — ModPow does modular exponentiation natively in one optimized call. The naming is so good it feels like an action verb: you don't calculate, you ModPow. Meanwhile, casting `BigInteger` through `double` for the private key loses precision on large primes, because of course it does. The type system friction never stops.

## The Documentation Gap

Gleam's standard library is small enough to nearly memorize in a holiday weekend. .NET's Base Class Library has eight ways to do one thing and requires tree exploration to find the right one. The discovery process — browsing namespaces, reading overloads, cross-referencing docs — kills velocity.

And the docs themselves: `learn.microsoft.com` feels cumbersome after [HexDocs](https://hexdocs.pm). HexDocs is clean, searchable, with community libraries sitting alongside the standard library — everything in one place. Microsoft's documentation is thorough, but the navigation and discovery UX is a velocity killer.

The real documentation is your LSP. `.ToLower()` was right there on the string — I would've found it instantly by typing `.` and reading autocomplete. Dot-into-it discovery is faster than any website when you trust it. But this only works if your LSP actually works, which circles back to the setup gauntlet.

Gleam's compiler errors deserve a mention too. They read like a conversation — friendly, specific, pointing you to the fix. xUnit test failures are informative but clinical. And the Gleam LSP catches issues before you even run tests, which is a tighter feedback loop than anything I've hit in the C# ecosystem so far.

## AI-Assisted Learning in 2026

I'm using Claude Code with [Context7](https://context7.com) MCP for live, version-specific documentation injected directly into prompts. It shortcuts the tree exploration of .NET's BCL beautifully — instead of spelunking through namespaces, I can ask about a concept and get current, accurate API information back.

But I'm running a strict "no AI code" policy. Claude is a rubber duck: we discuss concepts, performance, readability, reusability, maintainability. I drive all the code. The discipline matters — if you let the AI write your learning exercises, you're not learning, you're transcribing.

The irony: I need AI to help me knock the dust off a familiar language, while the AI itself needs help configuring its own tooling. MCP servers have their own dependency chains — asdf runtimes, package managers, cargo installs. The setup is non-trivial. Context7 was 404ing during my first session because Node.js wasn't in `.tool-versions`. Even your AI assistant's documentation tools need their environments earned.

## The Silver Lining

Modern C# isn't your dad's C#. Pattern matching, records, LINQ — the functional influence is strong these days. Expression-bodied members and switch expressions feel almost functional. It's not Gleam-clean, but it's not 2008 enterprise Java either.

What C# still lacks — discriminated unions, a pipe operator — keeps it from fully bridging the gap. But the relearning itself is the value. Seeing your old language through the lens of two years of functional programming doesn't just teach you C# again. It teaches you what the functional languages gave you, what they took away, and what you actually miss versus what you just got used to.

The exercises are small. The friction is real. The blog post is longer than any of the solutions.

That tracks.
