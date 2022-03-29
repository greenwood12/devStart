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
    let save_color;
    switch(num) {
        case 1 : save_color = "#6F5858"; break;
        case 2 : save_color = "#7C582D"; break;
        case 3 : save_color = "#848941"; break;
        case 4 : save_color = "#382F75"; break;
        default : save_color = "";
    }
    document.getElementById("btn"+num).style.marginBottom ="50px";
    document.getElementById("btn"+num).style.backgroundColor = save_color;
    for(let i=1; i < 5; i++) {
        if(i !== num){
            document.getElementById("btn"+i).style.transition = "0.5s ease-out 1s, background-color 0.1s";
            document.getElementById("btn"+i).style.marginTop ="50px";  
        }
    }
}

// 로딩 후 실행 함수
window.addEventListener("DOMContentLoaded",loadFn);