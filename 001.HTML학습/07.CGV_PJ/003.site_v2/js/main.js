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


//////// 로딩구역 ///////////////////////////////////////////////////////////////
window.addEventListener("load", ()=>{
    console.log("로딩완료!");
    // 포스터 a요소 클릭시 영화 변경하기
    // 대상 : .mlist a

    const mcode = {
        "듄":"-5Dc8EMVYBo",
        "유체이탈자":"_fuaoomS7zs",
        "이터널스":"'BdkSkI61aGo",
        "연애 빠진 로맨스":"dWEQjU3GCE0",
        "프렌치 디스패치":"Y1_Ujpsn1Jc",
        "스파이더맨:노웨이홈":"",
    };


    let mlink = document.querySelectorAll(".mlist a");
    console.log("a링크개수 :", mlink.length);
    // 클릭이벤트 속성 셋팅하기
    for(let x of mlink) {
        x.onclick = () => {            
            // 각 a요소를 구분해주는 것
            // -> 자식요소 중 img의 alt 속성에 영화 제목있음!
            let mtit = x.querySelector("img").getAttribute("alt");
            console.log("영화제목", mtit);

            //2.영화코드객체에서 값을 읽어와서 chgMV함수 호출
            chgMV(mcode[mtit]);

            //3. a요소 #으로 인한 상단튐 방지하기
            return false;
        };
        // click 함수 ///////////////////////////////////////////////////////////
    }
    /// for of///////////////////////////////////////////////////////////////////


    // 포스터 메뉴 li 클릭시 li에 클래스 on넣기
    // 대상 : .glist ul>li
    let mlist = document.querySelectorAll(".mlist ul>li");
    console.log("리스트개수", mlist.length);

    const resetFn = ()=>{        
        for(let x of mlist) {            
            x.classList.remove("on");
        }    
    };

    // 대상만큼 click이벤트 설정하기
    // for of 사용!/////////////////////////////////////////////////////////////
    for(let x of mlist) {
        //1. 클래스 초기화함수 호출        
        //2. 해당 li요소 클래스 on 넣기
        x.onclick = ()=>{
            resetFn();            
            x.classList.add("on");
        };
        /// click ///////////////////////////////////////////////////////////////
    }
    // for of///////////////////////////////////////////////////////////////////
});
//////// 로딩구역 ///////////////////////////////////////////////////////////////