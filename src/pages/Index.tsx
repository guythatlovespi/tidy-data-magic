
import React from 'react';
import Navbar from '@/components/Navbar';
import FileUpload from '@/components/FileUpload';
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <section className="space-y-8 mb-16 animate-fade-in">
            <div className="space-y-2 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                Data Transformation
              </div>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                Transform Messy Data into <span className="text-primary">Beautiful Structure</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Upload your unformatted files and instantly receive clean, well-structured data ready for analysis.
              </p>
            </div>
            
            <div className={cn(
              "glass rounded-xl p-6 md:p-8 max-w-3xl mx-auto",
              "border border-border shadow-sm"
            )}>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Eliminate Formatting Issues</h3>
                    <p className="text-muted-foreground">
                      Say goodbye to inconsistent spacing, misaligned columns, and broken structure in your documents and spreadsheets.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Get Detailed Improvement Logs</h3>
                    <p className="text-muted-foreground">
                      Receive personalized reports highlighting changes made and recommending better data practices for the future.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8a6 6 0 0 0-9-5 6 6 0 0 0-5 9A8 8 0 0 0 9 22a8 8 0 0 0 16-5 1 1 0 0 0-1-1h-6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6Z" />
                      <path d="M5 10a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Supports Multiple File Types</h3>
                    <p className="text-muted-foreground">
                      Works with Word documents (.doc, .docx), Excel spreadsheets (.xlsx), and text files (.txt).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section id="upload-section" className="mb-16">
            <div className="space-y-4 text-center mb-8 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-medium">Upload Your Files</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Select one or more files to process. You'll receive both the transformed files and detailed logs explaining all changes.
              </p>
            </div>
            
            <FileUpload />
          </section>
          
          <section className="text-center animate-fade-in">
            <p className="text-sm text-muted-foreground">
              Want to learn more about our data transformation process?
            </p>
            <a 
              href="/about"
              className="text-sm text-primary hover:underline transition-all mt-2 inline-block"
            >
              Visit our About page
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
