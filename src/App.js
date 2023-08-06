import "./App.css";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import utils from "./utils";
import { response } from "./heatmapData";

function App() {
  const [hitAI, setHitAI] = useState(false);
  const [clear, setClear] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [highlightedNodes, setHighlightedNodes] = useState([]);

  const togglehitAI = () => {
    setHitAI(true);
    setClear(true);

    setTimeout(() => {
      setHitAI(false);
      utils.constructHeatmap(response?.embedding, "embedding");
      utils.constructHeatmap(response?.context, "context", "#033eff");
    }, 2000);
  };

  useEffect(() => {
    if (clear) setClear(false);
  }, [clear]);

  const setHighlightTokens = () => {
    const colors = ['#53f5ba', '#6ed3f1', '#fa69c1', '#ac7ffd', '#f3b681'];
    let nextColorIndex = 0;
    const coloredTokens = response.tokens.map((token) => {
      const thisColor = colors[nextColorIndex];
      nextColorIndex = nextColorIndex === (colors.length - 1) ? 0 : nextColorIndex + 1;

      return <span style={{backgroundColor: thisColor}}>{token}</span>
    });

    setHighlightedNodes(coloredTokens);
  };

  return (
    <div className="app-container">
      <div className="top-section">
        <div>
        <TextField
          id="text-field-contents"
          label="Text"
          autoFocus
          placeholder="Type here"
          variant="outlined"
          multiline
          minRows={10}
          onChange={(e) => setEnteredText(e.target.value)}
          style={{width: '100%'}}
        />
        </div>
        <div id="tokenize-visualize" style={{ height: 100, width: 200 }}>
          {highlightedNodes}
        </div>
        {/*<LoadingButton*/}
        {/*  loading={hitAI}*/}
        {/*  variant="outlined"*/}
        {/*  endIcon={<SendIcon />}*/}
        {/*  loadingPosition="end"*/}
        {/*  style={{ marginTop: 50 }}*/}
        {/*  onClick={togglehitAI}*/}
        {/*>*/}
        {/*  Do AI shit*/}
        {/*</LoadingButton>*/}
        {/*<LoadingButton*/}
        {/*  variant="outlined"*/}
        {/*  style={{ marginTop: 50 }}*/}
        {/*  onClick={setHighlightTokens}*/}
        {/*>*/}
        {/*  Highlight*/}
        {/*</LoadingButton>*/}
      </div>
      {!clear && (
        <div className="bottom-section">
          <div id="embedding" />
          <div id="context" />
        </div>
      )}
    </div>
  );
}

export default App;
