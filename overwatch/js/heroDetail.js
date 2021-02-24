$(function(){

      let heroDetail = [];
      let heroName =['디바','겐지','둠피스트','라인하르트','라인하르트','로드호그','루시우','리퍼','맥크리','메르시'];
      let heroTxt =['최첨단 메카를 조종하여 조국을 수호하는 전 프로게이머','기계가 되어버린 몸을 받아들여 내면의 평화를 찾은 강력한 전사이자 사이보그 닌자','지능과 카리스마, 잔혹한 무력을 동원해 더욱 강한 세계를 건설하려는 책략가','용맹, 정의, 용기라는 기사도의 미덕을 따르는 노년의 용사','구르는 로봇을 조종하는 달 출신의 유전자 조작 햄스터','초인적인 힘과 잔혹함, 파괴적인 성향으로 악명이 자자한 살인마','자신의 음악과 행동으로 사회를 변화시키기 위해 싸우는 세계적인 유명인사','예전 오버워치 요원들을 사냥하는 냉혹한 살인마 용병','자신만의 방식으로 정의를 실현하는 총잡이 무법자','수호천사, 발군의 치유사, 천재적인 의료 과학자, 열성적인 평화주의자'];
      for(let j =0; j<=10; j++){
          let heroDescription =`<div class="heroDesc">
          <div class="heroImg">
            <div>
              <img src="img/hero/hero${j+1}.png" alt="">
            </div>
          </div>
          <div class="heroTxt">
            <div>
              <h2>${heroName[j]}</h2>
              <p>${heroTxt[j]}</p>
            </div>
          </div>
          <!-- end of hero txt -->
        </div>
        <!-- end of hero Desc -->`;
        heroDetail += heroDescription;
      }
      $(".heroPanel").append(heroDetail);
      








      let heroItems = [];
      const heroArr = ['D.Va', '겐지', '둠피스트', '라인하르트', '레킹볼', '로드호그','루시우','리퍼','맥크리','메르시'];
      
      for(let i = 1; i < $(".heroDesc").length; i++){
        // $(".heroDesc").eq(i).hide();
      
        let heroItem = `<div>
        <a href="#">
          <img src="img/hero/hero_portrait_${i}.png" alt="">
        </a>
        <span>${heroArr[i-1]}</span>
      </div>`;
      heroItems += heroItem;
      }
      $(".heroPortrait").append(heroItems);









    // $(".heroDesc").hide();
    for(let i = 1; i < $(".heroDesc").length; i++){
        $(".heroDesc").eq(i).hide();
    }
      
      
    $(".heroPortrait>div").mouseover(function(){
        let index = $(this).index();
    
        $(".heroDesc").hide();
        $(".heroDesc").eq(index).show();
      });


});
      