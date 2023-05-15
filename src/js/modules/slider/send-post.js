


export default class SendPost {
    constructor(thanks, error, close, forms) {
        this.thanksName = thanks;
        this.errorName = error;
        this.btnClose = close;
        this.forms = document.querySelectorAll(forms); 
    }

    // 'thanks', 'error', '.popup__close', 'form'


//==Popup
 





popuOpen(name){
    const popup = document.querySelector(`.popup-${name}`),
        btnClose = popup.querySelector(this.btnClose);
        popup.classList.add('active','animated', 'fadeIn');
        popup.addEventListener('click', (e)=>{
            
            if (e.target === popup || e.target === btnClose) { // мы добавили еще один аргемент в вызов функции и теперь можем управлять в каких окнам можно закрывать на подложке
              this.popupClose(name);
            }
    });
    setTimeout(() =>{
        this.popupClose(name);
    },4000);
}


popupClose(name){
    const popup = document.querySelector(`.popup-${name}`);
    popup.classList.remove('active','animated','fadeIn');


    
}



//==Forms



async postData(url, data){
    let response = await fetch(url, {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: data
})
return await response.json();
}







init(){
    this.forms.forEach(form =>{
        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
        
            this.postData('http://localhost:3000/requests',json )
                   .then(data => {
                    console.log(data);
                    form.reset();
                    this.popuOpen(this.thanksName);
                    // thanksModalText.innerHTML = message.success;
                    // showThanksModal();
                }).catch(() =>{
                    // thanksModalText.innerHTML = message.error;
                    // showThanksModal();
                    form.reset();
                    this.popuOpen(this.errorName);
                    // closeAllPopup()
                }).finally(() =>{
                    form.reset();
                })

        })
    })




}




}