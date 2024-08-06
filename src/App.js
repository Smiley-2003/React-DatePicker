import React from 'react';
// import TextField from '@material-ui/core/TextField';
import TextField from '@mui/material/TextField';


const App = () => {

  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>How to create Date Picker in ReactJS?</h3>
      <TextField
        id="date"
        label="Choose your birthdate"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

export default App;