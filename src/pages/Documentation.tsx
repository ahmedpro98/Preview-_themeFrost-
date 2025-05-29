import { useState } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DocsSidebar } from "@/components/DocsSidebar";
import Header from "@/components/Header";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("basic");

  const renderContent = () => {
    switch (activeSection) {
      case "basic":
        return (
          <div className="content-group">
            <div className="content-block">
              <h1 className="hierarchy-1 mb-6">Basic Documentation</h1>
              <p className="hierarchy-4 text-lg mb-8 max-w-3xl">
                Comprehensive guide to get started with our template system. Learn the fundamentals and best practices.
              </p>
            </div>

            <div className="card-academic content-block">
              <h2 className="hierarchy-2 mb-4">Quick Start Guide</h2>
              <p className="hierarchy-4 mb-6">
                Follow these essential steps to begin using the template effectively.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="hierarchy-3 text-sm mb-1">Setup Environment</h3>
                    <p className="hierarchy-5 text-sm">Install dependencies and configure your development environment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="hierarchy-3 text-sm mb-1">Explore Components</h3>
                    <p className="hierarchy-5 text-sm">Familiarize yourself with available components and their usage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="hierarchy-3 text-sm mb-1">Start Building</h3>
                    <p className="hierarchy-5 text-sm">Begin creating your application using the template structure</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-academic content-block">
              <h2 className="hierarchy-2 mb-4">Core Features</h2>
              <div className="grid-academic-2">
                <div className="space-y-3">
                  <h3 className="hierarchy-3 text-base">Responsive Design</h3>
                  <p className="hierarchy-5 text-sm">Mobile-first approach ensuring optimal experience across all devices and screen sizes.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="hierarchy-3 text-base">Modern Components</h3>
                  <p className="hierarchy-5 text-sm">Pre-built components following current design standards and accessibility guidelines.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="hierarchy-3 text-base">Easy Integration</h3>
                  <p className="hierarchy-5 text-sm">Straightforward setup process with comprehensive documentation and practical examples.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="hierarchy-3 text-base">Performance Optimized</h3>
                  <p className="hierarchy-5 text-sm">Built for speed with minimal bundle size and efficient loading strategies.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "replacement":
        return (
          <div className="content-group">
            <div className="content-block">
              <h1 className="hierarchy-1 mb-6">Component Replacement</h1>
              <p className="hierarchy-4 text-lg mb-8 max-w-3xl">
                Learn how to replace and customize components while maintaining consistency and functionality.
              </p>
            </div>

            <div className="card-academic content-block">
              <h2 className="hierarchy-2 mb-4">Replacement Guidelines</h2>
              <p className="hierarchy-4 mb-6">
                Best practices for component replacement and customization.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                <h3 className="hierarchy-3 text-base mb-3">Essential Practices</h3>
                <ul className="space-y-3 hierarchy-5 text-sm">
                  <li className="flex items-start space-x-3">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Test components across different screen sizes and devices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Maintain accessibility standards (WCAG 2.1 compliance)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Preserve API structure for consistency when possible</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Document any breaking changes thoroughly</span>
                  </li>
                </ul>
              </div>

              <div className="card-academic-dark">
                <h3 className="hierarchy-3 text-base mb-3">Example Implementation</h3>
                <pre className="text-sm overflow-x-auto"><code>{`// Replace default button component
import { Button } from './components/ui/button'

// With custom implementation
import { CustomButton } from './components/custom/button'

// Usage remains consistent
<CustomButton variant="primary">
  Click here
</CustomButton>`}</code></pre>
              </div>
            </div>
          </div>
        );

      case "advanced":
        return (
          <div className="content-group">
            <div className="content-block">
              <h1 className="hierarchy-1 mb-6">Advanced Documentation</h1>
              <p className="hierarchy-4 text-lg mb-8 max-w-3xl">
                Advanced features, customization options, and complex integration scenarios for experienced developers.
              </p>
            </div>

            <div className="card-academic content-block">
              <h2 className="hierarchy-2 mb-4">Advanced Configuration</h2>
              <p className="hierarchy-4 mb-6">
                Configure advanced settings to unlock the full potential of the template system.
              </p>

              <div className="grid-academic-2">
                <div className="space-y-4">
                  <h3 className="hierarchy-3 text-base">Theme Customization</h3>
                  <p className="hierarchy-5 text-sm mb-4">
                    Customize colors, typography, and spacing to match your brand identity and design requirements.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <code className="text-sm hierarchy-5">
                      theme: &#123;<br />
                      &nbsp;&nbsp;colors: &#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;primary: '#1e293b',<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;secondary: '#64748b'<br />
                      &nbsp;&nbsp;&#125;<br />
                      &#125;
                    </code>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="hierarchy-3 text-base">Plugin System</h3>
                  <p className="hierarchy-5 text-sm mb-4">
                    Extend functionality with our comprehensive plugin architecture and ecosystem.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <code className="text-sm hierarchy-5">
                      plugins: [<br />
                      &nbsp;&nbsp;'@plugin/animations',<br />
                      &nbsp;&nbsp;'@plugin/forms',<br />
                      &nbsp;&nbsp;'@plugin/charts'<br />
                      ]
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-academic-dark content-block">
              <h2 className="hierarchy-2 text-base mb-4">Performance Optimization</h2>
              <p className="text-slate-300 text-sm mb-6">
                Advanced techniques to optimize your application's performance and user experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="hierarchy-3 text-sm mb-2">Code Splitting</h3>
                  <p className="text-xs text-slate-300">Reduce initial bundle size with dynamic imports and lazy loading</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="hierarchy-3 text-sm mb-2">Lazy Loading</h3>
                  <p className="text-xs text-slate-300">Load components only when needed to improve performance</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="hierarchy-3 text-sm mb-2">Caching Strategy</h3>
                  <p className="text-xs text-slate-300">Implement effective caching mechanisms for better UX</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SidebarProvider>
        <div className="flex w-full pt-20">
          <DocsSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <SidebarInset>
            <main className="container-academic py-8 lg:py-12">
              {renderContent()}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Documentation;
