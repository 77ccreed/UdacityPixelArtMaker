const sizePicker = $("#sizePicker");
const pixelCanvas = $("#pixel_canvas");
let isDown = false;



//Make submit button and call makeGrid if a button was hit.
$("input[type='submit']").click(function (e) {
  e.preventDefault();
  makeGrid();
});


function makeGrid() {
  document.addEventListener('contextmenu', event => event.preventDefault());
  pixelCanvas.empty();

  //Desing canvas when the user chooses input.
  const height = $("#input_height").val();
  const width = $("#input_width").val();
  for (let x = 0; x < height; x++) {
    $("#pixel_canvas").append("<tr></tr>");
  }
  for (let y = 0; y < width; y++) {
    $("tr").append("<td></<td>");
  }
}

//Fill pixel when the user chooses a color and click.
pixelCanvas.on("click", "td", function () {
  color = $("#colorPicker").val();
  $(this).css("background-color", color);
});
//Make pixel same color as a background again when the user hit double-click.
pixelCanvas.on("dblclick", "td", function () {
  $(this).css("background-color", "");
});


//Allow constant drawing.
pixelCanvas.on("mousedown", function () {
  color = $("#colorPicker").val();
  isDown = true;
});

// Filling another pixel.
pixelCanvas.on("mouseover", "td", function () {
  if (isDown) {
    $(this).css("background-color", color);
  }
});

//Avoid drawing when "mouse up".
pixelCanvas.on("mouseup", function () {
  isDown = false;
});


// Set the min input number of grid height and width to 1 and max to 100 (copied from stuck overflow (copied from slack)).

$("input[type=number]").on("keyup", function () {
  $(this).val(Math.min(100, Math.max(1, $(this).val())));
});


/*
Visual effects using ScrollReveal, some code
is in the index.html head too, more info:
https://github.com/jlmakes/scrollreveal  
*/

// Changing the defaults.
window.sr = ScrollReveal({
  reset: true
});

// Customizing a reveal set.
// First element(h1 Lab: Pixel Art Maker).

sr.reveal('.h1', { // Use a class when choosing element.
  duration: 3500, // Animation duration.
  origin: 'bottom', // Where it comes.
  distance: '200px', // Distance how far its come.
  opacity: 0, // Starting opacity value.
  scale: 0.1, // Starting scale value.
  delay: 1000, // Time in milliseconds.
  rotate: { // Starting angles in degrees.
    x: 360,
    y: 10,
    z: 0
  },
  reset: false, // false: reveals occur once as elements become visible
});

//Second element (sizePicker (form) and colorPicker too).
sr.reveal('.sizePicker', {
  duration: 2000,
  origin: 'left',
  distance: '150px',
  opacity: 0,
  scale: 0.1,
  rotate: {
    x: 20,
    y: 90,
    z: 0
  },
  reset: false,
});

//The third element (h2 Choose Grid Size).
sr.reveal('.h2canvas', {
  duration: 3000,
  origin: 'left',
  distance: '200px',
  delay: 200,
  opacity: 0,
  scale: 0.5,
  reset: false,
});

//Fourth element (h2 Pick A Color).
sr.reveal('.h2color', {
  duration: 3000,
  origin: 'left',
  distance: '400px',
  delay: 400,
  opacity: 0,
  scale: 0.3,
  reset: false,
});

//Last element (h2 Choose Grid Size).
sr.reveal('.h2grid', {
  duration: 3000,
  origin: 'left',
  distance: '600px',
  delay: 600,
  opacity: 0,
  scale: 0.1,
  reset: false,
});