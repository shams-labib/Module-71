import React from "react";

const FeedbackCard = ({ item }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      {/* Date */}
      <p className="text-xs text-gray-500 mb-2">
        {new Date(item.date).toLocaleDateString()}
      </p>

      {/* Message */}
      <p className="text-gray-800 font-medium mb-4">{item.massage}</p>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          Update
        </button>
        <button className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
