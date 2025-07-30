import { useState } from "react";
import { Wand2, Loader2, Sparkles, ArrowRight, Camera, Lightbulb, RectangleHorizontal, RectangleVertical, Square } from "lucide-react"

type AspectRatio = "2:3" | "3:2" | "1:1";

export default function Create(){
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [isDropDownOpen,setIsDropDownOpen]=useState<boolean>(false);
    const [aspectRatio, setAspectRatio]=useState<AspectRatio>("2:3");

    const handleGenerate = async () => {
      if (!prompt.trim()) return;
        
      setIsGenerating(true);
      // Simulate API call
      setTimeout(() => {
      //   const newThumbnail = {
      //     id: Date.now().toString(),
      //     prompt,
      //     imageUrl: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?w=400&h=300&fit=crop`,
      //     createdAt: new Date().toISOString().split('T')[0],
      //     isLiked: false,
      //     downloads: 0
      //   };
      //   setGeneratedThumbnails(prev => [newThumbnail, ...prev]);
        setIsGenerating(false);
        setPrompt("");
      }, 3000);
    };

    const suggestions = [
      "Tech startup CEO presenting to investors",
      "Gaming review of the latest AAA title",
      "Cooking tutorial for homemade pasta",
      "Fitness transformation journey",
    ];

    const handelAspectRatioChange = (ratio:AspectRatio)=>{
        setIsDropDownOpen(!isDropDownOpen);
        setAspectRatio(ratio);
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="w-full mx-auto py-16 px-4 sm:px-8 md:px-16 lg:px-48">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-2 text-gray-700 dark:text-gray-200">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Wand2 className="h-8 w-8 text-sky-500" />
                            <span className="text-4xl font-bold">Generate Your Thumbnail</span>
                        </div>
                        <p className="font-medium max-w-3xl mx-auto">
                            Describe your video content and let our AI create the perfect thumbnail to maximize your views
                        </p>
                    </div>

                    {/* Input Section */}
                    <div className="space-y-4">
                        <div className="relative">
                            <textarea
                                placeholder="Describe your video... (e.g., 'A tech reviewer unboxing the new iPhone, excited expression, modern setup with LED lights')"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                className="flex min-h-42 w-full rounded-md border-2 border-gray-200 bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors"
                                disabled={isGenerating}
                                maxLength={500}
                            />
                            <div className="absolute bottom-3 left-3">
                                <div className={`flex flex-col items-center text-md font-semibold text-gray-700 dark:text-gray-200 ${isDropDownOpen?"bg-gray-100 dark:bg-gray-700":"bg-sky-300 dark:bg-sky-500"} rounded-lg overflow-hidden`}>
                                        {(aspectRatio==="3:2" || isDropDownOpen) && (<button
                                        onClick={()=>handelAspectRatioChange("3:2")}
                                        className={`w-full inline-flex items-center gap-2 px-2.5 py-0.5 rounded-t-lg hover:bg-gray-200 hover:dark:bg-gray-600
                                            ${aspectRatio/*==="3:2" && "bg-sky-500"*/}
                                            `}
                                    >
                                        <RectangleHorizontal className="w-5 h-5" />
                                        3:2
                                    </button>)}
                                    {(aspectRatio==="2:3" || isDropDownOpen) && (<button
                                        onClick={()=>handelAspectRatioChange("2:3")}
                                        className={`w-full inline-flex items-center gap-2 px-2.5 py-0.5 hover:bg-gray-200 hover:dark:bg-gray-600
                                            ${aspectRatio/*==="2:3" && "bg-sky-500"*/}
                                            `}
                                    >
                                        <RectangleVertical className="w-5 h-5 " />
                                        2:3
                                    </button>)}
                                    {(aspectRatio==="1:1" || isDropDownOpen) && (<button
                                        onClick={()=>handelAspectRatioChange("1:1")}
                                        className={`w-full inline-flex items-center gap-2 px-2.5 py-0.5 rounded-b-lg hover:bg-gray-200 hover:dark:bg-gray-600
                                            ${aspectRatio/*==="1:1" && "bg-sky-500"*/}
                                            `}
                                    >
                                        <Square className="w-5 h-5" />
                                        1:1
                                    </button>)}
                                </div>
                            </div>
                            <div className="absolute bottom-3 right-3 flex items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 text-xs font-semibold text-gray-700 dark:text-gray-200">
                                    {prompt.length}/500
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleGenerate}
                                disabled={!prompt.trim() || isGenerating}
                                className="flex-1 inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-md text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-sky-600 to-sky-400 hover:from-sky-400 hover:to-sky-600 text-white h-12 px-8 py-3"
                            >
                                {isGenerating ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Generating Amazing Thumbnail...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="h-5 w-5" />
                                        Generate Thumbnail
                                        <ArrowRight className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                            <button
                                disabled={isGenerating}
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm h-12 px-8 py-3"
                            >
                                <Camera className="h-4 w-4" />
                                Upload Image
                            </button>
                        </div>
                    </div>

                    {/* Quick Suggestions */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-sky-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Try these ideas:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {suggestions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    onClick={() => setPrompt(suggestion)}
                                    disabled={isGenerating}
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-sky-500 hover:text-white h-9 px-4 py-2 text-xs"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Loading Animation */}
                    {isGenerating && (
                        <div className="animate-fade-in">
                            <div className="rounded-lg border bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm p-6 border-sky-500">
                                <div className="flex items-center justify-center space-x-3">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                    <span className="text-sm text-gray-700 dark:text-gray-200">
                                        Our AI is crafting your perfect thumbnail...
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}