
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessingAnimationProps {
  isProcessing: boolean;
}

const ProcessingAnimation: React.FC<ProcessingAnimationProps> = ({ isProcessing }) => {
  if (!isProcessing) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="glass rounded-2xl p-8 max-w-md w-full flex flex-col items-center justify-center space-y-4 animate-slide-up">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-primary/30 border-b-primary/10 border-l-primary/50 animate-spin-slow"></div>
          <div className="absolute inset-2 rounded-full border-4 border-r-primary border-t-primary/30 border-l-primary/10 border-b-primary/50 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
        </div>
        
        <h3 className="text-xl font-medium text-center">Processing Your Data</h3>
        
        <div className="w-full space-y-3">
          <p className="text-center text-sm text-muted-foreground">Analyzing files and optimizing formatting...</p>
          
          <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
            <div className={cn(
              "h-full bg-primary rounded-full transition-all ease-in-out duration-300",
              "relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer"
            )} style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingAnimation;
