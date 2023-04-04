const popupButtonR = document.getElementById('popup-button-next');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX; // current x-coordinate of the cursor
    const LeftThreshold = window.innerWidth - 50; // set a threshold 100 pixels from the right edge of the window
    //   const RightThreshold = 5; // set a threshold 100 pixels from the left edge of the window
    if (x > LeftThreshold) {
        popupButtonR.style.display = 'block'; // show the popup button
    } else {
        popupButtonR.style.display = 'none'; // hide the popup button
    }
});
const popupButtonL = document.getElementById('popup-button-back');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX; // current x-coordinate of the cursor
    //   const rightThreshold = window.innerWidth - 5; // set a threshold 100 pixels from the right edge of the window
    const leftThreshold = 50; // set a threshold 100 pixels from the left edge of the window

    if (x < leftThreshold) {
        popupButtonL.style.display = 'block'; // show the popup button
    } else {
        popupButtonL.style.display = 'none'; // hide the popup button
    }
});
// const popupButtonBack = document.getElementById('popup-button-back');
// const popupButtonNext = document.getElementById('popup-button-next');

// document.addEventListener('mousemove', (event) => {
//   const x = event.clientX; // current x-coordinate of the cursor
//   const rightThreshold = window.innerWidth - 100; // set a threshold 100 pixels from the right edge of the window
//   const leftThreshold = 100; // set a threshold 100 pixels from the left edge of the window
  
//   if (x > rightThreshold) {
//     popupButtonNext.style.display = 'block'; // show the next button
//   } else if (x < leftThreshold) {
//     popupButtonBack.style.display = 'block'; // show the back button
//   } else {
//     popupButtonBack.style.display = 'none'; // hide the back button
//     popupButtonNext.style.display = 'none'; // hide the next button
//   }
// });


// <form action="/ass2/ass2.html" class="inline" style="margin-left: auto">
// <button id="popup-button-next" style="margin-left: auto">next</button>
// </form>
// <form action="/ass2/ass2.html" class="inline" style="margin-right: auto">
// <button id="popup-button-back" style="margin-right: auto">next</button>
// </form>
