const text = `At Skanda Beauty Parlour, our clients leave with more than just a service—they leave with 
confidence and radiant smiles. From rejuvenating facials to elegant makeovers, 
we make every visit a personalized experience. Explore our satisfied customer's 
transformations and see why we’re Mysore’s trusted beauty destination!`;

let index = 0;
const speed = 50; // Speed of typing in milliseconds

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typedText").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  typeWriter();
};
