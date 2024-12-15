import React, { useState } from "react";

const AddListPage = () => {
  const [listName, setListName] = useState(""); // State for list name
  const [items, setItems] = useState([]); // State to store items in the list
  const [newItem, setNewItem] = useState(""); // State for input field

  // Handle adding an item to the list
  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]); // Add new item to the list
      setNewItem(""); // Clear input field
    }
  };

  // Handle deleting an item from the list
  const handleDeleteItem = (item) => {
    setItems(items.filter((i) => i !== item)); // Remove item from list
  };

  // Handle saving the list
  const handleSaveList = () => {
    if (listName && items.length > 0) {
      alert(`List "${listName}" saved!`); // This can be replaced with actual saving logic
    } else {
      alert("Please give your list a name and add some items.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-300 via-pink-300 to-blue-300 flex flex-col items-center justify-center py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-purple-900">Create Your List</h1>
        <p className="text-lg text-purple-800">Organize your items easily with LiSTiFY!</p>
      </div>

      {/* List Name */}
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Enter your list name"
          className="w-full p-4 text-xl rounded-lg border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
      </div>

      {/* Item Input Section */}
      <div className="flex w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Add item"
          className="w-full p-4 text-xl rounded-lg border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={handleAddItem}
          className="ml-4 px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Add Item
        </button>
      </div>

      {/* Display List */}
      <div className="w-full max-w-md mb-6 bg-white p-4 rounded-lg shadow-lg">
        <ul>
          {items.length === 0 ? (
            <li className="text-center text-purple-600">No items added yet.</li>
          ) : (
            items.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-2 border-b-2 border-purple-200">
                <span className="text-xl text-purple-800">{item}</span>
                <button
                  onClick={() => handleDeleteItem(item)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Save List Button */}
      <button
        onClick={handleSaveList}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Save List
      </button>
    </div>
  );
};

export default AddListPage;
