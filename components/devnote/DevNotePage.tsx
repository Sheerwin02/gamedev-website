import React, { useState, useEffect } from "react";
import DevNoteList from "./DevNoteList";
import { DevNote } from "./types";

const DevNotePage: React.FC = () => {
  const [devNotes, setDevNotes] = useState<DevNote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDevNotes = async () => {
    try {
      const response = await fetch("api/dev-notes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch dev notes");
      }

      const data = await response.json();
      setDevNotes(data);
    } catch (error: any) {
      setError("Error fetching dev notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchDevNotes();
      } catch (error) {
        setError("Error fetching dev notes. Please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-purple-400">
        Dev Notes
      </h1>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && <DevNoteList devNotes={devNotes} />}
    </div>
  );
};

export default DevNotePage;
