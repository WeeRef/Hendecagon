function slideInitTh() {
    let slideIndexTh = 1;
    showSlidesTh(slideIndexTh);
  }
  
  let slideIndexTh = 1;
  showSlidesTh(slideIndexTh);
  
  // Next/previous controls
  function plusSlidesTh(n) {
    showSlidesTh(slideIndexTh += n);
  }
  
  // Thumbnail image controls
  function currentSlideTh(n) {
    showSlidesTh(slideIndexTh = n);
  }
  
  function showSlidesTh(n) {
    let i;
    let sl = document.getElementsByClassName("slidesPageTh");
    if (n > sl.length) {slideIndexTh = 1}
    if (n < 1) {slideIndexTh = sl.length}
    for (i = 0; i < sl.length; i++) {
        sl[i].style.display = "none";
    }
    sl[slideIndexTh-1].style.display = "block";
  }