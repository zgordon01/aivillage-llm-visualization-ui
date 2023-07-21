import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextField id="standard-basic" label="Text"
                   autoFocus
                   placeholder="Type here"
                   variant="outlined"
                   multiline
                   minRows={4}
                   // InputProps={{
                   //     endAdornment:
                   //         <InputAdornment disableTypography position="end">
                   //             Mbps</InputAdornment>,
                   // }}
        />
      </header>
    </div>
  );
}

export default App;
