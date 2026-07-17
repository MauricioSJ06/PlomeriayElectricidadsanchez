---
name: Workshop Professionalism
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#434652'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#747783'
  outline-variant: '#c4c6d3'
  surface-tint: '#345baf'
  primary: '#002869'
  on-primary: '#ffffff'
  primary-container: '#0b3d91'
  on-primary-container: '#8dadff'
  inverse-primary: '#b1c5ff'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fccc38'
  on-secondary-container: '#6f5600'
  tertiary: '#1b2e3f'
  on-tertiary: '#ffffff'
  tertiary-container: '#324456'
  on-tertiary-container: '#9eb1c7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001947'
  on-primary-fixed-variant: '#144296'
  secondary-fixed: '#ffdf90'
  secondary-fixed-dim: '#f0c12c'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#d1e4fb'
  tertiary-fixed-dim: '#b5c8df'
  on-tertiary-fixed: '#091d2e'
  on-tertiary-fixed-variant: '#36485b'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  headline-xl:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system is built upon the pillars of reliability, structural integrity, and local heritage. It evokes the atmosphere of a master artisan's workshop in San Diego Churubusco—meticulously organized, technically proficient, and deeply rooted in community trust. 

The visual style is **Corporate / Modern** with a **Tactile** edge. It utilizes a clean, structural grid that prioritizes legibility and ease of contact, balanced by subtle environmental textures like high-resolution white tile patterns and brushed steel accents. The emotional response is one of immediate relief: the user should feel that their infrastructure is in the hands of a disciplined professional.

## Colors

The palette is anchored by **Deep Navy Blue**, used for core branding, primary actions, and headers to project authority. **Golden Yellow** serves as the high-visibility accent for "Call to Action" elements, emergency service banners, and status indicators, symbolizing speed and energy.

- **Backgrounds:** Light Gray (#F5F7FA) is used for section differentiation, while pure White (#FFFFFF) is reserved for cards and interactive surfaces to maintain a sense of clinical cleanliness.
- **Text:** Slate Gray (#2C3E50) is the primary color for body copy, providing high contrast without the harshness of pure black.
- **Accents:** Use Golden Yellow sparingly but intentionally to guide the eye toward conversion points.

## Typography

The typography strategy pairs the traditional authority of **Source Serif 4** with the modern, technical precision of **Manrope**.

- **Headlines:** Use Source Serif 4 to establish a legacy feel. Large headlines should use a semi-bold weight to command attention.
- **Body:** Manrope provides excellent legibility for service descriptions and technical specifications. It feels balanced and trustworthy.
- **Labels:** Uppercase labels in Manrope with slight letter-spacing should be used for small metadata, categories (Plumbing vs. Electrical), and breadcrumbs to maintain a structured, "blueprint" aesthetic.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to ensure a controlled, professional presentation, transitioning to a **Fluid Grid** for mobile devices.

- **Grid:** A 12-column grid is used for desktop (1280px max-width) with 24px gutters.
- **Rhythm:** Spacing follows an 8px base unit. Component internal padding should be generous (24px or 32px) to prevent the UI from feeling cluttered, reflecting the "organized workshop" philosophy.
- **Reflow:** On mobile, margins reduce to 16px. Cards should stack vertically, and the primary "Emergency Call" button should pin to the bottom of the viewport for immediate accessibility.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines**. Surfaces do not "float" with heavy shadows; instead, they sit firmly on the layout.

- **Cards:** Use a 1px solid border in a slightly darker gray than the background (#E1E4E8) rather than shadows.
- **Active States:** When a user interacts with a card or input, a subtle, tinted ambient shadow (Deep Navy at 8% opacity) can be used to indicate focus.
- **Textures:** Subtle "White Tile" patterns may be used as a background for specific sections (like the "Services" area) to provide a tactile reference to plumbing environments.

## Shapes

The shape language is **Soft** (0.25rem), leaning toward a more architectural and sturdy appearance. 

- **Containers:** Standard cards and input fields use the base 4px (0.25rem) radius.
- **Buttons:** Large action buttons may use a slightly increased radius (8px) to feel more approachable, but never fully rounded or pill-shaped, to maintain a professional, industrial tone.
- **Iconography:** Icons should be thick-stroked and geometric, mirroring the tools of the trade (wrenches, circuits, meters).

## Components

- **Buttons:**
    - *Primary:* Deep Navy Blue with White text. Bold and authoritative.
    - *Secondary/Accent:* Golden Yellow with Slate Gray text. Used exclusively for "Request Quote" or "Emergency" actions.
- **Input Fields:** Thick 2px borders when focused in Deep Navy. Labels should always be visible above the field in Manrope Bold.
- **Service Cards:** White background, 1px Slate Gray border, featuring a Source Serif 4 heading. Use brushed metal textures as a background for icon containers within the cards.
- **Status Chips:** Used to indicate service availability (e.g., "Available Now" in Green or "Emergency Only" in Yellow).
- **Lists:** Use custom bullet points that resemble small hexagonal nuts or rivets to reinforce the workshop aesthetic.
- **Contact Bar:** A persistent header or footer element containing the physical address in Coyoacán and a prominent phone number, styled in a high-contrast box.