import React, { useState, useEffect } from 'react';
import { ExternalLink, WandSparkles, Heart } from "lucide-react";

export type ImageItem = {
  id: string;
  src: string;
  alt: string;
  aspectRatio: '3:2' | '2:3' | '1:1';
  title?: string;
  likes?: number;
  username?: string;
};

type ImageGalleryProps = {
  images: ImageItem[];
};


// Custom hook to get current breakpoint
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<'sm' | 'md' | 'lg'>('sm');

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth >= 1024) setBreakpoint('lg');
      else if (window.innerWidth >= 768) setBreakpoint('md');
      else setBreakpoint('sm');
    };
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};

// Helper to distribute images into columns for balanced heights
const distributeImages = (images: ImageItem[], nbrCol: number): ImageItem[][] => {
  const aspectRatioHeights: Record<ImageItem['aspectRatio'], number> = {
    '3:2': 2 / 3,
    '2:3': 3 / 2,
    '1:1': 1,
  };

  const columns: { images: ImageItem[]; height: number }[] = Array.from(
    { length: nbrCol },
    () => ({ images: [], height: 0 })
  );

  for (const img of images) {
    const estimatedHeight = aspectRatioHeights[img.aspectRatio];
    // Find the column with the smallest total height
    const targetColumn = columns.reduce((minCol, current) =>
      current.height < minCol.height ? current : minCol
    );
    targetColumn.images.push(img);
    targetColumn.height += estimatedHeight;
  }

  return columns.map(col => col.images);
};


const aspectRatioClass = (aspectRatio: ImageItem['aspectRatio']) => {
  switch (aspectRatio) {
    case '3:2':
      return 'aspect-[3/2]';
    case '2:3':
      return 'aspect-[2/3]';
    case '1:1':
      return 'aspect-square';
    default:
      return '';
  }
};

const FavoritesGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const breakpoint = useBreakpoint();
  const nbrCol = breakpoint === 'lg' ? 3 : breakpoint === 'md' ? 2 : 1;
  const columns = distributeImages(images, nbrCol);

  return (
    <div className="w-full flex gap-1">
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="flex-1 flex flex-col gap-1">
          {col.map(image => (
            <div key={image.id}>
              <div key={image.id} className="group relative overflow-hidden" >
                <div className={aspectRatioClass(image.aspectRatio)}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="flex justify-between items-center mt-2">
                    {image.username && (
                      <div>
                        <span className="text-white font-semibold text-sm">{image.username}</span>
                      </div>
                    )}
                        <div className='flex items-center text-white font-semibold text-md space-x-3'>
                            <span>
                              <ExternalLink className="h-4 w-4 mr-1" />
                            </span>
                            <span>
                              <WandSparkles className="h-4 w-4 mr-1" />
                            </span>
                            <span className="flex items-center">
                              <Heart className="h-4 w-4 mr-1 text-amber-300 text-shadow-2xs text-shadow-amber-300" fill="#ffd230" />
                            </span>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FavoritesGallery;