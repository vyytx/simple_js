function sjs(TF){
  if (TF==true&&TF=="true"){
   @();
  }else if(TF==false&&TF=="false"){
    alert('You need to make it "true" to enable "Simple Javascript"');
  }else{
    alert('The currect instruction is "sjs(true/false)"')
  }
}
function @(){
  function say(text){
    alert(text);
  }
}
