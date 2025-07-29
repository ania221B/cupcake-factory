# About

SPA for a fake cake shop built using React.js, React Router DOM and Suspense API.
This project is a complete rebuild of a website I made based on a template found online a while back. Instead of finishing that older version, I used what I’ve learned since then to recreate it as a fully functioning single-page app using React.

## Table of contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Live Demo](#live-demo)
- [Built with](#built-with)
- [License](#license)

## Getting Started

To run this project locally:

1. Clone the repository:

```
git clone https://github.com/ania221b/cupcake-factory.git
```

2. Navigate to the project folder:

```
cd cupcake-factory
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

5. Open your browser at http://localhost:5173 (if using Vite)

Adjust paths or ports depending on your setup.

## Project Structure

📁 src/
├── assets/       # Images & fonts
| ├── images/
| └── fonts/
├── components/   # Shared UI and feature components
│ ├── common/ # Generic, cross-project components (e.g. Button, Breadcrumb)
│ ├── layout/ # Layout-related components (e.g. Header, Footer)
│ ├── lists/ # Reusable list-related components  
│ ├── sections/ # Page-specific or grouped content sections
│ └── ui/ # Small building blocks (e.g. CartItem, ProductCard)
├── data/         # Static product/blog data
├── hooks/         # Custom hooks (e.g. useFormHandler)
├── pages/         # Route-based components (Store, Blog, Contact, etc.)
├── sass/         # SCSS partials and global styles
│ ├── abstracts/ # Variables, mixins, functions
│ ├── base/ # Reset, general styles
│ ├── components/ # Elements with their own styles, like buttons, inputs, cards, etc.
│ ├── layout/ # Generic styling creating layouts
│ ├── utilities/ # Classes that do one specific thing
│ └── vendor/ # Third party CSS
├── utils/         # Utility functions (e.g. calculateCartTotals)
├── actions.js # action creators
├── App.jsx # Top-level UI component, sets up routes and suspense boundaries
├── cartReducer.js # reducer logic
├── context.jsx # context logic
├── index.scss # Entry point that imports all styles
└── main.jsx       # React root

## Features

🛒 Full store experience with:

- Filter products in the store
- View product detail pages
- Add/remove items to/from cart (both from product pages and the cart view)
- View calculated totals for individual items and the full cart
- Clear cart

📚 Blog system with:

- Post sorting
- Full-length view per post

📬 Forms with:

- Field validation
- Confirmation screens
- Demo account login

✅ Responsive and mobile-first design

## Live Demo

👉 [GitHubPages](https://ania221b.github.io/cupcake-factory/)

## Built with

- Semantic HTML5 markup
- CSS Grid
- Flexbox
- React.js
- React Router DOM
- Suspense API
- Mobile-first workflow

## License

This project is licensed under the [CC BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/).  
You may use or adapt this work **non-commercially**, but **credit is required**.

### Attribution

If you use or build on this project, please include a link back to:  
Ania Buwaj – https://github.com/ania221b  
You can include this in your project's README or credits section.
