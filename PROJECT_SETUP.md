# Project Setup Guide - KGN Classes Website

Welcome to the KGN Classes static website codebase. This codebase is fully responsive, highly animated, and completely self-contained. It is structured to allow a developer to quickly deploy the project and swap out mock/placeholder assets for live production files.

---

## 1. Directory Structure

```text
KGN-Classes/
│
├── index.html          (Home Page)
├── about.html          (About Us & History)
├── courses.html        (Streams & Features)
├── gallery.html        (Interactive Filterable Media Gallery)
├── results.html        (Toppers & Academic Milestones)
├── reviews.html        (Student & Parent Feedback Portal)
├── contact.html        (Location, Map, and Lead Capture Form)
│
├── css/
│   ├── style.css       (Global Reset, Typography, Base, Variables, Navbar/Footer)
│   ├── components.css  (Cards, Buttons, Modals, Floating Actions, Glass Effects)
│   ├── animations.css  (Keyframes, Entrance Reveals, Hover Effects)
│   └── pages.css       (Page-specific overrides/layouts)
│
├── js/
│   ├── main.js         (Global Functionality, Mobile Nav, Sticky Header)
│   ├── animations.js   (Intersection Observer, Count-up Counter scripts)
│   └── gallery.js      (Vanilla JS Interactive Category Filtering)
│
└── assets/
    ├── logo/           (Logo file variants)
    ├── banners/        (Hero headers and parallax backdrops)
    ├── faculty/        (Prof. Wali Khan & staff profiles)
    ├── toppers/        (High-achiever student snapshots)
    ├── gallery/        (Classroom environment, events, functions)
    ├── awards/         (Certificates, local recognition)
    ├── testimonials/   (Reviewer avatars)
    └── results/        (Downloadable PDF result sheets)
```

---

## 2. Asset Replacement Specifications

Every image tag (`<img>`) in the HTML code contains a developer comment preceding it indicating its name, expected path, dimensions, and role. Swap files out using the following roadmap to avoid breaking styling grids or layouts:

### Logo & Identity
*   **Path:** `assets/logo/logo.png`
*   **Recommended Resolution:** `180px x 60px` (or aspect ratio `3:1`)
*   **Format:** Transparent Background PNG or SVG
*   **Reference Locations:** Sticky Navbar & Page Footers

### Hero & Banner Backdrop
*   **Path:** `assets/banners/hero-bg.jpg`
*   **Recommended Resolution:** `800px x 600px` (or high-res landscape aspect ratio `4:3` / `16:9`)
*   **Format:** WebP or optimized JPG
*   **Reference Locations:** `index.html` Hero Section (Right visual frame)

### Director Profile Photo
*   **Path:** `assets/faculty/director-wali-khan.jpg`
*   **Recommended Resolution:** `500px x 600px` (Aspect ratio `5:6` / Portrait orientation)
*   **Format:** WebP or JPG
*   **Reference Locations:** `index.html` (Director Preview) and `about.html` (Director's Message)

### Student Reviewer Avatars
*   **Path:** `assets/testimonials/`
*   **Recommended Resolution:** `100px x 100px` (Aspect ratio `1:1` Square)
*   **Format:** Profile WebP or JPG
*   **File Names:**
    *   `avatar-01.jpg` (Altamash Sheikh)
    *   `avatar-02.jpg` (Mrs. Siddiqui)
    *   `avatar-03.jpg` (Zaid Sayyed)
    *   `avatar-04.jpg` (Mr. Qureshi)
    *   `avatar-05.jpg` (Farheen Siddiqui)
    *   `avatar-06.jpg` (Rohan Khan)

### Board Exam Toppers
*   **Path:** `assets/toppers/`
*   **Recommended Resolution:** `150px x 150px` (Aspect ratio `1:1` Square)
*   **Format:** Portrait WebP or JPG
*   **File Names:**
    *   `topper-ssc-01.jpg` (Rank 1 - SSC)
    *   `topper-ssc-02.jpg` (Rank 2 - SSC)
    *   `topper-ssc-03.jpg` (Rank 3 - SSC)
    *   `topper-ssc-04.jpg` (Rank 4 - SSC)
    *   `topper-hsc-sci-01.jpg` (Rank 1 - Science)
    *   `topper-hsc-sci-02.jpg` (Rank 2 - Science)
    *   `topper-hsc-sci-03.jpg` (Rank 3 - Science)
    *   `topper-hsc-com-01.jpg` (Rank 1 - Commerce)
    *   `topper-hsc-com-02.jpg` (Rank 2 - Commerce)
    *   `topper-hsc-art-01.jpg` (Rank 1 - Arts)

### Gallery Images
*   **Path:** `assets/gallery/`
*   **Recommended Resolution:** `800px x 600px` (Aspect ratio `4:3` Landscape)
*   **Format:** WebP or optimized JPG
*   **File Names:**
    *   `gallery-classroom-01.jpg`
    *   `gallery-classroom-02.jpg`
    *   `gallery-cultural-01.jpg`
    *   `gallery-prize-01.jpg`
    *   `gallery-workspace-01.jpg`
    *   `gallery-award-01.jpg`
    *   `about-classroom.jpg`
    *   `course-science.jpg`
    *   `course-commerce.jpg`
    *   `course-arts.jpg`

### Downloadable Result Ledgers
*   **Path:** `assets/results/`
*   **Format:** Web-optimized PDF
*   **File Names:**
    *   `ssc-ledger-2025.pdf` (10th Standard results)
    *   `hsc-science-ledger-2025.pdf` (12th Science board results)
    *   `hsc-commerce-ledger-2025.pdf` (12th Commerce board results)

---

## 3. Contact Form Integration

The lead form on `contact.html` is fully validated using a client-side vanilla JavaScript validator checking for:
1.  Full Name non-empty validation.
2.  Phone number 10-digit numerical formatting check.
3.  Academic stream dropdown selections.

### Hooking up backend actions:
To receive emails or push lead entries directly to an inbox, a database, or a CRM sheet:

#### Option A: Zero-Code Mail Routing (Recommended for quick setup)
Replace the form element tag in `contact.html` with a free mail router (such as Formspree, Formsubmit, or Web3Forms):
```html
<!-- Example using Formspree -->
<form id="inquiryForm" action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST">
```
*Note: Make sure to verify that the validation script's `e.preventDefault()` is disabled or customized to allow standard POST routing after successful validation.*

#### Option B: Dynamic Endpoint (AJAX submit)
If integrating a custom Node.js/PHP backend:
Update the validation script inside `contact.html` to send form inputs via `fetch()` API:
```javascript
if (isValid) {
    const payload = {
        name: nameInput.value,
        phone: phoneInput.value,
        stream: streamSelect.value,
        message: studentMsg.value
    };

    fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if(response.ok) {
            successAlert.style.display = 'block';
            form.reset();
        }
    });
}
```

---

## 4. Google Maps Customization

The interactive Google Maps iframe in `contact.html` centers on Govandi West, Mumbai.

To customize the coordinate pin:
1.  Go to [Google Maps](https://maps.google.com).
2.  Search for the institute name or physical address coordinates.
3.  Click **Share** &gt; Select the **Embed a map** tab.
4.  Copy the generated iframe source link (`src` attribute URL only).
5.  Paste it into the iframe `src` parameter inside `contact.html` (under the commented coordinate API line).
