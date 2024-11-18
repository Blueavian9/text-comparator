import React, { useState } from "react";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [loading, setLoading] = useState(false);
  const [comparisonResult, setComparisonResult] = useState("");
  const [resultType, setResultType] = useState(""); // New state for result type
  const [ignoreSpaces, setIgnoreSpaces] = useState(false); // New state for ignoring spaces
  const [caseSensitive, setCaseSensitive] = useState(true); // New State for case sensitivity

  const handleCompare = () => {
    setLoading(true);
    setComparisonResult("");
    setResultType("");

    let processedText1 = text1.trim(); // Start by trimming both texts
    let processedText2 = text2.trim();

    if (!caseSensitive) {
      // Convert to lowercase if case-insensitive mode is selected
      processedText1 = processedText1.toLowerCase();
      processedText2 = processedText2.toLowerCase();
    }

    if (ignoreSpaces) {
      // Remove spaces if the "ignore spaces" option is selected
      processedText1 = processedText1.replace(/\s+/g, "");
      processedText2 = processedText2.replace(/\s+/g, "");
    }

    setTimeout(() => {
      if (processedText1 === processedText2) {
        setComparisonResult("The texts are identical.");
        setResultType("success");
      } else {
        setComparisonResult("The texts are different.");
        setResultType("error");
      }
      setLoading(false);
    }, 1500); // Simulating an async operation
  };

  const handleReset = () => {
    setText1("");
    setText2("");
    setComparisonResult("");
    setResultType("");
    setIgnoreSpaces(false);
    setCaseSensitive(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Text Comparator</h1>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
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

        {/* Comparison Mode Options */}
        <div className="flex justify-between w-full max-w-3xl">
          <div>
            <label className="text-gray-700 mr-2">Case Sensitive</label>
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={() => setCaseSensitive(!caseSensitive)}
            />
          </div>
          <div>
            <label className="text-gray-700 mr-2">Ignore Spaces</label>
            <input
              type="checkbox"
              checked={ignoreSpaces}
              onChange={() => setIgnoreSpaces(!ignoreSpaces)}
            />
          </div>
        </div>

        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
          onClick={handleCompare}
        >
          {loading ? (
            <div className="spinner-border animate-spin w-5 h-5 border-t-2 border-white rounded-full"></div>
          ) : (
            "Compare"
          )}
        </button>

        <button
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition mt-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="mt-6 w-full max-w-3xl p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Comparison Results:</h2>
        <div
          className={`flex items-center ${
            resultType === "success"
              ? "text-green-600"
              : resultType === "error"
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {resultType === "success" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
          {resultType === "error" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <p>
            {comparisonResult ||
              "The results of the comparison will appear here."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
