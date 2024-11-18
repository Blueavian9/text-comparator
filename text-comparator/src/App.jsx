import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [loading, setLoading] = useState(false);
  const [comparisonResult, setComparisonResult] = useState("");
  const [resultType, setResultType] = useState(""); // New state for result type
  const [ignoreSpaces, setIgnoreSpaces] = useState(false); // New state for ignoring spaces
  const [caseSensitive, setCaseSensitive] = useState(true); // New State for case sensitivity

  const handleCompare = async () => {
    setLoading(true);
    setComparisonResult("");
    setResultType("");

    let processedText1 = text1;
    let processedText2 = text2;

    // Adjust texts based on options
    if (!caseSensitive) {
      processedText1 = processedText1.toLowerCase();
      processedText2 = processedText2.toLowerCase();
    }
    if (ignoreSpaces) {
      processedText1 = processedText1.replace(/\s+/g, "");
      processedText2 = processedText2.replace(/\s+/g, "");
    }

    try {
      // Replace "YOUR_API_ENDPOINT" with your actual endpoint
      const response = await axios.post(
        "YOUR_API_ENDPOINT",
        { text1: processedText1, text2: processedText2 },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        }
      );

      // Assuming the API response contains a "match" field
      const { match } = response.data;

      if (match) {
        setComparisonResult("The texts are identical.");
        setResultType("success");
      } else {
        setComparisonResult("The texts are different.");
        setResultType("error");
      }
    } catch (error) {
      console.error("Error comparing texts:", error);
      setComparisonResult("Error: Unable to compare texts.");
      setResultType("error");
    } finally {
      setLoading(false);
    }
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
              className="w-4 h-4 mr-2 text-green-600"
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
