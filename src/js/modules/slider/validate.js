export default class Validate {
    constructor(inputs, inputPhone){
       try {
        this.inputs = document.querySelectorAll(inputs);
        this.inputPhone = document.querySelector(inputPhone);

       } catch(e){}
    }


    

validateInput(inputs){
    inputs.forEach(input =>{
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z 0-9 _ @ - \.]/ig)) {
                
                e.preventDefault();
                
            }
        })
    })
}

validatePhone(inputPhone){
    const phoneMask = new IMask(inputPhone, {
        mask: "+1 (000)000-0000",
      });
}


init(){
try{
    this.validateInput(this.inputs);
    this.validatePhone(this.inputPhone);

} catch(e){}
}



}