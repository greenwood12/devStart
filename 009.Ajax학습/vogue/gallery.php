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
        <link rel="stylesheet" href="./css/swiper-bundle.min.css">        
        <link rel="stylesheet" href="./css/gallery.css">
        <link rel="stylesheet" href="./css/media.css">
        <script src="./js/jquery-3.6.0.min.js"></script>
        <script src="./js/jquery-ui.min.js"></script>
        <script src="./js/common.js"></script>
        <script src="./js/swiper-bundle.min.js"></script>
        <script src="./js/gallery.js"></script>
        <script src="./js/linksys.js"></script>
        <script src="./js/swiper-bundle.min.js"></script>        
    </head>
    <body>
           <!-- 1. 상단영역 인클루드 -->
        <?php include "inc/top.inc" ?>
        <!-- 1. 상단영역 인클루드 -->

        <!-- 2. 메인영역 -->
        <div class="bgc disel">
            <main class="cont ibx">
                <!-- 1. 카테고리 페이지 탑영역 -->
                <header class="ctip">
                    <!-- 1-1. 서브 타이틀 -->
                    <h2 class="stit">gallery</h2>
                    <!-- 1-2. 서브메뉴(LNB-Local Navigation Bar) -->
                    <section class="scont">
                        <!-- Swiper -->
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="images/people/cont2-1a.jpg" alt="보그갤러리이미지"></div>
                                <div class="swiper-slide"><img src="images/fashion/cont1-2b.jpg" alt="보그갤러리이미지"></div>
                                <div class="swiper-slide"><img src="images/people/cont2-3a.jpg" alt="보그갤러리이미지"></div>
                                <div class="swiper-slide"><img src="images/fashion/cont2-1b.jpg" alt="보그갤러리이미지"></div>
                                <div class="swiper-slide"><img src="images/fashion/cont2-2b.jpg" alt="보그갤러리이미지"></div>
                                <div class="swiper-slide"><img src="images/fashion/cont2-3b.jpg" alt="보그갤러리이미지"></div>
                                <div class="swiper-slide"><img src="images/beauty/cont1-2a.jpg" alt="보그갤러리이미지"></div>
                                <div class="swiper-slide"><img src="images/beauty/cont2-3b.jpg" alt="보그갤러리이미지"></div>
                                <div class="swiper-slide"><img src="images/beauty/cont1-1b.jpg" alt="보그갤러리이미지"></div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
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