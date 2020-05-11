const inputwrap = document.getElementsByClassName('input_wrap')[0];

function Button(){
    let Text = document.getElementById('text').value;
    let Password = document.getElementById('password').value;
	const thisIsButton = document.getElementByClassName('login_button')[0];
    if (Text.length !== 0){
        thisIsButton.style.backgroundColor ='blue';
    }
}

inputwrap.addEventListener('keyup', Button);
