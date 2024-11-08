import Shedule from "../shedule"
import { DateTime } from "./datatime"

export function ImageDialog({ imageUrl, setImageUrl, setIsDialogOpen, addImage }) {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-lg font-semibold mb-4">Add Image URL</h3>
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <div className="mt-4 flex justify-end space-x-3">
          <button
            onClick={() => setIsDialogOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={addImage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Image
          </button>
        </div>
      </div>
    </div>
  )
}

