import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = ({ loading }) => {
    let [color, setColor] = useState("#ffffff");
    return (
        <Box component="div" sx={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '0',
            top: '0',
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '999'
        }}>
            <ScaleLoader color={color} loading={loading} size={150} />
        </Box>
    );
};

export default Loading;