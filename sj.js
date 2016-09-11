var sj = {
  say: function(text){if(text !== "help"){alert(text);}else{alert('正確的使用方法為 "sj.say(文字/數字/布林值);"')}},
  question: function(text){if(text !== "help"){prompt(text);}else{alert('正確的使用方法為 "sj.question(文字);"')}},
  textNum: function(text){if(text !== help){return text/1}else{alert('正確的使用方法為 "sj.textNum(文字);"')}}
}
