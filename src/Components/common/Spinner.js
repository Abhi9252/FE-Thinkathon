import React from 'react'

const SpinnerComponent = () => {
  return <div id='cover-spin'></div>
}

export default SpinnerComponent

// Spinner
// #cover-spin {
//   position: fixed;
//   width: 100%;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   background-color: rgba(255, 255, 255, 0.7);
//   z-index: 9999;
// }

// @-webkit-keyframes spin {
//   from {
//     -webkit-transform: rotate(0deg);
//   }
//   to {
//     -webkit-transform: rotate(360deg);
//   }
// }

// @keyframes spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

// #cover-spin::after {
//   content: "";
//   display: block;
//   position: absolute;
//   left: 48%;
//   top: 40%;
//   width: 40px;
//   height: 40px;
//   border-style: solid;
//   border-color: black;
//   border-top-color: transparent;
//   border-width: 4px;
//   border-radius: 50%;
//   -webkit-animation: spin 0.8s linear infinite;
//   animation: spin 0.8s linear infinite;
// }
