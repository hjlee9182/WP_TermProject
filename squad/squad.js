
function input_Enter(){

    if(event.keyCode==13){//엔터를 누를시 아래 함수가 실행된다.
        find_player(event.target.id);
    
        
     }
}
function find_player( x ){
    var txt = document.getElementById(x).value;//선수의 이름을 받는다.
    var image = document.createElement("img");
    image.setAttribute("src","../img/player/"+txt+".jpg");
    image.setAttribute("class","player");//해당 선수의 image를 src로 한 img element를 만든다.
    var parent_image = document.getElementById(x).parentNode;
    parent_image.appendChild(image);//해당 img를 추가한다.
    parent_image.removeChild(document.getElementById(x));//기존의 input element는 제거한다.

}
function printDiv(div){
    div = div[0];
    html2canvas(div).then(function(canvas){
        var myImage = canvas.toDataURL();
        downloadURI(myImage,"masimulation.png");
    });
}
function downloadURI(uri,name){
    var link = document.createElement("a");
    link.download = name;
    link.href=uri;
    document.body.appendChild(link);
    link.click();
}
$('#save').click(function(){
    html2canvas($('#field')[0]).then(function(canvas) {
		var doc = new jsPDF('p', 'mm', 'a4'); //jspdf객체 생성
    var imgData = canvas.toDataURL('image/png'); //캔버스를 이미지로 변환
    doc.addImage(imgData, 'PNG', 0, 0); //이미지를 기반으로 pdf생성
    doc.save('sample-file.pdf'); //pdf저장
  });
});