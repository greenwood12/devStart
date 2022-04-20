// 카테고리 페이지 JS - category.js

// GET 방식으로 넘온 값 받기!
let pm = location.href;


if(pm.indexOf("?")===-1) {
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
}
/// if //////////////////////////////

// 물음표와 이퀄로 자르고 값만 가져오기
pm = pm.split("?")[1].split("=")[1];
console.log("카테고리:", pm);
// 에러방지를 위해 물음표 체크!!!


//////////// 로딩구역 /////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료");

    let db = new Vue({
        // 바인딩할 대상(변경요소를 포함하는 부모요소) -> 아이디만 적용됨!
        el:"#cont",
        data : {                    
            // jSon 데이터가 객체임~
            vals : {},
            //
            catName : pm

        },mounted : function() {
            // 외부 파일을 가져 오기 위해 axios 라이브러리를 사용함!
            // 당연히 상단에 라이브러리가 있어야함!
            axios // 액시오스 객체
            .get("js/real.json") // 파일읽기
            //.then(res=>this.vals = res)
            .then((x)=>{this.vals = x}); // 할당(x 변수로 전달!)            
        }, /// mounted //////////////////////////////////////////
        methods :{
            // 탭 타이틀 변경 메서드
            chgTit : function(tit) {
                //document.querySelector("title").innerText = tit+" | 보그 코리아 (Vogue Korea)";
                $("title").text(tit+" | 보그 코리아 (Vogue Korea)");
            }
            /// chgTit 메서드 ///////////////////////////////////
        } /// methods ///////////////////////////////////////////
    });
    // Vue ////////////////////////////////////////////////////////////////////
    
    /// 뷰 JS 체험존 GNB 메뉴 클릭시 셋팅 /////////////////////////////////
    $(".Vuegnb a").click(function(e){
        // 기본 기능막기
        e.preventDefault();

        let txt = $(this).text().toLowerCase();
        // toLowerCase() 소문자변환
        console.log("체험존 : ", txt);

        // 파라미터 변수값 업데이트

        // pm 값이 뷰 JS 인스턴스 안에 catName 변수로 셋팅되어 있지만 이값을 업데이트 해도
        // 페이지가 업데이트 되지 않는다!
        // 왜? 이것은 뷰JS의 변수가 아니기 때문!!!

        // 뷰 JS의 대표특징인 양방향바인딩 즉,
        // 뷰 JS를 업데이트 하면 화면이 업데이트 되는 구조 기능!
        // 뷰 JS의 데이터인 catName을 업데이트 하면 된다!!!
        
        // 뷰 JS의 변수 접근법 :
        // 뷰 JS 인스턴스를 변수에 담는다.
        // 변수.$data.변수명 = 값

        pm = txt;
        console.log("체험존 pm 업데이트:", pm);
        db.$data.catName = txt;
    });


    /// 뷰 JS 체험존 GNB 메뉴 클릭시 셋팅 /////////////////////////////////

}); ///////////// 로딩구역 ////////////////////////
//////////////////////////////////////////////////

