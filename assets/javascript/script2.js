
var startButton = $("#startButton")
var buttonContainer = document.getElementById('buttonContainer')
var questionText = document.getElementById('questionText')
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var button4 = document.getElementById('button4')
var printScore = document.getElementById('score')
var scoreForm = document.getElementById('scoreForm')
var restart = document.getElementById('restartButton')
var backToGithub = document.getElementById('backToDAM')
var highScoreList = document.getElementById("high-score");
var scoreInput = document.getElementById('formGroupExampleInput')
// var timer = document.getElementById("timer")
var timer = $("#timer")


// var storedScores = [username, score]

var scoreArr = []

var gameOverSwitch = 0;
var questionNumber = 0;
var score = 0;
var countdown = 60;
function setTime() {
  var timerInterval = setInterval(
    function() {
      score--
      printScore.innerText = "Score: " + score
      countdown--;
      timer.text(countdown + " seconds left.")
      if (countdown === 0) {
        clearInterval(timerInterval)
        timer.text("")
        gameOver();
        alert("Time has run out!")
      }
      if (gameOverSwitch === 1){
        clearInterval(timerInterval)
        timer.text("")
      }
    }, 1000);
}

var questions = [
    {
      title: "Cryptocurrencies like Bitcoin and Ethereum are built using which technology?",
      choices: ["Blockchain", "Machine Learning", "Quantum Computing", "Kyber Crystals"],
      answer: "Blockchain"
    },
    {
      title: "Which of these is NOT a cryptocurrency?",
      choices: ["Bitcoin Cash", "Ravencoin", "Dogecoin", "Glamdring"],
      answer: "Glamdring"
    },
    {
      title: "What is currently the main use-case for XRP?",
      choices: ["Debt Consolidation", "Cross-border Remittance", "E-Sports Awards", "Automation"],
      answer: "Cross-border Remittance"
    },
    {
      title: "What is the algorithm used by Bitcoin?",
      choices: ["Equihash", "Scrypt", "SHA-256", "X11"],
      answer: "SHA-256"
    },
    {
      title: "Bitcoin is:",
      choices: ["Immutable", "Deflationary", "Decentralized", "All of the above"],
      answer: "All of the above"
    },
    {
      title: "Other cryptocurrencies apart from bitcoin are often referred to as?",
      choices: ["Altcoins", "Money", "Code", "Cash"],
      answer: "Altcoins"
    },
    {
      title: "The first game built using Ethereum technology is called?",
      choices: ["Cryptomon", "Cryptokitties", "Cryptobox", "Ethergame"],
      answer: "Cryptokitties"
    },
    {
      title: "Proof-of-work cryptocurrencies are distributed by...",
      choices: ["Coding", "'Quantum Jumping'", "Mining", "Staking"],
      answer: "Mining"
    },
    {
      title: "Which of these is NOT a proof-of-work algorithm?",
      choices: ["Dagger-Hashimoto", "NeoScrypt", "NiceHash", "Lyra2REv3"],
      answer: "NiceHash"
    },
    {
      title: "Which company is currently working with the Federal Reserve, World Bank and other major financial institutions to bring digital assets into the mainstream?",
      choices: ["R3", "The Ethereum Foundation", "Ripple", "Mt. Gox"],
      answer: "Ripple"
    },
  ];



initialize();


$("#startButton").on('click', function(){
      startButton.attr("style", "display: none")
      buttonContainer.classList.remove('hide')
      questionText.classList.remove('hide')
      loadQuestion();
      setTime();  
      printScore.innerText = "Score: " + score
  });
//This function checks to see if questionNumber is less than the amount of questions to be asked. If so, the questionNumber's respective question title and question choices are appended.
function loadQuestion(){
  gameOverSwitch = 0;
  if(questionNumber < questions.length){
  questionText.innerText = questions[questionNumber].title;
  button1.innerText = questions[questionNumber].choices[0];
  button2.innerText = questions[questionNumber].choices[1];
  button3.innerText = questions[questionNumber].choices[2];
  button4.innerText = questions[questionNumber].choices[3];

//There are most certainly better ways of doing this. That being said, I tried several different things like using a for loop, a while loop, etc and I couldn't get it to work properly. For the time being, I've given each button it's own click event. It checks to see if the text inside the button matches the answer in my questions object.

//FIRST OPTION CLICK EVENT
  $("#button1").on('click', function(){
    if(button1.innerText === questions[questionNumber].answer){
      console.log("questions number: " + questionNumber)
      console.log("Correct!")
      score += 20;
      printScore.innerText = "Score: " + score
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  });
//SECOND OPTION CLICK EVENT
  $("#button2").on('click', function(){
    if(button2.innerText === questions[questionNumber].answer){
      score += 20;
      printScore.innerText = "Score: " + score
      console.log("Correct!")
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  });
//THIRD OPTION CLICK EVENT
  $("#button3").on('click', function(){
    if(button3.innerText === questions[questionNumber].answer){
      score += 20;
      printScore.innerText = "Score: " + score
      console.log("Correct!")
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  });
//FOURTH OPTION CLICK EVENT
  $("#button4").on('click', function(){
    if(button4.innerText === questions[questionNumber].answer){
      score += 20;
      console.log("Correct!")
      printScore.innerText = "Score: " + score
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  });
} else {
}
}

function loadNextQuestion(){
questionNumber++;
console.log(questionNumber)
if(questionNumber < questions.length){
printScore.innerText = "Score: " + score
questionText.innerText = questions[questionNumber].title;
button1.innerText = questions[questionNumber].choices[0];
button2.innerText = questions[questionNumber].choices[1];
button3.innerText = questions[questionNumber].choices[2];
button4.innerText = questions[questionNumber].choices[3];
} else {
  console.log("GAME OVER")
  buttonContainer.classList.add('hide')
  questionText.classList.add('hide')
  gameOver();
}
}
//Game Over function. This loads the high score form for the user to input their initials and save their score to client side storage.
function gameOver(){
  timer.text("")
  gameOverSwitch++;
  buttonContainer.classList.add('hide')
  backToGithub.classList.remove('hide')
  questionText.classList.remove('hide')
  questionText.innerText = "HIGH SCORES"
  scoreForm.removeAttribute("class", "hide")
  scoreForm.addEventListener('submit', function(event){
    event.preventDefault()
    

    renderScore()
    scoreInput.value="";
    restart.classList.remove('hide')
    restart.addEventListener('click', function(){
      location.reload();
    });
  });
}

function renderScore(){
  highScoreList.innerText = ""
  var highScoreName = scoreInput.value.trim()
  var highScoreData = (highScoreName + " : " + score)
  if(gameOverSwitch > 0){

  
  if(score > 0){
  scoreArr.push(highScoreData)
  } else {
    alert("Score must be higher than 0 to record high score.")
  }
  }
  // console.log(scoreArr)
  
  for(i = 0; i < scoreArr.length; i++){
    var scoreTest = scoreArr[i]
    var li = document.createElement("li")
    li.textContent = scoreTest
    highScoreList.append(li)
  }

  var dataStorage = JSON.stringify(scoreArr)
  localStorage.setItem("userData", dataStorage)
  console.log(dataStorage);
}

function initialize(){
  var storedString = localStorage.getItem("userData")
  var parseString = JSON.parse(storedString)
  if (parseString !== null){
    console.log(parseString)
    scoreArr = parseString;
    
  }
  renderScore()
  
}
