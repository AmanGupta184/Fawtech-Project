// import React from 'react';

// const Loading = () => {
//   return (
//     <div style={{ 
//       display: 'flex', 
//       justifyContent: 'center', 
//       alignItems: 'center', 
//       height: '100vh', 
//       flexDirection: 'column' 
//     }}>
//       <div style={{ 
//         position: 'relative', 
//         width: '100px', 
//         height: '100px' 
//       }}>
//         <div style={{ 
//           position: 'absolute', 
//           width: '80px', 
//           height: '40px', 
//           background: '#FFFFFF', // White fill
//           border: '4px solid #007BFF', // Blue outline
//           borderRadius: '20px', 
//           top: '30px', 
//           animation: 'spin 1.5s infinite linear' 
//         }}></div>
//         <div style={{ 
//           position: 'absolute', 
//           width: '80px', 
//           height: '40px', 
//           background: '#FFFFFF', // White fill
//           border: '4px solid #2563eb', // Darker blue outline
//           borderRadius: '20px', 
//           top: '30px', 
//           transform: 'rotate(180deg)', 
//           animation: 'spin 1.5s infinite linear' 
//         }}></div>
//       </div>
//       <span style={{ color: '#888', marginTop: '20px' }}>LOADING...</span>
//     </div>
//   );
// };

// // Add the animation keyframes to the component
// const styleSheet = document.styleSheets[0];
// if (styleSheet) {
//   styleSheet.insertRule(`
//     @keyframes spin {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }
//   `, styleSheet.cssRules.length);
// }

// export default Loading;
import React from 'react';

const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
        <div className="loader-container">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="particle" key={index}></div>
          ))}
        </div>
      </div>

      <style>{`
        .loader-container {
          --uib-size: 200px;
          --uib-color: blue;
          --uib-speed: 1.75s;
          position: relative;
          height: var(--uib-size);
          width: var(--uib-size);
          animation: rotate calc(var(--uib-speed) * 6) linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .particle {
          position: absolute;
          top: 0%;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }

        .particle::before {
          content: '';
          position: absolute;
          height: 17.5%;
          width: 17.5%;
          border-radius: 50%;
          background-color: var(--uib-color);
          flex-shrink: 0;
          transition: background-color 0.3s ease;
          animation: orbit var(--uib-speed) linear infinite;
        }

        /* Individual particle delay and rotation */
        .particle:nth-child(1)  { transform: rotate(8deg);   --uib-delay: 0;     }
        .particle:nth-child(2)  { transform: rotate(36deg);  --uib-delay: -0.4;  }
        .particle:nth-child(3)  { transform: rotate(72deg);  --uib-delay: -0.9;  }
        .particle:nth-child(4)  { transform: rotate(90deg);  --uib-delay: -0.5;  }
        .particle:nth-child(5)  { transform: rotate(144deg); --uib-delay: -0.3;  }
        .particle:nth-child(6)  { transform: rotate(180deg); --uib-delay: -0.2;  }
        .particle:nth-child(7)  { transform: rotate(216deg); --uib-delay: -0.6;  }
        .particle:nth-child(8)  { transform: rotate(252deg); --uib-delay: -0.7;  }
        .particle:nth-child(9)  { transform: rotate(300deg); --uib-delay: -0.1;  }
        .particle:nth-child(10) { transform: rotate(324deg); --uib-delay: -0.8;  }
        .particle:nth-child(11) { transform: rotate(335deg); --uib-delay: -1.2;  }
        .particle:nth-child(12) { transform: rotate(290deg); --uib-delay: -0.5;  }
        .particle:nth-child(13) { transform: rotate(240deg); --uib-delay: -0.2;  }

        .particle::before {
          --uib-d: calc(var(--uib-delay) * var(--uib-speed));
          animation-delay: var(--uib-d);
        }

        @keyframes orbit {
          0%   { transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684); opacity: 0.65; }
          5%   { transform: translate(calc(var(--uib-size) * 0.4)) scale(0.684208); opacity: 0.58; }
          10%  { transform: translate(calc(var(--uib-size) * 0.3)) scale(0.631576); opacity: 0.51; }
          15%  { transform: translate(calc(var(--uib-size) * 0.2)) scale(0.578944); opacity: 0.44; }
          20%  { transform: translate(calc(var(--uib-size) * 0.1)) scale(0.526312); opacity: 0.37; }
          25%  { transform: translate(0%) scale(0.47368); opacity: 0.3; }
          30%  { transform: translate(calc(var(--uib-size) * -0.1)) scale(0.526312); opacity: 0.37; }
          35%  { transform: translate(calc(var(--uib-size) * -0.2)) scale(0.578944); opacity: 0.44; }
          40%  { transform: translate(calc(var(--uib-size) * -0.3)) scale(0.631576); opacity: 0.51; }
          45%  { transform: translate(calc(var(--uib-size) * -0.4)) scale(0.684208); opacity: 0.58; }
          50%  { transform: translate(calc(var(--uib-size) * -0.5)) scale(0.73684); opacity: 0.65; }
          55%  { transform: translate(calc(var(--uib-size) * -0.4)) scale(0.789472); opacity: 0.72; }
          60%  { transform: translate(calc(var(--uib-size) * -0.3)) scale(0.842104); opacity: 0.79; }
          65%  { transform: translate(calc(var(--uib-size) * -0.2)) scale(0.894736); opacity: 0.86; }
          70%  { transform: translate(calc(var(--uib-size) * -0.1)) scale(0.947368); opacity: 0.93; }
          75%  { transform: translate(0%) scale(1); opacity: 1; }
          80%  { transform: translate(calc(var(--uib-size) * 0.1)) scale(0.947368); opacity: 0.93; }
          85%  { transform: translate(calc(var(--uib-size) * 0.2)) scale(0.894736); opacity: 0.86; }
          90%  { transform: translate(calc(var(--uib-size) * 0.3)) scale(0.842104); opacity: 0.79; }
          95%  { transform: translate(calc(var(--uib-size) * 0.4)) scale(0.789472); opacity: 0.72; }
          100% { transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684); opacity: 0.65; }
        }
      `}</style>
    </>
  );
};

export default Loading;
