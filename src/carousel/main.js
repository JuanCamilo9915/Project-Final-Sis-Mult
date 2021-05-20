document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        durartion:150,
        dist:100,
        shift:5,
        padding:5,
        numVisible:3,
        indicators:true,
        noWrap:false
    });
});