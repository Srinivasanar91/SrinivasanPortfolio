# Design Guidelines: Dr. A. Srinivasan - Academic Portfolio Website

## Design Approach

**Selected Approach:** Hybrid - Design System (Material Design) + Academic Portfolio References

**Rationale:** Academic portfolio requiring credibility and professionalism while showcasing innovation leadership. Drawing inspiration from modern academic portfolios (MIT/Stanford faculty sites) combined with Material Design principles for structured information hierarchy.

**Core Principles:**
- Academic credibility with modern innovation aesthetic
- Information-dense layouts with clear visual hierarchy
- Trust-building through structured presentation
- Professional yet approachable visual language

---

## Color Palette

**Light Mode:**
- Primary: 220 90% 25% (Deep professional blue - academic authority)
- Secondary: 200 85% 45% (Lighter blue for accents)
- Accent: 25 95% 50% (Warm orange for innovation/achievement highlights)
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 220 25% 15%
- Text Secondary: 220 15% 40%

**Dark Mode:**
- Primary: 220 80% 65%
- Secondary: 200 70% 55%
- Accent: 25 95% 60%
- Background: 220 20% 10%
- Surface: 220 18% 14%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%

---

## Typography

**Font Families:**
- Headings: 'Inter', sans-serif (700, 600, 500 weights) - modern, professional
- Body: 'Inter', sans-serif (400, 500 weights) - excellent readability
- Accent/Stats: 'Space Grotesk', sans-serif (600 weight) - for numbers and achievements

**Hierarchy:**
- Hero Title: text-5xl lg:text-6xl font-bold
- Section Headings: text-3xl lg:text-4xl font-bold
- Subsection Headings: text-xl lg:text-2xl font-semibold
- Card Titles: text-lg font-semibold
- Body Text: text-base
- Small Text/Meta: text-sm

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy:**
- Max width: max-w-7xl for main content
- Section padding: py-16 lg:py-24
- Card padding: p-6 lg:p-8
- Grid gaps: gap-6 lg:gap-8

**Responsive Breakpoints:**
- Mobile: base (single column)
- Tablet: md: (2 columns where appropriate)
- Desktop: lg: (3-4 columns for cards/grids)

---

## Page Structure & Sections

### 1. Hero Section (Full viewport height)
- Left side: Professional photo in circular frame with subtle gradient border
- Right side: Name, designation, tagline, key stats (8+ years, 4-star IIC ranking, Ph.D. candidate)
- Dual CTAs: "View Research" (primary) + "Contact Me" (outline)
- Subtle particle animation background suggesting AI/technology

### 2. About Me Section
- Two-column layout (desktop): Left - narrative text, Right - quick facts card
- Quick facts: Location, Blood Group, Current Role, Academic Status
- Highlight innovation focus and entrepreneurship passion

### 3. Leadership & Achievements
- Card grid (3 columns desktop, 2 tablet, 1 mobile)
- Cards: IIC Convener (4-star badge), NIRF Coordinator, NISP Coordinator, SIH SPOC
- Each card: Icon, role title, achievement/impact statement
- Use accent color for achievement badges

### 4. Academic Qualifications & Certifications
- Timeline layout (vertical on mobile, alternating on desktop)
- Left track: Formal qualifications (Ph.D., NET, SET, M.Phil., M.Sc., B.Sc.)
- Right track: Professional certifications (ML, Data Science, Ethical Hacking, Gen AI)
- Year markers with connecting lines

### 5. Research & Publications
- Tabbed interface: "Journal Papers" | "Book Chapters" | "Patents"
- Publication cards in masonry grid (2-3 columns)
- Each card: Title, journal name, ISSN, date, UGC/Scopus badge
- Expand on click for abstract/details

### 6. Teaching Experience
- Horizontal timeline (scrollable on mobile)
- Institution cards: Logo placeholder, name, position, duration, key responsibilities
- Total experience counter (8 years 10 months) prominently displayed

### 7. Professional Development
- Multi-column grid (3 columns desktop)
- FDP/Workshop cards: Title, organizing institution, date, topic badge
- Filter by category: AI/ML, Data Science, Cybersecurity, General

### 8. Skills & Expertise
- Visual skill matrix with proficiency indicators
- Categories: AI & Machine Learning, Cybersecurity, Data Science, Innovation Management, Teaching & Mentorship
- Iconography representing each skill area

### 9. Digital Presence
- Three-column grid: YouTube channel preview, Blog preview, LinkedIn profile
- Each with icon, description, subscriber/follower count, CTA button
- Embedded preview thumbnails

### 10. Contact Section
- Two-column: Left - contact form, Right - contact information card
- Contact info: Email, phone, address, office hours
- Social links: LinkedIn, YouTube, Blog with icons
- Map integration or university building image

### 11. Footer
- Multi-column layout: About, Quick Links, Connect, Newsletter signup
- Copyright, last updated date
- Subtle gradient background

---

## Component Library

**Cards:**
- Subtle shadow: shadow-md hover:shadow-lg
- Border radius: rounded-xl
- Border: border border-gray-200 dark:border-gray-700
- Hover: scale-[1.02] transition duration-300

**Buttons:**
- Primary: bg-primary text-white px-6 py-3 rounded-lg font-medium
- Outline: border-2 border-primary text-primary backdrop-blur-sm (for hero)
- Sizes: Small (px-4 py-2), Medium (px-6 py-3), Large (px-8 py-4)

**Badges:**
- Achievement badges: bg-accent text-white px-3 py-1 rounded-full text-sm font-medium
- Category tags: bg-primary/10 text-primary px-3 py-1 rounded-full text-xs

**Icons:**
- Use Heroicons for UI elements
- Academic/innovation icons for section headers
- Size: w-6 h-6 for standard, w-8 h-8 for featured

**Timeline:**
- Vertical line connector with node circles
- Alternating left-right layout on desktop
- Node circles: filled for completed, outlined for in-progress (Ph.D.)

**Tabs:**
- Underline style with active indicator
- Smooth transition on tab change
- Mobile: scrollable horizontal tabs

---

## Images

**Hero Image:** 
Professional headshot of Dr. Srinivasan (provided) in circular frame, diameter ~300px on desktop, positioned left side of hero section, with subtle glow/border effect using gradient (primary to accent colors)

**Section Background Images:**
- Research section: Abstract AI/neural network pattern as subtle background
- Teaching section: Classroom/lecture hall image (low opacity overlay)

**Icons/Illustrations:**
- Innovation lightbulb for IIC sections
- Trophy/star for 4-star achievement
- Graduation cap for academic qualifications
- Book/paper for publications
- Code brackets for technical skills

---

## Animations & Interactions

**Minimal approach - use sparingly:**
- Hero: Fade-in on load with slight upward movement
- Section reveals: Fade-in as user scrolls to each section
- Card hover: Subtle lift (translateY(-4px)) with shadow increase
- Stats counter: Animate numbers counting up on scroll into view
- NO continuous animations or parallax effects

---

## Accessibility & Dark Mode

- All form inputs styled consistently in dark mode
- Maintain WCAG AA contrast ratios
- Focus indicators on all interactive elements
- Skip to main content link
- Semantic HTML structure
- Alt text for all images

---

## Key Differentiators

- Academic credibility through structured information presentation
- Innovation leadership highlighted with achievement badges
- Research prominence with dedicated tabbed section
- Professional yet modern aesthetic balancing tradition and forward-thinking
- Comprehensive timeline showcasing career progression
- Digital presence integration (YouTube, Blog, LinkedIn) showing thought leadership