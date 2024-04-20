import React from 'react';
import { Container, Box } from '@mui/material';
import YouTubeFrame from '../src/comps/video-player';

function App() {
  // Style for the outer Box to center the content
  const style = {
    display: 'flex',       // Enables flexbox layout
    flexDirection: 'column', // Stacks children vertically
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',   // Centers content horizontally
    height: '100vh',        // Full viewport height
    width: '100%',          // Full width
  };

  return (
    <Box sx={style}>
      <Box>This is a test for autoplaying iFrames</Box>
      <Container maxWidth="sm">
        <YouTubeFrame playlistId='PLgeXOVaJo_gknRaIn8DytusznX9hqWwA_'/>
      </Container>
    </Box>
  );
}

export default App;
