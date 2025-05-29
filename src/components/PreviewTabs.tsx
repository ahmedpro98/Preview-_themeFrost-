import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Home, Folder, Users, MessageSquare, Phone, Settings, Image, X } from "lucide-react";

interface TabContent {
  id: string;
  title: string;
  description: string;
  icon: any;
  images: string[];
}

const tabsData: TabContent[] = [
  {
    id: "homepage",
    title: "Home Page",
    description: "Main landing page with hero sections and modern design",
    icon: Home,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ]
  },
  {
    id: "projects",
    title: "Projects",
    description: "Showcase of work and portfolio items",
    icon: Folder,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ]
  },
  {
    id: "about",
    title: "About Us",
    description: "Company information and team details",
    icon: Users,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ]
  },
  {
    id: "testimonials",
    title: "Testimonials",
    description: "Customer reviews and testimonials",
    icon: MessageSquare,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ]
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with our team",
    icon: Phone,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ]
  },
  {
    id: "services",
    title: "Services",
    description: "Our professional services and offerings",
    icon: Settings,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ]
  },
  {
    id: "gallery",
    title: "Gallery",
    description: "Image gallery and visual content showcase",
    icon: Image,
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    ]
  }
];

const PreviewTabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const activeContent = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  const imagesPerSet = 4;
  const totalSets = Math.ceil(activeContent.images.length / imagesPerSet);
  const currentImages = activeContent.images.slice(
    currentImageSet * imagesPerSet,
    (currentImageSet + 1) * imagesPerSet
  );

  const nextImageSet = () => {
    setCurrentImageSet((prev) => (prev + 1) % totalSets);
  };

  const prevImageSet = () => {
    setCurrentImageSet((prev) => (prev - 1 + totalSets) % totalSets);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentImageSet(0);
  };

  const openImageZoom = (image: string) => {
    setZoomedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageZoom = () => {
    setZoomedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="pages" className="py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,0,0,0.02),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(0,0,0,0.01),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-gray-100/60 to-white/40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-white/40 to-gray-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full px-8 py-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-800 tracking-wide">Explore</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">Explore Pages</span>
            </h2>
          </div>

          <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto">
            <div className="xl:w-1/3 space-y-3 flex flex-col">
              {tabsData.map((tab, index) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`group relative overflow-hidden text-left transition-all duration-700 ease-out transform flex-1 min-h-[75px] ${activeTab === tab.id
                        ? 'scale-105 -translate-y-2'
                        : 'hover:scale-102 hover:-translate-y-1'
                      }`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    <div className={`relative w-full h-full p-5 rounded-2xl border-2 transition-all duration-700 backdrop-blur-sm ${activeTab === tab.id
                        ? 'bg-gradient-to-br from-white via-gray-50/90 to-white border-gray-400 shadow-2xl shadow-gray-200/60'
                        : 'bg-white/80 border-gray-200 hover:bg-white/95 hover:border-gray-300 hover:shadow-xl'
                      }`}>

                      {activeTab === tab.id && (
                        <>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-r-full animate-scale-in shadow-lg"></div>
                          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-gray-200/30 via-transparent to-gray-200/30 rounded-2xl animate-fade-in"></div>
                        </>
                      )}

                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`relative transition-all duration-700 ${activeTab === tab.id
                            ? 'transform rotate-6 scale-110'
                            : 'group-hover:scale-105 group-hover:rotate-3'
                          }`}>
                          <div className={`p-3 rounded-2xl transition-all duration-700 shadow-lg ${activeTab === tab.id
                              ? 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white shadow-xl shadow-gray-400/30'
                              : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 group-hover:from-gray-200 group-hover:to-gray-300'
                            }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>

                          {activeTab === tab.id && (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-2xl blur-lg animate-pulse"></div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold text-base transition-all duration-500 ${activeTab === tab.id
                              ? 'text-gray-900 transform translate-x-2'
                              : 'text-gray-800 group-hover:text-gray-900'
                            }`}>
                            {tab.title}
                          </h3>
                          <p className={`text-xs mt-1 transition-all duration-500 leading-relaxed ${activeTab === tab.id
                              ? 'text-gray-600 transform translate-x-2 opacity-100'
                              : 'text-gray-500 group-hover:text-gray-600 opacity-80'
                            }`}>
                            {tab.description}
                          </p>
                        </div>
                      </div>

                      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${activeTab === tab.id
                          ? 'bg-gradient-to-r from-gray-100/10 via-white/5 to-gray-100/10 opacity-100'
                          : 'bg-gradient-to-r from-gray-50/5 via-white/10 to-gray-50/5 opacity-0 group-hover:opacity-100'
                        }`}></div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Enhanced Main Content */}
            <div className="xl:w-2/3 flex flex-col">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 lg:p-6 border border-gray-200 shadow-xl shadow-gray-200/30 flex-1 flex flex-col">
                <div className="mb-5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg shadow-gray-300/30 transform hover:scale-110 transition-transform duration-300">
                      <activeContent.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 animate-fade-in">
                      {activeContent.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed font-medium animate-fade-in">
                    {activeContent.description}
                  </p>
                </div>

                {/* Enhanced Navigation */}
                {totalSets > 1 && (
                  <div className="flex items-center justify-between mb-5">
                    <Button
                      onClick={prevImageSet}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-white/95 border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400 font-bold px-4 py-2 hover:scale-105 transition-all duration-300 rounded-xl"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </Button>
                    <span className="text-sm font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 animate-gentle-bounce">
                      {currentImageSet + 1} of {totalSets}
                    </span>
                    <Button
                      onClick={nextImageSet}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-white/95 border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400 font-bold px-4 py-2 hover:scale-105 transition-all duration-300 rounded-xl"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                {/* Enhanced Image Grid with fixed smooth animations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                  {currentImages.map((image, index) => (
                    <div
                      key={`${currentImageSet}-${index}`}
                      className="group relative overflow-hidden rounded-2xl bg-white aspect-video shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in border border-gray-200 cursor-pointer transform hover:-translate-y-2"
                      style={{ animationDelay: `${index * 0.15}s` }}
                      onClick={() => openImageZoom(image)}
                    >
                      <img
                        src={image}
                        alt={`${activeContent.title} preview ${currentImageSet * imagesPerSet + index + 1}`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />

                      {/* Enhanced overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      {/* Enhanced zoom icon */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                        <div className="bg-white/95 backdrop-blur-md rounded-full p-2 shadow-xl border border-gray-200">
                          <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Image Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={closeImageZoom}
        >
          <div className="relative max-w-6xl max-h-[90vh] animate-scale-in">
            <img
              src={zoomedImage}
              alt="Zoomed preview"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={closeImageZoom}
              className="absolute top-6 right-6 bg-white/95 backdrop-blur-md text-gray-800 rounded-full p-4 hover:bg-white transition-all duration-300 shadow-2xl hover:scale-110 border border-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewTabs;
