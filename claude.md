# Claude Code Project Notes

## Project Overview
Terminal-themed personal website and resume for josephmyers.dev built with Astro. The site mimics a terminal interface with command-line aesthetics, syntax highlighting colors, and ASCII art.

## Design Specifications
- **Style:** Terminal/CLI aesthetic with Dracula-inspired dark theme
- **Font:** JetBrains Mono (monospace)
- **Theme:** Dark mode default with light mode toggle
- **Features:** ASCII art headers, command-line styled navigation, PDF export for resume
- **Deployment:** VPS with Caddy (auto SSL via Let's Encrypt)

## Current Status
✅ GitHub repo created and pushed
✅ GitHub Actions workflow configured with Claude Code integration
✅ Astro project initialized
✅ Terminal-themed design system implemented
✅ All core pages built (home, about, blog, projects, hire)
✅ Resume data populated in src/data/resume.ts
✅ Dark/light theme toggle working
✅ Print/PDF export with traditional resume layout (serif font, clean formatting)
✅ ASCII art alignment fixed (no leading newline in template literals)
✅ Personal content updated (about page, blog post, projects)
✅ GitHub link added to contact info (full URLs displayed)

## Project Structure
```
src/
├── components/
│   ├── AsciiArt.astro       # ASCII art display
│   ├── CommandLine.astro    # Terminal command styling
│   ├── Cursor.astro         # Blinking cursor
│   ├── OutputBlock.astro    # Command output container
│   ├── Prompt.astro         # Terminal prompt (user@host:~$)
│   ├── TerminalInput.astro  # Fake terminal input field
│   └── TypeWriter.astro     # Typewriter effect
├── content/
│   ├── config.ts            # Content collections config
│   └── blog/                # Blog posts (markdown)
├── data/
│   └── resume.ts            # Resume data + navigation + ASCII art
├── layouts/
│   └── Layout.astro         # Main layout with nav, terminal window, footer
├── pages/
│   ├── index.astro          # Home page
│   ├── about.astro          # About me page
│   ├── blog/                # Blog listing and posts
│   ├── projects.astro       # Projects page
│   └── hire.astro           # Resume/contact page with PDF export
└── styles/
    └── global.css           # Design system and global styles
```

## Design System Reference

### Colors (Dark Theme - Dracula-inspired)
```css
--bg-primary: #0d1117;
--bg-secondary: #161b22;
--bg-tertiary: #21262d;
--text-primary: #e6edf3;
--text-secondary: #8b949e;
--text-muted: #6e7681;

/* Syntax highlighting */
--syntax-green: #7ee787;
--syntax-blue: #79c0ff;
--syntax-purple: #d2a8ff;
--syntax-orange: #ffa657;
--syntax-yellow: #ffd866;
--syntax-cyan: #a5d6ff;
```

### Spacing Scale
```css
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;
--space-2xl: 3rem;
```

### Typography
```css
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 2rem;
```

## Potential Future Enhancements
- [ ] Add more blog posts
- [ ] Add more projects
- [ ] Interactive terminal commands (Easter eggs?)
- [ ] Deploy to VPS

## Notes
- ASCII art strings must NOT start with a newline in template literals (causes leading whitespace to be stripped)
- Hire page has two versions: terminal-styled (screen) and traditional resume (print/PDF)
- Resume bullets support HTML via `set:html` directive for links

## Integration Notes
- **GitHub Actions:** Claude Code action configured with CLAUDE_CODE_OAUTH_TOKEN

## Repository
https://github.com/BigJayToDaIzo/dotdevproj (PUBLIC)

## Deployment Target
https://josephmyers.dev (VPS with Caddy)
