let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function initMap() {
    const location = { lat: 2.470560, lng: 99.144969 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Jl. Simpang Sigura-gura No. 1, Porsea'
    });
}
