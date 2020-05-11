/* input 값을 불러와서 엔터키를 누르면 실행되는 이벤트를 만든다. 
엔터를 누르면 p 태그가 생성되고 그 안에 내용은 input값에 입력한 내용으로 한다. 
*/

// function pressEnter(){
//     if (event.keyCode == 13){

//     }
// }
const element1 = document.createElement("p");
const inputValue = document.getElementById('comment').value;
element1.appendChild('inputValue');
        
function pressEnter(){
    

    if (event.keyCode == 13){
        
        document.body.getElementsByClassName('feeds-left')[0].getElementsByClassName('text')[0].appendChild('element1');
    }
}
pressEnter();


// commentInput.addEventListener('keydown', function(event){
//     if(event.keyCode === 13){
//         let dTag = document.createElement('div');
//         dTag.innerHTML = commentInput.value.slice(0, commentInput.value.length);
//         reply.appendChild(dTag);
//     }
// })