window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    // Show the loader with stamping effect for 5 seconds
    setTimeout(() => {
      loader.classList.add("fade-out");
  
      // After 1.5 seconds of fade-out, hide the loader and display content
      setTimeout(() => {
        loader.style.display = "none";
        content.classList.remove("hidden"); // Show website content
      }, 1500); // Fade-out timing
    }, 5000); // Extend the loader duration to 5 seconds before starting fade-out
  });
  