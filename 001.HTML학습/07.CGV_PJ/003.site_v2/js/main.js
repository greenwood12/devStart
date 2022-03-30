//CGV 메인 페이지 JS - main.js

/*************************************************************
    함수명 : chgMV
    기능 : 영화예고편을 변경함
*************************************************************/ 
function chgMV(mvid) { //mvid - 영화아이디값 전달변수
    //1. 함수호출 확인!
    console.log("나야나!", mvid);
    let tag = document.querySelector("#screen iframe");
    //※ iframe 넣을때 꼭 확인 아이디 뒤에 파라미터 값이 옴
    let url = `https://www.youtube.com/embed/${mvid}?autoplay=1&playsinline=1`;
    tag.src = url;    
    //src="https://www.youtube.com/embed/-5Dc8EMVYBo"
}
///////////////////////// chgMV /////////////////////////////