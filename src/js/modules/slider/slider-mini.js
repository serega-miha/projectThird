import Slider from './slider';


export default class MiniSlider extends Slider {
    constructor(container, next,prev, activeClass, animate, autoplay) {
        super(container, next,prev, activeClass, animate, autoplay);
    }

   
    nextSlide(){
        for (let i = 1; i < this.slides.length; i++){
            if (this.slides[i].tagName !== "BUTTON") {
            this.container.appendChild(this.slides[0]);
            this.decorizeSlides();
            break;
        } else {
            this.container.appendChild(this.slides[1]);
            i--;
        }
    }
    }


    decorizeSlides(){

      
        
        Array.from(this.slides).forEach(slide =>{
           
           
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        }); 
        if (!this.slides[0].closest('button')){
            this.slides[0].classList.add(this.activeClass);
            
           
            // if (this.slides[1].classList.contains('slick-next') || this.slides[1].classList.contains('slick-prev')){
            //     this.container.appendChild(this.slides[1]); 
            //     this.container.appendChild(this.slides[1]);
            // }
          
        
        }
        
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', ()=>{
            this.nextSlide();
           
            // this.container.appendChild(this.slides[0]);
            // this.decorizeSlides();
           
        });
        this.prev.addEventListener('click', ()=>{
            for (let i = this.slides.length - 1; i > 0; i++){
                if (this.slides[i] !== "BUTTON" ) {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
            }

            // let active = this.slides[this.slides.length - 1];
            // this.container.insertBefore(active, this.slides[0]);
    
            // this.decorizeSlides();
        })
    }

    autoplayGo(){
        let autoplay =  setInterval(()=> {
            this.nextSlide();
        }, 5000);

        this.slides[0].parentNode.addEventListener('mouseenter', () =>{
            clearInterval(autoplay);
        });
        this.next.addEventListener('mouseenter', () =>{
            clearInterval(autoplay);
        });
        this.prev.addEventListener('mouseenter', () =>{
            clearInterval(autoplay);
        });
    }





init(){
    try{ 
        this.container.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: flex-start;
    `
    this.bindTriggers();
    this.decorizeSlides();


    if (this.autoplay) {
      this.autoplayGo();

      this.slides[0].parentNode.addEventListener('mouseleave', () =>{
        this.autoplayGo();
    });
    this.next.addEventListener('mouseleave', () =>{
        this.autoplayGo();
    });
    this.prev.addEventListener('mouseleave', () =>{
        this.autoplayGo();
    });
       
    }


    } catch(e){}

}
}