import { useState, useRef, useEffect, ReactNode } from 'react';

interface LazyContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function LazyContent({ children, className = '', delay = 300 }: LazyContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsLoaded(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={contentRef} className={className}>
      {isVisible && !isLoaded && (
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-[#6B8E23] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 text-sm">Loading content...</p>
          </div>
        </div>
      )}
      {isLoaded && (
        <div className="animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}