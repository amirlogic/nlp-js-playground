
//const tokenizers = require('natural/lib/natural/tokenizers')

//const tokenizer = new tokenizers.SentenceTokenizer()


// Sentiment Analysis

/* var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;

var analyzer = new Analyzer("English", stemmer, "afinn"); */
// getSentiment expects an array of strings

/* const srr = ["I", "don't", "like", "that"]     // "I", "don't", "feel", "so", "good"

console.log(JSON.stringify(srr))

console.log("Sentiment:",analyzer.getSentiment(srr));   */


// Regression Classifiers

const demoClassifier = ()=>{

    var natural = require('natural');

    var classifier = new natural.BayesClassifier();

    classifier.addDocument('i am long qqqq', 'buy');
    classifier.addDocument('buy the q\'s', 'buy');
    classifier.addDocument('short gold', 'sell');
    classifier.addDocument('sell gold', 'sell');

    classifier.train();

    const stxt = 'i am short silver'

    console.log(classifier.classify(stxt));
}

