
function song(event) {//img의 아이디마다 해당 선수의 노래를 틀어준다.
    var song = new Audio('../mp3/'+event.id+'.mp3');
    console.log(song.paused);
    if (song.paused) { 
        song.play(); 
    }else{ 
        song.pause(); 
        audsongio.currentTime = 0 
    } 
 
}

var map;
      function initMap() {//각 구단의 구장별로 switch문으로 위치정보를 넣어주었다.
          var location;
        switch(document.title){
            case "SK": {
                location= {lat:37.436897,lng: 126.693436}
              
                break;
            }    
            case "Lotte" :{
                location= {lat:35.193961,lng:129.061851}
                break;
            }
            case "Nc" :{
                location= {lat:35.222481,lng:128.582287}
                break;
            }
            case "Kt" :{
                location= {lat:37.300202, lng:127.009535}
                break;
            }
            case "Doosan":{
                location= {lat:37.512292, lng:127.072041}
                break;
            }
            case "Lg":{
                location= {lat:37.512292, lng:127.072041}
                break;
            }
            case "Hanwha":{
                location= {lat:36.317233, lng:127.429324}
                break;
            }
            case "Kia":{
                location= {lat:35.168169, lng:126.889236}
                break;
            }
            case "Kium":{
                location= {lat:37.498164,lng: 126.867024}
                break;
            }
            case "Samsung":{
                location= {lat:35.840913, lng:128.681327}
                break;
            }
        }
        //위에서 정해진 위치로 화면이 보이게 되며 marker도 설정하였다.
        map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 16
        });
        var marker = new google.maps.Marker({position: location, map: map});
      }

