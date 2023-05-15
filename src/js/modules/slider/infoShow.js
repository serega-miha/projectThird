
export default class InfoShow {
    constructor(moduleInfoBtn){
        this.moduleInfoBtn = document.querySelectorAll(moduleInfoBtn);
    }

  


init(){
    this.moduleInfoBtn.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            btn.parentElement.nextElementSibling.classList.toggle('show');
        })
    })
}


}



