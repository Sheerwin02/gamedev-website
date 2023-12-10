import React, { useState } from "react";
import DevNoteCard from "./DevNoteCard";
import { DevNote } from "./types";

interface DevNoteListProps {
  devNotes: DevNote[];
}

const DevNoteList: React.FC<DevNoteListProps> = ({ devNotes }) => {
  const [filteredDevNotes, setFilteredDevNotes] = useState<DevNote[]>(devNotes);
  const [filterKey, setFilterKey] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilter = () => {
    setLoading(true);

    setTimeout(() => {
      const filtered = filterDevNotes();
      setFilteredDevNotes(filtered);
      setLoading(false);
    }, 500); // Simulating a delay, replace with actual API call or other async logic
  };

  const filterDevNotes = () => {
    return devNotes.filter(
      (note) =>
        note[filterKey as keyof DevNote] &&
        String(note[filterKey as keyof DevNote])
          .toLowerCase()
          .includes(filterValue.toLowerCase())
    );
  };

  const clearFilter = () => {
    setFilterKey("");
    setFilterValue("");
    setFilteredDevNotes(devNotes);
  };

  // Specify the columns you want to include in the filter dropdown
  const filterOptions: string[] = [
    "title",
    "description",
    "category",
    "tags",
    "version",
  ];

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFilter();
        }}
        className="mb-4"
      >
        <div className="flex space-x-4">
          <div className="relative flex-shrink-0">
            <select
              className="border p-2 text-gray-800 bg-white border-gray-300 rounded-md focus:outline-none focus:border-blue-500 appearance-none"
              onChange={(e) => setFilterKey(e.target.value)}
              value={filterKey}
            >
              <option value="" disabled>
                Filter by...
              </option>
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M8 3l4 4 4-4m-4 14l-4-4-4 4" />
              </svg>
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter filter value"
            className="border p-2 text-gray-800 focus:outline-none focus:border-blue-500 flex-1"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 hover:bg-blue-600 transition duration-300 rounded-md disabled:opacity-50"
            disabled={!filterKey || loading}
          >
            {loading ? "Applying..." : "Apply Filter"}
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white p-2 hover:bg-gray-600 transition duration-300 rounded-md"
            onClick={clearFilter}
          >
            Clear Filter
          </button>
        </div>
      </form>

      {loading ? (
        <p className="text-gray-800">Applying filter...</p>
      ) : filteredDevNotes.length === 0 ? (
        <p className="text-gray-800">No results found.</p>
      ) : (
        filteredDevNotes.map((devNote) => (
          <DevNoteCard key={devNote.id} {...devNote} />
        ))
      )}
    </div>
  );
};

export default DevNoteList;
