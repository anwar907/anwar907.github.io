
// import { images } from './assets.js';
import tools from "./assets/assets.js";
import images from './assets/img/user.png';

// Development Tools
const shields = tools;
const container = document.getElementById('shields-container');
shields.forEach(shield => {
  const div = document.createElement('div');
  div.className = 'm-1';
  div.setAttribute('data-aos', 'fade-down');

  const img = document.createElement('img');
  img.alt = shield.alt;
  img.src = shield.src;

  div.appendChild(img);
  container.appendChild(div);
});

// Assets Image
document.addEventListener('DOMContentLoaded', function() {
  const backgroundWeb = document.createElement('img');
  backgroundWeb.src = images,
  backgroundWeb.alt = "Background Image";
  document.getElementById('logo-user').appendChild(backgroundWeb);

  // const backgroundMobile = document.createElement('img');
  // backgroundMobile.src = images.logoBackgroundMobile,
  // backgroundMobile.alt = "Background Image";
  // document.getElementById('logo-container').appendChild(backgroundMobile);
})

    // document.addEventListener('DOMContentLoaded', function() {
    //         fetch(devTools)
    //             .then(response => {
    //               // if (!response.ok) {
    //               //       throw new Error('Network response was not ok ' + response.statusText);
    //               //   }
    //               console.log(response);
    //                 return response.json();
    //             })
    //             .then(shields => {
    //                 const container = document.getElementById('shields-container');

    //                 shields.forEach(shield => {
    //                     const div = document.createElement('div');
    //                     div.className = 'm-1';
    //                     div.setAttribute('data-aos', 'fade-down');

    //                     const img = document.createElement('img');
    //                     img.alt = shield.alt;
    //                     img.src = shield.src;

    //                     div.appendChild(img);
    //                     container.appendChild(div);
    //                 });
    //             })
    //             .catch(error => console.log('Error loading shields:', error));
    //     });

    