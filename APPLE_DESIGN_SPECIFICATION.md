# Apple-Inspired E-Commerce Design Specification (2024-2025)

## Executive Summary

This design specification captures Apple's premium design language for implementation in modern e-commerce websites. Based on comprehensive analysis of Apple's current visual design system (2024-2025), including their Liquid Glass design direction, this document provides actionable specifications for creating world-class digital shopping experiences.

**Last Updated:** November 16, 2025
**Design Philosophy:** Minimalism, Premium Feel, Content-First Hierarchy

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Component Specifications](#component-specifications)
5. [Product Photography](#product-photography)
6. [Micro-Interactions & Animations](#micro-interactions--animations)
7. [Visual Hierarchy Principles](#visual-hierarchy-principles)
8. [Material Design & Effects](#material-design--effects)

---

## Color System

### Foundation Palette

Apple's color system is built on restraint and contrast, using a neutral foundation that allows product imagery to dominate.

#### Neutrals (Primary Scale)

```css
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;   /* Background tint */
--color-gray-100: #F5F5F7;  /* Light background */
--color-gray-200: #E8E8ED;  /* Dividers */
--color-gray-300: #D2D2D7;  /* Borders */
--color-gray-400: #AEAEB2;  /* Disabled text */
--color-gray-500: #86868B;  /* Secondary text */
--color-gray-600: #6E6E73;  /* Tertiary text */
--color-gray-700: #424245;  /* Body text */
--color-gray-800: #1D1D1F;  /* Headings */
--color-black: #000000;
```

#### Interactive Colors

```css
/* Primary Action */
--color-blue-primary: #0071E3;     /* Links, CTAs */
--color-blue-hover: #0077ED;       /* Hover state */
--color-blue-active: #006EDB;      /* Active/pressed */
--color-blue-light: #E3F2FD;       /* Backgrounds */

/* Success States */
--color-green: #34C759;
--color-green-light: #E8F5E9;

/* Warning States */
--color-orange: #FF9500;
--color-orange-light: #FFF3E0;

/* Error States */
--color-red: #FF3B30;
--color-red-light: #FFEBEE;
```

#### Product Accent Colors

Used sparingly for product cards, badges, and feature highlights:

```css
--color-cosmic-orange: #FF6E42;
--color-deep-blue: #1E3A8A;
--color-gold: #F9D71C;
--color-silver: #C7C8CC;
--color-space-gray: #535355;
--color-midnight-green: #004953;
```

### Color Usage Guidelines

**Background Hierarchy:**
- Primary backgrounds: `--color-white` or `--color-gray-50`
- Section differentiation: Alternate between white and `--color-gray-100`
- Elevated surfaces: White with subtle shadow

**Text Hierarchy:**
- Primary headings: `--color-gray-800` or `--color-black`
- Body text: `--color-gray-700`
- Secondary text: `--color-gray-500`
- Disabled/tertiary: `--color-gray-400`

**Interactive Elements:**
- Primary CTA buttons: `--color-blue-primary` background, white text
- Secondary buttons: Transparent background, `--color-blue-primary` text
- Links: `--color-blue-primary` with subtle underline on hover

---

## Typography

### Font Family

Apple uses the **SF Pro** (San Francisco) system font family, designed specifically for optimal legibility across all screen sizes.

#### Font Stack (Web Implementation)

```css
/* Primary font stack (system fonts) */
--font-family-base: -apple-system, BlinkMacSystemFont,
  'SF Pro Text', 'SF Pro Display', 'Helvetica Neue',
  'Helvetica', 'Arial', sans-serif;

/* Display fonts (large headings) */
--font-family-display: -apple-system, BlinkMacSystemFont,
  'SF Pro Display', 'Helvetica Neue', sans-serif;

/* Monospace (code/technical) */
--font-family-mono: 'SF Mono', 'Monaco', 'Courier New', monospace;
```

**Implementation Note:** SF Pro Text for sizes below 20px, SF Pro Display for 20px and above (system handles this automatically).

### Type Scale

Based on a modular scale with precise optical sizing:

#### Display Sizes (Hero Sections, Product Titles)

```css
--text-display-2xl: 96px;   /* Line-height: 104px, Weight: 700 (Bold) */
--text-display-xl: 80px;    /* Line-height: 88px, Weight: 700 */
--text-display-lg: 64px;    /* Line-height: 72px, Weight: 700 */
--text-display-md: 56px;    /* Line-height: 64px, Weight: 600 (Semibold) */
--text-display-sm: 48px;    /* Line-height: 56px, Weight: 600 */
```

#### Heading Sizes

```css
--text-h1: 40px;    /* Line-height: 48px, Weight: 700 */
--text-h2: 32px;    /* Line-height: 40px, Weight: 600 */
--text-h3: 28px;    /* Line-height: 36px, Weight: 600 */
--text-h4: 24px;    /* Line-height: 32px, Weight: 600 */
--text-h5: 21px;    /* Line-height: 28px, Weight: 600 */
--text-h6: 19px;    /* Line-height: 24px, Weight: 600 */
```

#### Body Sizes

```css
--text-body-xl: 19px;   /* Line-height: 29px, Weight: 400 (Regular) */
--text-body-lg: 17px;   /* Line-height: 25px, Weight: 400 */
--text-body-md: 15px;   /* Line-height: 23px, Weight: 400 */
--text-body-sm: 14px;   /* Line-height: 21px, Weight: 400 */
--text-body-xs: 12px;   /* Line-height: 18px, Weight: 400 */
```

#### Supporting Text

```css
--text-caption: 13px;   /* Line-height: 18px, Weight: 400 */
--text-overline: 11px;  /* Line-height: 16px, Weight: 600, Uppercase */
```

### Font Weights

```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-heavy: 800;
```

### Letter Spacing (Tracking)

Apple uses dynamic tracking that adjusts based on font size:

```css
--letter-spacing-tight: -0.02em;   /* Large display text */
--letter-spacing-normal: 0;        /* Most text */
--letter-spacing-wide: 0.01em;     /* Small body text */
--letter-spacing-wider: 0.08em;    /* Overlines, labels */
```

### Typography Usage Examples

```css
/* Hero Headline */
.hero-title {
  font-size: var(--text-display-lg);      /* 64px */
  line-height: 72px;
  font-weight: var(--font-weight-bold);   /* 700 */
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-gray-800);
}

/* Product Card Title */
.product-title {
  font-size: var(--text-h4);              /* 24px */
  line-height: 32px;
  font-weight: var(--font-weight-semibold); /* 600 */
  color: var(--color-gray-800);
}

/* Body Text */
.body-copy {
  font-size: var(--text-body-lg);         /* 17px */
  line-height: 25px;
  font-weight: var(--font-weight-regular); /* 400 */
  color: var(--color-gray-700);
}

/* Caption Text */
.caption {
  font-size: var(--text-caption);         /* 13px */
  line-height: 18px;
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-500);
}
```

---

## Spacing & Layout

### Spacing Scale (8-point Grid System)

Apple uses an 8-point spacing system with additional 4-point increments for fine-tuning:

```css
--space-0: 0;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-7: 28px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-14: 56px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
--space-40: 160px;
--space-48: 192px;
--space-56: 224px;
--space-64: 256px;
```

### Container Widths

```css
--container-sm: 640px;    /* Mobile/tablet content */
--container-md: 768px;    /* Tablet content */
--container-lg: 1024px;   /* Desktop content */
--container-xl: 1280px;   /* Wide desktop */
--container-2xl: 1440px;  /* Max content width */
--container-full: 100%;   /* Full-bleed sections */
```

### Grid System

Apple uses a flexible, responsive grid:

```css
/* Desktop: 12-column grid */
--grid-columns-desktop: 12;
--grid-gap-desktop: 24px;

/* Tablet: 8-column grid */
--grid-columns-tablet: 8;
--grid-gap-tablet: 20px;

/* Mobile: 4-column grid */
--grid-columns-mobile: 4;
--grid-gap-mobile: 16px;
```

### Spacing Application Guidelines

**Component Internal Spacing:**
- Button padding: `12px 24px` (vertical horizontal)
- Card padding: `24px` (all sides)
- Input padding: `12px 16px`
- Section padding: `80px 0` (desktop), `48px 0` (mobile)

**Component External Spacing (Margins):**
- Between small elements (buttons, badges): `8px` to `12px`
- Between cards in grid: `24px`
- Between content sections: `80px` to `128px`
- Hero to first section: `96px` to `160px`

**Content Spacing:**
- Headline to subheadline: `12px` to `16px`
- Paragraph spacing: `20px`
- List item spacing: `12px`
- Section title to content: `32px` to `48px`

### Breakpoints

```css
--breakpoint-xs: 375px;   /* Small phones */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small desktop */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1440px; /* Large desktop */
```

### Responsive Spacing Example

```css
/* Section vertical spacing */
.section {
  padding: 48px 20px;  /* Mobile: smaller padding */
}

@media (min-width: 768px) {
  .section {
    padding: 80px 40px;  /* Tablet: medium padding */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 128px 80px;  /* Desktop: generous padding */
  }
}
```

---

## Component Specifications

### Buttons

#### Primary Button (CTA)

**Visual Specifications:**
```css
.button-primary {
  /* Typography */
  font-size: 17px;
  line-height: 1.2;
  font-weight: 400;

  /* Spacing */
  padding: 12px 24px;

  /* Visual */
  background-color: var(--color-blue-primary);
  color: var(--color-white);
  border: none;
  border-radius: 12px;

  /* Interaction */
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.button-primary:hover {
  background-color: var(--color-blue-hover);
  transform: scale(1.02);
}

.button-primary:active {
  background-color: var(--color-blue-active);
  transform: scale(0.98);
}
```

**Variants:**
- **Large:** `padding: 16px 32px; font-size: 19px; border-radius: 14px;`
- **Small:** `padding: 8px 16px; font-size: 15px; border-radius: 10px;`

#### Secondary Button

```css
.button-secondary {
  font-size: 17px;
  padding: 12px 24px;
  background-color: transparent;
  color: var(--color-blue-primary);
  border: 1px solid var(--color-gray-300);
  border-radius: 12px;
  transition: all 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.button-secondary:hover {
  border-color: var(--color-blue-primary);
  background-color: var(--color-blue-light);
}
```

#### Text Link Button

```css
.button-link {
  font-size: 17px;
  padding: 0;
  background: none;
  color: var(--color-blue-primary);
  border: none;
  text-decoration: none;
  position: relative;
  transition: all 200ms ease-in-out;
}

.button-link::after {
  content: ' →';
  margin-left: 4px;
  transition: margin-left 200ms ease-in-out;
}

.button-link:hover {
  color: var(--color-blue-hover);
}

.button-link:hover::after {
  margin-left: 8px;
}
```

### Cards

#### Product Card

**Structure:**
- Product image (centered, high-quality)
- Product name (bold, 24px)
- Color options (visual swatches)
- Starting price (17px, secondary text)
- Two CTAs (Learn more, Buy)

**Specifications:**
```css
.product-card {
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  /* Spacing */
  padding: 32px 24px;
  gap: 16px;

  /* Visual */
  background-color: var(--color-white);
  border-radius: 18px;
  border: 1px solid var(--color-gray-200);

  /* Interaction */
  transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.08);
  border-color: var(--color-gray-300);
}

.product-card-image {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 4/5;
  object-fit: contain;
}

.product-card-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-gray-800);
  margin: 8px 0 4px;
}

.product-card-price {
  font-size: 15px;
  color: var(--color-gray-500);
  margin-bottom: 12px;
}

.product-card-colors {
  display: flex;
  gap: 8px;
  margin: 8px 0;
}

.color-swatch {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 150ms ease-out;
}

.color-swatch:hover {
  transform: scale(1.2);
}

.product-card-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}
```

#### Feature Card

```css
.feature-card {
  padding: 48px 32px;
  background: var(--color-gray-100);
  border-radius: 16px;
  text-align: left;
}

.feature-card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
}

.feature-card-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: 12px;
}

.feature-card-description {
  font-size: 17px;
  line-height: 25px;
  color: var(--color-gray-700);
}
```

### Input Fields

```css
.input-field {
  /* Typography */
  font-size: 17px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-gray-800);

  /* Spacing */
  padding: 12px 16px;

  /* Visual */
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;

  /* Interaction */
  transition: border-color 200ms ease-in-out;
}

.input-field:focus {
  outline: none;
  border-color: var(--color-blue-primary);
  box-shadow: 0 0 0 4px var(--color-blue-light);
}

.input-field::placeholder {
  color: var(--color-gray-400);
}

.input-field:disabled {
  background-color: var(--color-gray-100);
  color: var(--color-gray-400);
  cursor: not-allowed;
}
```

### Navigation Bar

```css
.nav-bar {
  /* Layout */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Spacing */
  padding: 0 24px;
  height: 48px;

  /* Visual */
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-gray-200);

  /* Position */
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-link {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-gray-700);
  padding: 8px 12px;
  text-decoration: none;
  transition: color 150ms ease-out;
}

.nav-link:hover {
  color: var(--color-gray-800);
}

.nav-link.active {
  color: var(--color-gray-800);
  font-weight: 500;
}
```

### Badges & Pills

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-new {
  background-color: var(--color-orange);
  color: var(--color-white);
}

.badge-sale {
  background-color: var(--color-red);
  color: var(--color-white);
}

.badge-info {
  background-color: var(--color-blue-light);
  color: var(--color-blue-primary);
}
```

---

## Product Photography

### Image Treatment Philosophy

Apple's product photography is characterized by:
1. **Pristine Minimalism** - Clean white backgrounds, zero distractions
2. **Material Authenticity** - Accurate representation of finishes and textures
3. **Multi-Angle Perspective** - Showing front, side, and back in single composition
4. **High Dynamic Range** - Perfect lighting that reveals product details

### Image Specifications

#### Hero Images

**Dimensions:**
- Desktop: 2880px × 1800px (16:10 aspect ratio)
- Tablet: 2048px × 1536px (4:3 aspect ratio)
- Mobile: 1242px × 1660px (3:4 aspect ratio)

**Technical Requirements:**
```css
.hero-image {
  width: 100%;
  height: auto;
  max-height: 800px;
  object-fit: cover;
  object-position: center;
}
```

**File Format:** WebP with JPEG fallback, optimized at 85% quality

#### Product Card Images

**Aspect Ratios:**
- Portrait products (phones, watches): 4:5 ratio
- Landscape products (laptops, tablets): 16:10 ratio
- Square products (accessories): 1:1 ratio

**Dimensions:**
- Thumbnail: 320px × 400px
- Standard: 640px × 800px
- Large: 960px × 1200px
- Retina: 1280px × 1600px

**Implementation:**
```css
.product-image {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: contain;
  background-color: var(--color-gray-50);
}
```

#### Image Gallery

**Layout Pattern:**
- Main image: Full-width container, 16:9 ratio
- Thumbnail strip: 4-6 thumbnails, 1:1 ratio, 80px × 80px
- Gallery navigation: Arrows with 200ms fade transition

**Zoom Interaction:**
```css
.product-image-zoom {
  cursor: zoom-in;
  transition: transform 400ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.product-image-zoom:hover {
  transform: scale(1.05);
}
```

### Photography Style Guidelines

**Lighting:**
- Pure white background (#FFFFFF)
- Soft, diffused lighting from multiple angles
- No harsh shadows or reflections
- Highlights on metallic finishes

**Composition:**
- Centered product with equal margins
- 15-20% breathing room on all sides
- Subtle angle (15-30°) for depth
- Front-facing for primary image

**Post-Processing:**
- Remove all dust, fingerprints, and imperfections
- Color-accurate representation of finishes
- Consistent white balance across all images
- Subtle vignette for depth (optional)

### Responsive Image Loading

```html
<picture>
  <source
    media="(min-width: 1024px)"
    srcset="product-large.webp 1x, product-large@2x.webp 2x"
    type="image/webp"
  />
  <source
    media="(min-width: 640px)"
    srcset="product-medium.webp 1x, product-medium@2x.webp 2x"
    type="image/webp"
  />
  <source
    srcset="product-small.webp 1x, product-small@2x.webp 2x"
    type="image/webp"
  />
  <img
    src="product-fallback.jpg"
    alt="Product Name - Color"
    loading="lazy"
    decoding="async"
  />
</picture>
```

---

## Micro-Interactions & Animations

### Animation Principles

1. **Purposeful Motion** - Every animation serves a functional purpose
2. **Subtle & Quick** - Animations should enhance, not distract (150-300ms)
3. **Natural Easing** - Use physics-based easing for realism
4. **Performance-First** - GPU-accelerated properties only (transform, opacity)

### Timing Functions

```css
/* Cubic Bezier Curves */
--ease-apple: cubic-bezier(0.4, 0.0, 0.2, 1);      /* General purpose */
--ease-in-apple: cubic-bezier(0.4, 0.0, 1, 1);     /* Enter animations */
--ease-out-apple: cubic-bezier(0.0, 0.0, 0.2, 1);  /* Exit animations */
--ease-in-out-apple: cubic-bezier(0.4, 0.0, 0.2, 1); /* Complex moves */

/* Spring Animation (CSS) */
--spring-apple: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bounce effect */
```

### Duration Standards

```css
--duration-instant: 100ms;   /* Checkbox, toggle */
--duration-fast: 150ms;      /* Hover state changes */
--duration-normal: 200ms;    /* Button clicks, fades */
--duration-medium: 300ms;    /* Card hovers, reveals */
--duration-slow: 400ms;      /* Page transitions, modals */
--duration-slower: 600ms;    /* Complex animations */
```

### Hover States

#### Button Hover

```css
.button:hover {
  transform: scale(1.02);
  background-color: var(--color-blue-hover);
  transition: all 200ms var(--ease-apple);
}
```

#### Card Hover

```css
.card {
  transition: all 300ms var(--ease-apple);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.08);
}
```

#### Link Hover

```css
.link {
  color: var(--color-blue-primary);
  position: relative;
  text-decoration: none;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-blue-primary);
  transition: width 200ms var(--ease-out-apple);
}

.link:hover::after {
  width: 100%;
}
```

### Click/Active States

```css
.interactive:active {
  transform: scale(0.98);
  opacity: 0.9;
  transition: all 100ms var(--ease-in-apple);
}
```

### Loading States

#### Skeleton Loader

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-gray-100) 0%,
    var(--color-gray-200) 50%,
    var(--color-gray-100) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

#### Spinner

```css
.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid var(--color-gray-200);
  border-top-color: var(--color-blue-primary);
  border-radius: 50%;
  animation: spinner-rotate 600ms linear infinite;
}

@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}
```

### Page Transitions

#### Fade In

```css
.fade-in {
  opacity: 0;
  animation: fade-in 400ms var(--ease-out-apple) forwards;
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}
```

#### Slide Up

```css
.slide-up {
  opacity: 0;
  transform: translateY(20px);
  animation: slide-up 400ms var(--ease-apple) forwards;
}

@keyframes slide-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Scroll-Based Animations

```css
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 600ms var(--ease-out-apple);
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**JavaScript Implementation:**
```javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### Modal Animations

```css
.modal-overlay {
  opacity: 0;
  transition: opacity 300ms var(--ease-apple);
}

.modal-overlay.is-open {
  opacity: 1;
}

.modal-content {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
  transition: all 300ms var(--ease-apple);
}

.modal-content.is-open {
  transform: scale(1) translateY(0);
  opacity: 1;
}
```

---

## Visual Hierarchy Principles

### Size Hierarchy

Apple creates hierarchy through dramatic size differences:

1. **Hero Headlines:** 3-4x larger than body text (64-96px vs 17-19px)
2. **Section Headlines:** 2-2.5x larger than body (32-48px vs 17-19px)
3. **Card Titles:** 1.4-1.6x larger than body (24-28px vs 17px)

**Implementation:**
```css
/* Extreme contrast for impact */
.hero-title {
  font-size: 80px;
  line-height: 88px;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
  margin-top: 12px;
}

.body-text {
  font-size: 17px;
  line-height: 25px;
  margin-top: 24px;
}
```

### Weight Hierarchy

```css
/* Primary hierarchy through weight */
--hierarchy-primary: 700;    /* Headlines, key info */
--hierarchy-secondary: 600;  /* Subheadlines, labels */
--hierarchy-tertiary: 400;   /* Body text */
--hierarchy-subtle: 300;     /* Captions, metadata */
```

### Color Hierarchy

```css
/* Text hierarchy through color */
.text-primary {
  color: var(--color-gray-800);    /* Most important */
}

.text-secondary {
  color: var(--color-gray-700);    /* Body content */
}

.text-tertiary {
  color: var(--color-gray-500);    /* Supporting info */
}

.text-disabled {
  color: var(--color-gray-400);    /* Inactive elements */
}
```

### Whitespace Hierarchy

**Breathing Room Ratios:**
- Around hero content: 160-256px vertical spacing
- Between major sections: 96-128px
- Between content blocks: 48-80px
- Between related elements: 16-32px
- Between inline elements: 8-12px

### Visual Weight Distribution

**F-Pattern Layout:**
```
[Hero Image - Full width, high visual weight]

[Headline - Large, bold]
[Subheadline - Medium]
[Body - Standard]
[CTA - High contrast]

[Feature 1] [Feature 2] [Feature 3]  ← Equal weight
```

### Content Density Guidelines

**High-Density Sections:**
- Navigation bars: Minimal spacing, compact layout
- Product grids: Balanced negative space
- Feature comparison tables: Structured, clean lines

**Low-Density Sections:**
- Hero sections: Generous whitespace, centered content
- Product showcases: 60-70% empty space
- Testimonials: Focus on single element

---

## Material Design & Effects

### Liquid Glass Effect (2025)

Apple's Liquid Glass design introduces translucent, fluid-like surfaces:

```css
.glass-surface {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
}

.glass-surface-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Depth & Elevation

Apple uses subtle shadows to create depth hierarchy:

```css
/* Elevation Scale */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08);
--shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.10);
--shadow-2xl: 0 24px 80px rgba(0, 0, 0, 0.12);

/* Usage */
.card {
  box-shadow: var(--shadow-md);
  transition: box-shadow 300ms var(--ease-apple);
}

.card:hover {
  box-shadow: var(--shadow-xl);
}
```

### Surface Treatments

#### Elevated Card

```css
.elevated-card {
  background: var(--color-white);
  border-radius: 18px;
  box-shadow: var(--shadow-lg);
  padding: 32px;
  position: relative;
  overflow: hidden;
}

.elevated-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
}
```

#### Bordered Section

```css
.bordered-section {
  background: var(--color-gray-50);
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  padding: 24px;
}
```

### Gradient Overlays

```css
/* Subtle gradient for depth */
.gradient-overlay {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

/* Product accent gradient */
.accent-gradient {
  background: linear-gradient(
    135deg,
    var(--color-blue-primary) 0%,
    var(--color-deep-blue) 100%
  );
}
```

### Focus States

```css
.focusable:focus-visible {
  outline: 3px solid var(--color-blue-primary);
  outline-offset: 2px;
  border-radius: 8px;
}

/* Alternative glow effect */
.focusable-glow:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px var(--color-blue-light),
              0 0 0 6px var(--color-blue-primary);
}
```

---

## Implementation Guidelines

### CSS Architecture

**Recommended Structure:**
```
styles/
├── foundations/
│   ├── colors.css          /* Color tokens */
│   ├── typography.css      /* Type scale, font stacks */
│   ├── spacing.css         /* Spacing scale */
│   └── animations.css      /* Timing functions, keyframes */
├── components/
│   ├── buttons.css
│   ├── cards.css
│   ├── inputs.css
│   └── navigation.css
├── layouts/
│   ├── grid.css
│   ├── containers.css
│   └── sections.css
└── utilities/
    ├── shadows.css
    ├── effects.css
    └── helpers.css
```

### Performance Optimizations

**1. Use CSS Custom Properties for Theming:**
```css
:root {
  color-scheme: light dark;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-gray-800: #F5F5F7;
    --color-gray-700: #E8E8ED;
    /* Invert color values for dark mode */
  }
}
```

**2. GPU-Accelerated Animations:**
```css
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0);  /* Force GPU acceleration */
}
```

**3. Reduce Paint Areas:**
```css
.isolated-animation {
  isolation: isolate;  /* Create stacking context */
  contain: layout style paint;  /* Limit rendering scope */
}
```

### Accessibility Requirements

**1. Color Contrast:**
- All text must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Primary CTA buttons: White text (#FFFFFF) on blue (#0071E3) = 4.6:1 ✓

**2. Focus Indicators:**
```css
*:focus-visible {
  outline: 3px solid var(--color-blue-primary);
  outline-offset: 2px;
}
```

**3. Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**4. Interactive Target Sizes:**
- Minimum touch target: 44px × 44px (iOS guideline)
- Minimum click target: 40px × 40px (desktop)

### Browser Support

**Target Browsers:**
- Safari 15+
- Chrome 90+
- Firefox 88+
- Edge 90+

**Progressive Enhancement:**
```css
/* Baseline: All browsers */
.button {
  padding: 12px 24px;
  background: #0071E3;
}

/* Enhanced: Modern browsers with backdrop-filter support */
@supports (backdrop-filter: blur(20px)) {
  .nav-bar {
    backdrop-filter: blur(20px);
  }
}
```

---

## Design System Checklist

### Before Launch

- [ ] All components follow 8-point spacing grid
- [ ] Typography scale implemented correctly (SF Pro or system fallback)
- [ ] Color contrast ratios meet WCAG AA standards
- [ ] All interactive elements have hover/active/focus states
- [ ] Animation timing follows 150-300ms guideline
- [ ] Images are optimized (WebP with fallbacks)
- [ ] Responsive breakpoints tested across devices
- [ ] Dark mode support (optional but recommended)
- [ ] Reduced motion preferences respected
- [ ] Touch targets meet 44px minimum
- [ ] Loading states implemented for async operations
- [ ] Error states designed and accessible
- [ ] Empty states provide clear guidance
- [ ] Success confirmations are visible and clear

### Quality Standards

**Visual Quality:**
- Premium feel through generous whitespace
- Crisp typography with proper line-height
- Subtle, purposeful animations
- Consistent border-radius values
- Balanced visual weight distribution

**Interaction Quality:**
- Immediate feedback on all interactions
- Smooth, natural animations
- Clear affordances (buttons look clickable)
- Forgiving click/touch targets
- Predictable navigation patterns

**Technical Quality:**
- 60fps animations (GPU-accelerated)
- Fast page loads (<2s on 3G)
- Responsive across all breakpoints
- Cross-browser compatible
- Accessible to keyboard and screen reader users

---

## Resources & References

### Official Apple Resources
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [SF Pro Font Family](https://developer.apple.com/fonts/)
- [Apple Design Resources](https://developer.apple.com/design/resources/)

### Web Implementation
- [CSS Backdrop Filter Support](https://caniuse.com/css-backdrop-filter)
- [Web Animation Best Practices](https://web.dev/animations/)
- [Responsive Images Guide](https://web.dev/responsive-images/)

### Design Inspiration
- [Apple.com Homepage](https://www.apple.com)
- [Apple iPhone Product Pages](https://www.apple.com/iphone)
- [Apple Store](https://www.apple.com/store)

---

## Version History

**v1.0** - November 16, 2025
- Initial design specification
- Comprehensive analysis of Apple's 2024-2025 design language
- Liquid Glass design system integration
- Complete component library
- Animation and interaction guidelines

---

## License & Usage

This design specification document is created for educational and implementation purposes. Apple's design language and trademarks are property of Apple Inc. This document should be used as inspiration and guidance for creating premium e-commerce experiences, not for direct copying of Apple's proprietary designs.

**Implementation Rights:**
- ✓ Use these specifications for commercial projects
- ✓ Adapt and customize for your brand
- ✓ Share with your development team
- ✗ Do not claim this is Apple's official design system
- ✗ Do not use Apple's trademarked assets without permission

---

**Document Prepared By:** Professional Design Analysis Team
**Last Updated:** November 16, 2025
**Next Review:** February 2026 (following Apple's Spring announcements)
