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
    // 2つの数値を足す
    var sum = parseInt(textForm1,10) + parseInt(textForm2,10) + parseInt(textForm3,10);

    var a=parseInt(textForm1,10)*parseInt(textForm4,10);
    a=a/sum;

    var b=parseInt(textForm2,10)*parseInt(textForm4,10);
    b=b/sum;

    var c=parseInt(textForm3,10)*parseInt(textForm4,10);
    c=c/sum;

    // 足し算の結果を別の入力フォームに表示
    var resultForm1 = document.getElementById("resultForm1");
    resultForm1.value = a;

    var resultForm2 = document.getElementById("resultForm2");
    resultForm2.value = b;

    var resultForm3 = document.getElementById("resultForm3");
    resultForm3.value = c;

  };
