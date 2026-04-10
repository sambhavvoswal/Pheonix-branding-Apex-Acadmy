import React from 'react'

const FloatingLogos = ({ imagePath, left, right }) => {
    const positionStyle = {};
    if (left) positionStyle.left = left;
    if (right) positionStyle.right = right;
    return (
        <div className="floating-container" style={positionStyle}>
            <img src={imagePath} alt="Floating Logo" className="floating-image" />
        </div>
    );
};

export default FloatingLogos