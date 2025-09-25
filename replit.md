# Project Saubhagya - From Dung to Dhan

## Overview
This is a React + Vite application for Project Saubhagya, a platform focused on cow-centered biogas production with fair farmer payments and PESO-compliant CBG supply for corporates.

## Recent Changes
- **2025-09-25**: Initial setup for Replit environment
  - Configured Vite dev server to run on port 5000 with host 0.0.0.0
  - Added `allowedHosts: true` for Replit proxy compatibility
  - Set up deployment configuration for autoscale
  - Created start script for production builds

## Project Architecture
- **Frontend**: React 18 + Vite + TypeScript
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom Saubhagya brand colors
- **Routing**: React Router DOM with BrowserRouter
- **State Management**: React Query (TanStack Query) for server state
- **Internationalization**: Custom LanguageContext for multi-language support
- **Build Tool**: Vite with SWC plugin for fast builds

## Key Features
- Multi-language support (Hindi/English)
- Responsive design with custom brand colors
- Multiple landing pages for different user types (Farmers/Corporate)
- Contact forms and service information
- SEO optimized with proper meta tags

## Tech Stack
- React 18.3.1
- Vite 5.4.19
- TypeScript 5.8.3
- Tailwind CSS 3.4.17
- shadcn/ui components
- React Router DOM 6.30.1
- TanStack React Query 5.83.0

## Development
- Development server runs on port 5000
- Hot module replacement enabled
- Component tagging for development mode
- ESLint configuration for code quality