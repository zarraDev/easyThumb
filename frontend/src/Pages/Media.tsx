import { Folder, CirclePlus } from "lucide-react";
import { useState } from "react";

interface FolderData {
  id: string;
  title: string;
  cover?: string;
  totalThumbs: number;
  createdAt: string;
}

export default function Media() {
  const [folders, setFolders] = useState<FolderData[]>([
    {
      id: "1",
      title: "All Thumbs",
      totalThumbs: 32,
      createdAt: "2025-07-01",
      cover: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    },
    {
      id: "2",
      title: "YouTube Shorts",
      totalThumbs: 12,
      createdAt: "2025-07-10",
      cover: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    },
    {
      id: "3",
      title: "Tik tok Shorts",
      totalThumbs: 19,
      createdAt: "2025-03-11",
      cover: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    },
  ]);

  const [adding, setAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleAddFolder = () => {
    if (!newTitle.trim()) {
      setAdding(false);
      return;
    }

    const newFolder: FolderData = {
      id: Date.now().toString(),
      title: newTitle,
      totalThumbs: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setFolders((prev) => [...prev, newFolder]);
    setNewTitle("");
    setAdding(false);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-700 dark:text-gray-200">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-md hover:dark:shadow-gray-800 transition cursor-pointer p-4"
          >
            <div className="flex items-center justify-start">
              <Folder size={20} className="text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-sky-500">{folder.title}</h2>
            </div>
            <p className="text-md text-gray-500">
              {folder.totalThumbs} thumbnails
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Created: {folder.createdAt}
            </p>
          </div>
        ))}

        {adding ? (
          <div className="border-2 border-gray-200 dark:border-gray-800 rounded-xl">
            <input
              type="text"
              autoFocus
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onBlur={handleAddFolder}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddFolder();
              }}
              placeholder="Folder name..."
              className="w-full h-full p-4 text-center border rounded-xl bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-0"
            />
          </div>
        ) : (
          <div
            key="addFolder"
            onClick={() => setAdding(true)}
            className="border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-md hover:dark:shadow-gray-800 transition cursor-pointer p-4 flex items-center"
          >
            <div className="flex items-center mx-auto">
              <CirclePlus className="w-10 h-10 mr-4 text-gray-700 dark:text-gray-200" />
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Add new folder
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
