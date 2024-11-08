import config from '../config/config'
import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageDialog } from '../components/ui/dialog';
import Shedule from '../components/shedule';

export default function NewBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog open/close
  const [isPublish, setIsPublish] = useState(false);
  const [imageUrl, setImageUrl] = useState(""); // Temporary state to store URL input
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState('');




  const addImage = () => {
    if (imageUrl) {
      // Insert image at current cursor position in the content
      setContent(content + `<img src="${imageUrl}" alt="Blog Visual" class="mt-4 w-full h-auto rounded" />`);
      setImageUrl(""); // Clear the URL input
      setIsDialogOpen(false); // Close the dialog
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-screen-xl bg-white rounded-lg shadow-lg p-6 space-y-4">
        {!isPreview ? (
          <>
            {/* Title Input */}
            <input
              type="text"
              placeholder="Enter Title..."
              className="w-full border-b-2 border-gray-300 p-3 text-2xl font-semibold outline-none focus:border-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Blog Image..."
              className="w-full border-b-2 border-gray-300 p-3 text-2xl font-semibold outline-none focus:border-black"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Blog description..."
              className="w-full border-b-2 border-gray-300 p-3 text-2xl font-semibold outline-none focus:border-black"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            {/* Text Editor */}
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Write your story..."
              className="h-64 border-t border-gray-200 focus:ring-0 focus:border-black"
            />

            {/* Add Image Button */}
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              style={{ 'marginTop': '3rem' }}
            >
              Add Image
            </button>


            {/* Actions */}
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => setIsPreview(!isPreview)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700"
              >
                Preview
              </button>
            </div>
          </>
        ) : (
          <div className="prose prose-lg max-w-none w-full bg-gray-100 p-5 rounded-lg">
            <h1 className="text-3xl font-semibold">{title}</h1>
            {/* Display Content in Preview */}
            <div dangerouslySetInnerHTML={{ __html: content }} />


            <div className='w-full flex items-center justify-between'>
              <button
                onClick={() => setIsPreview(!isPreview)}
                className="mt-5 bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700"
              >
                Edit
              </button>
              <button
                onClick={() => setIsPublish(true)}
                className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700"
              >
                Publish
              </button>
            </div>
          </div>

        )}
      </div>

      {/* Image URL Dialog */}
      {isDialogOpen && (
        <ImageDialog
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          setIsDialogOpen={setIsDialogOpen}
          addImage={addImage}
        />
      )}

      {isPublish && (
        <Shedule setIsPublish={setIsPublish} content={content} title={title} image={image} desc={desc} />
      )}
    </div>
  );
}

