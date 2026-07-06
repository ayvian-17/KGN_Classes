# KGN Classes Website
Welcome to the official repository for the **KGN Classes** static website. This is a fully responsive, highly animated, and modern web presence for KGN Classes, a premier coaching institute for Science, Commerce, and Arts located in Govandi West, Mumbai.
Led by **Prof. Wali Khan**, the institute provides dedicated coaching for school sections (1st to 10th Standard - English & Urdu Medium) and junior colleges (XI & XII - Science, Commerce, and Arts).
---
## 🌟 Key Features
- **Modern & Premium Design:** Sleek dark-mode aesthetic mixed with elegant typography, glassmorphic elements, and vibrant accent colors.
- **Fluid Animations:** Custom entrance animations, page transitions, and interactive count-up counters utilizing the Intersection Observer API.
- **Filterable Media Gallery:** An interactive, client-side filterable photo gallery to showcase classrooms, cultural events, awards, and functions.
- **Lead Capture & Inquiry Form:** Client-side validation for student inquiries (Name, 10-digit Phone, Stream selection, Custom Message) with integrated support for dynamic backend routing or zero-code mail solutions (e.g., Formspree).
- **Responsive Layout:** Optimized for mobile, tablet, and desktop screens with custom slide-out mobile drawer navigation.
- **SEO Optimized:** Semantic HTML5 structure, descriptive title tags, meta descriptions, and unique interactive IDs on all key components.
---
## 📁 Directory Structure
The project has a modular design structure with clean separation of styling, scripting, and media assets:
```text
KGN-Classes/
├── index.html            # Home page (Hero, features, director message, quick stats)
├── about.html            # About Us page (History, vision, core values)
├── courses.html          # Streams details (Subjects, test schedules, classroom specs)
├── gallery.html          # Interactive filterable media gallery (Classroom, cultural, etc.)
├── results.html          # Academic toppers wall and downloadable PDF result sheets
├── reviews.html          # Student & parent reviews/testimonials portal
├── contact.html          # Lead capture form, physical address, and custom Google Maps embed
│
├── css/
│   ├── style.css         # Reset rules, custom CSS variables (themes), typography, header/footer
│   ├── components.css    # Reusable UI cards, buttons, badges, modals, glassmorphism wrappers
│   ├── animations.css    # CSS keyframes, entrance reveals, hover effects
│   └── pages.css         # Page-specific layout overrides
│
├── js/
│   ├── main.js           # Core global logic (sticky header, burger menu navigation drawer)
│   ├── animations.js     # Scroll reveal (Intersection Observer) & count-up statistics scripts
│   └── gallery.js        # Vanilla JS interactive gallery filtering logic
│
├── assets/               # Image & Document placeholders (structured by page/section)
│   ├── logo/
│   ├── banners/
│   ├── faculty/
│   ├── toppers/
│   ├── gallery/
│   ├── awards/
│   ├── testimonials/
│   └── results/
└── PROJECT_SETUP.md      # Detailed developer guide for logo/asset replacements
```
---
## 🛠️ Getting Started & Customization
### 1. Running the Project Locally
Since this is a fully client-side static site, no complicated build step or package installation is required:
1. Clone or download this project folder to your local machine.
2. Open `index.html` in any web browser to view the site, or run a local server (e.g., VS Code's Live Server extension, `npx serve`, or similar) to ensure assets load properly via relative paths.
### 2. Media Asset Placement
To customize the website's graphics, logo, banners, topper photos, and faculty profiles without breaking the page grids, refer to the step-by-step sizing and location checklist in [PROJECT_SETUP.md](file:///c:/Users/ayaan/Desktop/KGN%20Classes/PROJECT_SETUP.md).
### 3. Activating the Inquiry Form
The inquiry form on [contact.html](file:///c:/Users/ayaan/Desktop/KGN%20Classes/contact.html) runs client-side validation logic inside a script tag block. To route the inquiries to your email or CRM:
- **Option A (Zero-Code):** Replace the action attribute in the form:
  ```html
  <form id="inquiryForm" action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST">
  ```
- **Option B (AJAX/Fetch):** See [PROJECT_SETUP.md](file:///c:/Users/ayaan/Desktop/KGN%20Classes/PROJECT_SETUP.md#L138-163) for details on writing a dynamic endpoint fetch payload.
---
## 📈 SEO & Optimization
The site is built with modern performance standards:
- All image tags are preceded by structural developer comments indicating expected dimensions. Use modern image compression (WebP format) to maintain speed scores.
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) are leveraged on every page.
