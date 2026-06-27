# Betnalal Woodcraft - Design System

## Overview
This document defines the design system for the Betnalal Woodcraft website, ensuring consistency across all components and pages.

---

## Color Palette

### Primary Colors
- **Primary (Amber Orange)**: `#C86400`
  - Used for CTAs, headings, accents, and interactive elements
  - Hover state: `#B55B00` (darker amber)
  - Tailwind class: `primary`, `text-primary`, `bg-primary`

### Background Colors
- **White**: `#FFFFFF`
  - Primary page background and card backgrounds
  - Tailwind class: `white`, `bg-white`

- **Warm Ivory**: `#FDF8F2`
  - Section background for alternating sections
  - Provides subtle contrast from pure white
  - Tailwind class: `warmIvory`, `bg-warmIvory`

### Text Colors
- **Charcoal (Main Text)**: `#2C2C2C`
  - Primary text color for headings and body copy
  - High contrast for readability
  - Tailwind class: `charcoal`, `text-charcoal`

- **Gray (Secondary Text)**: `#666666`
  - Subtitles, descriptions, and secondary information
  - Lighter weight to create visual hierarchy
  - Tailwind class: `gray`, `text-gray`

- **Dark Charcoal (Footer)**: `#1F1F1F`
  - Background color for footer sections
  - Near-black for maximum contrast with white text

---

## Typography

### Display Font: Playfair Display (Serif)
**Usage**: Hero headings, H1–H2, primary section titles
- **Family**: `Playfair Display`
- **Tailwind class**: `font-display`
- **Weights**: 400, 500, 600, 700, 800, 900
- **Examples**: Hero title, section headings, feature titles

### Body Font: Inter (Sans-serif)
**Usage**: Body copy, CTAs, labels, descriptions
- **Family**: `Inter`
- **Tailwind class**: `font-body`
- **Weights**: 400, 500, 600, 700
- **Examples**: Paragraphs, button labels, navigation, form fields

---

## Usage Guidelines

### Color Application

#### CTAs & Buttons
```jsx
<button className="bg-primary hover:bg-amber-700 text-white px-8 py-4 rounded-full font-body font-semibold">
  Book Consultation
</button>
```

#### Headings
```jsx
<h1 className="text-5xl font-bold text-charcoal font-display">
  Transforming Spaces
</h1>

<h2 className="text-3xl font-semibold text-charcoal font-display">
  Section Title
</h2>
```

#### Body Text
```jsx
<p className="text-gray font-body">
  This is descriptive text with secondary information.
</p>
```

#### Accents & Links
```jsx
<p className="uppercase tracking-[4px] text-primary mb-3 font-body font-semibold">
  Section Label
</p>
```

### Section Backgrounds
- Alternate between `#FFFFFF` (white) and `#FDF8F2` (warm ivory)
- Creates visual rhythm and breaks up content
- Example:
  - Hero: `bg-warmIvory`
  - Services: `bg-white`
  - Process: `bg-warmIvory`
  - Portfolio: `bg-white`

---

## Components Reference

### Tailwind Configuration
All colors and fonts are configured in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#C86400',
      charcoal: '#2C2C2C',
      gray: '#666666',
      warmIvory: '#FDF8F2',
      white: '#FFFFFF',
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
},
```

### Global Font Import
Fonts are imported in `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');
```

---

## Component Examples

### Hero Section
- **Background**: `bg-warmIvory`
- **Heading**: `font-display`, `text-charcoal`, `text-5xl md:text-7xl`
- **Description**: `font-body`, `text-gray`, `text-xl`
- **CTA**: Primary button with `bg-primary`

### Service Card
- **Background**: `bg-white`
- **Title**: `font-display`, `text-charcoal`, `text-2xl`
- **Description**: `font-body`, `text-gray`
- **Link**: `text-primary` with hover effect

### Navigation
- **Logo**: `text-charcoal`, `font-display`, `text-xl font-bold`
- **Links**: `text-charcoal`, `hover:text-primary`
- **Button**: `bg-primary`, `font-body`, `font-semibold`

### Footer
- **Background**: `bg-charcoal` (dark)
- **Headings**: `font-display`, `text-white`
- **Text**: `text-gray`, `font-body`
- **Icons**: `text-primary`

---

## Common Patterns

### Primary CTA Button
```jsx
className="bg-primary hover:bg-amber-700 text-white px-8 py-4 rounded-full font-body font-semibold transition-all duration-300 hover:scale-105"
```

### Secondary Button (Outline)
```jsx
className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-body font-semibold transition-all duration-300"
```

### Section Heading
```jsx
className="text-5xl font-bold text-charcoal font-display"
```

### Label/Subtitle
```jsx
className="uppercase tracking-[4px] text-primary mb-4 font-body font-semibold"
```

---

## Best Practices

1. **Always use Tailwind classes** instead of hardcoded hex colors
2. **Use `font-display`** for headings and titles
3. **Use `font-body`** for all body copy and form elements
4. **Maintain color consistency** across similar components
5. **Alternate section backgrounds** for visual variety
6. **Use `hover:bg-amber-700`** for button hover states
7. **Test contrast** for accessibility (WCAG AA compliant)

---

## Customization

To maintain the design system while adding new components:

1. Always refer to Tailwind color classes (`primary`, `charcoal`, `gray`, etc.)
2. Use semantic color names in Tailwind config
3. Import fonts from Google Fonts in `index.css`
4. Update this document when adding new patterns or components

---

## Resources

- **Tailwind Config**: `tailwind.config.js`
- **Global Styles**: `index.css`, `App.css`
- **Component Examples**: All components in `src/components/`
