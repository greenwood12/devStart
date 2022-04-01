//정규식 파라미터 값 가져오기
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
    let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), 
    results = regex.exec(location.search); 
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
}
/****************************************************************************************************************/ 
// 두번째 페이지 업데이트 정보
const open = (val) => {    
    let popupText = new Array("업데이트 파일 배포 공지"+
                                "2022.03.17"+
                                "게임 플레이의 안정성 개선 및 밸런스 조정을 위한 업데이트 파일을 배포하였습니다." +
                                "최신 업데이트 파일을 적용하신 후 플레이해 주시기 바랍니다." +
                                "대상 플랫폼" +
                                "PlayStation®4/PlayStation®5/Xbox One/Xbox Series X|S/STEAM®", //자르기
                                "업데이트 파일 배포 안내 (PS5™/PC)" +
                                "2022.03.02" +
                                "PlayStation®5 버전 및 PC 버전의 게임 플레이 안정성을 개선하는 업데이트 파일을 배포하였습니다." +    
                                "최신 버전 업데이트 파일을 설치해 주시기 바랍니다." +
                                "최신 업데이트에 포함되는 주요 항목" +
                                "PlayStation®5 버전" +
                                "・게임 종료 시 이외에도 세이브 데이터가 저장되도록 하기 위한 변경", //자르기
                                "PS4™/PS5™ 업그레이드 기능에 대한 안내" +
                                "2022.02.28" +
                                "PlayStation®4/PlayStation®5 ‘ELDEN RING(엘든 링)’에 대해," +
                                "PlayStation®4 버전에서 PlayStation®5 버전으로의 업그레이드가 불가능한 현상을 확인 하고 있습니다."+
                                "불편을 겪고 계신 고객 여러분께 진심으로 사과 드립니다. 현재 원인 확인 중에 있으며, 조금만 기다려 주시면 감사 드리겠습니다."+
                                "확인이 되는 대로 재차 공지 드리도록 하겠습니다.");
    document.querySelector(".txt_info").innerHTML = popupText[val];
    document.querySelector(".modal").classList.remove("hidden");
}

// 팝업창 닫기
const close = () => {
    document.querySelector(".modal").classList.add("hidden");
}
/****************************************************************************************************************/ 

/****************************************************************************************************************/ 
//세번째 페이지 전역변수
let textNm = 0;
let widthChk = 0;

let txt_Third = new Array("다채로운 상황이 기다리고 있는 오픈 필드와<br>"+
                    "복잡하면서도 입체적으로 만들어진 거대한 던전이<br>"+
                    "끊임없이 이어지는 광대한 세계.<br>"+
                    "세계를 탐험하다 미지의 발견에서 오는 기쁨과 큰 달성감을 안겨 줄 위협적인 존재들이 <br>"+
                    "플레이어를 기다리고 있습니다.", //자르기
                    "기동력이 뛰어나 험준한 벼랑을 타고 내려갈 수 있는 영마와<br>"+
                    "공략의 폭을 넓히는 점프 액션을 채용.<br>"+
                    "광대한 필드와 복잡한 던전을 자유롭고 쾌적하게 탐색할 수 있습니다.", //자르기                    
                    "플레이어 캐릭터는 외견을 커스터마이즈할 수 있으며<br>"+
                    "장착할 무기와 방어구, 마법까지 마음껏 조합할 수 있습니다.<br>"+
                    "근력을 키워 강건한 전사가 되거나 마술을 연마하는 등<br>"+
                    "자신의 플레이 스타일에 맞춰 캐릭터를 성장시킬 수 있습니다."
                    );
/****************************************************************************************************************/                   

// 로딩후 함수
const loadFn = function () {    
    // ulr 파라미터 값 추출
    let pageNum = parseInt(getParameterByName("page"));    
    //pageNum 값이 없을 경우
    if(pageNum ===null || pageNum ==="" || isNaN(pageNum)) pageNum = 1;
    page_Select(pageNum);

    //2번째 페이지 일 경우 셋팅
    if(pageNum === 2) {
        document.querySelector(".openBtn1").onclick = () => open(0);    
        document.querySelector(".openBtn2").onclick = () => open(1);    
        document.querySelector(".openBtn3").onclick = () => open(2);
        document.querySelector(".modal").onclick = () => close();
    } else if (pageNum === 3) {
        let setimg = document.getElementById("setImg");
        let txtdetail = document.querySelector(".txtdetail");
        
        setimg.src = "../image/img_concept_01.jpg";
        txtdetail.innerHTML = txt_Third[0];


        let buttenArry = document.querySelectorAll(".arrowTo");
        buttenArry[0].onclick =() => {            
            if(textNm === 2){
                textNm = 0;
            } else {
                textNm ++;
            }            
            setimg.src = `../image/img_concept_0${textNm+1}.jpg`;
            txtdetail.innerHTML = txt_Third[textNm];
        };

        buttenArry[1].onclick =() => {
            console.log(textNm);
            if(textNm === 0){
                textNm = 2;
            } else {
                textNm --;
            }
            console.log(textNm);
            setimg.src = `../image/img_concept_0${textNm+1}.jpg`;
            txtdetail.innerHTML = txt_Third[textNm];
        };
    }
};


// 버튼 변경
function page_Select(num) {
    //document.getElementById("btn"+num).style.marginTop ="50px";
    let mkArray1 = new Array("btn1", "btn2", "btn3", "btn4");
    let mkArray2 = new Array("btn5", "btn6", "btn7", "btn8");
    let mkArray3 = new Array("btn9", "btn10", "btn11", "btn12");
    let mkArray4 = new Array("btn13", "btn14", "btn15", "btn16");
    let contentArray = new Array(".container1", ".container2", ".container3", ".container4");
    let backImgArray = new Array("thumb_info.png", "thumb_wp_pc_01.jpg", "thumb_wp_pc_06.jpg", "thumb_wp_pc_07.jpg");

    //버튼 정보
    let btn_data;
    switch(num) {
        case 1: btn_data = mkArray1; break;
        case 2: btn_data = mkArray2; break;
        case 3: btn_data = mkArray3; break;
        case 4: btn_data = mkArray4; break;
    }  
    // 버튼 색상
    let save_color;
    switch(num) {
        case 1 : save_color = "#6F5858"; break;
        case 2 : save_color = "#7C582D"; break;
        case 3 : save_color = "#848941"; break;
        case 4 : save_color = "#382F75"; break;
        default : save_color = "";        
    }

    // 선택한 정보 보이기    
    let main_text = document.querySelectorAll(".main_text");    
    for(let x of main_text) {
        let count = 0;
        x.style.background =`url(../image/${backImgArray[num-1]}) no-repeat center/cover`;
        count++;
    }
    widthChk =document.body.offsetWidth;


    if(widthChk > 800) {
        document.getElementById(btn_data[num-1]).style.marginBottom ="50px";
    }

    document.getElementById(btn_data[num-1]).style.backgroundColor = save_color;
    document.querySelector(contentArray[num-1]).style.display = "block";

    // 비선택정보 감추기
    contentArray.forEach((val, idx)=>{
        if(idx !== (num-1)){
            document.querySelector(contentArray[idx]).style.display = "none";
        }
    });
    
    // 버튼에 애니메이션효과
    btn_data.forEach((val, idx) =>{
        if(idx !== (num-1)){
            console.log(widthChk);
            if(widthChk > 800) {
                document.getElementById(btn_data[idx]).style.transition = "0.5s ease-out 1s, background-color 0.1s";
                document.getElementById(btn_data[idx]).style.marginTop ="50px";  
            }
        }
    });

    window.onresize =() => {
        widthChk = document.body.offsetWidth;
    };
}

// 로딩 후 실행 함수
//window.addEventListener("DOMContentLoaded",loadFn);
window.addEventListener("load",loadFn);