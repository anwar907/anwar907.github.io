
// // import { images } from './assets.js';
// import tools from "./assets/assets.js";

// // Development Tools
// const shields = tools;
// const container = document.getElementById('shields-container');
// shields.forEach(shield => {
//   const div = document.createElement('div');
//   div.className = 'm-1';
//   div.setAttribute('data-aos', 'fade-down');

//   const img = document.createElement('img');
//   img.alt = shield.alt;
//   img.src = shield.src;

//   div.appendChild(img);
//   container.appendChild(div);
// });

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

