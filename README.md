# 🎬 PowerFilm - Movie Streaming Platform

![PowerFilm Banner](https://raw.githubusercontent.com/Jalal-Althahab/PowerFilm/main/screenshots/banner.png)
*A modern, responsive movie streaming website built with Angular 17*

[![Angular](https://img.shields.io/badge/Angular-17-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/Jalal-Althahab/PowerFilm?style=social)](https://github.com/Jalal-Althahab/PowerFilm/stargazers)
[![Live Demo](https://img.shields.io/badge/Live-Demo-green.svg)](https://power-film.web.app)

## 📋 Table of Contents
- [✨ Features](#-features)
- [🚀 Live Demo](#-live-demo)
- [📸 Screenshots](#-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [💻 Installation](#-installation)
- [📁 Project Structure](#-project-structure)
- [🔌 API Integration](#-api-integration)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👤 Contact](#-contact)

## ✨ Features

### 🎥 **Movie Discovery**
- **New Releases Section** - Horizontal scrolling carousel of latest movies
- **Top Rated Movies** - Grid layout with responsive design (4K, HD, 2K quality)
- **TV Shows Section** - Dedicated area for series and shows
- **Movie Details** - Comprehensive movie information with YouTube trailers
- **Similar Content** - Smart recommendations based on current movie

### 🎨 **Modern UI/UX**
- **Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- **Dark Theme** - Cinema-like dark mode for better viewing experience
- **Smooth Animations** - CSS transitions and hover effects
- **Interactive Elements** - Video player modals, share functionality
- **Smooth Navigation** - Scroll to sections and automatic scroll to top

### 🚀 **Technical Features**
- **Angular 17** - Built with latest Angular features and standalone components
- **TypeScript** - Full type safety and modern JavaScript features
- **Ionic Icons** - Beautiful iconography throughout the interface
- **YouTube Integration** - Embedded trailer player with autoplay
- **Custom CSS** - Pure custom styling without UI frameworks
- **Reactive Programming** - RxJS for efficient state management

### 🎬 **Movie Experience**
- **Watch Trailers** - Integrated YouTube player with movie trailers
- **Movie Information** - Ratings, duration, genres, age ratings
- **Download Posters** - Download movie posters in high quality
- **Share Functionality** - Share movies via Web Share API or clipboard
- **Similar Movies** - Discover related content based on what you're watching

## 🚀 Live Demo

🌐 **Live Demo**: [https://power-film.web.app](https://power-film.web.app)

**Try it now!** Experience the PowerFilm streaming platform with:
- Browse movies and TV shows
- Watch trailers directly on the site
- Test responsive design on different devices
- Experience smooth animations and transitions

## 📸 Screenshots

| Home Page | iPad View | Movie Details | Mobile View |
|-----------|-----------|---------------|-------------|
| ![Home Page](https://raw.githubusercontent.com/Jalal-Althahab/PowerFilm/main/screenshots/home-desktop.png) | ![iPad View](https://raw.githubusercontent.com/Jalal-Althahab/PowerFilm/main/screenshots/home-ipad.png) | ![Movie Details](https://raw.githubusercontent.com/Jalal-Althahab/PowerFilm/main/screenshots/movie-details.png) | ![Mobile View](https://raw.githubusercontent.com/Jalal-Althahab/PowerFilm/main/screenshots/home-mobile.png) |


## 🛠️ Tech Stack

### **Frontend Framework**
- ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) Angular 17
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) TypeScript 5.0
- ![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white) RxJS 7.8

### **Styling & UI**
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) Custom CSS with CSS Variables
- ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white) Poppins Font Family
- ![Ionic Icons](https://img.shields.io/badge/Ionic%20Icons-3880FF?style=for-the-badge&logo=ionic&logoColor=white) Ionicons

### **Development Tools**
- ![Angular CLI](https://img.shields.io/badge/Angular_CLI-DD0031?style=for-the-badge&logo=angular&logoColor=white) Angular CLI
- ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) Git & GitHub
- ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) npm Package Manager

### **Deployment**
- ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black) Firebase Hosting

## 💻 Installation

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Angular CLI 17.x

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jalal-Althahab/PowerFilm.git
   cd PowerFilm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Serve the application**
   ```bash
   ng serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200`

### Development Commands

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng lint` | Run code linting |

### Deployment
To deploy to Firebase (like the live demo):
```bash
ng build --configuration production
firebase deploy
```

## 📁 Project Structure

```
PowerFilm/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navigation header with responsive menu
│   │   │   ├── footer/          # Footer with links and social media
│   │   ├── pages/
│   │   │   ├── home/           # Homepage with all movie sections
│   │   │   └── movie-details/  # Movie details page with trailer
│   │   ├── video-player/    # YouTube video player modal component
│   │   ├── services/
│   │   │   └── movie.service.ts # Movie data management service
│   │   ├── app.component.ts    # Root component with scroll handling
│   │   ├── app.routes.ts       # Application routing configuration
│   │   └── app.config.ts       # App configuration
│   ├── assets/
│   │   └── images/             # Movie posters, logos, and backgrounds
│   ├── styles.css              # Global styles and CSS variables
│   └── index.html              # Main HTML file with meta tags
├── angular.json                # Angular workspace configuration
├── package.json               # Dependencies and scripts
├── README.md                  # Documentation
├── firebase.json              # Firebase deployment configuration
└── tsconfig.json              # TypeScript configuration
```

## 🔌 API Integration

### Current Implementation
- **Static Data Service**: Movie information managed in `movie.service.ts`
- **YouTube Embed API**: Trailer integration via iframe embedding
- **Web Share API**: Native sharing functionality when available
- **Clipboard API**: Fallback sharing via copy to clipboard

### Movie Service Example
```typescript
// Example movie data structure
interface Movie {
  id: number;
  title: string;
  year: string;
  quality: string;
  duration: string;
  rating: string;
  image: string;
  description: string;
  genres: string[];
  ageRating: string;
  trailerId: string; // YouTube ID
}

// Example movie entry
{
  id: 5,
  title: 'The Dark Knight',
  year: '2008',
  quality: '4K',
  duration: '152 min',
  rating: '9.0',
  image: 'movie-1.png',
  description: 'When the menace known as the Joker wreaks havoc...',
  genres: ['Action', 'Crime', 'Drama'],
  ageRating: 'PG 13',
  trailerId: 'EXeTwQWrcwY'
}
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
 
   git checkout -b feature/AmazingFeature

4. **Commit your Changes**

   git commit -m 'Add some AmazingFeature'

5. **Push to the Branch**

   git push origin feature/AmazingFeature
 
6. **Open a Pull Request**

### Development Guidelines
- Follow Angular Style Guide
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Test on multiple screen sizes

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the **MIT License**.  
See the [`LICENSE`](LICENSE) file in the repository root for the full text.

**Permissions:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

**Conditions:**
- © Include original copyright and license notice

## 👤 Contact

**Jalal Althahab** - [@Jalal-Althahab](https://github.com/Jalal-Althahab)

- GitHub: [https://github.com/Jalal-Althahab](https://github.com/Jalal-Althahab)
- Project Link: [https://github.com/Jalal-Althahab/PowerFilm](https://github.com/Jalal-Althahab/PowerFilm)
- Live Demo: [https://power-film.web.app](https://power-film.web.app)

### ⭐ Support the Project
If you find this project useful, please give it a star! ⭐

[![Star this repo](https://img.shields.io/badge/⭐_Star_this_repo-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jalal-Althahab/PowerFilm)

## 🙏 Acknowledgments

- [Angular Team](https://angular.io/) - For the amazing framework
- [Ionic Icons](https://ionic.io/ionicons) - Beautiful icon set
- [Google Fonts](https://fonts.google.com/) - Poppins font family
- [Firebase](https://firebase.google.com/) - Free hosting and deployment
- Movie data inspiration from various streaming platforms
- All contributors and users of this project

---
<div align="center">

**Like what you see? Give the repo a star to show your support!**

[![Star on GitHub](https://img.shields.io/badge/⭐_Star_PowerFilm_on_GitHub-black?style=for-the-badge&logo=github)](https://github.com/Jalal-Althahab/PowerFilm)

*Built with ❤️ using Angular 17*
</div>




