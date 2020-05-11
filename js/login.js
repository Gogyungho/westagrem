// const thisIsButton = document.getElementByClassName('login_button')[0];

// thisIsButton.addEventListener('keyup', function(){
//     let Text = document.getElementByID('text').value;
//     let Password = document.getElementById('password').value;

//     if (Text && Password){
        
//     }
// });

// id 와 pw 가져와서 변수에 담는다
const idInput = document.getElementById('idInput');
const pwInput = document.getElementById('pwInput');
// 이벤트를 감지할 id 와 pw input 을 감싸고 있는 element 를 가져온다
const inputContainer = document.getElementById('inputWrapper');
// 활성화될 스타일을 담은 클래스 이름을 변수에 담는다 - active 가 되면 클래스 이름 추가해서 버튼 활성화
const loginBtnColor = "btnActive";
//
function showBtn() {
// 각각의 id 와 pw input value 를 가져온다
	let idInputValue = idInput.value;
  	let psInputValue = pwInput.value;
// 활성화할 버튼을 가져온다
  	let loginBtn = document.getElementByClassName('loginBtn')[0];
// if 문 실행 만약 id, pw 중 하나라도 비어있다면 버튼 활성화 x
  	if (idInputValue !== "" && psInoutValue !== "") {
// 비어있지 않다면 버튼에 클래스 추가
    	loginBtn.classList.add(loginBtnColor);
    } else {
    	loginBtn.classList.remove(loginBtnColor);
    }
}

// 초반 이벤트 부분
pwInput.addEventListener("keyup", showBtn);
// 오류 확인 후 수정
// inputContainer 에 keyup 이벤트가 실행되면 showBtn 함수 실행 
inputContainer.addEventListener("keyup", showBtn);