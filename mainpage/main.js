$("#slideshow > div:gt(0)").hide();//처음 요소를 사라지게 한다.
 
setInterval(function() { 
  $('#slideshow > div:first') //처음선택한것을
    .fadeOut(1000)          //사라지게하고
    .next()                 //다음것을 선택하여
    .fadeIn(1000)           //나타나게한다.
    .end()                  //앞쪽으로도 갈수있게함
    .appendTo('#slideshow');//이 선택한 요소를 slideshow라는 id안에 넣는다.
},  3000);