// 쇼핑몰 배너 JS //
// 로드구역 ////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    /************************************************************** 
        [ 슬라이드 이동 기능정의 ]
        1. 이벤트 종류: 클릭
        2. 이벤트 대상: 이동버튼(.abtn)
        3. 변경 대상: 슬라이드 박스(#slide)
        4. 기능흐름: 
        (1) 오른쪽버튼 클릭시 다음슬라이드가
            나타나도록 슬라이드박스의 left값을
                -100% 로 이동시킨다!
                -> 이때 바깥에 나가 있는 첫번째 슬라이드 li를 잘라서
                   맨뒤로 보낸다! 동시에 left값을 0으로 변경함!
        
        (2) 왼쪽버튼 클릭시 
            먼저 맨뒤의 슬라이드 li를 맨 앞으로 이동시킨다!
            이때 left -100%로 변경한다!
            이후 left 값을 0으로 변경하며 애니메이션함


        5. 추가기능: 슬라이드 위치표시 블릿
        - 블릿대상 : .indic li
        - 변경내용 : 슬라이드 순번과 같은 순번의
        li에 클래스 "on"주기(나머진 빼기-초기화)

    **************************************************************/

    // 이벤트 대상 : .abtn
    let abtn = document.querySelectorAll(".abtn");
    // 변경 대상 : 슬라이드 -> #slide
    let slid = document.querySelector("#slide");
    // 변경 대상 : 블릿 -> .indic li
    let indic = document.querySelectorAll(".indic li");

    // 슬라이드 li순번 속성 주기! ///////////////////////////
    // 주는 이유 : li가 잘려서 이동하므로 순서가 항상 바뀌므로
    // 고유한 순서를 지정하기 위함!
    // 지정방법 : li에 data-속성명 으로 사용자 정의 속성을 준다!
    // (사용자정의 속성은 data-로 시작하는 속성명이다!)
    // 한번만 실행하는 재귀호출 함수 -> (함수)()

    (()=>{
        // 대상 : #slide li
        let tg = slid.querySelectorAll("li");
        for(let i=0; i<tg.length; i++){
            tg[i].setAttribute("data-seq", i);
        }
        /// for ////////////////////////////////////////////////////
    })();

    // 광클금지 상태값
    let prot = 0; // 1-금지, 0-허용

    /***************************************************************
        함수명 : goSlide
        기능 : 슬라이드를 왼쪽/오른쪽 이동함
    ***************************************************************/ 
   const goSlide = dir =>{ // dir - 이동방향 (1: 오른쪽, 0: 왼쪽)
        console.log("잠금상태:", prot);
        // 0 광클금지 /////////////////
        if(prot) return; //돌아가
        prot = 1;
        setTimeout(()=>prot=0, 600);
        // 0.6초후 잠금해제! /////////////


        //1. 전달값 확인
        console.log("이동", dir);

        //1.5. 슬라이드 li요소들 변수할당!
        let sli = slid.querySelectorAll("li");

        //2. 방향분기 //////////////////////////////////////////////
        //2-1. 오른쪽 버튼
        if(dir) { // dir === 1 이면 true
            //(1) 슬라이드박스의 left값을 -100%로 이동
            slid.style.left = "-100%"
            slid.style.transition = ".6s ease-out";

            // 슬라이드 이동후 (2), (3)실행함
            //(2) 이동후 첫번째 슬라이드 li를 잘라서 맨뒤로 보낸다!
            setTimeout(() => {
                // appendChild(요소) - 선택요소 맨뒤로 이동
                slid.appendChild(slid.querySelectorAll("li")[0]);
                //(3) 동시에 left값을 0으로 변경함!
                slid.style.left= "0";
                slid.style.transition = "none";

                for(let x of indic) x.classList.remove("on");        
                let sld2 = slid.querySelectorAll("li");
                let seq = sld2[0].getAttribute("data-seq");
                indic[seq].classList.add("on");

                // 트랜지션 없어야 애니메이션 안보임
            }, 600);/// 타임 아웃 ///
        } else {
            // (1)먼저 맨뒤의 슬라이드 li를 맨 앞으로 이동시킨다!
            // insertBefore(넣을넘, 넣을놈전놈)
            // sli.length-1 -> 컬렉션 마지막번호는 [개수 -1]
            slid.insertBefore(sli[sli.length-1], sli[0]);

            //(2) 이때 left -100%로 변경한다!(트랜지션 없음!)
            slid.style.left = "-100%";
            slid.style.transition = "none";

            // 이때 left -100%로 변경한다!
            // (3) 이후 left 값을 0으로 변경하며 애니메이션함            
            // 주의 : 위의 설정코드 와 분리를 위해 setTimeout으로 약간의 시차를 줌!
            setTimeout(()=>{
                slid.style.left ="0";
                slid.style.transition = ".6s ease-out";      

                for(let x of indic) x.classList.remove("on");        
                let sld2 = slid.querySelectorAll("li");
                let seq = sld2[0].getAttribute("data-seq");
                indic[seq].classList.add("on");
            }, 10);
        }
        /// if 문 ////////////////////////////////////////////////

        // 3. 슬라이드 순번과 동일한 순번의 블릿변경하기
        // 변경방법: 슬라이드 li의 data-seq의 숫자를 읽어서
        // 블릿 li의 나머지 블릿은 모두 on을 없애고 해당순번에 class="on"을 준다!

        // 초기화!(class="on" 지우기)
        /*for(let x of indic) x.classList.remove("on");
        // 갱신된 li읽어오기! (오른쪽, 왼쪽이동후)
        let sld2 = slid.querySelectorAll("li");
        // 슬라이드 의 data-seq 의 값을 읽어옴!
        // getAttribute(속성명) - > 속성값읽어오기
        // setAttribute(속성명, 속성값) - > 속성값 넣기
        let seq = sld2[dir].getAttribute("data-seq");
        // 해당순번에 class="on" 넣기
        indic[seq].classList.add("on");
        */
   };
   // goSlide 함수 ////////////////////////////////////////////////

    // 오른쪽버튼 클릭시
    abtn[1].onclick = ()=> goSlide(1);
    // 왼쪽버튼 클릭시
    abtn[0].onclick = ()=> goSlide(0);

}); ///////////// load ////////////////////////////////////////////