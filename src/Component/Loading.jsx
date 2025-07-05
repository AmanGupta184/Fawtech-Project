import React from 'react';

const Loading = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      flexDirection: 'column' 
    }}>
      <div style={{ 
        position: 'relative', 
        width: '100px', 
        height: '100px' 
      }}>
        <div style={{ 
          position: 'absolute', 
          width: '80px', 
          height: '40px', 
          background: '#FFFFFF', // White fill
          border: '4px solid #007BFF', // Blue outline
          borderRadius: '20px', 
          top: '30px', 
          animation: 'spin 1.5s infinite linear' 
        }}></div>
        <div style={{ 
          position: 'absolute', 
          width: '80px', 
          height: '40px', 
          background: '#FFFFFF', // White fill
          border: '4px solid #2563eb', // Darker blue outline
          borderRadius: '20px', 
          top: '30px', 
          transform: 'rotate(180deg)', 
          animation: 'spin 1.5s infinite linear' 
        }}></div>
      </div>
      <span style={{ color: '#888', marginTop: '20px' }}>LOADING...</span>
    </div>
  );
};

// Add the animation keyframes to the component
const styleSheet = document.styleSheets[0];
if (styleSheet) {
  styleSheet.insertRule(`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, styleSheet.cssRules.length);
}

export default Loading;