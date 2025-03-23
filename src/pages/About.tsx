
import React from 'react';
import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-16 animate-fade-in">
          <section className="space-y-4">
            <div className="space-y-2 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                About TidyData
              </div>
              <h1 className="text-4xl font-medium tracking-tight">Transforming Messy Data into Clarity</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our mission is to help you make sense of unstructured data, one file at a time.
              </p>
            </div>
          </section>
          
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight">Our Purpose</h2>
              <p className="leading-relaxed text-muted-foreground">
                TidyData was born from a common frustration: the countless hours wasted trying to make sense of poorly formatted data. Whether it's inconsistent spreadsheets, unstructured text files, or documents with formatting issues, messy data slows down analysis and decision-making.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We believe that everyone deserves clean, well-structured data that's easy to work with. Our tool automates the tedious process of cleaning and standardizing data, allowing you to focus on what matters most: extracting valuable insights.
              </p>
            </section>
            
            <div className="border-t border-border my-6"></div>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className={cn(
                  "rounded-xl p-6 transition-all duration-500",
                  "bg-gradient-to-b from-secondary/50 to-secondary border border-border"
                )}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="text-lg font-medium">1</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Upload</h3>
                  <p className="text-sm text-muted-foreground">
                    Simply upload your files—we support .doc, .docx, .xlsx, and .txt formats.
                  </p>
                </div>
                
                <div className={cn(
                  "rounded-xl p-6 transition-all duration-500",
                  "bg-gradient-to-b from-secondary/50 to-secondary border border-border"
                )}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="text-lg font-medium">2</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Our algorithms analyze your data, identify issues, and apply corrections to improve structure.
                  </p>
                </div>
                
                <div className={cn(
                  "rounded-xl p-6 transition-all duration-500",
                  "bg-gradient-to-b from-secondary/50 to-secondary border border-border"
                )}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <span className="text-lg font-medium">3</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Download</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive your processed files along with detailed logs explaining changes and suggestions.
                  </p>
                </div>
              </div>
            </section>
            
            <div className="border-t border-border my-6"></div>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight">Our Philosophy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Simplicity</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of simplicity. Clean data should be accessible to everyone, not just data scientists. Our interface and outputs are designed to be intuitive and straightforward.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Transparency</h3>
                  <p className="text-muted-foreground">
                    Every change we make to your data is documented. Our detailed logs ensure you understand exactly what happened and why, giving you complete confidence in the results.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Education</h3>
                  <p className="text-muted-foreground">
                    Beyond just fixing your data, we aim to help you improve your data practices. Our suggestions and tips are designed to help you create better-structured data from the start.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Privacy</h3>
                  <p className="text-muted-foreground">
                    Your data is processed securely in your browser. We don't store your files or their contents on our servers, ensuring your sensitive information remains private.
                  </p>
                </div>
              </div>
            </section>
            
            <div className="border-t border-border my-6"></div>
            
            <section className="text-center">
              <p className="text-muted-foreground">
                Ready to transform your data? Head back to the homepage and start uploading your files.
              </p>
              <a 
                href="/" 
                className="button-hover inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg shadow-sm"
              >
                Get Started
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
