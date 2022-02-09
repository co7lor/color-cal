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

    var z=parseInt(textForm2)+parseInt(textForm3);

    var a=parseInt(textForm1)/(1+(parseInt(textForm4)*(1/10)));
    a=a*100;
    a=Math.floor(a);
    a=a/100;

    var b=(parseInt(textForm2)*a)/z;
    b=b*100;
    b=Math.floor(b);
    b=b/100;

    var c=a-b;
    c=c*100;
    c=Math.floor(c);
    c=c/100;

    d=a*(parseInt(textForm4)*(1/10));
    d=d*100;
    d=Math.floor(d);
    d=d/100;

    // 足し算の結果を別の入力フォームに表示
    var resultForm1 = document.getElementById("resultForm1");
    resultForm1.value = b;

    var resultForm2 = document.getElementById("resultForm2");
    resultForm2.value = c;

    var resultForm3 = document.getElementById("resultForm3");
    resultForm3.value = d;
  };
