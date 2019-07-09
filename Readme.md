(1) 로그인 기능

  ![그림입니다.  원본 그림의 이름: CLP00005bd00001.bmp  원본 그림의 크기: 가로 793pixel, 세로 528pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063eb.bmp)  

 초기 페이지로써 아이디와 패스워드를 입력해야 메인 페이지로 이동하게 하였습니다.

하단에 회원가입 할 수있는 버튼을 만들고 회원가입 페이지로 이동하게 만들었습니다.

로그인 기능 자체는 php로 서버에 텍스트로 저장된 곳에서 불러와서 확인했습니다.

   

(2) 회원가입

  ![그림입니다.  원본 그림의 이름: CLP00005bd00002.bmp  원본 그림의 크기: 가로 666pixel, 세로 515pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063ec.bmp)  

​     

회원가입 페이지입니다. 아이디와 패스워드, 패스워드 확인 항목을 입력하면 php 서버로 보내서 텍스트 파일에 저장되게 하였습니다. 만약 패스워드와 패스워드 확인 항목이 동일하지 않으면 아래와 같은 alert이 뜨게 하였습니다.

 중복된 아이디가 있어도 가입이 안되게 하였습니다.(아래와 같은 alert가 뜨게 함)

​     

  ![그림입니다.  원본 그림의 이름: CLP00005bd00003.bmp  원본 그림의 크기: 가로 680pixel, 세로 331pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063ed.bmp)    ![그림입니다.  원본 그림의 이름: CLP00005bd00004.bmp  원본 그림의 크기: 가로 635pixel, 세로 357pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063ee.bmp)  

**(3)** **공통된 틀**

  ![그림입니다.  원본 그림의 이름: CLP00005bd00006.bmp  원본 그림의 크기: 가로 1877pixel, 세로 200pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063ef.bmp)  

왼쪽 상단에는 KBO 마크가 있고 해당 이미지를 누르면 메인페이지로 이동하게 하였습니다.

그리고 오른쪽에는 메뉴바가 있습니다. 각 메뉴마다 하단 메뉴가 있으며 마우스를 올리면   드롭다운으로 해당하는 서브메뉴가 보이게 됩니다.

그리고 오른쪽 상단에 유튜브로 바로 검색할 수 있는 창을 만들어서 바로 검색이 가능하게 하였습니다.

​      ( 드롭아웃 예시)

  ![그림입니다.  원본 그림의 이름: CLP00005bd00007.bmp  원본 그림의 크기: 가로 1038pixel, 세로 428pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f0.bmp)  

​     

​     

페이지 오른쪽에는 바로 팬 페이지로 이동할 수있는 리모컨(?)기능을 하는 것이 있습니다.

해당 메뉴에서 각 구단을 누르면 해당 구단의 팬페이지로 바로 이동하게 만들었습니다

  ![그림입니다.  원본 그림의 이름: CLP00005bd0000a.bmp  원본 그림의 크기: 가로 613pixel, 세로 830pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f1.bmp)  

이러한 페이지 틀을 기본으로 하여 중앙 레이아웃과 왼쪽 레이아웃의 내용이 바뀝니다.



**(4)** **메인 페이지**

  ![그림입니다.  원본 그림의 이름: CLP00005bd0000c.bmp  원본 그림의 크기: 가로 1170pixel, 세로 867pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f2.bmp)  

  ![그림입니다.  원본 그림의 이름: CLP00005bd0000d.bmp  원본 그림의 크기: 가로 1234pixel, 세로 546pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f3.bmp)  

​     

메인페이지의 내용입니다.

중앙 상단에는 NEWS라고 하여 이미지가 슬라이드 되고 있으며 해당 이미지를 눌렀을때 해당 이미지의 뉴스로 이동하게 됩니다.

중앙 하단에는 영상이 있으며 iframe태그를 활용하여 유튜브 영상을 바로 볼수있게 만들었습니다.

 

(5) 팀순위

​     

​     

  ![그림입니다.  원본 그림의 이름: CLP00005bd0000f.bmp  원본 그림의 크기: 가로 1384pixel, 세로 660pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f4.bmp)  

​     

 팀순위 메뉴를 눌렀을 때 나오는 화면입니다.

중앙에 위와 같이 테이블이 구성되어있으며 테이블의 열에는 각각 정보가 있으며 해당되는 수치를 적었습니다. 그리고 각 행마다 팀하나의 정보를 모두 담고있습니다

전체적으로 CSS를 깔끔하게 보이게 구성 하였습니다.

각 팀의 로고 이미지도 따로 저장하여 부르게 하였습니다.

각 행의 마우스를 올리면 반응하여서 그 행은 노란색의 색을 띄게 만들었습니다.

  ![그림입니다.  원본 그림의 이름: CLP00005bd00016.bmp  원본 그림의 크기: 가로 1433pixel, 세로 440pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f5.bmp)  

​     

(6) 각 팀 정보

  ![그림입니다.  원본 그림의 이름: CLP00005bd00010.bmp  원본 그림의 크기: 가로 1254pixel, 세로 589pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f6.bmp)  

왼쪽의 레이아웃에는 각 팀의 팀정보와 구장 위치로 이동할수있는 버튼을 만들었고

중앙 상단에는 각 팀의 이름과 로고가 보이게 구현하였습니다.

  ![그림입니다.  원본 그림의 이름: CLP00005bd00012.bmp  원본 그림의 크기: 가로 978pixel, 세로 726pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f7.bmp)  

​     

중앙 하단에는 각 팀의 대표선수 사진과 이름을 보게 하였고 가운데 있는 선수의 이미지를   누르면 해당 선수의 개인 응원가가 audio 태그를 이용해서 나오게 하였습니다.

그리고 하단 테이블에는 각 구단의 정보를 담게 하였습니다.

그리고 각 팀마다의 정보를 담고있는 페이지 이므로 테이블에 있는 색을 각 팀의 대표색이  드러나게 하였습니다.

​     

​     

  ![그림입니다.  원본 그림의 이름: CLP00005bd00014.bmp  원본 그림의 크기: 가로 1577pixel, 세로 745pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f8.bmp)  

​     

그리고 왼쪽의 메뉴에서 구장 위치를 누르게 되면 해당 구단의 홈 구장 위치를 담고있는

구글 지도 API를 불러오게 하였습니다.

이러한 구성으로 KBO의 모든 10개 구단의 정보를 담게 하였습니다.



( 7) 선수 정보

  ![그림입니다.  원본 그림의 이름: CLP00005bd00015.bmp  원본 그림의 크기: 가로 1535pixel, 세로 533pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063f9.bmp)  

​     

선수 정보 메뉴에는 타자와 투수로의 서브메뉴로 나뉘어져 있습니다.

타자,투수로 이동할 수 있는 리모컨기능의 메뉴를 왼쪽 레이아웃에 만들었고

중앙에는 타자 페이지였으면 타자 테이블 , 투수 페이지였으면 투수 테이블을 보이게 하였습니다.

해당 테이블도 이전의 팀순위 페이지에서의 테이블과 비슷하게 구현하였으며 깔끔하게 보이게 만들었습니다.

테이블의 열에는 각 선수들의 정보를 담고있으며, 각 행에는 선수 각각의 모든 정보가 들어있습니다.

그리고 각 행에 마우스를 올리게 되면 노란색으로 하이라이트를 주게 하였습니다.

​     

  ![그림입니다.  원본 그림의 이름: CLP00005bd00017.bmp  원본 그림의 크기: 가로 1363pixel, 세로 498pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063fa.bmp)  

​     

**(8)** **기타 정보**

  ![그림입니다.  원본 그림의 이름: CLP00005bd00019.bmp  원본 그림의 크기: 가로 215pixel, 세로 175pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063fb.bmp)  

기타 정보에 마우스를 올리면 관련어플/재미요소 서브메뉴가 있습니다.

관련 어플 메뉴에는 아래와 같은 정보를 보여줍니다.

kbo와 관련된 어플리케이션에 대한 목록이 있습니다. 

대표 이미지를 왼쪽에 두고 오른쪽에 해당 어플리케이션의 대략적인 정보등을 담았습니다.

그리고 각 어플리케이션의 구별을 두기 위해 위 아래 border에 색을 주었습니다.

​     ![그림입니다.  원본 그림의 이름: CLP00005bd00018.bmp  원본 그림의 크기: 가로 1172pixel, 세로 892pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063fc.bmp)  

재미요소 메뉴에는 아래와 같은 정보를 넣었습니다.

야구와 관련된 재밌는 용어를 넣었으며 해당하는 이미지 혹은 GIF를 왼쪽에 두고

오른쪽에는 용어가 어떻게 나왔는지 언제 쓰이는지 등의 정보를 담고 있습니다.

![그림입니다.  원본 그림의 이름: CLP00005bd0001b.bmp  원본 그림의 크기: 가로 1435pixel, 세로 837pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063fd.bmp)  

​     

**( 9 )** **나만의 스쿼드**

  ![그림입니다.  원본 그림의 이름: CLP00005bd0001c.bmp  원본 그림의 크기: 가로 1224pixel, 세로 659pixel](file:///C:\Users\lee\AppData\Local\Temp\Hnc\BinData\EMB000007d063fe.bmp)  

 각 야구 포지션마다 입력할 수 있는 텍스트 공간이 있으며 거기에 선수의 이름을 입력하면

위와 같이 해당 선수의 이미지가 나오게 하였습니다.

이렇게 각 포지션마다 자신이 원하는 선수의 이름을 넣음으로써 기존에 고정되있던 팀이 

아닌 자신의 좋아하는 나만의 스쿼드를 만들수 있게 하였습니다.

​     