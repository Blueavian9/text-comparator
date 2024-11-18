import React, { useState } from "react";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Text Comparator</h1>

      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <textarea
          className="border border-gray-300 rounded-lg p-3 w-full h-32"
          placeholder="Enter the first text here..."
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
        <textarea
          className="border border-gray-300 rounded-lg p-3 w-full h-32"
          placeholder="Enter the second text here..."
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
          onClick={() => alert("Comparison logic goes here!")}
        >
          Compare
        </button>
      </div>

      <div className="mt-6 w-full max-w-3xl bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Comparison Results:</h2>
        <p className="text-gray-600">
          The results of the comparison will appear here.
        </p>
      </div>
    </div>
  );
}

export default App;
