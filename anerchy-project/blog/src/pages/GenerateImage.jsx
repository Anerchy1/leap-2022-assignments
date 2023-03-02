import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function GenerateImage() {
  const { prompt } = useParams();
  const [result, setResult] = useState("");
  useEffect(() => {
    axios.get("localhost:8001/generate").then((res) => {
      setResult(res.data);
    }, []);
  });
  return (
    <div>
      <h2>Generate Image</h2>
      <textarea
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <button>Generate </button>
      {result.length > 0 ? <img src={result} /> : <></>}
    </div>
  );
}
