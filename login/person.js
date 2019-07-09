$("#submit").click(function(){
    $.ajax({
    url:'http://localhost/tp/register.php',
    type:'POST',
    data:$('#register').serialize(),
    success:function(){
        window.location.reload(true);
    }
    
});
});

function logincheck(){
    var id = document.getElementById("id").value;
    var pwd = document.getElementById("pwd").value;
    if(id=="" || pwd=="" ){
        alert("빈칸이 존재합니다.")
        return false;
    }
    else{
        return true;
    }
}
function check(){
    var rpwd = document.getElementById("rpwd").value;
    var pwd = document.getElementById("pwd").value;
    if(rpwd==pwd){
        return true;
    }
    else{
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return false;
    }
}