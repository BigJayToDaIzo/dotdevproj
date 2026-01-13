# Claude Code Project Notes

## Project Overview
Building a minimal/clean resume site for josephmyers.dev using Astro static site generation.

## Design Specifications
- **Style:** Minimal/clean aesthetic with system fonts, neutral grays, single accent color (#3b82f6)
- **Sections:** Experience, Skills, Education
- **Performance:** Zero JavaScript, scoped CSS, fully static output
- **Deployment:** VPS with Caddy (auto SSL via Let's Encrypt)

## Current Status
✅ GitHub repo created and pushed
✅ GitHub Actions workflow configured with Claude Code integration
✅ Astro project initialized
✅ Layout.astro updated with CSS custom properties and typography system
⏸️ In progress: Creating resume data structure

## Implementation Todo List

### Phase 1: Foundation & Data (IN PROGRESS)
- [x] Update Layout.astro with CSS custom properties and typography
- [ ] **BLOCKED:** Create resume.ts with actual resume data (need PDF or content from user)
- [ ] Create Section.astro component with animations

### Phase 2: Core Components (PENDING)
- [ ] Create Header.astro component
- [ ] Create ExperienceItem.astro component
- [ ] Create Experience.astro component
- [ ] Create Skills.astro component
- [ ] Create Education.astro component
- [ ] Create Footer.astro component

### Phase 3: Assembly & Cleanup (PENDING)
- [ ] Update index.astro to assemble all components
- [ ] Delete unused Welcome.astro and asset files

### Phase 4: Configuration & Testing (PENDING)
- [ ] Update astro.config.mjs with site configuration
- [ ] Test responsive breakpoints (320px, 768px, 1024px+)
- [ ] Build and preview the site
- [ ] Deploy to VPS

## Design System Reference

### Colors
```css
--color-text: #1a1a1a;
--color-text-muted: #6b7280;
--color-accent: #3b82f6;
--color-border: #e5e7eb;
--color-hover: #2563eb;
```

### Spacing Scale
```css
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 3rem;
--spacing-xl: 4rem;
```

### Typography
- h1: 2.5rem (Name in header)
- h2: 1.875rem (Section titles)
- h3: 1.5rem (Job titles/company names)
- body: 1rem
- System font stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, etc.

## Next Steps
1. User to provide resume content (PDF link or raw data)
2. Populate resume.ts with actual data
3. Continue with component creation

## Integration Notes
- **Astro MCP:** Connected for accessing latest Astro documentation
- **Caddy MCP:** To be integrated for VPS deployment management
- **GitHub Actions:** Claude Code action configured with CLAUDE_CODE_OAUTH_TOKEN

## Repository
https://github.com/BigJayToDaIzo/dotdevproj (PUBLIC)

## Deployment Target
https://josephmyers.dev (VPS with Caddy)
