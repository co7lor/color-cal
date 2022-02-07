document.getElementById("button").onclick=function(){
    // 2つの入力フォームの値を取得
    var textForm1 = document.getElementById("textForm1").value;
    var textForm2 = document.getElementById("textForm2").value;
    var textForm3 = document.getElementById("textForm3").value;
    var textForm4 = document.getElementById("textForm4").value;

    var num=0;
    if(textForm3==0){
      num==2;
    }
    else if (textForm3>0) {
      num==3;
    }

    var x=parseInt(textForm1,10)-parseInt(textForm2,10);
    var y=parseInt(textForm1,10)-parseInt(textForm3,10);

    if(x<0){
      x=x*(-1);
    }
    if(y<0){
      y=y*(-1);
    }

    var z=x+y;

    var a=((x*parseInt(textForm4,10)))/z;

    var b=parseInt(textForm4,10)-a;

    // 足し算の結果を別の入力フォームに表示
    var resultForm1 = document.getElementById("resultForm1");
    resultForm1.value = b;

    var resultForm2 = document.getElementById("resultForm2");
    resultForm2.value = a;

  };
