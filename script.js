'use strict'

/// Recent Trips Slider (Start)
// Elements 

const recentSliderNextbtn = document.querySelector('.recent-trips-img-controls-next');
const recentSliderPrevbtn = document.querySelector('.recent-trips-img-controls-previous');
const recentSliderimg = document.querySelector('.recent-trips-img');
const recentSliderinnerImg = document.querySelector('.recent-trips-slider-images-inner');


let firstSlide = 55;
let lastSlide = 55;

const recentSlideChange = function (firstNo, lastNo) {
    const nextSlide = document.querySelector(`.recent-trips-content-slide-main-${firstNo}`);
    const prevSlide = document.querySelector(`.recent-trips-content-slide-main-${lastNo}`);
    recentSliderinnerImg.src = `Images/Img--${firstNo}.png`
    nextSlide.classList.remove('display-None');
    prevSlide.classList.add('display-None')

};

const NextSlideChange = function () {
    firstSlide++
    if (firstSlide <= 6) {
        recentSlideChange(firstSlide, lastSlide);
        lastSlide = firstSlide;
    } else if (firstSlide >= 6) {
        firstSlide = 1;
        lastSlide = 6;
        recentSlideChange(firstSlide, lastSlide);
        lastSlide = firstSlide;
        console.log(firstSlide, lastSlide)
    }
};

const PrevSlideChange = function () {
    firstSlide--
    if (firstSlide > 0) {
        recentSlideChange(firstSlide, lastSlide);
        lastSlide = firstSlide;
    } else if (firstSlide <= 0) {
        firstSlide = 6;
        lastSlide = 1;
        recentSlideChange(firstSlide, lastSlide);
        lastSlide = firstSlide;
    }
};

let recentSliderDeg = 0;
recentSliderNextbtn.addEventListener('click', function (e) {
    e.preventDefault();
    recentSliderDeg -= 60;
    recentSliderimg.style.transform = `rotate(${recentSliderDeg}deg)`;
    NextSlideChange();
});

recentSliderPrevbtn.addEventListener('click', function (e) {
    e.preventDefault;
    recentSliderDeg += 60;
    recentSliderimg.style.transform = `rotate(${recentSliderDeg}deg)`;
    PrevSlideChange();
});

