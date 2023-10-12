$.fn.multiSlide=function(options){
    var defaults={
        slideWidth:200,
        slideMargin:30,
        maxSlides:3,
        responsiveMargin:20
    };
    var options=$.extend({},defaults,options)

    console.log(options)

var slideWrapper=$('.slide_wrapper'),
slides=slideWrapper.find('.slides'),
slide=slides.find('li'),
currentIdx=0,
slideCount=slide.length,
slideWidth=options.slideWidth, 
slideMargin=options.slideMargin, 
responsiveMargin=options.responsiveMargin,
moveAmt, 
maxSlides=options.maxSlides,
newSlidesWidth,
prevBtn=slideWrapper.find('.prev'),
nextBtn=slideWrapper.find('.next'),
pauseBtn=$('.pauseBtn');
playBtn=$('.playBtn');

newSlidesWidth=slideWidth;

slides.append(slide.clone().addClass('clone'));

slides.prepend(slide.clone().addClass('clone'));


function slideLayout(sw,sm){
    newSlides=$('.slide_wrapper li')
    moveAmt=sw+sm;
    
    newSlides.each(function(idx){
        $(this).css({left:moveAmt*idx+'px',width:sw+'px'});
    });
}

slideLayout (slideWidth,slideMargin);

function setSlidePos(){
    var ulMoveamt= -moveAmt*slideCount+'px';
    
    slides.css({transform:'translateX('+ulMoveamt+')'})

}
setSlidePos();


function moveSlide(num){
    slides.stop().animate({left:moveAmt*-num+'px'},500,
    function(){if(currentIdx==slideCount||currentIdx==-slideCount){slides.css({left:'0px'});
    currentIdx=0;}});
    
        currentIdx=num;
};

    

var timer='';
function autoSlide(){
    if(timer==''){
        timer=setInterval(function(){
            moveSlide(currentIdx+1)
            },3000)
        }
    }

function stopSlide(){
    clearInterval(timer);
    timer='';
}
stopSlide();
prevBtn.click(function(){
    moveSlide(currentIdx-1);
})
nextBtn.click(function(){
    moveSlide(currentIdx+1);
})

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




}//--fn.multiSlide
