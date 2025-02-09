// 버튼 선택 이벤트 핸들러
const buttons = document.querySelectorAll('.option-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 모든 버튼의 선택 초기화
    buttons.forEach(btn => btn.classList.remove('selected'));

    // 클릭한 버튼에 선택 스타일 추가
    button.classList.add('selected');
  });
});

function saveRequest() {
    const requestMessage = document.getElementById('request-message').value;
  
    // 요청사항 저장 경고 메시지만 출력
    if (requestMessage.trim() !== '') {
      alert('요청사항이 저장되었습니다.');
    } else {
      alert('요청사항을 입력해 주세요.');
    }
  }
  
  // 기타 버튼 클릭 시 리디렉션 기능 추가
document.getElementById('other-button').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/acrt2/Desktop/directory/move.html'; // 이동할 사이트 URL
  });
  