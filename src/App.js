import './App.css';
import TextField from '@mui/material/TextField';
import {LoadingButton} from "@mui/lab";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";

function App() {
    const [hitAI, setHitAI] = useState(false)
    const [showSvgs, setShowSvgs] = useState(false)

    const togglehitAI = () => {
        setHitAI(true);
        setShowSvgs(false);

        setTimeout(() => {
            setHitAI(false);
            setShowSvgs(true);

        }, 2000)

    }

  return (
    <div className="app-container">
        <div className="top-section">
            <TextField id="standard-basic" label="Text"
                       autoFocus
                       placeholder="Type here"
                       variant="outlined"
                       multiline
                       minRows={5}
                // InputProps={{
                //     endAdornment:
                //         <InputAdornment disableTypography position="end">
                //             Mbps</InputAdornment>,
                // }}
            />
            <LoadingButton loading={hitAI} variant="outlined" endIcon={<SendIcon />}
                           loadingPosition="end" style={{marginTop: 50}}
onClick={togglehitAI}
            >
                Do AI shit
            </LoadingButton>
        </div>
        <div className="bottom-section">
            {showSvgs && <>
                <img src="https://d3-graph-gallery.com/img/graph/heatmap_style.png" />
                <img src="https://d3-graph-gallery.com/img/graph/heatmap_style.png" /></>}


        </div>
    </div>
  );
}

export default App;
