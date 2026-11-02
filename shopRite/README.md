# 🚀 Shoprite Demo Website

> A responsive, multi-page supermarket website with a product catalogue, shopping cart, photo gallery and inquiry form, built with HTML, CSS and JavaScript.

---

## 👥 Student Information
* **Student Name**: Kgaugelo Letlalo
* **Student Number**: ST10506972
* **Institution**: rosebank collage
* **Course/Module**: , Web Development 101
* **Submission Date**: 2 November 2026

---

## 🔍 Project Overview
This project is a demonstration website for a supermarket in the style of Shoprite, a well-known South African retail brand. It is aimed at everyday shoppers who want to browse groceries and household items, see current prices and contact the store with questions, without having to visit in person.

The real-world need it addresses is simple: many shoppers want to check what a store sells and what it costs before they travel. The website presents products with their prices in rand, lets a visitor build a basket and see the total, shows the different store departments in a gallery and gives customers a clear way to send an inquiry.

The site is made of five linked pages that share one stylesheet (`style.css`) and one JavaScript file (`script.js`). It uses a red, white and yellow colour scheme and adapts to phone, tablet and desktop screens. It also follows the visitor's light or dark mode setting. All products, prices and contact details are **example data** for learning purposes only, and the site is not affiliated with or endorsed by Shoprite.

---

## 🎯 Website Goals and Objectives
* **Primary Goal**: To provide a clear, easy-to-use online storefront where shoppers can browse products, build a basket and contact the store.
* **Objective 1**: Deliver a responsive layout that displays correctly on small phone screens as well as desktop screens, using CSS Grid and Flexbox.
* **Objective 2**: Provide interactive shopping features with JavaScript: add items to a cart, see the running total, and keep the cart saved between pages.
* **Objective 3**: Make information easy to find with a consistent navigation menu on every page, a product search box and an inquiry form that checks the visitor's input before submitting.

---

## ✨ Key Features and Functionality
* **Shopping Cart**: Each product has an "Add to cart" button. The cart counter in the menu updates instantly, and a slide-out panel shows each item, its quantity and the total. Items can be removed or the cart cleared. The cart is stored in the browser's `localStorage`, so it stays when the visitor moves between pages.
* **Product Search**: The products page has a search box that filters product cards as the visitor types, and shows a "No products found" message when nothing matches.
* **Gallery with Lightbox**: The gallery shows store departments as coloured tiles. Clicking a tile enlarges it, and clicking again or pressing the Esc key closes it.
* **Inquiry Form with Validation**: The inquiry form checks that the name, email address and message are valid before showing a confirmation message, and displays a clear error message when they are not.
* **Responsive Design**: The layout, navigation and cards adjust automatically to the screen size, and the colours adapt to dark mode.

---

## 📅 Timeline and Milestones
- [x] **Milestone 1: Project Initiation & Planning** — Completed 19 October 2026
- [x] **Milestone 2: Part 1 Submission** — Completed 2 November 2026
- [ ] **Milestone 3: Part 2 Development** — Planned for 30 November 2026
- [ ] **Milestone 4: Part 3 Final Testing & Deployment** — Planned for 14 December 2026

---

## 📝 Part 1 Details
*(Note: Part 2 and Part 3 details will follow in future submissions and edits.)*

### Deliverables for this Phase
* **Requirement A**: Five linked HTML pages (Home, Products, Gallery, About and Inquiries) that share the same header, navigation and footer.
* **Requirement B**: A single external stylesheet (`style.css`) that controls the design of every page, and an external JavaScript file (`script.js`) that adds the cart, search, lightbox and form validation.

### Setup & Local Execution Instructions
1. Download or clone the project folder so that all seven files are in the same folder:
   `index.html`, `products.html`, `gallery.html`, `about.html`, `inquiries.html`, `style.css`, `script.js`.
   If you are using Git: `git clone <repo-url>`
2. Open `index.html` in your browser (double-click the file), or in Visual Studio Code right-click `index.html` and choose **Open with Live Server** if the Live Server extension is installed.
3. Use the menu to move between pages. No installation, build step or internet connection is needed.

### Project Structure
```
shoprite-site/
├── index.html
├── products.html
├── gallery.html
├── about.html
├── inquiries.html
├── style.css
├── script.js
└── README.md
```

---

## 🗺️ Sitemap
Below is the structural hierarchy of the website for this phase:

```
Homepage (index.html)
├── Products (products.html)
├── Gallery (gallery.html)
├── About Us (about.html)
└── Inquiries (inquiries.html)
```

---

## 🔄 Changelog
Tracking changes, fixes, and improvements to the website:

### [v1.0.0] - [2026-11-02] (Current Submission)
#### Added
* Initial project structure and the five core pages: Home, Products, Gallery, About and Inquiries.
* Shared stylesheet with a red, white and yellow theme, responsive layout and dark mode support.
* JavaScript features: shopping cart saved in the browser, product search, gallery lightbox and inquiry form validation.
* Comprehensive `README.md` file covering Part 1 requirements.

#### Fixed
* Navigation menu aligned correctly so the cart button sits level with the page links.
* Spacing issues in the footer and cart button text.

---

## ⚠️ Notes and Limitations
* All product names, prices and contact details are examples and are not real.
* The inquiry form checks the visitor's input but does not send the message anywhere yet. Connecting it to a server or an email service is planned for a later part.
* Product images are represented by emoji and coloured tiles instead of photographs.
* The Shoprite name is used for study purposes only. The website is not affiliated with or endorsed by Shoprite, and no official logo is used.


---

## 📚 References
*Cite all academic sources, design inspiration, external code snippets, or frameworks using your institution's required referencing style (e.g., IIE Harvard Anglia).*

1. Mozilla. (n.d.). *MDN Web Docs: HTML, CSS and JavaScript reference*. Available at: https://developer.mozilla.org/ [Accessed: 2 November 2026].
2. Shoprite Holdings. (n.d.). *Shoprite South Africa* (design inspiration for colour theme and page content only). Available at: https://www.shoprite.co.za/ [Accessed: 2 November 2026].
3. Anthropic. (2026). *Claude* (AI assistant used to help generate and format the code). Available at: https://claude.ai/ [Accessed: 2 November 2026].