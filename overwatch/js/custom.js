$(function(){
  // $(".heroPortrait div").on('mouseenter', function(){
  //   let idx = $(this).index();
  //   $(".heroDesc").hide();
  //   $(".heroDesc").eq(idx).show();
  // });

  // $(".heroDesc").eq(0).show();

  // for(let i = 1; i < $(".heroDesc").length; i++){
  //   $(".heroDesc").eq(i).hide();
  // }

  



  $(".heroPortrait>div").mouseover(function(){
    let index = $(this).index();

    $(".heroDesc").hide();
    $(".heroDesc").eq(index).show();
  });


let heroItems = [];
const heroArr = ['D.Va', '겐지', '둠피스트', '라인하르트', '레킹볼', '로드호그', '루시우', '리퍼', '맥크리'];
for(let i = 1; i < $(".heroDesc").length; i++){
  $(".heroDesc").eq(i).hide();

  let heroItem = `<div>
  <a href="#">
    <img src="img/hero/hero_portrait_${i}.png" alt="">
  </a>
  <span>${heroArr[i-1]}</span>
</div>`;
heroItems += heroItem;
}
$(".heroPortrait").append(heroItems);





// --------------------------------------------------




  $(".mainNav>li .game").click(function(){
    $(this).toggleClass("on");

    if($(this).hasClass("on")){
      $(".depth_1").slideDown('fast');  
    }else{
      $(".depth_1").slideUp('fast');  
    }
  });

  $(".mainNav>li .event").click(function(){
    $(this).toggleClass("on");

    if($(this).hasClass("on")){
      $(".depth_2").slideDown('fast');  
    }else{
      $(".depth_2").slideUp('fast');  
    }
  });

  $(".mainNav>li .esports").click(function(){
    $(this).toggleClass("on");

    if($(this).hasClass("on")){
      $(".depth_3").slideDown('fast');  
    }else{
      $(".depth_3").slideUp('fast');  
    }

    
  });

  $(".mainNav>li .coommunity").click(function(){
    $(this).toggleClass("on");

    if($(this).hasClass("on")){
      $(".depth_4").slideDown('fast');  
    }else{
      $(".depth_4").slideUp('fast');  
    }
  });




});






// $(".heroPortrait>div").mouseover(function(){
//   let index = $(this).index();

//   $(".heroDesc").hide();
//   $(".heroDesc").eq(index).show();
// });

  
// //첫번째 탭 강제 클릭 이벤트를 발생시킨다!! @@@@@@@@@
// //  $(".dva").eq(0).trigger("click"); 

// let heroItems = [];
// const heroArr = ['D.Va', '겐지', '둠피스트', '라인하르트', '레킹볼', '로드호그', '루시우', '리퍼', '맥크리'];
// for(let i = 1; i < $(".heroDesc").length; i++){
// $(".heroDesc").eq(i).hide();

// let heroItem = `<div>
// <a href="#">
//   <img src="img/hero/hero_portrait_${i}.png" alt="">
// </a>
// <span>${heroArr[i-1]}</span>
// </div>`;
// heroItems += heroItem;
// }
// $(".heroPortrait").append(heroItems);


