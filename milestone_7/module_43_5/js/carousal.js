const images = [
    'images/img_1.jpg',
    'images/img_2.jpg',
    'images/img_3.jpg',
    'images/img_4.jpg',
    'images/img_5.jpg',
    'images/img_6.jpg',
    'images/img_7.jpg',
];

let imgIndex = 0;

const carousalImage = document.getElementById('carousal-img'); 

setInterval( () => {
    if (imgIndex >= images.length ) {
        imgIndex = 0;
    }
    carousalImage.setAttribute('src',images[imgIndex]);
    // console.log(images[imgIndex]);
    imgIndex++
}, 2000);