# Portfolio Website

A modern, responsive portfolio website for full stack developers built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Content Management**: Update your information through simple data files
- **Project Showcase**: Interactive project gallery with detailed modals
- **Contact Form**: Working contact form with email integration
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Fast loading and smooth interactions

## Quick Setup

1. **Update Your Information**
   - Edit `src/data/portfolio.ts` to add your personal information, skills, experience, and projects
   - Replace placeholder content with your actual data

2. **Add Your Resume**
   - Place your resume PDF in the `public` folder as `resume.pdf`
   - Or update the `resumeUrl` in the portfolio data file

3. **Customize Images**
   - Update project images in the portfolio data file
   - Use high-quality images (recommended: 800x600px)

## Content Management

### Personal Information
Edit `src/data/portfolio.ts` to update:
- Name, title, and contact information
- Social media links
- Professional summary

### Skills
Update the `skills` object with your technologies:
- Frontend technologies
- Backend technologies
- Tools and platforms
- Programming languages

### Experience
Add your work experience to the `experience` array:
- Job title and company
- Employment period and location
- Key achievements and responsibilities
- Technologies used

### Projects
Update the `projects` array with your work:
- Project title and description
- Technologies used
- Live demo and GitHub links
- Project images
- Mark featured projects

## Deployment to GitHub Pages

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Add GitHub Actions Workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ "main" ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 18
             cache: 'npm'
         - name: Install dependencies
           run: npm install
         - name: Build
           run: npm run build
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

4. **Update Base URL** (if needed)
   If your repository name is not your username, update `vite.config.ts`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repository-name/',
     optimizeDeps: {
       exclude: ['lucide-react'],
     },
   });
   ```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js` or use Tailwind's built-in color classes throughout the components.

### Fonts
Change fonts by updating the Google Fonts link in `index.html` and the font family in `src/index.css`.

### Animations
Customize animations in `src/index.css` or add new ones using Tailwind's animation utilities.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **GitHub Actions** - Deployment

## Support

For questions or issues, feel free to open an issue on GitHub or contact me through the website.

---

Built with ❤️ using React and Tailwind CSS