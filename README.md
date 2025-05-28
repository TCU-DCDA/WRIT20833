# Introduction to Coding in the Humanities - Course Website

A modern, interactive course website for **WRIT 20833: Introduction to Coding in the Humanities** at Texas Christian University (TCU). This website features a cyberpunk-themed design that bridges the gap between humanities and technology.

## 🌟 Features

- **Modern Clean Design**: Light theme with purple accents and contemporary typography
- **Interactive Animations**: P5.js-powered hero animation representing the flow from humanities concepts to computational structures
- **Responsive Design**: Mobile-first approach with accessible navigation
- **Comprehensive Course Information**: Detailed syllabus, policies, and course materials
- **Accessibility Focused**: Screen reader support, keyboard navigation, and ARIA labels

## 📚 Course Information

- **Course**: WRIT 20833.020 - Introduction to Coding in the Humanities
- **Semester**: Fall 2025
- **Schedule**: MWF 10:00-10:50 AM CST
- **Location**: Beasley Hall, TCU
- **Instructors**: 
  - Dr. Curt Rode (c.rode@tcu.edu)
  - Dr. Brad Lucas (b.e.lucas2@tcu.edu)

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animation**: P5.js library for creative coding animations
- **Typography**: Google Fonts (Orbitron, Rajdhani)
- **Styling**: Custom CSS with CSS Variables for theming
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
├── index.html              # Main homepage
├── syllabus.html           # Detailed course syllabus
├── policies.html           # Course policies and guidelines
├── styles/
│   └── main.css           # Main stylesheet with cyberpunk theme
├── scripts/
│   ├── main.js            # Core website functionality
│   └── hero-animation.js  # P5.js animation for hero section
├── syllabus-content.txt   # Raw syllabus content
└── README.md             # This file
```

## 🎨 Design Philosophy

The website design reflects the course's core mission of bridging humanities and technology:

- **Visual Metaphor**: The hero animation shows humanities concepts (poetry, literature, culture) flowing into computational structures (functions, algorithms, data)
- **Typography**: Combines modern tech font (Orbitron) with readable body text (Rajdhani)
- **Color Scheme**: Clean light background with purple accents suggesting creativity and innovation
- **Accessibility**: WCAG-compliant design with proper semantic HTML and ARIA labels

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/curtrode/curtrode.github.io.git
   cd curtrode.github.io
   ```

2. **Serve locally** (optional):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Or simply open index.html in your browser
   ```

3. **View the website**: Open `index.html` in your browser or visit the live site at [https://curtrode.github.io](https://curtrode.github.io)

## 🔧 Development

### Key Components

- **Navigation**: Responsive hamburger menu with smooth scrolling
- **Hero Animation**: P5.js canvas showing dynamic particle system
- **Content Sections**: Modular sections for different course aspects
- **Forms**: Contact and registration forms with validation

### Customization

The website uses CSS custom properties for easy theming. Main variables are defined in `:root`:

```css
:root {
    --primary-purple: #6b46c1;
    --primary-light: #8b5cf6;
    --light-bg: #f8fafc;
    --text-primary: #1e293b;
    /* ... more variables */
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip links for screen readers
- High contrast color scheme
- Scalable typography

## 🎯 Course Learning Outcomes

This website supports a course that introduces programming for Humanities and Digital Culture and Data Analytics (DCDA) students, focusing on:

- Python programming basics
- Computational analysis of texts
- Critical analysis of humanistic work
- Digital tools for humanistic inquiry

## 📧 Contact

For course-related inquiries:
- **Dr. Curt Rode**: c.rode@tcu.edu
- **Dr. Brad Lucas**: b.e.lucas2@tcu.edu

For technical issues with the website:
- Create an issue in this GitHub repository

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*This website represents the intersection of humanities scholarship and computational thinking, embodying the core principles taught in WRIT 20833.*


