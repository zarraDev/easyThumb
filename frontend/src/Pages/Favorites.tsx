import FavoritesGallery from "../Components/FavoritesGallery";

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
    username: `user${i + 1}`
  };
});

export default function Favorites(){
    return(
        <div className="bg-white dark:bg-gray-950">
            <FavoritesGallery images={images} />
        </div>
    )
}