
function Enter_Check(){

    var txt =document.getElementById("youtube").value;
    var url = "https://www.youtube.com/results?search_query="+txt;//유튜브에 검색할수있는 url이다.
    if(event.keyCode==13){//엔터를 누를시 아래 해당하는 url이 열리게 한다.
       window.open(url);
    }
}
