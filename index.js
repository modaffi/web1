window.addEventListener("load",function(){       
        var BuoPrint = document.getElementById("buo_print");
        BuoPrint.onclick=function(){
        var BuoPrint = document.getElementById("buo_print");
        var x = prompt("x값을 입력하세요.");
        var y = prompt("y값을 입력하세요.");
        x=parseInt(x);
        y=parseInt(y);
        BuoPrint.value=x+y;
    };
    });