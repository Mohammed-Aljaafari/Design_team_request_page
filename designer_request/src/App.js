import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Box,Typography } from '@mui/material';
function App() {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    time: '',
    location: '',
    prizes: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send data to an API or display)
  };
  return (
    <div className="App">
          <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        gap: 2,
        maxWidth: '400px',
        margin: 'auto',
        mt: 5
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Activity Form
      </Typography>
      
      <TextField
        label="Name of the Activity"
        name="activityName"
        value={formData.activityName}
        onChange={handleChange}
        required
        fullWidth
      />
      
      <TextField
        label="Starting Date"
        type="date"
        name="startDate"
        InputLabelProps={{ shrink: true }}
        value={formData.startDate}
        onChange={handleChange}
        required
        fullWidth
      />
      
      <TextField
        label="Ending Date"
        type="date"
        name="endDate"
        InputLabelProps={{ shrink: true }}
        value={formData.endDate}
        onChange={handleChange}
        required
        fullWidth
      />
      
      <TextField
        label="Time"
        type="time"
        name="time"
        InputLabelProps={{ shrink: true }}
        value={formData.time}
        onChange={handleChange}
        required
        fullWidth
      />
      
      <TextField
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
        fullWidth
      />
      
      <TextField
        label="Prizes"
        name="prizes"
        value={formData.prizes}
        onChange={handleChange}
        required
        fullWidth
      />
      
      <TextField
        label="Additional Information"
        name="additionalInfo"
        multiline
        rows={4}
        value={formData.additionalInfo}
        onChange={handleChange}
        fullWidth
      />
      
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
    </div>
  );
}

export default App;