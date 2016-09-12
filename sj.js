var sjConf ={
  sjSet : function(lang){if(lang == "en-us"){this.sjLang="en-us"; this.sjCU="The correct instruction is "; this.sjStr="String"; this.sjNum="Number"; this.sjBol="Boolean";}else if(lang == "zh-tw"){this.sjLang="zh-tw"; this.sjCU="正確的使用方式是 "; this.sjStr="字串"; this.sjNum="數字"; this.sjBol="布林值";}},
  sjLang : "en-us",
  sjCU : "",
  sjStr : "",
  sjNum : "",
  sjBol : ""
}

document.body.appendChild(document.createElement('sb'));
document.getElementsByTagName("sb")[0].id = "sb";
document.getElementById("sb").appendChild(document.createTextNode("CLICK ME"));

var sj = {
  say: function(text){if(text !== "help"){alert(text);}else{alert(SJ.sjCU + '"sj.say(' + SJ.sjStr + '/' + SJ.sjNum +'/' + SJ.sjBol + ');"' )}},
  question: function(text){if(text !== "help"){prompt(text);}else{alert('正確的使用方法為 "sj.question(文字);"')}},
  textNum: function(text){if(text !== help){return text/1}else{alert('正確的使用方法為 "sj.textNum(文字);"')}}
}
