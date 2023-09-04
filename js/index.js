document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const items = document.querySelectorAll(".carousel-item");
  
    let currentIndex = 0;
    const totalItems = items.length;
  
    function showSlide(index) {
      items[currentIndex].classList.remove("active");
      currentIndex = index;
      items[currentIndex].classList.add("active");
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    prevButton.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showSlide(currentIndex);
    });
  
    nextButton.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % totalItems;
      showSlide(currentIndex);
    });
  
    showSlide(currentIndex);
  });
  