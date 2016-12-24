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

function sjHelp (txt){
    switch(txt){
        case "say":
            alert(errAlert.say);
            break;
        case "say":
            alert(errAlert.say);
            break;
        default:
            alert('Unmatch!!');
            break;
    }
}
