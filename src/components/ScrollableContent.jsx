import React from 'react';
import Box from '@mui/material/Box';

export default function ScrollableContent({ children }) {
 return (
        <div className="flex-1 overflow-y-auto overscroll-contain p-6 bg-stone-50">
            {children}
        </div>
    );
}