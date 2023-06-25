import React, { useState } from 'react';

const Toggle = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [hoverTextPosition, setHoverTextPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const buttonStyle = {
    width: '40px',
    height: '20px',
    backgroundColor: isActive ? 'green' : 'gray',
    borderRadius: '10px',
    padding: '2px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    position: 'relative',
  };

  const indicatorStyle = {
    backgroundColor: 'white',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
    transition: 'transform 300ms ease-in-out',
    transform: isActive ? 'translateX(20px)' : 'translateX(2px)',
  };

  const hoverTextStyle = {
    position: 'fixed',
    top: hoverTextPosition.y + 20,
    left: hoverTextPosition.x - 25,
    backgroundColor: 'black',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    opacity: 0,
    transition: 'opacity 200ms ease-in-out',
  };

  const handleMouseEnter = (e) => {
    const { clientX, clientY } = e;
    setHoverTextPosition({ x: clientX, y: clientY });
    const hoverText = document.getElementById('hoverText');
    hoverText.style.opacity = 1;
  };

  const handleMouseLeave = () => {
    const hoverText = document.getElementById('hoverText');
    hoverText.style.opacity = 0;
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={indicatorStyle}></div>
        <span id="hoverText" style={hoverTextStyle}>
          {isActive ? 'Stop obsessing' : 'Start obsessing'}
        </span>
      </button>
      {isActive && children}
    </div>
  );
};

export default Toggle;
