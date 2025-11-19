
let gallery = [
  { image: "./img/img1.jpg", caption: "Ironman" },
  { image: "./img/img2.jpg", caption: "Cute Boy" },
  { image: "./img/img3.jpg", caption: "Spider man" }
];

let indexNumber = 0;
let timer = null;

function showSlide(num) {
  document.getElementById("slideImage").src = gallery[num].image;
  document.getElementById("caption").textContent = "Caption: " + gallery[num].caption;
  document.getElementById("counter").textContent = `Slide ${num + 1} of ${gallery.length}`;
}
// Next
function nextSlide() {
  const msg = document.getElementById("message");

  if (indexNumber === gallery.length - 1) {
    msg.textContent = "This is the last slide";
    return;
  }

  indexNumber++;
  msg.textContent = "";
  showSlide(indexNumber);
}

// Previous
function prevSlide() {
  const msg = document.getElementById("message");

  if (indexNumber === 0) {
    msg.textContent = "This is the first slide";
    return;
  }

  indexNumber--;
  msg.textContent = "";
  showSlide(indexNumber);
}

// new slide
function addImage() {
  let url = document.getElementById("imgURL").value;
  let text = document.getElementById("imgCaption").value;

  if (url === "" || text === "") {
    alert("Please enter both Image URL and Caption");
    return;
  }

  gallery.push({ image: url, caption: text });

  indexNumber = gallery.length - 1;
  showSlide(indexNumber);

  document.getElementById("imgURL").value = "";
  document.getElementById("imgCaption").value = "";
}

// Auto-play start
function startAutoPlay() {
  stopAutoPlay();

  timer = setInterval(() => {
    if (indexNumber === gallery.length - 1) {
      document.getElementById("message").textContent = "This is the last slide";
      return;
    }
    nextSlide();
  }, 3000);

  document.getElementById("message").textContent = "Auto-play started";
}

// Auto-play stop
function stopAutoPlay() {
  clearInterval(timer);
  document.getElementById("message").textContent = "Auto-play stopped";
}

showSlide(indexNumber);
