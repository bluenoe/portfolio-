# 🚀 Blu's Portfolio Website

A modern, responsive, and visually stunning personal portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion. Designed to impress potential employers and showcase development skills with smooth animations and contemporary design.

## ✨ Features

- **Modern Tech Stack**: Next.js 14, TypeScript, TailwindCSS, Framer Motion
- **Fully Responsive**: Beautiful design on desktop, tablet, and mobile
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Interactive Components**: Contact form, navigation, and project cards
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Focused**: Optimized images and efficient code splitting
- **Clean Code**: Well-organized components and maintainable structure

## 🎯 Sections Included

1. **Hero Section** - Eye-catching introduction with call-to-action
2. **About Me** - Personal introduction and highlights
3. **Skills** - Categorized technical and soft skills with future learning goals
4. **Projects** - Showcase of development projects with live demos and GitHub links
5. **Education** - Learning journey and certifications
6. **Hobbies & Interests** - Personal interests and fun facts
7. **Contact** - Contact form and social media links
8. **Footer** - Additional links and information

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the directory
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization Guide

### 1. Personal Information

**Profile Photo**: Replace the placeholder in `components/Hero.tsx`
```tsx
// Find this section and replace with your image
<div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
  Upload your face here  // Replace this with <img src="/your-photo.jpg" alt="Your Name" />
</div>
```

**Basic Info**: Update personal details in `components/Hero.tsx` and `components/About.tsx`
- Name, title, and description
- Bio and personal story
- Contact information

### 2. Skills Section

**Update Skills**: Modify `components/Skills.tsx`
```tsx
const skillCategories = [
  {
    title: "💻 Programming",
    skills: ["HTML", "CSS", "JavaScript"] // Add your skills here
  },
  // Add more categories as needed
]
```

**Future Skills**: Update the learning roadmap
```tsx
const futureSkills = [
  "Docker", "React Native" // Add skills you plan to learn
]
```

### 3. Projects Section

**Add Your Projects**: Update `components/Projects.tsx`
```tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    techStack: ["React", "Node.js"], // Technologies used
    githubLink: "https://github.com/yourusername/project",
    liveLink: "https://your-project.com",
    category: "Web App"
  },
  // Add more projects
]
```

**Project Images**: Add project screenshots to the `public` folder and update image paths

### 4. Contact Information

**Update Contact Details**: Modify `components/Contact.tsx`
```tsx
const contactInfo = [
  {
    title: "Email",
    value: "your.email@example.com", // Your actual email
    link: "mailto:your.email@example.com"
  },
  // Update other contact methods
]
```

**Social Media Links**: Update all social media URLs throughout the components
- GitHub: Replace `https://github.com/blu-placeholder`
- LinkedIn: Replace `https://linkedin.com/in/blu-dev`
- Email: Replace `blu.developer@email.com`

### 5. Education & Experience

**Update Education**: Modify `components/Education.tsx`
```tsx
const educationItems = [
  {
    title: "Your Degree/Course",
    institution: "Your School/Platform",
    period: "2020 - 2024",
    description: "Description of your education"
  }
]
```

### 6. Hobbies & Interests

**Personalize Hobbies**: Update `components/Hobbies.tsx`
```tsx
const hobbies = [
  {
    title: "Your Hobby",
    description: "Description of your interest",
    // Update icons and colors as needed
  }
]
```

## 🎨 Styling & Theming

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue tones for main elements
- **Accent**: Pink/red tones for highlights
- **Neutral**: Gray tones for text and backgrounds

### Fonts
The website uses Inter font from Google Fonts. You can change this in `app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google'
// Replace Inter with your preferred font
```

### Custom Animations
Animations are defined in `tailwind.config.js` and can be customized:
```js
keyframes: {
  fadeIn: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  // Add your custom animations
}
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects showcase
│   ├── Education.tsx        # Education section
│   ├── Hobbies.tsx          # Hobbies section
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets (add your images here)
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click!

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to [Netlify](https://netlify.com)

### Other Platforms
The website can be deployed to any static hosting service that supports Next.js.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements, consider sharing them back with the community.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips for Success

1. **Keep it updated**: Regularly update your projects and skills
2. **Add real projects**: Replace placeholder projects with your actual work
3. **Optimize images**: Use WebP format and appropriate sizes
4. **Test on mobile**: Ensure everything works well on mobile devices
5. **SEO optimization**: Update meta tags in `app/layout.tsx`
6. **Performance**: Monitor and optimize loading times

## 🆘 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed correctly
3. Verify Node.js version compatibility
4. Check the GitHub issues for common problems

---

**Happy coding! 🎉** Make this portfolio truly yours and land that dream job!