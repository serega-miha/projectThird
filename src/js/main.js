import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import ShowRow from "./modules/slider/show-row";
import Validate from "./modules/slider/validate";
import IMask from 'imask';
import SendPost from "./modules/slider/send-post";
import InfoShow from "./modules/slider/infoShow";
import Download from "./modules/slider/download";



window.addEventListener('DOMContentLoaded', ()=>{

    const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();


    new MainSlider({container:'.moduleapp', prev:'.prevmodule' ,next:'.nextmodule', btns: '.next'}).render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
        
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();


    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new ShowRow('.officerold', '.officernew', '.officer__card-item').init();


    new Validate("input[type = 'email']",'input[name = "phone"]').init();

    new SendPost('thanks', 'error', '.popup__close', 'form').init();

    new InfoShow('.module__info-show .plus').init();

    new Download('.download').init();




   
   
 















})
 