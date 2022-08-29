var topics = ["HTML","CSS","Git","JavaScript"];
var randomtopic = topics[Math.floor(Math.random()*topics.length)];

function listtopics() {
    console.log("Here are the topics we learned through prework")
    for (x = 0; x < topics.length; x++){
    console.log(topics[x])
    }
}

function selecttopic() {
    console.log("Which topic should we study first?")
    if (randomtopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomtopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomtopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomtopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}

listtopics();
selecttopic();
