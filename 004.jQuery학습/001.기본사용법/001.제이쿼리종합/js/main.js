// 제이쿼리 기본 JS - main.js
/////////////// JQB////////////////////////////////////////////////
$(()=>{
    console.log("로딩완료!");

    /**************************************************************
        1. 대상선정 변수할당
    **************************************************************/ 
   // 대상1 : 버튼들 - .btns>button
    let btns = $(".btns>button");
    console.log("버튼개수:", btns.length);

    //대상2 : 미니언즈 - .mi
    let mi = $(".mi");
    console.log("미니언즈개수", mi.length);

    //대상3 : 빌딩각방 - .building li
    let bd = $(".building li");
    console.log("방 개수", bd.length);

    //대상4 : 메시지 박스 - .msg
    let msg = $(".msg");

    // 삽입 이미지 변수 셋팅 ////////////////////////////////////////
    // 좀비 이미지 태그
    let mz1 = `<img src="images/mz1.png" alt="좀비1" class="mz">`;
    let mz2 = `<img src="images/mz2.png" alt="좀비1" class="mz">`;
    let zom = `<img src="images/zom.png" alt="좀비들" class="mz">`;
    // 주사기 이미지
    let inj = `<img src="images/inj.png" alt="주사기" class="inj">`;

    //미니언즈 가로위치 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width() *0.05;
    console.log("가로크기의 5%", win5);
    // width() 가로크기, height() 세로크기
    //-> 단위 없는 px 숫자값 리턴함!

    /**************************************************************
        2. 초기화 셋팅
    **************************************************************/ 
    // 2-1. 버튼셋팅 : 모든버튼 숨기고 첫번째만 보이게 함
    // 버튼들.숨겨().첫번째().보여()
    btns.hide().first().show();
    // 중간 테스트를 위한 버튼 보이기 셋팅
    //btns.hide().eq(0).show();
    //btns.hide().eq(5).show();

    //빌딩 숫자 셋팅 :
    //-> 모든 빌딩 li를 순서대로 돌면서 순번넣기 + 좀비넣기
    // 대상 : 빌딩 li -> bd변수

    /**************************************************************
        [for문을 사용하지 않고 돌게 해주는 제이쿼리 메서드]
        >>> each(function(idx, ele){구현부})
        >>> each((idx, ele)=>{구현부})

        - 선택요소를 순서대로 돌면서 구현부를 실행함
        - idx 첫번째 전달변수는 순번이 전달됨(0부터)
        - ele 두번째 전달변수는 요소자신
        (this 키워드와 동일 - 단, 화살표함수가 아닐때)
        - 전달변수는 순서와 개수가 중요함!
        - 이 메서드를 사용하면 for문을 안써도 됨!
    **************************************************************/ 

    bd.each((idx, ele)=>{
        //console.log(idx);
        //1. 각 li요소에 글자 넣기(순번)
        $(ele).text(idx);

        //2. 좀비 + 주시가 넣기
        //append(요소) - 선택요소 내부에 맨뒤추가
        if(idx===9) $(ele).append(mz1);
        else if(idx===7) $(ele).append(mz2);
        else if(idx===2) $(ele).append(inj);
        else if(idx===1) $(ele).append(zom);        
    });
    // each ///////////////////////////////////////////////////////   

    //2-3. 모든 좀비 숨기기
    // 선택요소가 여러개이면 for문을 돌듯이 모둣 셋팅됨!
    $(".mz").hide();

    /**************************************************************
        3. 버튼별 클릭 이벤트 함수 만들기
    **************************************************************/ 
    ///////////////////////////////////////////////////////////////
    // 버튼 클릭시 공통 기능 함수                                 ///
    ///////////////////////////////////////////////////////////////
    // ele - 호출하는 버튼 자신 (this 키워드보냄)
    // seq - 이동할 빌딩 li 순번
    // call - 이동후 콜백함수
    const miniAct = (ele, seq, call) =>{

        //1. 클릭된 버튼 자신 없애기
        //slideUp(시간, 이징, 함수)
        // ->height 값이 0되며 애니메이션 이니메이션 후 display:none됨
        // 반대는 slideDown(시간, 이징, 함수)
        $(ele).slideUp(300);
        
        // 2.메시지 지우기
        // fadeOut(시간, 이징, 함수)
        // -> opacity가 0 되며 애니메이션 애니메이션 후 display:none됨
        // 반대는 fadeIn(시간, 이징, 함수)
        msg.fadeOut(200);
        
        //3. 이동위치정보 :
        // 이동할 빌딩 li의 위치를 알아내기
        // 이동할 li 타겟 -> bd변수
        // eq(순번) - 선택요소들 중 몇번째 요소를 선택
        // eq는 seqence(순서)라는 단어에서 나온말
        let tg = bd.eq(seq); //seq순번방

        // 화면에서의 top값
        let tgtop = tg.offset().top;
        // 화면에서의 left값
        let tgleft = tg.offset().left+win5;

        console.log(`top:${tgtop} / left: ${tgleft}`);

        /*********************************************
            offset() 메서드 :
                - 기준 : 윈도우 화면
                - 요소의 위치나 크기정보를 담고 있음
                    offset().top -> 요소의 top값
                    offset().left -> 요소의 left값
        _____________________________________________
            position() 메서드 :
                - 기준 : 포지션이 있는 부모박스
                - 요소의 위치나 크기정보를 담고 있음
                    position().top -> 요소의 top값
                    position().left -> 요소의 left값
        _____________________________________________
        *********************************************/ 

        //4. 미니언즈 이동하기
        // 대상 : .mi -> mi변수
        mi.animate({
            top : tgtop +"px",
            left : tgleft +"px",
            //시간 ,이징, 함수(콜백함수)
            },800, "easeOutElastic", call
        );
        // animate //////////////////////////////////
        // animate({css설정}, 시간, 이징, 함수)
        // -> css 변경을 애니메이션 해주는 메서드
        // -> 트랜지션 설정 불필요!

    };
    // miniAct 함수////////////////////////////////////////////////

    // 3-1. "들어가기" 버튼 클릭 시작 /////////////////
    //버튼들.첫번째()
    btns.first().click(function(){
        // 콜백함수 : 이동후 실행함수 //
        let callFn = ()=>{
            // 1. 메시지 변경
            //메시지 나타내기
            msg.text("와~! 아늑하다! 옆방으로 가보자!").fadeIn(200);
            // 2. 다음버튼 보이기
            // delay(시간) -> 애니메이션 메서드 앞에 사용!
            // -> 애니메이션 메서드 앞에 사용!
            //btns.eq(1).delay(1000).slideDown(300);            
            $(this).next().delay(500).slideDown(300);

        }
        //공통기능함수 호출!
        miniAct(this, 8, callFn);
    })
    // 3-1. "들어가기" 버튼 클릭 끝  ///////////////////

    // 3-2. "옆방으로!" 버튼 클릭 시작 /////////////////
    .next().click(function(){
        // 콜백함수 : 이동후 실행함수 //
        let callFn = ()=>{
            // 1. 좀비등장
            bd.eq(9).find(".mz").delay(1000).fadeIn(400, ()=>{
                // 2. 메시지 변경
                //메시지 나타내기
                msg.html("악!;;; 좀비<br>어서 피하자!").fadeIn(200).css({
                    left :"-20%"
                });
                //박스위치 변경
                // 3. 다음버튼 보이기
                // delay(시간) -> 애니메이션 메서드 앞에 사용!
                // -> 애니메이션 메서드 앞에 사용!
                //btns.eq(1).delay(1000).slideDown(300);            
                $(this).next().delay(500).slideDown(300);
            });
            // fadeIn /////////////////////////////////////////            
        }
        //공통기능함수 호출!
        miniAct(this, 9, callFn);
    })
    // 3-2. "옆방으로!" 버튼 클릭 끝  //////////////////

    // 3-3. "윗층으로 도망가!" 버튼 클릭 시작 /////////
    .next().click(function(){
        // 콜백함수 : 이동후 실행함수 //
        let callFn = () => {
        // 1. 메시지 변경
        msg
            .text("여긴 없겠지?")
            .fadeIn(200); // 메시지 나타나기
        // 2. 좀비 보이기 : 7번방
        bd.eq(7).find(".mz")
            .delay(500).fadeIn(500, "easeInExpo",
                () => {
                    // 3. 메시지 수정하기
                    msg.text("악! 여기도!!!");
                    // 4. 다음버튼 보이기
                    // 클릭된버튼 다음버튼
                    $(this).next() .delay(1000).slideDown(300);
                    // delay(시간) 
                    // -> 애니메이션 메서드 앞에 사용!
                }); //////// fadeIn ////////
        }; 
        /////// 콜백함수 끝 ///////
        //공통기능함수 호출!
        miniAct(this, 7, callFn);
    })
    // 3-3. "윗층으로 도망가!" 버튼 클릭 끝   /////

    // 3-4. "다시옆방으로!" 버튼 클릭 시작 /////////
    .next().click(function(){
        // 콜백함수 : 이동후 실행함수 //
        let callFn = ()=>{
            // 1. 메시지 변경
            //메시지 나타내기
            msg.text("여긴 없겠지?").fadeIn(200).delay(1000).fadeOut(100,()=>{
                //2. 메시지 다시 변경
                msg.html("그래도 무서우니까<br>윗층으로 가자").fadeIn(200);
            });
            // 3. 다음버튼 보이기
            // delay(시간) -> 애니메이션 메서드 앞에 사용!
            // -> 애니메이션 메서드 앞에 사용!
            //btns.eq(1).delay(1000).slideDown(300);            
            $(this).next().delay(1000).slideDown(300);
        }
        //공통기능함수 호출!
        miniAct(this, 6, callFn);
    })
    // 3-4. "다시옆방으로!" 버튼 클릭 끝   /////

    // 3-5. "무서우니 윗층으로!" 버튼 클릭 시작 /////////
    .next().click(function(){
        // 콜백함수 : 이동후 실행함수 //
        let callFn = ()=>{
            // 1. 메시지 변경
            //메시지 나타내기
            msg
            .empty() // 선택요소 텍스트 지우기
            .fadeIn(200,()=>{msg.text("무")})
            .delay(500)
            .fadeIn(200,()=>{msg.text("무.")})
            .delay(500)
            .fadeIn(200,()=>{msg.text("무.서")})
            .delay(500)
            .fadeIn(200,()=>{msg.text("무.서.")})
            .delay(500)
            .fadeIn(200,()=>{msg.text("무.서.워")})
            .delay(500)
            .fadeIn(200,()=>{msg.text("무.서.워.")})
            .delay(500)
            .fadeIn(200,()=>{msg.text("무.서.워..")})
            .delay(500)
            .fadeIn(200,()=>{msg.text("무.서.워...")})
            .delay(500)
            .fadeIn(200, ()=>{
                //2. 좀비 달려오기
                //-> 7번방 좀비 : bd.eq(7).find(".mz");
                //2-1. 윗층으로 올라오기
                let tg = bd.eq(7);

                tg.find(".mz").animate({bottom:tg.height()+"px"}, 500, "easeOutElastic")
                .animate({right:tg.width() *1.2+"px"}, 2000, "easeOutBounce", ()=>{
                    //콜백함수 - 물린후 ...
                    //3. 주인공 사색되기(흑백처리)
                    mi.css({
                        filter:"grayscale(100%)"
                    });
                    //4. 메시지 지우기
                    msg.hide();
                    //5 2초뒤에 좀비되기
                    setTimeout(() => {
                        // 5-1. 좀비 이미지 변경
                        mi.find("img").attr("src", "images/mz1.png");
                        // attr(속성명, 속성값)
                        //-> 속성값 변경 메서드
                        // 비교) JS의 setAttribute()
                        // 참고) 속성값 가져오기는
                        // -> attr(속성명)
                        // 비교) js의 getAttribute()

                        //5-2. 좀비 메시지
                        msg.html("나도 좀비!;;;<br> 어서 치료 주사를")
                        .css({left: "100%"}).fadeIn(400); //위치및 메시지 보이기
                        $(this).next().delay(1000).slideDown(300);
                    }, 2000);
                })
                // 2-2. 주인공에게 달려오기
            })
        }
        //공통기능함수 호출!
        miniAct(this, 4, callFn);
    })
    // 3-5. "무서우니 윗층으로!" 버튼 클릭 끝   /////

    // 3-6. "치료주사방으로!" 버튼 클릭 시작 /////////
    .next().click(function(){
        // 콜백함수 : 이동후 실행함수 //
        let callFn = ()=>{
            // 1. 주사기 돌리기
            // 주의 : transform 은  animate 에서 사용불가!
            // transform은  css로 trasition으로 구현!
            $(".inj").css({
                transform:"rotate(-150deg)",
                trasition:".5s ease-out 1s",
                zIndex:"9999"
            },500);

            //2. 주사놓은 후(1.5초) 다시 미니언즈2(후유증)
            setTimeout(()=>{
                // 2-1. 미니언즈 흑백모드 풀기
                mi.css({
                    filter:"grayscale(0%)"
                })
                // 2-2. 새로운 미니언즈 이미지로 변경
                .find("img").attr("src", "images/m2.png");
                // 2-3. 주사기 제거하기
                $(".inj").remove();
                // remove() 메서드는 태그를 지운다!

                // 3. 메시지 변경
                //메시지 나타내기
                msg.text("치료완료!").fadeIn(200).delay(1000).fadeIn(200, ()=>{
                    msg.html("이제, 조금만 더 <br>가면 탈출이닷!");
                    ///fadeIn /////////////////////////////////
                });
                // 4. 다음버튼 보이기
                // delay(시간) -> 애니메이션 메서드 앞에 사용!
                // -> 애니메이션 메서드 앞에 사용!
                //btns.eq(1).delay(1000).slideDown(300);            
                $(this).next().delay(1000).slideDown(300);
            },1500);
        }
        //공통기능함수 호출!
        miniAct(this, 2, callFn);
    })    
    // 3-6. "치료주사방으로!" 버튼 클릭 끝   /////

    // 3-7. "3번방으로!" 버튼 클릭 시작 /////////
    .next().click(function(){
        // 콜백함수 : 이동후 실행함수 //
        let callFn = ()=>{
            // 1. 메시지 변경
            //메시지 나타내기
            msg.text("이제 곧 탈출이닷!").fadeIn(200);
            // 2. 다음버튼 보이기
            // delay(시간) -> 애니메이션 메서드 앞에 사용!
            // -> 애니메이션 메서드 앞에 사용!
            //btns.eq(1).delay(1000).slideDown(300);            
            $(this).next().delay(1000).slideDown(300);
        }
        //공통기능함수 호출!
        miniAct(this, 3, callFn);
    })
    // 3-7. "3번방으로!" 버튼 클릭 끝   /////

    // 3-8. "1번방으로!" 버튼 클릭 시작 /////////
    .next().click(function(){
        // 콜백함수 : 이동후 실행함수 //
        let callFn = ()=>{
            // 1. 메시지 변경
            //메시지 나타내기
            msg.text("어서 헬기를 타야지!").fadeIn(200);
            // 2. 다음버튼 보이기
            // delay(시간) -> 애니메이션 메서드 앞에 사용!
            // -> 애니메이션 메서드 앞에 사용!
            //btns.eq(1).delay(1000).slideDown(300);            
            $(this).next().delay(1000).slideDown(300);
        }
        //공통기능함수 호출!
        miniAct(this, 1, callFn);
    })
    // 3-8. "1번방으로!" 버튼 클릭 끝   /////

    // 3-9. "헬기를 호출!" 버튼 클릭 시작 /////////
    .next().click(function(){
        // 콜백함수 : 이동후 실행함수 //
        let callFn = ()=>{
            // 1. 메시지 변경
            //메시지 나타내기
            msg.text("도와줘요~!!!").fadeIn(200);
            //2. 좀비들 최종추적!!!
            // -> 1번방에 숨겨진 좀비들
            // -> bd.eq(1).find(".mz")
            bd.eq(1).find(".mz").fadeIn(200, function(){
                //2-1. 좀비들 움직이기
                $(this).animate({
                    right:bd.eq(1).width()*1.3+"px"
                },5000,"easeInOutQuint");

                //2-2. 헬기등장
                $(".heli").animate({
                    left:"20%"
                },3000, "easeOutBack", function(){
                    //콜백함수
                    //3. 주인공이 탄 이미지로 변경
                    $(this).attr("src", "images/heli2.png");
                    // 4. 주인공 지우기(헬기에 탔으니까!)
                    mi.hide(); //display:none 처리
                    /// animate ///////////////////////////                    
                })
                .delay(1000)
                .animate({
                    left:"70%"
                },4000,"easeInOutCubic",function(){
                    // 끝으로이동후
                    // 7. 헬기조종사 좀비이미지
                    $(this).attr("src", "images/heli3.png");
                    // animate //////////////////////////////
                })
                // 헬기애니 이어짐 !!!
                // 8. 아주 천천히 화면 바깥으로 나감
                .animate({
                    left:"100%"
                },10000,"easeInOutSine",()=>{
                    // 헬기가 나간후
                    //9. 미리지정한 class 를 타이틀에 줘서
                    // 간편이 아래로 2단계로 떨어짐
                    // 대상 : .tit
                    let tit = $(".tit");
                    // 1단계: 간판 중간 떨어짐(.on)
                    tit.addClass("on");
                    // 2단계 : 3초후 간판 떨어짐(.on2)
                    setTimeout(()=>{
                        // 간판 클래스추가
                        tit.addClass("on2");

                        //10. 건물 무너짐 클래스 넣기
                        //대상: .building
                        //bd변수를 이용해 보자!
                        //bd변수 -> .building li
                        //한단계 위인 부모로 올라감
                        //parent() -> 부모로 올라감
                        bd.parent().addClass("on");
                    },3000);
                })
            }); /// fadeIn /////////////////////////////////
        }
        //공통기능함수 호출!
        miniAct(this, 0, callFn);
    });
    // 3-9. "헬기를 호출!" 버튼 클릭 끝   /////
    


});
/////////////// JQB////////////////////////////////////////////////