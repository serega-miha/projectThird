export default class Download {
    constructor(triggers){
        this.btn = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg' ;
    }

    downloadItem(path){
        const element = document.createElement('a');

        element.setAttribute('href', path);
        element.setAttribute('download', 'nice_picture');

        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        console.log('download');
    }

    init(){
        this.btn.forEach(btn =>{
            btn.style.cursor = 'pointer';
            btn.addEventListener('click', (e) =>{
                e.stopPropagation();
                e.preventDefault();
                this.downloadItem(this.path)
            })
        })
    }


}