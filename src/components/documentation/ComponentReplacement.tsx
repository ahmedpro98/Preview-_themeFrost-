import { useState } from 'react';
import { componentsReplaceSteps } from '@/data/documentationData';
import DocumentationSidebar from './DocumentationSidebar';
import NavigationControls from './NavigationControls';
import LazyVideo from '@/components/LazyVideo';
import { FileText, Navigation, Menu, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const ComponentReplacement = () => {
  const [activeStep, setActiveStep] = useState(componentsReplaceSteps[0].id);
  const [currentDemoIndex, setCurrentDemoIndex] = useState(0);

  const currentStep = componentsReplaceSteps.find(step => step.id === activeStep) || componentsReplaceSteps[0];

  const nextDemo = () => {
    setCurrentDemoIndex(prev => (prev + 1) % currentStep.demoComponents.length);
  };
  const prevDemo = () => {
    setCurrentDemoIndex(prev => (prev - 1 + currentStep.demoComponents.length) % currentStep.demoComponents.length);
  };
  const handleStepChange = (stepId: string) => {
    setActiveStep(stepId);
    setCurrentDemoIndex(0);
  };
  const handleVideoUpload = (file: File) => {
    console.log('Video uploaded:', file.name);
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-8">
          {/* Mobile Header */}
          <div className="lg:hidden col-span-full">
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-4 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <currentStep.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-orange-600 text-xs font-semibold uppercase tracking-wider block">{currentStep.category}</span>
                  <h1 className="text-lg font-bold text-slate-800 leading-tight">{currentStep.title}</h1>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                {currentStep.description}
              </p>

              {/* Mobile Progress Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-slate-500">
                    خطوة {componentsReplaceSteps.findIndex(step => step.id === activeStep) + 1}  {componentsReplaceSteps.length}
                  </div>
                </div>
                <div className="flex gap-1">
                  {componentsReplaceSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${step.id === activeStep ? 'bg-orange-500 w-4' : 'bg-slate-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar - Sheet */}
          <div className="lg:hidden col-span-full mb-4">
            <Sheet>
              <SheetTrigger className="w-full bg-white border border-orange-100 rounded-xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <currentStep.icon className="w-5 h-5 text-orange-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-slate-800 text-sm truncate">explore more</div>
                    <div className="text-xs text-slate-500">anthor step</div>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[85vw] max-w-sm p-0">
                <div className="p-4 h-full overflow-y-auto">
                  <DocumentationSidebar
                    title="Component Design"
                    items={componentsReplaceSteps}
                    activeItem={activeStep}
                    onItemChange={handleStepChange}
                    gradientColors="bg-gradient-to-br from-orange-500 to-pink-600"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-4">
            <DocumentationSidebar
              title="Component Design"
              items={componentsReplaceSteps}
              activeItem={activeStep}
              onItemChange={handleStepChange}
              gradientColors="bg-gradient-to-br from-orange-500 to-pink-600"
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 col-span-full">
            <div className="rounded-xl shadow-lg border overflow-hidden bg-white border-orange-100">
              {/* Desktop Header */}
              <div className="hidden lg:block p-6 lg:p-8 text-white bg-gradient-to-r from-orange-500 to-pink-600">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                    <currentStep.icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-orange-100 text-xs font-medium uppercase tracking-wider block">{currentStep.category}</span>
                    <h2 className="text-2xl font-bold mt-1 text-slate-50 leading-tight">{currentStep.title}</h2>
                  </div>
                </div>
                <p className="text-base text-orange-50 leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
                {/* Component Demos Section */}
                {currentStep.demoComponents.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-800">Component preview</h3>
                      <div className="flex justify-center sm:justify-end">
                        <NavigationControls
                          currentIndex={currentDemoIndex}
                          totalItems={currentStep.demoComponents.length}
                          onPrevious={prevDemo}
                          onNext={nextDemo}
                          label="Demos"
                        />
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg border bg-gradient-to-br from-orange-50/80 to-pink-50/50 border-orange-100 p-4 sm:p-6">
                      <div className="text-center space-y-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 shadow-lg">
                          <currentStep.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold mb-2 text-slate-800">
                            {currentStep.demoComponents[currentDemoIndex]}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Installation Images Section */}
                {currentStep.installationImages.length > 0 && (
                  <div className="space-y-4">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800">Preview image</h3>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-orange-100 bg-white">
                      <img
                        src={currentStep.installationImages[currentDemoIndex] || currentStep.installationImages[0]}
                        alt={`Installation method for ${currentStep.demoComponents[currentDemoIndex]}`}
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* From/To Paths Section */}
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-4">file path</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="rounded-xl p-4 sm:p-5 border shadow-sm bg-gradient-to-br from-orange-50/50 to-transparent border-orange-100">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-600 shrink-0 mt-0.5 shadow-md">
                          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm sm:text-base font-semibold text-slate-800 mb-3"> From</h4>
                          <div className="bg-white rounded-lg border border-orange-100 p-3 sm:p-4 shadow-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-mono text-slate-700 break-all">/components/forms</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl p-4 sm:p-5 border shadow-sm bg-gradient-to-br from-pink-50/50 to-transparent border-orange-100">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 shrink-0 mt-0.5 shadow-md">
                          <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm sm:text-base font-semibold text-slate-800 mb-3"> To </h4>
                          <div className="bg-white rounded-lg border border-orange-100 p-3 sm:p-4 shadow-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-mono text-slate-700 break-all">/components/navigation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tutorial Video Section */}
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800">learn video</h3>
                  <div className="w-full">
                    <LazyVideo
                      key={`${activeStep}-${currentDemoIndex}`}
                      src={currentStep.videoUrl}
                      poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop"
                      title={`${currentStep.title} Tutorial`}
                      description={`تعلم كيفية تنفيذ ${currentStep.title.toLowerCase()} مع إرشادات خطوة بخطوة`}
                      onVideoUpload={handleVideoUpload}
                      className="w-full rounded-xl overflow-hidden shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentReplacement;