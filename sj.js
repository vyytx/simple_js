var SJ={
    sjLang: "en-us",
    sjCU: "The correct instruction is ",
    sjStr: "String",
    sjNum: "Number",
    sjBol: "Boolean"
}

var errAlert = {
    say: "The correct instruction is 'sj.say(String);'",
    ques: "The correct instruction is 'sj.ques(String);'",
    conf: "The correct instruction is 'sj.conf(String);'",
    converter:{
        txtNum: "The correct instruction is 'sj.converter.txtNum(String);'",
        numTxt: "The correct instruction is 'sj.converter.numTxt(Number);'",
        txtBol: "The correct instruction is 'sj.converter.txtBol(String);'",
        bolTxt: "The correct instruction is 'sj.converter.bolTxt(Boolean);'",
        numBol: "The correct instruction is 'sj.converter.numBol(Number);'",
        bolNum: "The correct instruction is 'sj.converter.bolNum(Boolean);'"
    }
}

function jsHelp (txt){
    switch(txt){
        case "say"
            alert(errAlert.say);
            break;
        case "say"
            alert(errAlert.say);
            break;
        default
            alert('Unmatch!!');
    }
}

var sj = {
    say: function(txt){alert(txt)},
    ques: function(txt){prompt(txt)},
    conf: function(txt){confirm(txt)},
    converter: {
        txtNum: function(txt){return txt/1;},
        numTxt: function(num){return "" + num;},
        txtBol: function(txt){if(txt == "true"){return true}else if(txt == "false"){return false}},
        bolTxt: function(bol){if(bol == true){return "true"}else if(bol == false){return "false"}},
        numBol: function(num){if(num == 1){return true}else if(num == 0){return false}},
        bolNum: function(bol){if(bol == true){return 1}else if(bol == false){return 0}}
    }
}
