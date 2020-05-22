// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg')";
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2014/07/01/12/36/tea-381235__340.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

// Run
showTime();
setBgGreet();
