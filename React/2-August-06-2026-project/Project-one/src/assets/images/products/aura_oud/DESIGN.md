---
name: Aura & Oud
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c6'
  primary: '#e2e2e2'
  on-primary: '#2f3131'
  primary-container: '#c6c6c6'
  on-primary-container: '#515253'
  inverse-primary: '#5d5e5f'
  secondary: '#e8c176'
  on-secondary: '#402d00'
  secondary-container: '#5f4502'
  on-secondary-container: '#d9b36a'
  tertiary: '#e4e1e0'
  on-tertiary: '#313030'
  tertiary-container: '#c8c5c5'
  on-tertiary-container: '#535252'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e3e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#464747'
  secondary-fixed: '#ffdea3'
  secondary-fixed-dim: '#e8c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5c4200'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
  gold-accent: '#775A19'
  gold-light: '#e8c176'
  surface-warm: '#FDF8F8'
  on-surface-muted: '#4c4546'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.2em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-mobile: 20px
  margin-desktop: 80px
  gutter: 24px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  container-max: 1440px
---

## Brand & Style
Aura & Oud is a luxury fragrance house design system that balances middle-eastern opulence with European minimalism. The brand personality is mysterious, sophisticated, and exclusive, targeting a high-end "connoisseur" audience.

The visual style is a blend of **Minimalism** and **Tonal Layering**. It utilizes a dark, atmospheric color palette to evoke "midnight" and "oud" themes, punctuated by shimmering metallic accents. The aesthetic relies on high-quality product photography, generous whitespace (even in dark mode), and classic high-contrast typography to create a digital flagship experience that feels like a physical luxury boutique.

## Colors
The palette is centered on "Midnight & Metallics." 

- **Primary & Neutrals:** A range of deep charcoals and blacks (`#131313`) form the foundation. Text is primarily a soft silver-white (`#e2e2e2`) to prevent harsh contrast.
- **Accents:** Gold is used strategically as a signifier of value and interactive states. A deep burnished gold (`#775A19`) is used for borders and labels, while a brighter gold (`#e8c176`) is used for primary actions and icons.
- **Functional:** Errors are handled with a muted coral-red (`#ffb4ab`) that fits within the warm-toned dark theme without appearing jarring.
- **Surface Variations:** Depth is created using subtle shifts in the dark container values rather than shadows, ranging from `#0e0e0e` (lowest) to `#353535` (highest).

## Typography
The system uses a classic serif/sans-serif pairing. 

**Playfair Display** is the voice of the brand, used for all editorial headings and product names. Its high contrast and elegant curves communicate luxury.

**Inter** provides a functional, neutral counterpoint for body copy, technical details, and UI labels. 

The "Label Caps" style is critical to the brand identity; it is always uppercase with a generous 0.2em letter spacing, used for buttons, category tags, and section headers to evoke the feel of high-fashion print layouts.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for large screens, centering content within a 1440px container with generous 80px side margins to maintain an air of exclusivity.

- **Vertical Rhythm:** Large "section-gaps" of 120px are used to separate major content blocks, allowing products to breathe.
- **Component Spacing:** A structured "stack" system (8/16/32px) governs internal component relationships.
- **Mobile Adaptivity:** Side margins compress to 20px on mobile. Display typography scales down significantly (from 64px to 40px) to ensure legibility and prevent awkward wrapping of long fragrance names.

## Elevation & Depth
Elevation is achieved through **Tonal Layers** and **Low-Contrast Outlines**. 

- **Surfaces:** In this dark UI, depth is indicated by making elements lighter as they "rise" toward the user. The background is the darkest layer (`#131313`), while interactive cards and modals use lighter containers (`#1f1f1f` to `#2a2a2a`).
- **Outlines:** Instead of heavy shadows, components use 1px borders in `outline-variant` (a muted, low-opacity gray) to define boundaries.
- **Interactivity:** On hover, borders transition to the `gold-accent` color, providing a "glow" effect that signifies elevation without the use of traditional drop shadows.
- **Glassmorphism:** Navigation bars use a 90% opacity blur (`backdrop-blur-md`) to maintain context while scrolling through rich product imagery.

## Shapes
The shape language is **Soft (Level 1)**, leaning toward the sharper end of the spectrum to maintain a professional and architectural feel. 

- **Primary Elements:** Buttons and standard containers use a minimal 0.25rem (4px) radius.
- **Product Cards:** Use sharp edges or very small radii to mimic the geometry of perfume bottles and luxury packaging.
- **Exceptions:** Pill shapes (9999px) are reserved exclusively for circular avatars or status indicators (like loyalty points containers) to provide a soft contrast to the otherwise structured grid.

## Components

### Buttons
- **Primary:** Outlined in gold with gold text in `label-caps`. On hover, they fill with solid gold and swap text to the dark background color.
- **Secondary:** Outlined in `outline-variant` with silver text.
- **Ghost:** No border, underlined on hover.

### Product Cards (Bento Style)
- Cards are vertical containers with a fixed aspect ratio for imagery.
- They feature a "Quick Add" overlay that appears on hover using a semi-transparent `surface/80` background with a backdrop blur.
- Status badges (e.g., "Bestseller") are sharp-edged rectangles anchored to the top-left, using the gold accent color.

### Inputs & Selection
- **Selects/Dropdowns:** Minimalist borders with transparent backgrounds.
- **Chips:** Used for size or concentration selection. Selected states are solid gold; unselected are outlined.

### Feedback & Trust
- **Toasts:** Use a left-accent border (4px) in either gold (success) or error-red, with a dark container background and high elevation (shadow-lg).
- **Loading:** Skeleton states use the `surface-container-highest` color with a subtle pulse animation.