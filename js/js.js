//  tesktop 서브메뉴 슬라이드 다운
$('.navList, .sub_shadow').on('mouseenter mouseleave', function(e){
  
  if(window.innerWidth > 1169){  //데스크탑 상태였을때만
    if( e.type == 'mouseenter' ){
      $('.sub').stop().fadeIn();
      $('.sub_shadow').stop().slideDown(600);
    }
    else {
      $('.sub').stop().fadeOut(200, function(){
        $(this).removeAttr('style')
      });
      $('.sub_shadow').stop().slideUp(200, function(){
        $(this).removeAttr('style')
      });
      
    }
  }
  
})

// mobile 상태였을때(1170) 메인 버튼을 누르면 서브메뉴 슬라이드 다운
const $mainBtn = $('.navList > li > a');

$mainBtn.on('click', function(){
  if(window.innerWidth < 1170){  //mobile 상태였을때만

    if( !$(this).parent('li').hasClass('on') ){  //닫혀있을때만
      $('.navList > li').removeClass('on')
      $(this).parent('li').addClass('on')
    }
    else {  // 클릭한 메뉴가 이미 열려있음
      $(this).parent('li').removeClass('on')
    } 
    
  }
})

// mobile 상태였을때 trigger 버튼 클릭
$('.trigger').on('click', function(){
  $('header').toggleClass('open')
})


// more버튼을 누르면  sns 내용이 더 보임
$('.moreBtn').on('click',function(){
  $('.more').hide();
  $('.item_wrap_more').slideDown(800);
})

// footer select를 선택하면 해당 링크로 페이지 이동
const fam = document.querySelector('#fam');
fam.addEventListener('change', function(){
  console.log(this.value)
  //window.open('웹페이지주소','이름','속성들')
  //window.location = '웹페이지주소'
  //window.open(this.value)
  if( !this.value == "")  {
    document.location = this.value;
  }

})