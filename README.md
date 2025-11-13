# BrightMinds

A responsive, pixel-perfect educational non-profit website built with React, TypeScript, and Tailwind CSS.

🌐 **Live Demo**: [bright-minds-lxjoe1kar-kalpalathikas-projects.vercel.app](https://bright-minds-lxjoe1kar-kalpalathikas-projects.vercel.app/)

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Build for Production

```bash
npm run build
npm run preview
```

## Architecture

**Component-Based Design**
- `layout/` - Header, Footer with sticky navigation
- `sections/` - Hero, HowWeHelp, VoicesOfChange, Volunteer
- `ui/` - Reusable components (Button, Input, Card, Checkbox, TextArea)
- `shared/` - ServiceCard, TestimonialCard

**Tech Stack**
- React 18 + TypeScript for type safety
- Tailwind CSS for responsive, utility-first styling
- React Hook Form + Zod for robust form validation
- Lucide React for icons

**Key Decisions**
- Mobile-first responsive design with breakpoints at 768px and 1024px
- Modular component structure for maintainability
- Centralized validation schemas in `utils/validation.ts`
- TypeScript interfaces in `types/` for consistency

## Customization

- **Colors**: Update `tailwind.config.js`
- **Images**: Replace files in `public/images/`
- **Content**: Edit section components in `src/components/sections/`
- **Form API**: Update `onSubmit` in `VolunteerSection.tsx`

## Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer
│   ├── sections/    # Page sections
│   ├── ui/          # Reusable UI
│   └── shared/      # Shared components
├── types/           # TypeScript types
└── utils/           # Validation schemas
```
