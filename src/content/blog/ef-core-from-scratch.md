---
title: "Learning EF Core in 2026 (And Fighting Microsoft Every Step)"
description: "Attempting to learn Entity Framework Core from the official tutorial. The tooling fought back harder than the ORM."
pubDate: 2026-02-27
tags: ["csharp", "dotnet", "ef-core", "learning", "developer-experience"]
draft: true
---

I set out to learn EF Core. I spent most of my time fighting the toolchain instead of learning the ORM.
a

This is a sequel to [Freshening My C#](/blog/freshening-my-csharp/) — where Exercism was the vehicle for relearning the language. Now it's time to learn the framework the ecosystem actually revolves around. The plan: follow Microsoft's official "Getting Started" tutorial, build something, and document what the process is actually like for a returning developer in 2026.


## The Tooling Tax (Continued)

Coming back to C# after Go, Rust, and Gleam means coming back with expectations. In those ecosystems, the compiler is a teacher. Rust's error messages are basically tutorials that point to the first character of the keyword or expression that's problematic. Go's are wonderfully expressive and clear. Gleam's read like a friend explaining what went wrong, and often tell you what you likely MEANT to do!

The Roslyn LSP rarely provides anything more informational than a CS error code. Test failure feedback is abysmal. The entire workflow is riddled with distractions that pull you away from the logic for far too long — searching through documentation muck for the right class, method, or signature when the tooling and LSP should be handing it to you.

## The Tutorial vs. The Tooling

Microsoft's official EF Core tutorial starts simple: `dotnet new console`, add the SQLite NuGet package, create your model. Fine.

The first detour comes immediately. The tutorial tells you to create `Model.cs` in the project root and put `BloggingContext` inside it. The Roslyn analyzer immediately objects — the file name doesn't match the class name, the namespace needs fixing. Microsoft's own tutorial generates warnings from Microsoft's own tooling. You can't make this up.

Then it wants `Blog` and `Post` entity classes in the same file. The analyzer wants them split into separate files before you've even finished defining the model. So mid-tutorial, you're refactoring — not because you learned something about EF Core, but because the tooling and the tutorial are written by teams that apparently never spoke to each other.

There's a case for keeping tutorials dead simple. But for anyone returning to the ecosystem rather than learning from scratch, that simplicity creates friction — your tooling is configured for real-world conventions, and the tutorial code immediately triggers warnings that pull you out of the learning flow. A "returning developer" path that follows modern project conventions from the start would go a long way.

## `dotnet new tool-manifest`

To avoid installing `dotnet-ef` globally, you scope it to the project: `dotnet new tool-manifest` followed by `dotnet tool install dotnet-ef`.

But `dotnet new tool-manifest` reads like you're creating a new project. You're not. It drops a `.config/dotnet-tools.json` file. The `dotnet new` command is overloaded for both project scaffolding and utility file generation. A dedicated `dotnet tool init` would have been clearer, less confusing, and wouldn't have sent me down a five-minute rabbit hole wondering what project I just created.

## What's Missing: A "What's New" Track

What I really wanted — and what doesn't exist — is a tutorial track that demonstrates what's changed. Not a changelog. Not release notes. A guided walkthrough: "You used to do X, now you do Y, and here's why." Show the old pattern, show the new one, explain the delta. For anyone who last touched EF Core a few versions ago, that would be worth more than every "Getting Started" tutorial combined.

## Where This Goes Next

The flat tutorial is done. `BloggingContext`, `Blog`, `Post` — it works. I tinkered with it and still feel like I understand almost nothing about the framework. The tutorial walks you through the motions without explaining the *why* behind any of it.

Next step: tear this flat structure apart and reorganize it the way real projects do — domain entities separated from the DbContext, proper configuration files, something that looks like a codebase instead of a homework assignment. Microsoft's [eShop reference app](https://github.com/dotnet/eShop) and Jason Taylor's [Clean Architecture template](https://github.com/jasontaylordev/CleanArchitecture) are the targets.

The exercises are small. The friction is real. The blog post is longer than any of the code I wrote.

That still tracks.
