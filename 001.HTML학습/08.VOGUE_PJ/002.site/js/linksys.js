//보그 PJ - 링크 시스템 JS - linksys.js

// JQB ///////////////////////////////////////////////////
$(()=>{
    console.log("로딩완료");
    //GNB 메뉴 a요소 클릭시 링크 연결하기

    //메인 로고 클릭시 첫페이지로 이동하기
    $(".logo a").click(()=>location.href="index.html");

    $(".gnb a").click(function(e){
        // a요소 기본이동기능 막기
        e.preventDefault();

        // trim() - 앞뒤공백 제거!
        // toLowerCase() - 소문자로 변환!
        // 참고) toUpperCase() - 대문자로 변환
        let txt = $(this).text().trim().toLowerCase();
        console.log("메뉴글자 : ", txt);

        // "search" 만 아니면 카테고리 페이지로 보냄
        if(txt!=="search") 
            location.href ="category.html?cat="+txt;
    });
});
// JQB ///////////////////////////////////////////////////