import QuoteApp from "../assets/project/quotesapp.jpg";
import WeatherApp from "../assets/project/3217eed6c29d48178481d11a1249c5a8.avif";
import CalendarApp from "../assets/project/onecalendar.jpg";

// -------------------- APP LINKS --------------------
export const APP_DATA = {
  INSTAGRAM_URL: "https://www.instagram.com/indisputably59/",
  TIKTOK_URL: "https://www.tiktok.com/@b.ngz05?lang=vi-VN",
  GITHUB_URL: "https://github.com/Baonguyenkhnch",
  FACEBOOK_URL: "https://www.facebook.com/bao.nguyen.380729/?locale=vi_VN"
};

// -------------------- PROJECTS --------------------

export const PROJECTS = [
  {
    id: "quotes",
    imgPath: QuoteApp,
    githubLink: "https://github.com/Baonguyenkhnch/quoteapp",
    demoLink: "https://quoteapp-jet.vercel.app/"
  },
  {
    id: "weather",
    imgPath: WeatherApp,
    githubLink: "https://github.com/Baonguyenkhnch/weatherapp",
    demoLink: "https://weatherapp-ruby-gamma.vercel.app/"
  },
  {
    id: "calendar",
    imgPath: CalendarApp,
    githubLink: "https://github.com/Baonguyenkhnch/calender-app",
    demoLink: "https://calender-app-git-main-baonguyenkhnchs-projects.vercel.app/"
  }
];

// -------------------- EXPERIENCES --------------------
export const EXPERIENCES = [
  {
    id: 1,
    title: { vi: "Lập Trình Giao diện", en: "Front-end Developer" },
    company: { vi: "Công ty UWAY.", en: "UWAY Company." },
    duration: { vi: "Tháng 9/2025 - Hiện tại", en: "Sep 2025 - Present" }
  },
  {
    id: 2,
    title: { vi: "Dự án tự làm", en: "Self Employed" },
    company: {
      vi: "Học kiến thức mới mỗi ngày",
      en: "Code and build something every day."
    },
    duration: { vi: "Tháng 2/2025 - Tháng 7/2025", en: "Feb 2025 - Jul 2025" }
  },
  {
    id: 3,
    title: { vi: "Dự án tự làm", en: "Self Employed" },
    company: {
      vi: "Học kiến thức mới mỗi ngày",
      en: "Code and build something every day."
    },
    duration: { vi: "Tháng 9/2024 - Tháng 1/2025", en: "Sep 2024 - Jan 2025" }
  }
];

// -------------------- SKILLS --------------------
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "AWS",
  "Bootstrap",
  "Docker",
  "Go",
  "Figma",
  "Firebase",
  "MaterialUI",
  "Nginx",
  "Strapi"
];
