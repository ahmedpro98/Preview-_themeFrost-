import { DocStep, AdvancedStep, ComponentReplaceStep } from "@/hooks/documentation";
import {
  Download, Palette, Type, Image, Globe, Languages, Search, Navigation,
  Home, MessageCircle, ArrowUp, CreditCard, Settings, Users, Info,
  FileText, Menu, Plus, Trash2, Layers, Smartphone, Heart, Briefcase,
  Building2, Phone, Edit, FolderPlus, FilePlus, Layout, ToggleLeft
} from "lucide-react";

export const basicSteps: DocStep[] = [
  {
    id: "installation",
    title: "Installation & Setup",
    description: "Get started by cloning the repository and installing dependencies with just a few commands",
    codeExamples: [
      {
        title: "Clone and Install",
        description: "Clone the project and install dependencies",
        code: `# Clone the repository
git clone https://github.com/yourproject/template.git

# Navigate to project directory
cd template

# Install dependencies
npm install

# Or using yarn
yarn install`,
        path: "terminal/"
      },
      {
        title: "Start Development",
        description: "Run the development server",
        code: `# Start development server
npm run dev

# Server will start at http://localhost:3000`,
        path: "terminal/"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
    ],
    icon: Download,
    category: "Setup",
    path: "project-root/"
  },
  {
    id: "customize-colors",
    title: "Customize colors",
    description: "Learn how to customize colors and color schemes throughout your website",
    codeExamples: [
      {
        title: "Tailwind Color Configuration",
        description: "Customize your color palette in tailwind.config.ts",
        code: `// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f0fdf4',
          500: '#22c55e',
          900: '#14532d',
        }
      }
    }
  }
}`,
        path: "tailwind.config.ts"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
    ],
    icon: Palette,
    category: "Design",
    path: "src/styles/"
  },
  {
    id: "customize-fonts",
    title: "Customize fonts",
    description: "Add and configure custom fonts to enhance your website's typography",
    codeExamples: [
      {
        title: "Google Fonts Integration",
        description: "Add Google Fonts to your project and configure in Tailwind",
        code: `<!-- index.html -->
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
}`,
        path: "index.html"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    ],
    icon: Type,
    category: "Typography",
    path: "src/styles/"
  },
  {
    id: "edit-texts",
    title: "Edit texts",
    description: "Modify and update text content throughout your website easily",
    codeExamples: [
      {
        title: "Component Text Updates",
        description: "Update text in React components",
        code: `// src/components/HeroSection.tsx
const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Your Custom Title Here</h1>
      <p>Your custom description text goes here</p>
      <button>Your Custom Button Text</button>
    </div>
  );
};`,
        path: "src/components/HeroSection.tsx"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    ],
    icon: Type,
    category: "Content",
    path: "src/components/"
  },
  {
    id: "default-language",
    title: "Default language",
    description: "Set up and configure the default language for your website",
    codeExamples: [
      {
        title: "Language Configuration",
        description: "Set default language in HTML and configure in your app",
        code: `<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Website</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

// src/config/language.ts
export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGE_CONFIG = {
  default: 'en',
  fallback: 'en',
  available: ['en', 'ar', 'fr', 'es']
};`,
        path: "index.html"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    ],
    icon: Globe,
    category: "Localization",
    path: "src/config/"
  },
  {
    id: "add-page",
    title: "Add page",
    description: "Learn how to create and add new pages to your React application with routing",
    codeExamples: [
      {
        title: "Create New Page Component",
        description: "Create a new page component with proper structure",
        code: `// src/pages/NewPage.tsx
import React from 'react';
import Header from '@/components/Header';

const NewPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">
            New Page Title
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Your page content goes here.
          </p>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            {/* Page content */}
            <h2 className="text-2xl font-semibold mb-4">Section Title</h2>
            <p className="text-slate-700">
              Add your page content and components here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;`,
        path: "src/pages/NewPage.tsx"
      },
      {
        title: "Add Route Configuration",
        description: "Add the new page to your application routes",
        code: `// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Documentation from '@/pages/Documentation';
import NewPage from '@/pages/NewPage';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;`,
        path: "src/App.tsx"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    ],
    icon: FilePlus,
    category: "Development",
    path: "src/pages/"
  },
  {
    id: "change-pictures",
    title: "Change pictures",
    description: "Replace and manage images throughout your website with ease",
    codeExamples: [
      {
        title: "Static and Dynamic Images",
        description: "Replace images in the public folder and use dynamic URLs",
        code: `// src/components/ImageComponent.tsx
const ImageComponent = () => {
  return (
    <img 
      src="/images/hero-image.jpg" 
      alt="Hero Image"
      className="w-full h-64 object-cover"
    />
  );
};

// src/components/Gallery.tsx
const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0",
    "https://images.unsplash.com/photo-1558655146-d09347e92766",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((src, index) => (
        <img key={index} src={src} alt={\`Gallery \${index + 1}\`} />
      ))}
    </div>
  );
};`,
        path: "src/components/ImageComponent.tsx"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop"
    ],
    icon: Image,
    category: "Media",
    path: "public/images/"
  },
  {
    id: "seo-control",
    title: "SEO control",
    description: "Optimize your website for search engines with proper SEO configuration",
    codeExamples: [
      {
        title: "Meta Tags Configuration",
        description: "Set up essential meta tags for SEO",
        code: `<!-- index.html -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Website Title - Keywords</title>
  <meta name="description" content="Your website description for search engines">
  <meta name="keywords" content="keyword1, keyword2, keyword3">
  <meta name="author" content="Your Name">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yourwebsite.com/">
  <meta property="og:title" content="Your Website Title">
  <meta property="og:description" content="Your website description">
  <meta property="og:image" content="https://yourwebsite.com/og-image.jpg">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yourwebsite.com/">
  <meta property="twitter:title" content="Your Website Title">
  <meta property="twitter:description" content="Your website description">
  <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg">
</head>`,
        path: "index.html"
      },
      {
        title: "SEO Component",
        description: "Create a reusable SEO component",
        code: `// src/components/SEOHead.tsx
import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ title, description, keywords, image, url }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEOHead;`,
        path: "src/components/SEOHead.tsx"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    ],
    icon: Search,
    category: "Optimization",
    path: "src/components/"
  }
];

export const componentsReplaceSteps: ComponentReplaceStep[] = [
  {
    id: "header-navbar",
    title: "Header (Navigation Bar)",
    description: "Customizable navigation bar with advanced design and functionality options",
    demoComponents: [
      "Demo Component One - Basic Header",
      "Demo Component Two - Modern Header with Logo",
      "Demo Component Three - Responsive Mobile Menu"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    icon: Navigation,
    category: "Navigation"
  },
  {
    id: "hero-section",
    title: "Hero Section",
    description: "Eye-catching hero sections with various layouts and call-to-action designs",
    demoComponents: [
      "Demo Component One - Minimal Hero",
      "Demo Component Two - Hero with Background Video",
      "Demo Component Three - Split Layout Hero"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    icon: Home,
    category: "Layout"
  },
  {
    id: "whatsapp-button",
    title: "WhatsApp Button",
    description: "Floating WhatsApp contact buttons with animations and customizable positions",
    demoComponents: [
      "Demo Component One - Simple WhatsApp Button",
      "Demo Component Two - Animated Floating Button",
      "Demo Component Three - Multi-contact Button"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521931961826-fe48677230a5?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    icon: MessageCircle,
    category: "Communication"
  },
  {
    id: "arrow-button",
    title: "Arrow Button",
    description: "Stylish arrow buttons for navigation and call-to-action with smooth animations",
    demoComponents: [
      "Demo Component One - Simple Arrow Button",
      "Demo Component Two - Animated Arrow Effect",
      "Demo Component Three - Multi-directional Arrows"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    icon: ArrowUp,
    category: "Interaction"
  },
  {
    id: "card-girly",
    title: "Card Girly",
    description: "Beautiful and elegant card components with feminine design touches and soft colors",
    demoComponents: [
      "Demo Component One - Soft Pink Card",
      "Demo Component Two - Floral Border Card",
      "Demo Component Three - Pastel Gradient Card"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1518414922567-57639bb5e2a4?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    icon: Heart,
    category: "Design"
  },
  {
    id: "services",
    title: "Services",
    description: "Professional service section layouts with icons, descriptions, and pricing options",
    demoComponents: [
      "Demo Component One - Grid Services Layout",
      "Demo Component Two - Card-based Services",
      "Demo Component Three - Tabbed Services View"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    icon: Briefcase,
    category: "Business"
  },
  {
    id: "partners",
    title: "Partners",
    description: "Partner and client showcase sections with logos, testimonials, and trust indicators",
    demoComponents: [
      "Demo Component One - Logo Grid Partners",
      "Demo Component Two - Sliding Partners Carousel",
      "Demo Component Three - Featured Partners Section"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    icon: Building2,
    category: "Business"
  },
  {
    id: "about-us",
    title: "About Us",
    description: "Engaging about us sections with team photos, company story, and mission statements",
    demoComponents: [
      "Demo Component One - Team Grid Layout",
      "Demo Component Two - Story Timeline",
      "Demo Component Three - Values & Mission"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    icon: Users,
    category: "Company"
  },
  {
    id: "footer",
    title: "Footer",
    description: "Comprehensive footer designs with links, contact info, and social media integration",
    demoComponents: [
      "Demo Component One - Multi-column Footer",
      "Demo Component Two - Minimal Footer",
      "Demo Component Three - Newsletter Signup Footer"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    icon: Info,
    category: "Layout"
  },
  {
    id: "pages-header",
    title: "Pages Header",
    description: "Dynamic page headers with breadcrumbs, titles, and background images for internal pages",
    demoComponents: [
      "Demo Component One - Simple Page Header",
      "Demo Component Two - Background Image Header",
      "Demo Component Three - Breadcrumb Navigation Header"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    icon: FileText,
    category: "Navigation"
  },
  {
    id: "default-language",
    title: "Default Language",
    description: "Language selection components with automatic detection and default language configuration",
    demoComponents: [
      "Demo Component One - Simple Language Selector",
      "Demo Component Two - Auto-detect Language",
      "Demo Component Three - Multi-language Support"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521931961826-fe48677230a5?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    icon: Globe,
    category: "Localization"
  },
  {
    id: "page-layout-language",
    title: "Page Layout Language",
    description: "Advanced page layout components with RTL/LTR support and language-specific styling",
    demoComponents: [
      "Demo Component One - RTL Layout Support",
      "Demo Component Two - Language-specific Fonts",
      "Demo Component Three - Dynamic Layout Direction"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    icon: Layout,
    category: "Localization"
  },
  {
    id: "switcher-button",
    title: "Switcher Button",
    description: "Interactive toggle and switcher buttons with smooth animations and multiple states",
    demoComponents: [
      "Demo Component One - Simple Toggle Switch",
      "Demo Component Two - Multi-state Switcher",
      "Demo Component Three - Animated Button Switcher"
    ],
    installationImages: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
    ],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    icon: ToggleLeft,
    category: "Interaction"
  }
];

export const advancedSteps: AdvancedStep[] = [
  {
    id: "edit-texts",
    title: "Edit Texts",
    description: "Learn how to edit and customize text content across your application with dynamic text management",
    code: `// components/EditableText.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EditableTextProps {
  initialText: string;
  onSave: (text: string) => void;
}

export const EditableText = ({ initialText, onSave }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleSave = () => {
    onSave(text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex gap-2 items-center">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1"
        />
        <Button size="sm" onClick={handleSave}>Save</Button>
        <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
          Cancel
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-2 items-center group">
      <span className="flex-1">{text}</span>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setIsEditing(true)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Edit
      </Button>
    </div>
  );
};`,
    path: "src/components/EditableText.tsx",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    videoPoster: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    icon: Edit,
    category: "Content"
  },
  {
    id: "change-images",
    title: "Change Images",
    description: "Master image management, uploading, and dynamic image replacement in your applications",
    code: `// components/ImageUploader.tsx
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  currentImage?: string;
  onImageChange: (file: File) => void;
  onImageRemove: () => void;
}

export const ImageUploader = ({ 
  currentImage, 
  onImageChange, 
  onImageRemove 
}: ImageUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files[0] && files[0].type.startsWith('image/')) {
      onImageChange(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      onImageChange(files[0]);
    }
  };

  return (
    <div className="space-y-4">
      {currentImage && (
        <div className="relative group">
          <img 
            src={currentImage} 
            alt="Current" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <Button
            size="sm"
            variant="destructive"
            onClick={onImageRemove}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
      
      <div
        className={\`border-2 border-dashed rounded-lg p-8 text-center transition-colors \${
          dragActive ? 'border-primary bg-primary/5' : 'border-gray-300'
        }\`}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
      >
        <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p className="text-lg font-medium mb-2">Upload New Image</p>
        <p className="text-gray-600 mb-4">Drag and drop or click to select</p>
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <Button onClick={() => fileInputRef.current?.click()}>
          Choose File
        </Button>
      </div>
    </div>
  );
};`,
    path: "src/components/ImageUploader.tsx",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoPoster: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
    icon: Image,
    category: "Media"
  },
  {
    id: "new-project-page",
    title: "New Project Page",
    description: "Create new project pages with dynamic routing and modern page layouts",
    code: `// pages/NewProject.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ProjectData {
  name: string;
  description: string;
  type: 'web' | 'mobile' | 'desktop';
  template: string;
}

export const NewProject = () => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState<ProjectData>({
    name: '',
    description: '',
    type: 'web',
    template: 'blank'
  });

  const handleCreate = async () => {
    try {
      // Create project logic here
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData)
      });
      
      if (response.ok) {
        const project = await response.json();
        navigate(\`/projects/\${project.id}\`);
      }
    } catch (error) {
      console.error('Failed to create project:', error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Create New Project</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Project Name</label>
            <Input
              value={projectData.name}
              onChange={(e) => setProjectData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter project name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <Textarea
              value={projectData.description}
              onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe your project"
              rows={4}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Project Type</label>
            <select
              value={projectData.type}
              onChange={(e) => setProjectData(prev => ({ ...prev, type: e.target.value as any }))}
              className="w-full p-2 border rounded-md"
            >
              <option value="web">Web Application</option>
              <option value="mobile">Mobile App</option>
              <option value="desktop">Desktop App</option>
            </select>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button onClick={handleCreate} className="flex-1">
              Create Project
            </Button>
            <Button variant="outline" onClick={() => navigate('/projects')}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};`,
    path: "src/pages/NewProject.tsx",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    videoPoster: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
    icon: Plus,
    category: "Pages"
  },
  {
    id: "delete-project-page",
    title: "Delete Project Page",
    description: "Implement safe project deletion with confirmation dialogs and data cleanup",
    code: `// components/DeleteProjectDialog.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';

interface DeleteProjectDialogProps {
  projectName: string;
  projectId: string;
  onDelete: (projectId: string) => Promise<void>;
}

export const DeleteProjectDialog = ({ 
  projectName, 
  projectId, 
  onDelete 
}: DeleteProjectDialogProps) => {
  const [confirmText, setConfirmText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const isConfirmValid = confirmText === projectName;

  const handleDelete = async () => {
    if (!isConfirmValid) return;
    
    setIsDeleting(true);
    try {
      await onDelete(projectId);
    } catch (error) {
      console.error('Failed to delete project:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <Trash2 className="w-4 h-4 mr-2" />
          Delete Project
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Project</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the project
            <strong className="text-destructive"> {projectName} </strong>
            and all of its data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="my-4">
          <label className="text-sm font-medium mb-2 block">
            Type <strong>{projectName}</strong> to confirm:
          </label>
          <Input
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder={projectName}
          />
        </div>
        
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={!isConfirmValid || isDeleting}
            className="bg-destructive hover:bg-destructive/90"
          >
            {isDeleting ? 'Deleting...' : 'Delete Project'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};`,
    path: "src/components/DeleteProjectDialog.tsx",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    videoPoster: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
    icon: Trash2,
    category: "Management"
  },
  {
    id: "compound-project",
    title: "Compound Project",
    description: "Build complex multi-component projects with advanced architecture patterns",
    code: `// components/CompoundProject.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectContextType {
  activeModule: string;
  setActiveModule: (module: string) => void;
  modules: ProjectModule[];
}

interface ProjectModule {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'error';
  dependencies: string[];
}

const ProjectContext = createContext<ProjectContextType | null>(null);

const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProject must be used within ProjectProvider');
  return context;
};

interface ProjectProviderProps {
  children: ReactNode;
  modules: ProjectModule[];
}

const ProjectProvider = ({ children, modules }: ProjectProviderProps) => {
  const [activeModule, setActiveModule] = useState(modules[0]?.id || '');

  return (
    <ProjectContext.Provider value={{ activeModule, setActiveModule, modules }}>
      {children}
    </ProjectContext.Provider>
  );
};

const ModuleSelector = () => {
  const { modules, activeModule, setActiveModule } = useProject();

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {modules.map((module) => (
        <Button
          key={module.id}
          variant={activeModule === module.id ? 'default' : 'outline'}
          onClick={() => setActiveModule(module.id)}
          className="flex items-center gap-2"
        >
          {module.name}
          <Badge 
            variant={module.status === 'active' ? 'default' : 'secondary'}
            className="ml-2"
          >
            {module.status}
          </Badge>
        </Button>
      ))}
    </div>
  );
};

const ModuleViewer = () => {
  const { modules, activeModule } = useProject();
  const currentModule = modules.find(m => m.id === activeModule);

  if (!currentModule) return <div>Module not found</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{currentModule.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Status</h4>
            <Badge variant={currentModule.status === 'active' ? 'default' : 'secondary'}>
              {currentModule.status}
            </Badge>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Dependencies</h4>
            <div className="flex flex-wrap gap-2">
              {currentModule.dependencies.map((dep) => (
                <Badge key={dep} variant="outline">{dep}</Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const CompoundProject = ({ modules }: { modules: ProjectModule[] }) => {
  return (
    <ProjectProvider modules={modules}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Compound Project Manager</h2>
        <ModuleSelector />
        <ModuleViewer />
      </div>
    </ProjectProvider>
  );
};`,
    path: "src/components/CompoundProject.tsx",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    videoPoster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    icon: FolderPlus,
    category: "Architecture"
  }
];
