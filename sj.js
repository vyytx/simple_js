var element = document.createElement("script");
var texttt = `
    var SJ={
        sjLang: "en-us",
        sjCU: "The correct instruction is ",
        sjStr: "String",
        sjNum: "Number",
        sjBol: "Boolean"
    }

    function sjSet(langu, IsBS){
        if(langu == "en_US"){
            SJ.sjLang="en_US";
            SJ.sjCU="The correct instruction is ";
            SJ.sjStr="String"; 
            SJ.sjNum="Number";
            SJ.sjBol="Boolean";

            if(IsBS != "true"){
                onloadSJ(1);
            }else if(IsBS == "true"){
                onloadSJ(0);
            }
        }else if(langu == "zh_TW"){
            SJ.sjLang="zh_TW";
            SJ.sjCU="正確的使用方式是 ";
            SJ.sjStr="字串";
            SJ.sjNum="數字";
            SJ.sjBol="布林值";

            if(IsBS != "true"){
                onloadSJ(1);
            }else if(IsBS == "true"){
                onloadSJ(0);
            }
        }
    }

    function onloadSJ(text){
        if(text != 1 && text != 0){
            $("head").append('<meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1">');
            $("body").html("<div id='SJsb'><h3>This website is Powered by SimpleJS.</h3></div>" + $("body").html());
            $("#SJsb").append("<h3>You can get SimpleJS <a href='main.js' download=''>here</a> .</h3>");
        }else if(text == 1){
            $("#SJsb").first().remove();
            $("head").append('<meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1">');
            $("body").html("<div id='SJsb'><h3>這個網站使用了SimpleJS,</h3></div>" + $("body").html());
            $("#SJsb").append("<h3>您可以點擊<a href='main.js' download=''>這裡</a>來下載SimpleJS</h3>");
        }else if(text == 0){
            document.body.id="body";
            $("#SJModal").remove();
            $("#body").append('<!-- Modal --><div class="modal fade" id="SJModal" role="dialog"><div class="modal-dialog"><!-- Modal content--><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">SimpleJS</h4></div><div class="modal-body"><div id="SJsb"><h3>這個網站使用了SimpleJS,</h3><h3>您可以點擊<a href="">這裡</a>來下載SimpleJS</h3></div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">關閉</button></div></div></div></div>')
            setTimeout($("#SJModal").modal("show"), 1000);
        }
    }

    onloadSJ();
    var sj = {
        say: function(text){if(text !== "!help"){alert(text);}else{console.log(SJ.sjCU + '" sj.say(' + SJ.sjStr + ' / ' + SJ.sjNum +' / ' + SJ.sjBol + '); "' )}},
        question: function(text){if(text !== "!help"){prompt(text);}else{console.log(SJ.sjCU + '" sj.question( ' + SJ.sjStr + ' ); "')}},
        confirm: function(text){if(text !== "!help"){confirm(text);}else{console.log(SJ.sjCU + '" sj.confirm(' + SJ.sjStr + ' / ' + SJ.sjNum +' / ' + SJ.sjBol + '); "' )}},
        converter: {
            textNum: function(text){if(text !== "!help"){return text/1;}else{console.log(SJ.sjCU + '" sj.textNum( ' + SJ.sjStr + ' ); "')}},
            numText: function(num){if(num !== "!help"){return "" + num;}else{console.log(SJ.sjCU + '" sj.numText( ' + SJ.sjNum + ' ); "')}},
            textBol: function(text){if(text !== "!help"){if(text == "true"){return true;}else if(text == "false"){return false;}}else{console.log(SJ.sjCU + '" sj.textBol( ' + SJ.sjStr + ' ); "')}},
            bolText: function(bol){if(bol !== "!help"){if(bol == true){return "true";}else if(bol == false){return "false";}}else{console.log(SJ.sjCU + '" sj.bolText( ' + SJ.sjBol + ' ); "')}},
            numBol: function(num){if(num !== "!help"){if(num == 1){return true;}else if(num == 0){return false;}}else{console.log(SJ.sjCU + '" sj.bolText( ' + SJ.sjNum + ' ); "')}},
            bolNum: function(bol){if(bol !== "!help"){if(bol == true){return 1;}else if(bol == false){return 0;}}else{console.log(SJ.sjCU + '" sj.bolText( ' + SJ.sjBol + ' ); "')}}
        }
    }
`
var text__ = document.createTextNode(texttt);
element.appendChild(text__);
