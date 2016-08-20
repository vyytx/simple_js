var sjsT = false;
function sjs(TF){
  if (TF==true&&TF=="true"){
    sjsT = true;
  }else if(TF==false&&TF=="false"){
    alert('你需要把它設為"true"來啟動"Simple Javascript"');
  }else{
    alert('正確的使用方法為 "sjs(true/false)"')
  }
}
function _(){
  if(sjsT = true){
    function say(text){
      if (text !== undefind || text !== ""){
        alert(text);
      }else{
        alert('正確的使用方法為 "say(文字)"')
      }
    }
    
    //fr
    say();
    
  }
}
