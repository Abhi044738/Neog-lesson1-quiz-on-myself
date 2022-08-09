//functions
var readlinesync=require('readline-sync');
function  userinput(string){
  a=readlinesync.question(string)
  return a
}  
function play(question,answer){
  var useranswer=userinput(question)
  if (useranswer.toLowerCase()==answer.toLowerCase()){
    console.log("You are correct!!!!")
    score=score+1
  }
  else{
    console.log("You are worng")
    score=score-1
    life=life-1
  }
}


//data
life=3
score=0
questions=[{question:"In which city do I live....",answer:"kotdwar"},{question:"What's my favourite homemade food....",answer:"kadai paneer"},{question:"My favourite dessert......",answer:"gulab jamun"},{question:"T.V. category of chennal I like to watch (TV DRAMA,COMEDY,ENTERTAINMENT,SPORTS,FACTUAL,MUSIC TV).....",answer:"FACTUAL"},{question:"What's my nickname.....",answer:"Rishu"}]
highscore=[{1:"",score:0},{2:"",score:0},{3:"",score:0}]
var playersplayed=[]
var atry='y'

//main
a=userinput("Do you know Abhinav Uniyal.....")
if (a=="yes"){
  while (atry=='y'){
    console.log("Let's check how much you know about Abhinav")
    var username=userinput("Enter your name.....");
    if ((playersplayed.includes(username))==true){
      console.log("You have already played thankyou!!!!!!")
    }
    else{
      playersplayed.splice(0,0,username)//////////////////playerplayed
      console.log(playersplayed)//////////////
      for (var i=0;i<questions.length;i++){
        if(life>0){
          var z=questions[i]
          play(z.question,z.answer)
        }
        else{
          console.log("You are out of life!!!!")
          break
        }
      }
    }  

  var atry=userinput("Do you want to try again(y/n)...")
  console.log('Your score is '+ score)
  score=0
  life=3
  }
}
else{
   console.log("Thankyou")
}
console.log("High score\n"+highscore)