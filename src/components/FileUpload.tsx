
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { processFiles } from '@/utils/fileProcessor';
import ProcessingAnimation from './ProcessingAnimation';
import { toast } from 'sonner';

const acceptedFileTypes = '.doc,.docx,.xlsx,.txt';

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles(prevFiles => [...prevFiles, ...fileArray]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      const fileArray = Array.from(e.dataTransfer.files).filter(file => {
        const fileType = file.name.split('.').pop()?.toLowerCase();
        return ['doc', 'docx', 'xlsx', 'txt'].includes(fileType || '');
      });
      
      if (fileArray.length !== e.dataTransfer.files.length) {
        toast("Some files were skipped. Only .doc, .docx, .xlsx, and .txt files are supported.");
      }
      
      setFiles(prevFiles => [...prevFiles, ...fileArray]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleProcessFiles = async () => {
    if (files.length === 0) {
      toast("Please select at least one file to process.");
      return;
    }

    setIsProcessing(true);
    
    try {
      await processFiles(files);
      toast.success("Files processed successfully!");
    } catch (error) {
      toast.error("An error occurred while processing the files.");
      console.error(error);
    } finally {
      setIsProcessing(false);
      setFiles([]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-fade-in">
      <ProcessingAnimation isProcessing={isProcessing} />
      
      <div 
        className={cn(
          "border-2 border-dashed rounded-xl p-8 transition-all duration-300 ease-in-out",
          isDragging ? "border-primary bg-primary/5" : "border-border",
          "relative overflow-hidden"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          multiple
          accept={acceptedFileTypes}
          onChange={handleFileChange}
          className="hidden"
        />
        
        <div className="flex flex-col items-center justify-center space-y-4 py-6">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-medium">Drop your files here or</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Only .doc, .docx, .xlsx, and .txt files are supported
            </p>
          </div>
          
          <button
            onClick={handleButtonClick}
            className="button-hover px-6 py-2 bg-primary text-primary-foreground rounded-lg shadow-sm"
          >
            Select Files
          </button>
        </div>
      </div>
      
      {files.length > 0 && (
        <div className="space-y-4 animate-slide-up">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Selected Files ({files.length})</h3>
            <button
              onClick={() => setFiles([])}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Clear All
            </button>
          </div>
          
          <div className="space-y-2">
            {files.map((file, index) => (
              <div 
                key={`${file.name}-${index}`}
                className="glass rounded-lg p-3 flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium truncate max-w-[200px] md:max-w-xs">
                      {file.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          <button
            onClick={handleProcessFiles}
            className="button-hover w-full py-3 bg-primary text-primary-foreground rounded-lg shadow-sm font-medium"
          >
            Process Files
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
