import { useEffect, useState } from "react";

const TokenVisualizer = ({ data }) => {
  const [highlightedNodes, setHighlightedNodes] = useState([]);

  useEffect(() => {
    const colors = ["#53f5ba", "#6ed3f1", "#fa69c1", "#ac7ffd", "#f3b681"];
    let nextColorIndex = 0;
    const coloredTokens = data.map((token) => {
      const thisColor = colors[nextColorIndex];
      nextColorIndex =
        nextColorIndex === colors.length - 1 ? 0 : nextColorIndex + 1;

      return <span style={{ backgroundColor: thisColor }}>{token}</span>;
    });

    setHighlightedNodes(coloredTokens);
  }, [data]);

  return (
    <div id="tokenize-visualize" style={{ height: 100, width: 200 }}>
      {highlightedNodes}
    </div>
  );
};

export default TokenVisualizer;
