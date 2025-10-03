function muestra_oculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == "none") {
     div.style.display = "flex";
    }
    else {   
        div.style.display = "none";
    }   
}

const myCarouselElement = document.querySelector('#carouselExampleIndicators')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 300,
  touch: true
})
