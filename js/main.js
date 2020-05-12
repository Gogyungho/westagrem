

// document.querySelector('#comment').addEventListener('keydown', function(e){
//     if(e.keyCode === 13){
//      return alert("빨리좀해!!");
     
//     }
// });



document.querySelector('#comment').addEventListener('keydown', function(e){
    const inputTextValue = document.querySelector('#comment').value;
    let textStrong = dociment.createElement('strong');
    let textDiv = document.createElement('div');
    textStrong.innerHTML = "__goguard";
    textDiv.appendChild(textStrong);
    textDiv.appendChild(inputTextValue);
    if(e.keyCode === 13){
        
    document.body.querySelector('.feeds-left').querySelector('.text').appendChild(textDiv);
     
    }
});