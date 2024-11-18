import React, { useState } from "react";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [loading, setLoading] = useState(false);
  const [comparisonResult, setComparisonResult] = useState("");
  const [resultType, setResultType] = useState(""); // New state for result type

  const handleCompare = () => {
    setLoading(true);
    setComparisonResult("");
    setResultType("");

    setTimeout(() => {
      // Example comparison logic: checking if texts are the same
      if (text1 === text2) {
        setComparisonResult("The texts are identical.");
        setResultType("success");
      } else {
        setComparisonResult("The texts are different.");
        setResultType("error");
      }
      setLoading(false);
    }, 1500);
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
        <p
          className={`text-gray-600 ${
            resultType === "success"
              ? "text-green-600"
              : resultType === "error"
              ? "text-red-600"
              : ""
          }`}
        >
          {comparisonResult ||
            "The results of the comparison will appear here."}
        </p>
      </div>
    </div>
  );
}

export default App;
