function slideInitNd() {
    let slideIndexNd = 1;
    showSlidesNd(slideIndexNd);
  }
  
  let slideIndexNd = 1;
  showSlidesNd(slideIndexNd);
  
  // Next/previous controls
  function plusSlidesNd(n) {
    showSlidesNd(slideIndexNd += n);
  }
  
  // Thumbnail image controls
  function currentSlideNd(n) {
    showSlidesNd(slideIndexNd = n);
  }
  
  function showSlidesNd(n) {
    let i;
    let sl = document.getElementsByClassName("slidesPageNd");
    if (n > sl.length) {slideIndexNd = 1}
    if (n < 1) {slideIndexNd = sl.length}
    for (i = 0; i < sl.length; i++) {
        sl[i].style.display = "none";
    }
    sl[slideIndexNd-1].style.display = "block";
  }