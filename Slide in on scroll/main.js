function debounce(func, wait = 10, immediate = true) {
    var timeout; //It runs the function AT MOST every 10ms
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const imagesSliding = document.querySelectorAll(".slide-in")

function checkSlide(event){
    imagesSliding.forEach(image => {
        //Halfway through the image it should appear.
        const slideInAt = window.scrollY +  window.innerHeight - image.height/2
        console.log(slideInAt) 
        //Once it passed it should be back out.
        const imgBottom = image.offsetTop + image.height

        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imgBottom
        if (isHalfShown && isNotScrolledPast){
            image.classList.add('active')
        }else{
            image.classList.remove('active')
        }
    })
    console.count(event)
}

window.addEventListener('scroll', debounce(checkSlide))

//Loop all the images and when it is peaked, show them
