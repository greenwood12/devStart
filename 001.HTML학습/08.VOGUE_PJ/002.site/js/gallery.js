// 회원가입 페이지 JS - login.js
/// jQB ////////////////////////////////////////////////////////////////////////////////////////////
$(()=>{
    console.log("로딩완료!");

    // 스와이퍼 플러그인 API 설명서
    // https://swiperjs.com/swiper-api

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3, // 한 화면당 슬라이드 개수
      spaceBetween: 30, // 슬라이드 사이간격(px)
      // 사이즈별 슬라이드 개수, 간격 동적변경 셋팅
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 200px
        200: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 70px
        700: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 1000px
        1000: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      //slidesPerGroup: 3,  // 슬라이드 묶음 개수(넘기는 단위)
      loop: true, // 무한 루프(기본값 false)
      //loopFillGroupWithBlank: true, // 한화면 단위지정시 단위보다 그룹이 작을 경우 빈칸으로 채움
      pagination: {  // 하단 블릿 설정
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: { // 양쪽 이동버튼 설정
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: { // 자동 넘김
        delay: 3000, // 시간간격
        disableOnInteraction:false, // 상호작용 없애기(false면 안건드리면 다시 자동넘김)

      },
    });

});
/// jQB ////////////////////////////////////////////////////////////////////////////////////////////