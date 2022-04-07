// 보그 PJ 공통 JS - common.js

/////// 로드 구역 ////////////////////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료");

    // 스크롤값 변수
    let scTop;
    // 상단영역 변수 - #top
    let topA = document.querySelector("#top");
    // 위로가기버튼 - .tbn
    let tbtn = document.querySelector(".tbtn");

    /********************************************************
        [윈도우 세로 스크롤 위치값 가져오는 방법]
        1. this.scrollY (this키워드가 window의미)
        2. window.scrollY
        3. document.scrollingElement.scrollTop
        4. document.documentElement.scrollTop
        5. document.querySelector("html").scrollTop

        참고) 가로스크롤일 경우
            scrollY -> scrollX
            scrollTop -> scrollLeft
            로 바꿔서 위와 동일함!
    ********************************************************/ 
    window.addEventListener("scroll", ()=>{
        // 스크롤 위치값
        // scrollY 세로축 스크롤 위치값 리턴
        // this는 화살표함수에서 window 객체임!
        scTop = this.scrollY;
        //console.log("스위:",scTop);

        //////////////////////////////////////////////////
        // 상단메뉴 슬림 변경 하기 /////////////////////////
        //////////////////////////////////////////////////
        // 1. 스크롤 위치가 100px 이상일때
        // 변경사항 : #top 에 클래스 on 넣기
        if(scTop >= 100) topA.classList.add("on");

        //2. 스크롤 위치가 100px 미만일때(else)
        // 변경사항 : #top에 클래스 on 제거
        else topA.classList.remove("on");

        //////////////////////////////////////////////////
        // 위로가기 버튼 보이기 ////////////////////////////
        //////////////////////////////////////////////////
        // 1. 스크롤 위치가 200px 초과일때
        // 변경사항 : #top 에 클래스 on 넣기
        if(scTop > 200) tbtn.classList.add("on");

        //2. 스크롤 위치가 100px 미만일때(else)
        // 변경사항 : #top에 클래스 on 제거
        else tbtn.classList.remove("on");

        //////////////////////////////////////////////////
        /////// 등장액션 클래스 주기 //////////////////////
        /////////////////////////////////////////////////
    });
    /// scroll //////////////////////////////////////////

    /****************************************************
        원리 : 
        scAct 변수에 .scAct 클래스요소를 담고
        요소의 개수만큼 scPos 배열변수에 위치값을 셋팅한다!
    ****************************************************/
    //스크롤 등장 대상요소
    let scAct = document.querySelectorAll(".scAct");
    // 스크롤 등장 대상위치 배열
    let scPos =[];
    // 대상요소만큼 for문 돌기 -> for of
    for(let i=0; i<scAct.length; i++) {
        scPos[i] = scAct[i].offsetTop;
    }
    // for 문 ///////////////////////////////////////////
    console.log(scPos);
});