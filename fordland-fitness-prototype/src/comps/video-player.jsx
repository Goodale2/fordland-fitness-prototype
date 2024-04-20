import React from 'react';
import { Box } from '@mui/material';

const YouTubeFrame = ({ playlistId, width = "560", height = "315" }) => {
  const src = `https://www.youtube.com/embed/videoseries?list=${playlistId}&loop=1&autoplay=1&playlist=${playlistId}`;
  return (
    <Box sx={{ overflow: 'hidden', borderRadius: '12px', boxShadow: 3 }}>
      <iframe
        width={width}
        height={height}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </Box>
  );
};

export default YouTubeFrame;
