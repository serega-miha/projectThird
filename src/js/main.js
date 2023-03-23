import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";


window.addEventListener('DOMContentLoaded', ()=>{

    const slider = new Slider('.page', '.next');
    slider.render();




    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    const hanson = document.querySelector('.hanson');
    hanson.classList.add('hide');
    setTimeout(function(){
        hanson.classList.remove('hide');
        hanson.classList.add('show');

    },3000)



})
 