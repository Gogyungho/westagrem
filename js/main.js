

// document.querySelector('#comment').addEventListener('keydown', function(e){
//     if(e.keyCode === 13){
//      return alert("빨리좀해!!");
     
//     }
// });

/* 게시 Color Change */
const commentButton = document.querySelector('.comment_event');

commentButton.addEventListener('keyup', function Button(){
    let Text_aa = document.querySelector('#comment_value').value;
    if (Text_aa !== ""){
        return document.querySelector('.comment_upload_button').style.color = '#289aff';
    }
});




/* 엔티키 이벤트 댓글 */    
document.querySelector(".comment_event").addEventListener('keydown', function(e){
        
        
    if(e.keyCode === 13){
        let textDiv = document.createElement('div');
        let textStrong = document.createElement('strong');
        textStrong.innerHTML = "__goguard";
        let inputTextValue = document.querySelector('#comment_value').value;
        console.log(inputTextValue);
        let textNode = document.createTextNode(inputTextValue);
        textDiv.appendChild(textStrong);
        textDiv.appendChild(textNode);
        document.body.querySelector('.text-container').appendChild( textDiv );
        document.querySelector('#comment_value').value=""
        document.querySelector('#comment_value').blur()
    }
});


/* 게시 버튼 클릭 댓글 */
const inputVlaue = document.querySelector(".comment_upload_button");
        inputVlaue.addEventListener('click', function(){
        
            let textDiv = document.createElement('div');
        let textStrong = document.createElement('strong');
        textStrong.innerHTML = "__goguard";
        let inputTextValue = document.querySelector('#comment_value').value;
        console.log(inputTextValue);
        let textNode = document.createTextNode(inputTextValue);
        textDiv.appendChild(textStrong);
        textDiv.appendChild(textNode);
        document.body.querySelector('.text-container').appendChild( textDiv );
        document.querySelector(".comment_upload_button").value ="";
        document.querySelector("#comment_value").value=""
});