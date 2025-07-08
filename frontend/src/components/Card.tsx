import { useState } from "react";
import axios from "axios";
const Card = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    emotion: string;
    confidence: number;
  } | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/analyze", {
        text,
      });
      setResult(response.data);
    } catch (err) {
      setError("Failed to analyze emotion. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Emotion Reflection Tool
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your reflection here..."
            className="border rounded-xl p-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white rounded-xl py-2 hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Submit"}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-300">
            <p className="text-lg font-medium">Emotion: {result.emotion}</p>
            <p className="text-sm text-gray-600">
              Confidence: {(result.confidence * 100).toFixed(1)}%
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-50 rounded-xl border border-red-300 text-red-600 text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
