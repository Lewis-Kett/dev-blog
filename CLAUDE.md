# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js 15 personal branding website and development blog built with:

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Custom component library built on Radix UI primitives
- **Typography**: Manrope font from Google Fonts
- **Carousel**: Embla Carousel with autoplay and auto-scroll plugins

### Project Structure

- `/src/app/` - Next.js app router pages and layout
- `/src/components/custom/` - Custom UI components organized by feature
- `/src/components/ui/` - Base UI primitives (Button, Card, Carousel)
- `/src/content/` - Content data exported from TypeScript files
- `/src/lib/` - Utilities (currently just Tailwind merge utility)

### Component Architecture

Components follow a modular pattern with barrel exports:
- Each component directory has an `index.ts` file for clean imports
- Content is separated into `/src/content/` files and imported as needed
- Components use TypeScript with proper typing
- Styling uses Tailwind classes exclusively with class-variance-authority for variants

### Key Design Patterns

- **Content Separation**: All content data lives in `/src/content/` directory
- **Component Variants**: Uses `class-variance-authority` for component styling variants
- **Accessibility**: Components follow accessibility best practices with proper ARIA labels
- **Early Returns**: Code uses early returns for better readability
- **Descriptive Naming**: Event handlers use "handle" prefix (e.g., `handleClick`)

### Development Guidelines (from Cursor rules)

- Use early returns for readability
- Always use Tailwind classes, avoid CSS files for styling
- Use descriptive variable and function names
- Implement accessibility features on interactive elements
- Use `const` declarations over `function` declarations
- Define TypeScript types where possible
- Focus on readable code over performance optimization

## MCP Server Integration

This project is configured with the Context7 MCP server for retrieving up-to-date documentation. When performing tasks that require current documentation, use the available MCP tools to fetch the latest information from official sources.

**Key use cases:**
- Retrieving ShadCN component documentation and examples
- Getting the latest Next.js features and API documentation
- Accessing current Tailwind CSS utility classes and configuration options
- Fetching up-to-date React patterns and best practices

Always prioritize using MCP-sourced documentation over potentially outdated knowledge when implementing features or troubleshooting issues.