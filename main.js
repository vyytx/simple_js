var imported1 = document.createElement('script');
var imported2 = document.createElement('script');
imported1.src = 'https://vyytx.github.io/Charge-App/js/jquery.js';
imported2.src = 'https://vyytx.github.io/simple_js/sj.js';
document.head.appendChild(imported1);
document.head.appendChild(imported2);

$("body").append("<sjr>使用了SimpleJS<sjr>")
