import { useState } from "react";

function App() {
  // State to hold the two texts and the comparison result
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [comparisonResult, setComparisonResult] = useState("");

  // Function to handle the text comparison
  const compareTexts = () => {
    if (text1 === text2) {
      setComparisonResult("The texts are identical.");
    } else {
      setComparisonResult("The texts are different.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">Text Comparator</h1>
        <div className="space-y-4">
          <div>
            <textarea
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter first text here..."
              rows="5"
            />
          </div>
          <div>
            <textarea
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter second text here..."
              rows="5"
            />
          </div>
          <button
            onClick={compareTexts}
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Compare Texts
          </button>
          {comparisonResult && (
            <p className="mt-4 text-center text-lg font-semibold">
              {comparisonResult}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
