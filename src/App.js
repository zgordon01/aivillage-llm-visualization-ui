import "./App.css";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { response } from "./heatmapData";
import { useDebounce } from "@uidotdev/usehooks";
import Heatmap from "./components/Heatmap";
import TokenVisualizer from "./components/TokenVisualizer";
import NextWordTable from "./components/NextWordTable";
import LoadingOverlay from "./LoadingOverlay";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (!debouncedText) return;
    // TODO make request and add set state here?
    setLoading(true);
  }, [debouncedText]);

  return (
    <div className="app-container">
      <div className="top-section">
        <div>
          <TextField
            id="text-field-contents"
            label="Input"
            autoFocus
            placeholder="Type here"
            variant="outlined"
            multiline
            minRows={10}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div class="top-right-section">
          <TokenVisualizer data={response.tokens} />
          <NextWordTable data={response.logits} />
        </div>
      </div>
      <div className="bottom-section">
        <Heatmap
          domId="embedding"
          data={response?.embedding}
          toColor="#38C415"
        />
        <Heatmap domId="context" data={response?.context} />
      </div>
      {loading && <LoadingOverlay />}
    </div>
  );
}

export default App;
