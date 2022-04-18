<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">    
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> | 보그 코리아 2022(Vogue Korea)</title>
        <!-- 탭메뉴 아이콘(favicon:favorite icon) -->
        <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
        <!-- 폰티스토 sns 아이콘 -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
        <link rel="stylesheet" href="./css/login.css">
        <link rel="stylesheet" href="./css/media.css">
        <script src="./js/jquery-3.6.0.min.js"></script>
        <script src="./js/jquery-ui.min.js"></script>
        <script src="./js/common.js"></script>
        <script src="./js/login.js"></script>
        <script src="./js/linksys.js"></script>        
        <script src="./js/smoothScroll20.js"></script>
    </head>
    <body>
           <!-- 1. 상단영역 인클루드 -->
        <?php include "inc/top.inc" ?>
        <!-- 1. 상단영역 인클루드 -->

        <!-- 2. 메인영역 -->
        <div class="bgc">
            <main class="cont ibx">
                <!-- 1. 카테고리 페이지 탑영역 -->
                <header class="ctip">
                    <!-- 1-1. 서브 타이틀 -->
                    <h2 class="stit">LogIn</h2>
                    <!-- 1-2. 서브메뉴(LNB-Local Navigation Bar) -->
                    <!-- 서브컨텐츠 박스 -->
                    <section class="scont">
                        <div id="login">
                            <form action="process.php" method="post" class="logF">
                                <!-- 아이디박스 -->
                                <div class="minput">
                                    <label for="mid">아이디</label>
                                    <input type="text" name="mid" id="mid" maxlength="10" placeholder="아이디를 입력해 주세요">
                                </div>
                                <!-- 비밀번호박스 -->
                                <div class="minput mi2">
                                    <label for="mid">비밀번호</label>
                                    <input type="password" name="mpw" id="mpw" maxlength="10" placeholder="비밀번호를 입력해 주세요">
                                </div>
                                <!-- 버튼영역 -->
                                <div class="btnbx">
                                    <input type="submit" id="sbtn" value="LOGIN">
                                </div>
                                <!-- 기타링크 -->
                                <div class="addbx">
                                    <span>
                                        <input type="checkbox" id="chkbx" name="chkbx">
                                        <label for="chkbx">아이디저장</label>
                                    </span>
                                    <a href="#">아이디찾기</a><i>|</i><br class="brk">
                                    <a href="#">비밀번호찾기</a><i>|</i> 
                                    <a href="#">회원가입</a>
                                </div>
                            </form>
                        </div>
                    </section>
                </header>                
            </main>
        </div>

         <!-- 1. 하단영역 인클루드 -->
        <?php include "inc/info.inc" ?>
        <!-- 1. 하단영역 인클루드 -->

       <!-- 위로가기버튼 -->
        <a href="#" class="tbtn fi fi-angle-up">
            <span class="ir">위로가기버튼</span>
        </a>
    </body>
</html>