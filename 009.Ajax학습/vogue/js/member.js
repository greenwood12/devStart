// 회원가입 페이지 JS - login.js
/// jQB ////////////////////////////////////////////////////////////////
$(()=>{
    console.log("맴버 로딩완료");    
    /*******************************************************************
        [사용자 입력품 유효성 검사하기]
        - 이벤트 종류 : blur (포커스가 빠질때 발생)
        - 제이쿼리 이벤트 메서드 : blur()
        - 이벤트 대상 :
        -> id가 "email2" 가 아니고 class가 "search" 가 아닌 type이 "text"
           인 입력요소 input

           >>> 제이쿼리 선택표현법 :
           input[type=text][id!=email2][class!=search]
           >>> 대괄호[]는 속성선택, != 같지 않다(제이쿼리전용)
           -> type이 "password"인 입력요소 input

           >>> 제이쿼리 선택 표현법:
           input[type=password]
    *******************************************************************/ 
    $(`input[type=text][id!=email2][class!=search],input[type=password]`)
    .blur(function(){
        //// blur  발생 //////////////////////////////////////////////

        // 모든 공백 제거함수
        // groSpace는 get rid of Space 즉, 공백제거라는 말!
        // replace(바꿀값, 바뀔값)
        // 정규식 : 슬래쉬 사이에 씀
        // 공백문자 : \s
        // g-> global 즉, 모두 찾아라!
        // cv =>{return cv.replace(/\s/g, "");}
        // 중괄호 색략됨
        const groSpace = cv => cv.replace(/\s/g, "");


        // 방금 블러발생한 요소의 id는?
        // cid 는 current id 즉, 현재 아이디
        // attr(속성명) -> 해당속성값을 읽어옴!        
        let cid = $(this).attr("id");

        // 블러 발생한 요소의 입력값은?
        // cv는 current value 즉, 현재값
        // val() -> 선택요소의 입력값을 읽어옴!
        // trim() 앞뒤 공백 제거
        let cv = $(this).val();

        if(cid==="mnm") cv = cv.trim();
        else cv = groSpace(cv);        

        // 공백제거된 cv값을 다시 입력창에 넣기!
        $(this).val(cv);

        /***************************************************************
            1. 빈값 여부 체크하기
        ***************************************************************/
        // if 빈값 체크
        if(cv === "") {
            // 메시지 출력
            // .msg 박스는 형제요소임
            // siblings(요소) 다른 형제요소 중 특정요소 선택
            // siblings() 아무값도 안쓰면 다른 형제요소 모두 선택
            $(this).siblings(".msg").text("필수입력!");

            //불통과!!!
            pass = false;
        } else if (cid==="mid"){
            /**********************************************************
                2. 아이디일 경우 유효성 검사하기
                - 검사기준 : 영문자로 시작하는 6~20자 / 숫자                
            **********************************************************/
            // !(NOT) 반대로 들어감
            if(!vReg(cv,cid)) {
                // 메시지 띄우기
                $(this).siblings(".msg").text("영문자로 시작하는 6~20자 / 숫자")
                .removeClass("on");
                //불통과!!!
                pass = false;
            } else {
                // 검사 결과 통과 이미면 ////////////////////////////////
                // class 추가 하면 녹색 글자 ////////////////////////////


                //원래 아이디 중복여부 검사를 해야함 !!!!
                /*******************************************************
                    [ Ajax 중복아이디 검사하기 ! ]
                    ajax 처리 유형 2가지
                    ____________________________________________________
                    1) post 방식 처리 메서드
                    - $.post(URL, data, callback)

                    2) get 방식 처리 메서드
                    - $.get(URL, callback)
                    - URL 에 데이터가 포함됨

                    3) 위의 2가지 유형중 선택처리 메서드
                    - $.ajax({
                        1. 전송할 페이지,
                        2. 전송방식,
                        3. 보낼데이터,
                        4. 전송할 데이터 타입,
                        5. 비동기 옵션
                        6. 성공처리,
                        7. 실패처리
                    })
                *******************************************************/ 
                    $.ajax({
                        // 1. 전송할 페이지,
                        url:"process/chkID.php",
                        // 2. 전송방식,
                        type : "POST",
                        // 3. 보낼데이터,
                        data:{
                            "mid":$("#mid").val()
                        },
                        // 4. 전송할 데이터 타입,
                        dataType: "html",
                        // 5. 비동기 옵션
                        // 비동기 옵션을 꺼야(false)
                        // 전역변수 pass에 값을 업데이트 가능!
                        async: false,
                        // 6. 성공처리 : 중복안함 on, 중복은 no
                        success : function(res) {
                            console.log("결과:", res);
                            
                            if(res === "ok") {
                                // 사용 가능
                                $("#mid").siblings(".msg").text("훌륭한 아이디네요~!").addClass("on");
                                // 통과                                
                            } else {
                                // 사용 불가
                                $("#mid").siblings(".msg").text("사용중인 ID 입니다.").removeClass("on");
                                // 불통과 !!!
                                pass = false;
                            }
                        }
                        // 7. 실패처리
                        // xhr - XMLHttpRequest 객체
                        // status - 실패 상태 코드 번호
                        // error - 에러 결과 메시지
                        , error: function(xhr, status, error) {
                            alert("연결실행실패 : ", error);
                        }
                        // error ////////////////////////////////////////
                    });
            }
        } else if(cid==="mpw") {
            /**********************************************************
                3. 비밀번호일 경우 유효성 검사하기
                - 검사기준 : 특수문자, 문자 ,숫자포함 형태의 5~15자리
            **********************************************************/
            // !(NOT) 반대로 들어감
            if(!vReg(cv,cid)) {
                // 메시지 띄우기
                $(this).siblings(".msg").text("특수문자, 문자 ,숫자포함 형태의 5~15자리");
                //불통과!!!
                pass = false;
            } else {
                // 검사 결과 통과 이미면 ////////////////////////////////
                // class 추가 하면 녹색 글자 ////////////////////////////
                $(this).siblings(".msg").empty();                
            }            
        } else if(cid==="mpw2") {
            /**********************************************************
                4. 비밀번호확인 일 경우 유효성 검사하기
                - 검사기준 : 특수문자, 문자 ,숫자포함 형태의 5~15자리
            **********************************************************/            
           // 비밀번호 확인값과 비밀번호값이 같지 않으면
            if(cv !== $("#mpw").val()) {
                // 메시지 띄우기
                $(this).siblings(".msg").text("비밀번호가 일치하지 않습니다.");
                //불통과!!!
                pass = false;
            } else {
                // 검사 결과 통과 이미면 ////////////////////////////////
                // class 추가 하면 녹색 글자 ////////////////////////////
                $(this).siblings(".msg").empty();                
            }            
        } else if(cid==="email1") {
            /**********************************************************
                5. 이미엘 일 경우 유효성 검사하기
                - 검사기준 : 이메일 형식에 맞는 여부검사
            **********************************************************/            
            // 이메일 주소 만들기
            // 선택박스값이 직접입력일 경우(free)
            // 이메일 뒷주소 입력창 값을 읽어가고 아니면 선택박스 값을 넎는다.?
            let comp = eml1.val() +"@"+ (seleml.val() ==="free"? eml2.val():seleml.val());

            // 이메일 정규식 검사하기 함수 호출!
            resEml(comp);
            console.log("이메일 주소:", comp);
            
        } else {
            // 만약 통과시 메시지 지우기 ////////////////////////////////
            // empty() 내용 지우기 
            $(this).siblings(".msg").empty();
        }
        console.log("블러발생!", cid, cv);
    });

    // 이메일 관련 대상 선정 ////////////////////////////////////////////
    // 이메일 앞주소    
    let eml1 = $("#email1");
    // 이메일 뒷주소(직접입력창)
    let eml2 = $("#email2");
    // 이메일 선택 박스
    let seleml = $("#seleml");
    ///////////////////////////////////////////////////////////////////
    /*****************************************************************
        선택박스 변경시 이메일 검사하기
        ______________________________________________________________
        검사시점 : 선택박스 변경할때
        이벤트 : change
        이벤트 대상 : #seleml -> seleml변수
    *****************************************************************/
    seleml.change(function(){
        //event.currentTarget(); 화살표 함수 쓸경우!
        // 1. 선택박스 변경된 값 읽어오기       
        let cv = $(this).val();
        console.log("선택된 값", cv);

        // 2. 선택옵션별 분기문
        // 선택해 주세요
        if(cv === "init") {
            //1. 메시지 출력
            eml1.siblings(".msg")
            .text("이메일 옵션 선택필수!")
            .removeClass("on");
            //2. 직적입력창 숨기기(있을수 있음!)
            eml2.fadeOut(300);
        } else if(cv ==="free") {
            // 직접 입력
            // 1. 직접입력창 보이기
            // val(값) -> 입력창에 값넣기(빈값은 지우기)
            // focus() -> 입력창에 포커스(커서 깜박임!)
            eml2.fadeIn(300).val("").focus();

            // 2. 메시지 지우기
            eml1.siblings(".msg").empty();
        } else {
            // 기타 이메일 주소 선택시 /////////////////////////////////
            // 1. 직접입력창 숨기기
            eml2.fadeOut(300);
            // 2. 이메일 전체 주소 조합하기
            // cv는 select 의 선택옵션값!
            // 3. 이메일 유효성 검사
            let comp = eml1.val() +"@"+ cv;
            resEml(comp);
        }
    });
    // change ////////////////////////////////////////////////////////


    /****************************************************************
         키보드 입력시 이메일 체크하기 
        ____________________________________________________________
        - 키보드 관련 이벤트: keypress, keyup, keydown
        1. keypress : 키가 눌려였을때
        2. keyup : 키가 눌렸다가 올라올때
        3. keydown : 키가 눌려져서 내려갈때
        -> 과연 글자가 입력되는 순간은 어떤
        키보드 이벤트를 써야할까?
        ->>>>>>>> keyup!!!
        - 이벤트 대상: #email1, #email2
        -> 모든 이벤트를 함수와 연결하는
        제이쿼리 메서드는? ->>> on(이벤트명,함수)
    ****************************************************************/ 
    $("#email1, #email2").on("keyup", function(){
        //1. 현재 이벤트 대상 아이디 읽어오기
        let cid = $(this).attr("id");
        console.log("현재아이디", cid);

        //2. 현재 입력된 값 읽어오기
        let cv = $(this).val();
        console.log("입력값:", cv);

        // 3. 이메일 뒷주소 셋팅하기
        // 변수 = 조건 연선사자
        // 변수 = 조건식 ? 값1:값2
        // -> 조건연산자에서 결정된 값이 변수에 할당된다!
        let backeml = cid ==="email1" ? seleml.val() : eml2.val();

        // 4. 선택박스 값이 "free"(직접입력)이면
        // 이메일 뒷주소로 이동하기
        if(seleml.val() === "free") backeml = eml2.val();

        // 5. 이메일 전체 주소 조합하기
        let comp = eml1.val() +"@"+backeml;
        console.log("이메일 주소:", comp);

        // 6. 이메일 유효성 검사함수 호출!
        resEml(comp);
    });
    ///////////// keyup ////////////////////////////////////////////
    
    /*****************************************************************
        함수명 :" resEml(result Email)"
        기능 : 이메일 검사결과 처리
    *****************************************************************/ 
    const resEml = comp => { // comp - 완성된 이메일 주소
    // 이메일 정규식 검사
    // 통과시 ////////////////////////////////
    if(vReg(comp,"eml")){
        // 메시지 띄우기
        eml1.siblings(".msg")
        .text("적합한 이메일 형식입니다!")
        .addClass("on");
    } else{
        // 이메일 불통과시 ////////////////////////
        // 메시지 띄우기
        eml1.siblings(".msg")
        .text("맞지않는 이메일 형식입니다!")
        .removeClass("on");
        //불통과!!!
        pass = false;
    }}; 
    //////////////// resEml 함수 ////////////////

    /******************************************************************
        가입하기(submit) 버튼 클릭시 처리하기
        _______________________________________________________________
        전체검사의 원리 : 전역변수 pass를 설정하여 true를 할당하고
                        검사 중간에 불통과 사유 발생시 false로 변경!
                        유효성 검사 통과여뷰를 판단한다!
        검사방법 : 기존에 이벤트 함수 blur 이벤트를 간제로 발생 시킨다!
                   이벤트 강제 발생 메서드 -> trigger(이벤트명)
    ******************************************************************/
    // 검사용 변수
    let pass;
    // 이벤트 대상 : 서브밋 버튼 -> #btnj
    // 원래 서브밋버튼은 클릭시 싸고 있는 form 태그의 action 속성에
    // 지정된 페이지로 이동하게 되어 있다!
    // 여기서는 유효성검사로 이 기본기능을 막을 것이다!

    $("#btnj").click(function(e){
        //1. 서브밋 기본이동 막기
        e.preventDefault();
        //2. pass 통과여부 변수에 true 할당!(처음시작시)
        pass = true;

        //3. 입력창 blur 이벤트 강제발생시키기!
        // 대상 : 블러이벤트 발생했던 요소들!
        $(`input[type=text][id!=email2][class!=search],input[type=password]`)
        .trigger("blur");

        //4. 검사결과에 따라 메시지 보이기 및 처리
        // 통과시 //////////////////////////////
        if(pass){
            /***************************************************************
                [ Ajax를 이용한 POST 방식으로 DB 에 데이터 입력하기!!! ]
                ____________________________________________________________

                AJAX = Asynchronous Javascript and XML
                - 비동기통신이란? 쉽게 말해서 페이지가 새로 고쳐지지 않고 그대로
                  있으면서 일부만 서버 통신을 하는 것을 말한다!
                - 제이쿼리는 POST 방식으로 ajax를 할 수 있다!
                [ post 방식 Ajax 메서드 ]
                $.post(URL, data, callback)
                $.post(전송할 페이지, 전송할 데이터, 전성호 실행 함수)
            ***************************************************************/ 
            // 1. 전송할 페이지  2전송할 데이터 3 전송후 실행함수
            $.post("process/ins.php", {
                                        // 1.아이디
                                        "mid":$("#mid").val(),
                                        // 2.비번
                                        "mpw":$("#mpw").val(),
                                        // 3.이름
                                        "mnm":$("#mnm").val(),
                                        // 4.성별(라디오 버튼)
                                        "gen":$(":radio[name=gen]:checked").val(),
                                        // 5-1.이메일 앞주소
                                        "email1":$("#email1").val(),
                                        // 5-2.이메일 뒷주소
                                        "seleml":$("#seleml").val(),
                                        // 5-3.직접입력 이메일 뒷주소
                                        "email2":$("#email2").val()
                                    }, function(res){
                                            console.log(res);
                                            if(res ==="ok"){
                                                // 성공시
                                                // if : 통과시 /////////////////////////////
                                                // 메시지 띄우기
                                                alert("회원가입을 축하합니다! 짝짝짝!");

                                                // 원래는 post 방식으로 DB 회원정보를 입력후
                                                // DB에 입력완료시 위의 메시지를 띄워준다!
                                                //로그인 페이지로 이동!

                                                location.replace("login.php");
                                                //location.href="login.html";              
                                                /***************************************************************
                                                    회원가입 후 이전페이지로 못가도록
                                                    location.replace(주소)를 사용하여 페이지 캐쉬를 삭제하도록한여
                                                    좀 더 안전한 보안을 유지한다!
                                                ***************************************************************/
                                            } else {
                                                // 실패시
                                                alert("관리자에게 문의 바랍니다.", res);
                                            }
                                        }
                                    );
            /// post ///////////////////////////////////////////////////////            
        } else {
            // if : 불통과시 /////////////////////////////
            alert("입력을 수정하세요~!");
        }

        //통과여부
        console.log("통과여부 :", pass);

    })
    // click //////////////////////////////////////////////////////////
});
/// jQB ///////////////////////////////////////////////////////////////


/*////////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////