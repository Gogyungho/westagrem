const inputWrap = document.querySelector('.input_wrap');

inputWrap.addEventListener('keyup', function Button(){
    let Text = document.querySelector('#textid').value;
    let Password = document.querySelector('#password').value;
    
    if (Text !== "" && Password !== ""){
        return document.querySelector('.login_button').style.backgroundColor = 'rgb(100, 182, 248)';
    }
});
