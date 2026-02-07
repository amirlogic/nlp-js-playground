
const { RiTa } = require("rita")

// to analyze a sentence
/* let data = RiTa.analyze("The elephant took a bite!");
console.log(data); */

// to load a grammar
//let grammar = RiTa.grammar(rulesObjectOrJSON);
//console.log(grammar.expand());

const qdetect = ()=>{

    console.log("Is it a question?")

    let strr = ["I am fine","How much is it","I am not sure","Is it hard"]

    strr.forEach((str)=>{

        console.log(str,"->",RiTa.isQuestion(str))
    })
}


qdetect()
