import { ExternalLink, WandSparkles, Heart } from "lucide-react";

export default function ThumbnailDetails() {
    // const image = {
    //     id: `img-1`,
    //     src: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k0fj0d1penjbcrvq62p9pjvs%2F1752868892_img_0.webp?st=2025-07-21T15%3A47%3A22Z&se=2025-07-27T16%3A47%3A22Z&sks=b&skt=2025-07-21T15%3A47%3A22Z&ske=2025-07-27T16%3A47%3A22Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=YoUjeqdmzqLmypOsbk4YLM3C3yjONJekVye0AOFSsi0%3D&az=oaivgprodscus',
    //     alt: `Image 1`,
    //     aspectRatio: '2:3',
    //     title: `Image title`,
    //     likes: 123,
    //     username: `user_1`
    // };
    // const image = {
    //     id: `img-1`,
    //     src: 'https://videos.openai.com/vg-assets/assets%2Ftask_01k0fhwm4qes4bgwcy46t3qvxx%2F1752868812_img_0.webp?st=2025-07-21T15%3A47%3A22Z&se=2025-07-27T16%3A47%3A22Z&sks=b&skt=2025-07-21T15%3A47%3A22Z&ske=2025-07-27T16%3A47%3A22Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=x4ibTvCdPT8yXyLmsCc6KIkaMed3UwibQNBL3KnQljo%3D&az=oaivgprodscus',
    //     alt: `Image 1`,
    //     aspectRatio: '3:2',
    //     title: `Image title`,
    //     likes: 123,
    //     username: `user_1`
    // };
    const image = {
        id: `img-1`,
        src: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jzv0qmwffpev34mhqvmrwd9m%2F1752179732_img_0.webp?st=2025-07-21T15%3A47%3A22Z&se=2025-07-27T16%3A47%3A22Z&sks=b&skt=2025-07-21T15%3A47%3A22Z&ske=2025-07-27T16%3A47%3A22Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=YqXL%2B2E%2F%2FXh%2FEToKY%2FoAPUl86wOWfymQC17aCqm5FCg%3D&az=oaivgprodscus',
        alt: `Image 1`,
        aspectRatio: '1:1',
        title: `Image title`,
        likes: 123,
        username: `user_1`
    };

    return (
        <div className="bg-white dark:bg-black lg:p-8 md:p-6 p-4 flex flex-col items-center">
            <div className="max-w-2xl flex-1 flex flex-col items-center">
                {/* Title & Date */}
                <div className="text-center mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{image.title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">19/07/2025</p>
                    </div>
                </div>
                {/* Thumbnail */}
                <div className="group relative overflow-hidden rounded-xl">
                    <div className={
                        image.aspectRatio === '2:3' ? "w-72 h-108" :
                        image.aspectRatio === '3:2' ? "w-162 h-108" :
                        "w-108 h-108"
                    }>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className={`${
                        image.aspectRatio === '2:3' ? "w-72 h-108" :
                        image.aspectRatio === '3:2' ? "w-162 h-108" :
                        "w-108 h-108"
                    } absolute rounded-xl inset-0 flex flex-col justify-end p-4`}>
                        <div className="flex justify-between items-center">
                            {image.username && (
                                <span className="text-white font-semibold text-sm bg-black/40 px-3 py-1 rounded-full">{image.username}</span>
                            )}
                            {image.likes !== undefined && (
                                <div className='flex items-center text-white font-semibold text-md space-x-3'>
                                    <span title="Open">
                                        <ExternalLink className="h-5 w-5" />
                                    </span>
                                    <span title="AI Generated">
                                        <WandSparkles className="h-5 w-5" />
                                    </span>
                                    <span className="flex items-center" title="Likes">
                                        <Heart className="h-5 w-5" fill="white" />
                                        <span className="ml-1">{image.likes}</span>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Prompt Section */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 mt-4">
                    <p className="text-gray-600 dark:text-gray-300 italic text-center">
                        here is the prompt used to generate this thumbnail
                    </p>
                </div>
            </div>
        </div>
    )
}