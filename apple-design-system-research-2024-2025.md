# Apple Human Interface Guidelines & Design System 2024-2025

## Comprehensive Research Document

**Research Date:** November 16, 2025
**Sources:** Apple Developer Documentation, Apple HIG, iOS/macOS Design Guidelines

---

## Table of Contents

1. [Typography System](#1-typography-system)
2. [Color System](#2-color-system)
3. [Spacing & Layout](#3-spacing--layout)
4. [Visual Effects](#4-visual-effects)
5. [Component Patterns](#5-component-patterns)
6. [Key Design Principles](#6-key-design-principles)

---

## 1. Typography System

### SF Pro Font Family

Apple provides the **San Francisco (SF)** typeface family as the system font across all platforms:

- **SF Pro** - Used in iOS, macOS, and tvOS
- **SF Compact** - Optimized for watchOS
- **SF Mono** - Monospaced variant
- **SF Arabic** - Arabic language support
- **New York (NY)** - Serif typeface family

#### SF Pro Variants

**SF Pro Display**
- **Usage:** Font sizes 20pt and above
- **Characteristics:** Optimized for larger text with adjusted spacing and proportions
- **Best for:** Headlines, titles, large UI text

**SF Pro Text**
- **Usage:** Font sizes 19pt and below
- **Characteristics:** Optimized for body text and readability
- **Best for:** Body copy, labels, small UI elements

> **Note:** iOS 13+ automatically handles optical sizing through variable fonts, switching between Text and Display variants based on point size.

### Font Weights

**Available Weights (9 total):**
1. Ultralight
2. Thin
3. Light
4. Regular
5. Medium
6. Semibold
7. Bold
8. Heavy
9. Black

**Recommended Weights:**
- Regular
- Medium
- Semibold
- Bold

**Avoid:** Ultralight, Thin, and Light (difficult to read, especially at small sizes)

### Text Styles & Hierarchy

Apple's text styles define combinations of font weight, point size, and leading values:

| Text Style | Purpose | Characteristics |
|------------|---------|-----------------|
| **Large Title** | Page headers | Largest size, high visual weight |
| **Title 1** | Primary headings | Secondary hierarchy level |
| **Title 2** | Section headings | Medium prominence |
| **Title 3** | Subsection headings | Smaller than Title 2 |
| **Headline** | Content headings | Distinguished by size and weight |
| **Body** | Primary text | Comfortable for extended reading |
| **Callout** | Supporting text | Slightly smaller than body |
| **Subheadline** | Secondary labels | Reduced prominence |
| **Footnote** | Tertiary information | Small, minimal emphasis |
| **Caption 1** | Image captions | Smallest standard size |
| **Caption 2** | Additional metadata | Even smaller than Caption 1 |

### Font Sizing Guidelines

**Body Text:**
- Optimized for comfortable multi-line reading
- Default line height supports readability

**Display Text (20pt+):**
- Uses SF Pro Display with tighter tracking
- Adjusted spacing for visual balance

**Small Text (<20pt):**
- Uses SF Pro Text with looser tracking
- More space between characters for legibility

### Line Heights & Leading

**General Principles:**
- **Wide columns/long passages:** Use loose leading (more space between lines)
- **Constrained areas (lists):** Use tight leading (less space between lines)
- **Default:** Text styles include appropriate line heights for most cases

### Tracking & Spacing

- **Dynamic tracking:** System automatically adjusts character spacing based on point size
- **Smaller text:** More tracking (looser spacing) for legibility
- **Larger text:** Less tracking (tighter spacing) for visual balance
- **Optical sizes:** Variable fonts support continuous interpolation between Text and Display variants

### Dynamic Type Support

**Key Feature:** Users can adjust text size system-wide

**Implementation:**
- Support all Dynamic Type sizes
- Maintain hierarchy across size adjustments
- Use built-in text styles for automatic scaling
- Test at all accessibility sizes (XS to XXXL)

**Benefits:**
- Improved accessibility
- User preference respect
- Consistent experience across apps

---

## 2. Color System

### Primary System Colors

Apple uses **semantic colors** that automatically adapt to appearance modes.

#### Standard System Colors (Light Mode)

| Color Name | Hex Code | RGB Values | Usage |
|------------|----------|------------|-------|
| System Red | `#FF3B30` | RGB(255, 59, 48) | Destructive actions, errors |
| System Orange | `#FF9500` | RGB(255, 149, 0) | Warnings, alerts |
| System Yellow | `#FFCC00` | RGB(255, 204, 0) | Caution, highlights |
| System Green | `#28CD41` | RGB(40, 205, 65) | Success, confirmation |
| System Teal | `#5AC8FA` | RGB(90, 200, 250) | Secondary actions |
| System Blue | `#007AFF` | RGB(0, 122, 255) | Primary actions, links |
| System Indigo | `#5856D6` | RGB(88, 86, 214) | Alternative primary |
| System Purple | - | - | Alternative accent |
| System Pink | `#FF2D55` | RGB(255, 45, 85) | Accent color |

#### Standard System Colors (Dark Mode)

| Color Name | Hex Code | RGB Values | Adaptation |
|------------|----------|------------|-----------|
| System Red | `#FF453A` | RGB(255, 69, 58) | Slightly brighter |
| System Green | `#32D74B` | RGB(50, 215, 75) | More vibrant |
| System Blue | `#0A84FF` | RGB(10, 132, 255) | Lighter, more visible |

### Semantic Color Categories

#### Label Colors
- **Primary Label:** Main text content
- **Secondary Label:** Supporting text
- **Tertiary Label:** Disabled or placeholder text
- **Quaternary Label:** Minimal emphasis text

#### Background Colors
- **System Background:** Primary background
- **Secondary System Background:** Grouped content backgrounds
- **Tertiary System Background:** Nested grouping

#### UI Element Colors
- **Separator:** Dividing lines
- **Opaque Separator:** Non-translucent dividers
- **Link:** Hyperlinks and interactive text
- **Placeholder Text:** Form field hints

### Dark Mode Specifications

**Philosophy:**
- Dimmer background colors
- Brighter foreground colors
- Not all colors are strict inversions
- Maintains visual hierarchy

**Color Behavior:**
- Semantic colors automatically adapt
- Custom colors require light/dark variants in asset catalog
- System-defined colors ensure proper contrast

**Implementation Best Practices:**
- Use semantic colors (systemRed, systemBlue, etc.)
- Define Color Set assets with bright and dim variants
- Test in both appearances
- Maintain sufficient contrast ratios

### Apple Brand Colors

| Color Name | Hex Code | RGB Values | Usage |
|------------|----------|------------|-------|
| Science Blue | `#0066CC` | RGB(0, 102, 204) | Apple branding |
| Shark Gray | `#1D1D1F` | RGB(29, 29, 31) | Dark backgrounds |
| Athens Gray | `#F5F5F7` | RGB(245, 245, 247) | Light backgrounds |
| White | `#FFFFFF` | RGB(255, 255, 255) | Clean surfaces |

### Opacity & Layering

**Material Colors:**
- Semi-transparent backgrounds
- Blur effects combined with opacity
- Vibrancy for text over blurred backgrounds

**Typical Opacity Values:**
- **Subtle overlays:** 5-15%
- **Moderate overlays:** 30-50%
- **Strong overlays:** 70-90%

**Dark Mode Fill Values:**
- Fill: `rgba(255, 255, 255, 0.05)`
- Stroke: `rgba(255, 255, 255, 0.1)`

---

## 3. Spacing & Layout

### Grid Systems

#### 8-Point Grid System

**Foundation:** All spacing uses multiples of 8px (8, 16, 24, 32, 40, 48, etc.)

**Benefits:**
- Consistent rhythm and visual hierarchy
- Scalable across different screen sizes
- Aligns with Apple HIG recommendations
- Widely adopted in iOS design

**Application:**
- Element dimensions
- Padding and margins
- Component spacing
- Container widths

#### Mobile Grid Specifications

**Standard Mobile Grid:**
- **Columns:** 4
- **Gutter Width:** 16px
- **Margin:** 16px or 24px

### Padding and Margin Scales

**Common Values (8pt system):**

| Spacing Token | Value | Usage |
|---------------|-------|-------|
| XXS | 4px | Micro adjustments |
| XS | 8px | Minimal spacing |
| S | 16px | Default margin from screen edge |
| M | 24px | Medium spacing |
| L | 32px | Large spacing |
| XL | 40px | Extra large spacing |
| XXL | 48px | Maximum spacing |

### iOS-Specific Layout Values

#### Safe Areas & Margins

**Screen Edge Margins:**
- **Default:** 16px from screen edge (using AutoLayout)
- **Alternative:** 24px for more breathing room

**Minimum Touch Target:**
- **44px × 44px** - Minimum recommended size for tap areas
- Ensures comfortable, accessible interaction
- Critical for buttons, controls, and interactive elements

#### Navigation Bar

**Height:**
- **Standard:** 96px (excluding search bar)
- **Large Title:** Variable height based on scroll position

#### Tab Bar

**Height:**
- **iPhone:** 83px
- **tvOS:** 68 points (46 points from top of screen)

**Tab Count:**
- **iPhone:** Maximum 5 tabs displayed
- **iPad:** Up to 7 tabs possible

### Component Spacing

**General Principles:**
- Maintain sufficient space between interactive elements
- Group related items with less spacing
- Use more spacing to separate unrelated sections
- Follow internal ≤ external rule (padding inside elements should be ≤ margin between elements)

**List Item Spacing:**
- Tight leading for constrained vertical space
- Consistent padding within items
- Clear separators between items

---

## 4. Visual Effects

### Border Radius Values

#### Standard Values

**Common Border Radius:**
- **Small:** 5-8px
- **Medium:** 10-12px
- **Large:** 15-20px
- **Capsule:** 50% or height/2 for pill-shaped buttons

#### iOS-Specific Rounded Corners

**Continuous Curve:**
- Apple uses a "continuous corner curve" (smooth corners)
- Different from standard CSS border-radius
- Creates more organic, flowing appearance
- Default in UIButton.Configuration

**Corner Radius Ratio:**
- **iOS-style icons:** ~17.544% border-radius ratio
- Maintains consistent visual appearance across sizes

**Button Corner Styles:**
- `.small` - Subtle rounding
- `.medium` - Standard rounding
- `.large` - Prominent rounding
- `.capsule` - Fully rounded ends
- `.fixed` - Custom radius value

### Shadow Specifications

#### Shadow Properties

| Property | Description | Default/Typical Values |
|----------|-------------|------------------------|
| **shadowRadius** | Blur amount | 3 points (default) |
| **shadowOffset** | Distance from view | 3 points up (default) |
| **shadowOpacity** | Transparency | 0 (invisible) to 1 (opaque) |
| **shadowColor** | Color of shadow | Black with low opacity |

#### Shadow Usage Patterns

**Elevation Levels:**

1. **Subtle (Level 1):**
   - Offset: 0px 1px
   - Blur: 3px
   - Opacity: 0.1-0.15
   - Usage: Cards, list items

2. **Medium (Level 2):**
   - Offset: 0px 2px
   - Blur: 6px
   - Opacity: 0.15-0.2
   - Usage: Floating buttons, modals

3. **Strong (Level 3):**
   - Offset: 0px 8px
   - Blur: 16px
   - Opacity: 0.2-0.3
   - Usage: Overlays, popovers

**Liquid Glass Shadows:**
- **Dark Mode:** Deeper shadows for depth
- **Pressed State:** Reduced shadow (scale: 98%)

### Blur Effects

#### Materials System

Apple's blur effects are called **"materials"** - combining blur and translucency for visual separation.

**Material Thickness Levels:**
1. **Ultra Thin** - Minimal blur
2. **Thin** - Light blur
3. **Medium** - Standard blur
4. **Thick** - Heavy blur
5. **Chrome** - Ultra thick (maximum blur)

#### Blur Specifications

**Typical Blur Values:**
- **Light blur:** 10-15px
- **Standard blur:** 20-25px
- **Heavy blur:** 30-40px
- **Progressive blur:** Graduated blur (Apple Maps, App Store)

**Dark Mode Blur:**
- Blur: 25px (slightly stronger than light mode)

#### Vibrancy

**Definition:** Text and content rendering over blurred backgrounds

**Characteristics:**
- Adapts to underlying content
- Maintains legibility
- Creates depth perception
- System-provided vibrancy styles

### Liquid Glass Effect (iOS 26+)

**New Design Language:** Introduced in iOS 26 beta

#### Visual Properties

**Light Mode:**
- Fill: Semi-transparent white with subtle opacity
- Stroke: Slightly more opaque border
- Blur: 20-25px
- Shadow: Light, subtle

**Dark Mode:**
- Fill: `rgba(255, 255, 255, 0.05)`
- Stroke: `rgba(255, 255, 255, 0.1)`
- Blur: 25px
- Shadow: Deeper, more pronounced

#### Interaction States

**Pressed State:**
- Scale: 98% (slight shrink)
- Fill transparency: -3% (slightly less transparent)
- Shadow: Reduced
- Transition time: 150ms

**Hover/Active:**
- Light bending effect
- Energized appearance
- Gel-like flexibility

### Transitions and Animations

#### Standard Transitions

**Duration Values:**
- **Fast:** 150ms (button press, micro-interactions)
- **Standard:** 300ms (view transitions, animations)
- **Slow:** 500ms+ (page transitions, complex animations)

**Easing:**
- **Smart animation** with ease-in-out curves
- Natural, physics-based motion
- Maintains momentum and weight

#### Animation Principles

**Liquid Glass Animations:**
- Materialize in/out (not fade)
- Light bending and lensing
- Optical integrity preservation
- Instant flex on interaction

**General Principles:**
- Smooth, continuous motion
- Meaningful transitions
- Respect reduce motion settings
- Performance-conscious (GPU considerations)

#### Frosted Glass Implementation

**Web (CSS):**
```css
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.7);
```

**iOS (SwiftUI):**
```swift
.background(.thinMaterial)
.background(.regularMaterial)
.background(.thickMaterial)
```

**iOS 26 (SwiftUI):**
```swift
.liquidGlassMaterial
```

#### Performance Considerations

**GPU Impact:**
- Blur and transparency are GPU-intensive
- May cause lag on older/low-end devices
- Test on target devices
- Provide fallback options

---

## 5. Component Patterns

### Card Designs

#### Card Characteristics

**Visual Properties:**
- Rounded corners (8-16px radius)
- Subtle shadow for elevation
- Background slightly elevated from page
- Clear content boundaries

**Usage:**
- Group related information
- Contain page-specific actions
- Create visual hierarchy
- Separate distinct content sections

**Spacing Within Cards:**
- Consistent internal padding (16-24px)
- Clear separation between card elements
- Grouped related information

### Button Styles

#### Button Types

**Primary Buttons:**
- **Style:** `.borderedProminent`
- **Height:** Minimum 44px (touch target)
- **Corner Radius:** 10-12px or capsule
- **Padding:** Top/Bottom: 10-12px, Left/Right: 20-24px
- **Color:** System blue or brand color
- **Usage:** Main call-to-action

**Secondary Buttons:**
- **Style:** `.bordered` or `.plain`
- **Height:** Minimum 44px
- **Corner Radius:** 10-12px
- **Color:** Neutral or secondary color
- **Usage:** Alternative actions

**Tertiary/Text Buttons:**
- **Style:** `.plain`
- **Visual:** Text only, no background
- **Color:** System blue (link color)
- **Usage:** Low-emphasis actions

**Destructive Buttons:**
- **Color:** System red
- **Style:** Prominent or bordered
- **Usage:** Delete, remove, cancel actions

#### Button Specifications

**Minimum Dimensions:**
- **Height:** 44px × 44px
- **Width:** Based on content + padding
- **Touch target:** Full 44px interactive area

**Content Insets:**
- **Traditional:** `UIEdgeInsets(top: 10, left: 20, bottom: 10, right: 20)`
- **Directional:** `NSDirectionalEdgeInsets(top: 10, leading: 20, bottom: 10, trailing: 20)`

**Corner Styles:**
- Small, medium, large (built-in)
- Capsule (pill-shaped)
- Fixed (custom value)

**Sign in with Apple Button:**
- Built-in rounded corners
- Customizable corner radius
- Can be square or pill-shaped
- Branded styling required

### Form Elements

#### Text Inputs

**Appearance:**
- Styled as list items
- Hint text (placeholder) disappears on typing
- Clear visual focus state
- Minimum height: 44px

**Components:**
- Label (optional)
- Input field
- Placeholder text
- Clear button (optional)
- Error message (validation)

#### Switches (Toggle)

**Layout:**
- Appears within list item
- Label on left
- Switch control on right
- Binary choice (on/off)
- Minimum touch target: 44px height

**Visual:**
- System green when active
- Gray when inactive
- Smooth toggle animation

#### Pickers

**Types:**
- **Wheel Picker:** Scrollable lists
- **Menu Picker:** Dropdown/popup
- **Date Picker:** Calendar/wheel variants

**Characteristics:**
- Multiple scrollable value lists
- Clear current selection
- Smooth scrolling animation

#### Segmented Controls

**Layout:**
- Linear set of 2+ segments
- Each segment functions as button
- Mutually exclusive selection
- Equal width segments (typically)

**Visual:**
- Rounded container
- Selected segment highlighted
- Smooth selection animation
- Clear visual feedback

#### Sliders

**Components:**
- Horizontal track
- Thumb (draggable control)
- Min/max value indicators (optional)
- Current value display (optional)

**Interaction:**
- Drag thumb to adjust
- Tap track to jump
- Smooth thumb animation
- Visual feedback on interaction

### Navigation Patterns

#### Tab Bars

**Purpose:**
- Enable navigation between app sections
- Always visible (persistent)
- Core app navigation

**Specifications:**
- **iPhone Height:** 83px
- **iPad:** Up to 7 tabs
- **iPhone:** Maximum 5 visible tabs
- **Position:** Fixed at bottom (iOS)

**Best Practices:**
- Minimum required tabs only
- Clear, recognizable icons
- Text labels for clarity
- Remains visible during push transitions
- Access to core app areas

#### Navigation Bars

**Purpose:**
- Contextual navigation
- Screen title display
- Action buttons

**Specifications:**
- **iOS Height:** 96px (standard, excluding search)
- **macOS:** No standard nav bar (uses sidebar or toolbar)
- **Position:** Top of screen

**Elements:**
- Back button (left)
- Title (center or left)
- Action buttons (right)
- Optional search bar

#### Navigation Patterns

**Flat Navigation:**
- Divides hierarchy at root level
- Presented as tab bar or sidebar
- Parallel sections of app
- No parent-child relationship

**Drill-Down Navigation:**
- Traverses information tree
- Cascading lists
- Level by level navigation
- Parent-child hierarchy
- Back button for return

**Combined Navigation:**
- Tab bar for top-level sections
- Drill-down within each tab
- Most common iOS pattern
- Flexible information architecture

---

## 6. Key Design Principles

### Core Philosophy

Apple's Human Interface Guidelines emphasize three fundamental principles:

1. **Clarity**
2. **Deference** (letting content shine)
3. **Depth** (visual layering and hierarchy)

### Clarity and Simplicity

#### Clarity

**Definition:** Interface should be legible, understandable, and easy to navigate

**Implementation:**
- Clear, legible text at all sizes
- Sharp, recognizable icons
- Strong visual hierarchy
- Focus on most important elements
- Precise controls and targets
- Sharp graphics and imagery

**Typography for Clarity:**
- Appropriate font sizes
- Sufficient contrast
- Clear hierarchy through size and weight
- Adequate spacing and leading

**Benefits:**
- Reduced cognitive load
- Faster user comprehension
- Improved task completion
- Better user experience

#### Simplicity

**Philosophy:** Keep interface design simple, avoid clutter and complexity

**Principles:**
- Minimize unnecessary elements
- Focus on essential features
- Remove redundant information
- Clean, uncluttered layouts
- Progressive disclosure (show when needed)

**Visual Simplicity:**
- Ample white space
- Clear grouping
- Minimal decoration
- Purposeful color use
- Restrained visual effects

### Depth and Layering

#### Visual Depth

**Purpose:** Create spatial understanding and information hierarchy

**Techniques:**
- Shadows for elevation
- Blur for background separation
- Translucency for layering
- Scale for importance
- Motion for transitions

**Material Layers:**
- Background layers (blurred)
- Content layers (sharp, in focus)
- Floating elements (shadowed)
- Overlays (translucent)

#### Layering Strategies

**Information Hierarchy:**
- Primary content: Largest, boldest, most prominent
- Secondary content: Medium emphasis
- Tertiary content: Smallest, least prominent
- Background/context: Subtle, receding

**Depth Indicators:**
- Subtle shadows and layering
- Visual transitions between screens
- Logical navigation flow
- Clear parent-child relationships

### Visual Hierarchy

#### Establishing Hierarchy

**Typography:**
- Size: Larger = more important
- Weight: Bolder = more important
- Color: Higher contrast = more important
- Position: Top/center = more important

**Layout:**
- Space: More space around = more important
- Grouping: Visual relationships through proximity
- Alignment: Create reading flow and structure
- Containment: Boxes and cards for grouping

#### Hierarchy Best Practices

**Prioritize Content:**
- Most important information first
- Clear visual distinction between levels
- Consistent hierarchy across app
- Logical information flow

**Guide User Focus:**
- Use size, weight, color strategically
- Maintain clear entry points
- Support natural reading patterns
- Reduce visual noise

### Accessibility Standards

#### WCAG Compliance

**Contrast Ratios:**

| Text Size | Minimum (AA) | Preferred (AAA) |
|-----------|--------------|-----------------|
| Normal text (<18pt or <14pt bold) | 4.5:1 | 7:1 |
| Large text (≥18pt or ≥14pt bold) | 3:1 | 4.5:1 |
| UI components and graphics | 3:1 | - |

**Apple Recommendations:**
- Strive for minimum 4.5:1 contrast
- 7:1 preferred for better accessibility
- Use system colors for automatic contrast
- Test with Xcode Accessibility Inspector

#### Dynamic Type

**Purpose:** Users control text size across system

**Implementation Requirements:**
- Support all Dynamic Type sizes
- Use built-in text styles
- Maintain hierarchy at all sizes
- Test at XS through XXXL sizes

**Benefits:**
- Improved readability for vision-impaired users
- User preference respect
- Better accessibility ratings
- Automatic scaling

#### Increased Contrast Mode

**Feature:** System-wide contrast enhancement

**Behavior:**
- Automatically enhances foreground/background colors
- Users enable in accessibility settings
- Apps should support automatically
- May not guarantee 7:1 ratio (test required)

#### Accessibility Best Practices

**Touch Targets:**
- Minimum 44 × 44 points
- Adequate spacing between targets
- Clear interactive states

**Color:**
- Don't rely on color alone
- Use icons and text labels
- Support color blindness
- Test in grayscale

**Motion:**
- Respect reduce motion preference
- Provide static alternatives
- Limit excessive animation
- Consider vestibular disorders

**Screen Readers:**
- Provide meaningful labels
- Logical navigation order
- Announce state changes
- Support VoiceOver (iOS)

**Testing:**
- Use Xcode Accessibility Inspector
- Test with VoiceOver enabled
- Check contrast ratios
- Validate with real users

---

## Summary

This comprehensive research document covers Apple's Human Interface Guidelines and design system specifications for 2024-2025, including:

- **Typography:** SF Pro font family, weights, hierarchy, sizing scales, line heights, and Dynamic Type support
- **Colors:** System color palettes with hex codes, semantic colors, dark mode specifications, and opacity values
- **Spacing:** 8-point grid system, padding/margin scales, component spacing, and layout specifications
- **Visual Effects:** Border radius values, shadow specifications, blur effects (materials), and Liquid Glass design language
- **Components:** Card designs, button styles, form elements, and navigation patterns with specific measurements
- **Design Principles:** Clarity, simplicity, depth, layering, visual hierarchy, and comprehensive accessibility standards

All values and specifications are sourced from official Apple Developer Documentation and Human Interface Guidelines as of 2024-2025.

---

**Additional Resources:**

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- [Apple Design Resources](https://developer.apple.com/design/resources/)
- [SF Font Family](https://developer.apple.com/fonts/)
- [Apple Developer Documentation](https://developer.apple.com/documentation/)
