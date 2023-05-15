import Slider from './slider';


export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns)
    }

    showSlides(n){
        if (n > this.slides.length) {
            this.slidIndex = 1;
        }
        if (n < 1) {
            this.slidIndex = this.slides.length;
        }

        Array.from(this.slides).forEach(slide =>{
            slide.classList.add('hide');
            slide.classList.remove('show');
        });
        this.slides[this.slidIndex - 1].classList.add('show');
        this.slides[this.slidIndex - 1].classList.remove('hide');
    }

    plusSlides(n){ 
        this.showSlides(this.slidIndex += n);
    
       try {
        if (this.slidIndex === 3) {
            const hanson = document.querySelector('.hanson');
            hanson.classList.add('hide');
            setTimeout(function(){
                hanson.classList.remove('hide');
                hanson.classList.add('show');
        
            },3000)
        } 
       } catch(e){};
    }


    bindTriggers() {
        this.btns.forEach(item =>{
            item.addEventListener('click', ()=>{
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e)=>{
                e.preventDefault();
                this.slidIndex = 1;
                this.showSlides(this.slidIndex);
            });


        });
        document.querySelectorAll('.prevmodule').forEach(item =>{
            item.addEventListener('click', (e)=>{
                e.stopImmediatePropagation();
                e.preventDefault();
                this.plusSlides(-1);
            })
        })
        document.querySelectorAll('.nextmodule').forEach(item =>{
            item.addEventListener('click', (e)=>{
                e.stopImmediatePropagation();
                e.preventDefault();
                this.plusSlides(1);
            })
        })

    }



    render(){
        
       if (this.container){
        this.showSlides(this.slidIndex);
        this.bindTriggers();
       
       }
    }
}