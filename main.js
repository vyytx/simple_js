var sj = {
  say: function(text){if(text !== undefind){alert(text);}else{alert('正確的使用方法為 "sj.say(文字/數字/布林值);"')}},
  question: function(text){if(text !== undefind){prompt(text);}else{alert('正確的使用方法為 "sj.question(文字);"')}},
  Is = {
    number: function(text){return text/1}
  }
}
