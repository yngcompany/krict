$(function () {
  var firstMenu = $("#gnb #nav li.menu"),
    header = $("#nav"),
    aside = $("#header #gnb .aside"),
    mainLnb = $(".section02 #mainLnb .mainHover .sectionBox .inner"),
    familySite = $("#footer ul.familySite"),
    familyBtn = $("#footer #familySite strong"),
    headerHeight = header.height(),
    familySiteHeight = familySite.height(),
    bg = $("<div class='bg'></div>"),
    overlay = $("#footer .bg.on");

    var sectionOneHeight=$(".section01").height(),
    sectionTwoHeight=$(".section02").height(),
    footerIn = sectionOneHeight + sectionTwoHeight ;




    familyBtn.on("click",function(){
      familySite.toggleClass("on");
      if(familySite.hasClass("on")){
        familySite.css({top:familySiteHeight*-1 +2});
      }
      familySite.hover(
        function(){
          familySite.addClass("on");
        },
        function(){
          familySite.removeClass("on");
        }
      )
    })


    var box01 = $("#mainLnb #box1.mainHover .sectionBox .inner"),
    box02 = $("#mainLnb #box2.mainHover .sectionBox .inner"),
    box03 = $("#mainLnb #box3.mainHover .sectionBox .inner");

    box01.addClass("on");

    
    mainLnb.hover(
      function(){
          $(this).addClass("on")
      },
      function(){
          $(this).removeClass("on")
      }
  )
    box02.hover(
      function(){
        box01.removeClass("on");
      },
      function(){
        box02.removeClass("on");
        box01.addClass("on");
      }
    )
    box03.hover(
      function(){
        box01.removeClass("on");
      },
      function(){
        box03.removeClass("on");
        box01.addClass("on");
      }
    )
    box01.hover(
      function(){
        box01.addClass("on");
      },
      function(){
        box01.addClass("on");

      }
    )
    


  firstMenu.mouseenter(function () {
    header.addClass("bg");
    firstMenu.find("ul").hide();
    $(this).find("ul").show();
    var subMenuHeight = $(this).find("ul").height();
    var newMenuHeight = headerHeight + subMenuHeight;
    header.stop().animate({ height: newMenuHeight + "px" }, 300);


  });
  firstMenu.mouseleave(function () {
    header.removeClass("bg");
    header.stop().animate({ height: headerHeight + "px" }, 300);
    firstMenu.find("ul").hide();
  });

$("#gnb #nav").hover(
    function(){
        aside.addClass("on");
    },
    function(){
        aside.removeClass("on");
    }
)

if($(".section").hasClass("footerHeight")){
  $(".section").css({height:"12rem"});
}




});

$(function(){
  $('#fullpage').fullpage({
    anchors: [".section01", ".section02", ".section03",".footer"],
    navigation:true,
    navigationPosition:'left',
      onLeave: function (anchorLink, index) {
        var activeMenu, nav2;
        if (index == 3 || index == 4) {
          $("#nav").addClass("section3");
          $(".aside").addClass("dark");
        }else{
          $("#nav").removeClass("section3");
          $(".aside").removeClass("dark");

        }
        
      },  
  });



  $('#topBtn').on('click',function(){
      $('#fullpage').fullpage.moveTo('page1')
  })
})

$(function(){
  var slideWrapper = $('.slider .slidebox'),
  slides = slideWrapper.find('.slidelist'),
  slide = $('.slidelist > li.item'),
  currentIdx = 0,
  slideCount  = slide.length,
  slideHeight = 216,
  slideMargin = 0,
  moveAmt,
  newSlides,
  newSlideHeight,
  prevBtn = slideWrapper.find('.contUp'),
  nextBtn = slideWrapper.find('.contDown');

  newSlideHeight = slideHeight;

slides.append(slide.clone().addClass('clone'));
slides.prepend(slide.clone().addClass('clone'));
  
function slideLayout(sw,sm){
  newSlides = $('.slidelist li');
  moveAmt = sw + sm;

  newSlides.each(function(idx){
      $(this).css({top:moveAmt*idx +'px', height:sw +'px'});
  });
}
slideLayout(slideHeight, slideMargin);

function setSlidePos(){
  var ulMoveAmt = -moveAmt * slideCount + 'px';
  slides.css({transform:'translateY('+ulMoveAmt+')'});
}
setSlidePos();

nextBtn.click(function(){
  nextSlide(currentIdx);
});
prevBtn.click(function(){
  moveSlide(currentIdx - 1);
});

function moveSlide(num){
     currentIdx = 0;    console.log(slide.length,currentIdx, num);

    slides.stop().animate({top:moveAmt * -num +'px'},500);
    currentIdx = num;

}
function nextSlide(num){
    num ++;
    console.log(currentIdx, num);
    if(currentIdx >=slide.length)currentIdx=0
    slides.stop().animate({top:moveAmt * -num +'px'},500);
    currentIdx = num;
    if(currentIdx>=slide.length)currentIdx=0}

    var timer = undefined;

    function autoSlide(){
        if(timer == undefined){
            timer = setInterval(function(){
                moveSlide(currentIdx + 1);
            }, 3000);
        }
    }
    function stopSlide(){
      clearInterval(timer);
      timer = undefined;
  }
    
    var pauseBtn=$('.pause'),
    playBtn= $('.play');

    playBtn.click(function(){
      pauseBtn.addClass('on');
      playBtn.removeClass('on');
      autoSlide()
    })
    
    pauseBtn.click(function(){
      pauseBtn.removeClass('on');
      playBtn.addClass('on');
      stopSlide()
    })




})

$(function(){

  var contPrev = $('#newsMenu p.prev span.prev');
  var contNext = $('#newsMenu p.next span.next');

  var slideLi = $('ul.carousel_list > li.item');
  var slideCnt = slideLi.length;
  var slideW = slideLi.width();
  var slideWrap = $('ul.carousel_list');


  $('ul.carousel_list > li.item:last-child').prependTo(slideWrap);
  
  function moveNext(){
    slideWrap.animate({
      left: +slideW
    },200,function(){
      $('ul.carousel_list > li.item:last-child').prependTo(slideWrap);
      slideWrap.css({left:''});

    })
  }
  function movePrev(){
    slideWrap.animate({
      left: -slideW
    },200,function(){
      $('ul.carousel_list > li.item:last-child').appendTo(slideWrap);
      slideWrap.css({left:''});
    })
  }
  contPrev.click(function(){
    movePrev();
  })
  contNext.click(function(){
    moveNext();
  })

});
