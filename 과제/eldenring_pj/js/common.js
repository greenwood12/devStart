//정규식 파라미터 값 가져오기
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
    let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), 
    results = regex.exec(location.search); 
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
}

// ulr 파라미터 값 추출
const loadFn = function () {    
    let pageNum = getParameterByName("page");    
    //console.log(pageNum);
    page_Select(parseInt(pageNum));    
};

// 버튼 변경
function page_Select(num) {
    //document.getElementById("btn"+num).style.marginTop ="50px";
    let mkArray1 = new Array("btn1", "btn2", "btn3", "btn4");
    let mkArray2 = new Array("btn5", "btn6", "btn7", "btn8");
    let mkArray3 = new Array("btn9", "btn10", "btn11", "btn12");
    let mkArray4 = new Array("btn13", "btn14", "btn15", "btn16");
    let contentArray = new Array(".container1", ".container2", ".container3", ".container4");

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
    document.getElementById(btn_data[num-1]).style.marginBottom ="50px";
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
            document.getElementById(btn_data[idx]).style.transition = "0.5s ease-out 1s, background-color 0.1s";
            document.getElementById(btn_data[idx]).style.marginTop ="50px";  
        }
    });
}

// 로딩 후 실행 함수
//window.addEventListener("DOMContentLoaded",loadFn);
window.addEventListener("load",loadFn);