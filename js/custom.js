$(function(){
  //문자열 초기화 변수
  let imgs = '';
  
  for(let i=0; i<200; i++){
   // imgs += "<img src='img/pic" + i + ".jpg'>";  //문자열 + i + 문자열의 형태!
    imgs += `<img src= "img/pic${i}.jpg">`;

  }


  //img 태그 생성 밑 삽입

  //console.log(imgs);

  $("section").html(imgs); //--> 섹션에 현재 어떤 태그가 들어있어도 다 지우고 괄호 안의 매개변수를 대입
  // $("section").append(imgs); //--> 현재 있는것을 그대로 두고 뒤로 들어간다. 앞으로 넣으려면 prepend 사용



  //마우스 무브 이벤트
  $(window).on("mousemove", function(e){

    let xPosition = e.pageX;
    let winWidth = $(window).width();
    let percent = Math.floor((xPosition/winWidth)*200);
     //Math.floor(); --> 소수점 이하를 버림한다.

    $("section>img").hide();
    $("section>img").eq(percent).show();
    

    $("h3").text(percent);

  });
});








//---------------------------------------

// $(function(){
//   //문자열 초기화 변수
//   let imgs = '';
  
//   for(let i=0; i<200; i++){
//     imgs += "<img/pic" + i + ".jpg>"; //0번부터 199까지 총 200장의 이미지를 사용할 것! (200번 사진은 사용 X)
//     //img폴더의 pic으로 시작하고 .jpg로 끝나는 것을 i번 반복!

//   }

//   console.log(imgs); //--> imgs = "<img/pic" + i + ".jpg>"; : 바깥쪽에 콘솔 찍으면 콘솔에 마지막것만 보여짐 . 안쪽에 찍으면 전부 다 보임 --> 바깥쪽에 찍고 전부 누적되게 보려면 증감연산 사용하자!
// });