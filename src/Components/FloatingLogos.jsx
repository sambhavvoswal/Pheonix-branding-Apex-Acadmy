import React from 'react'

const FloatingLogos = ({ imagePath }) => {
return (
    <div className="floating-container">
    <img
        src={imagePath}
        alt="Floating Logo"
        className="floating-image"
    />
    </div>
    )
}

export default FloatingLogos