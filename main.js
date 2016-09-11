var imported1 = document.createElement('script');
var imported2 = document.createElement('script');
imported1.src = 'https://vyytx.github.io/Charge-App/js/jquery.js';
imported2.src = 'https://vyytx.github.io/simple_js/sj.js';
document.head.appendChild(imported1);
document.head.appendChild(imported2);

var sj_para = document.createElement("sjr");
var sj_node = document.createTextNode("Powered by SimpleJS");
sj_para.appendChild(sj_node);
var sj_body = document.getElementsByTagName("body")[0]; 
sj_body.appendChild(sj_para);
