// 옷소매 갤러리 JS - main.js


// window.addEventListener("DOMContentLoaded",()=>{

//     console.log("로딩완료!");

// }); 

///////////////// 로딩구역 ///////////////////////
$(()=>{
    console.log("로딩완료!");

    // 양쪽 이동버튼 클릭 ////////////////////////
    // 대상 : .abtn

    // 변경대상 : .gbx -> 갤러리 부모박스
    let gbx = $(".gbx");
    //광클금지 상태변수
    let prot = 0; //0-허용, 1-막기

    $(".abtn").click(function() {
        console.log("오른쪽이냐?", $(this).is(".rb"));

        // 광클금지 ///////////////////////////////////
        if(prot) return;
        prot =1;//  잠금
        setTimeout(() => {
            prot = 0;
        }, 400);

        //1. 오른쪽 버튼 클릭시
        // 선택자 .is(".rb") -> 클래스가 "rb"면 true

        // if ~ else ///////////////////////////////////
        if($(this).is(".rb")) {
            // 오른쪽이동은 맨앞 div요ㅗ소를 맨뒤로 이동!
            // 대상 : .gbx -> gbx변수
            gbx.append(gbx.find("div").first());
        } else { 
            // 왼쪽 이동은 맨뒤 div를 맨 앞으로 이동
            // 대상 : .gbx -> gbx변수
            // prepend(맨뒤 div)
            gbx.prepend(gbx.find("div").last());
        }
        // if ~ else ///////////////////////////////////
        // 자동넘김 지우기
        clearInterval(autoI);
        // 일정시간후 자동호출! *쓰나미 실행방지!
        clearTimeout(autoT);
        // 4초후 자동넘김함수 호출!
        autoT = setTimeout(autoCall, 4000);
    });

    // 인터발용 변수 ////////////////////////////////////
    let autoI;
    // 타임아웃용 변수 //////////////////////////////////
    let autoT;
    //자동넘김 함수 /////////////////////////////////////
    const autoCall = ()=>{
        autoI = setInterval(()=>{            
            // trigger(이벤트) -> 이벤트 강제발생!
            //$(".rb").trigger("click");
            gbx.append(gbx.find("div").first());
        }, 2000);
    };
    // 자동넘김 함수 최초 호출 ! ////////////////////////
    autoCall();
});
///////////// 로딩구역 //////////////////////////
/////////////////////////////////////////////////