import { useState, useEffect, useRef } from "react";
import { MoreVertical, Shredder, RotateCcw }from "lucide-react"

const images = Array.from({ length: 33 }, (_, i) => {
  const aspectRatios = ['2:3', '1:1', '3:2'];
  const urls = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",      // 2:3
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",    // 1:1
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"    // 3:2
  ];
  const idx = i % 3;
return {
    id: `img-${i}`,
    src: urls[idx],
    alt: `Image ${i + 1}`,
    aspectRatio: aspectRatios[idx] as '2:3' | '1:1' | '3:2',
    title: `Image ${i + 1}`,
    likes: Math.floor(Math.random() * 100),
    username: `user${i + 1}`,
    uploadDate: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0] // random date in last 30 days
};
});

export default function Uploads() {
    const [showDropdown, setShowDropdown] = useState<string | null>();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setShowDropdown(null);
            }
        }
        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]);

    // Group images by uploadDate
    const groupedImages: { [date: string]: typeof images } = {};
    images.forEach(img => {
        if (!groupedImages[img.uploadDate]) {
            groupedImages[img.uploadDate] = [];
        }
        groupedImages[img.uploadDate].push(img);
    });

    // Sort dates descending
    const sortedDates = Object.keys(groupedImages).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

    return (
        <div className="w-full lg:p-8 md:p-6 p-4">
            {sortedDates.map(date => (
                <div key={date} className="mb-8">
                    <h3 className="font-bold mb-4 text-gray-700 dark:text-gray-200">
                        {new Date(date).toLocaleDateString('en-GB')}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {groupedImages[date].map(image => (
                            <div key={image.id} className="group relative overflow-hidden">
                                <div className="w-64 h-64">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover rounded-sm"
                                    />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-start p-2">
                                    <div className="flex justify-end items-center">
                                        <span className="flex items-center text-gray-700 dark:text-gray-200 p-2">
                                            <div className="relative" ref={dropdownRef}>
                                                <button
                                                    onClick={() =>
                                                        showDropdown ? setShowDropdown(null) : setShowDropdown(image.id)
                                                    }
                                                    className="p-2 dark:text-gray-100 text-gray-700 dark:bg-gray-700 bg-gray-200 rounded-full"
                                                >
                                                    <MoreVertical className="h-4 w-4" />
                                                </button>
                                                {showDropdown === image.id && (
                                                    <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                                                        <button 
                                                            className="w-full group flex items-center justify-start gap-2 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-t-lg"
                                                            onClick={()=>{}}//FIXME:
                                                        >
                                                            <RotateCcw className="h-4 w-4" />
                                                            Restore
                                                        </button>
                                                        <button 
                                                            className="w-full group flex items-center justify-start gap-2 px-3 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 text-red-600 rounded-b-lg"
                                                            onClick={()=>{}}//FIXME:
                                                        >
                                                            <Shredder className="h-4 w-4" />
                                                            Delete Forever
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}