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
var playersquestions=[]
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
    if (score>=4){
      console.log("Let's see  what you and othere think about me")
      var input =userinput("Do you want to continue?...")
      if (input=='yes'){
        for(var i=0;i<playersquestions.length;i++){
          z=playersquestions[i]
          var useranswer=userinput(z.question)
          if (useranswer==z.answer){
            console.log(z.name+"also think same about Abhinav")
            score=score+1
            a=z.name
            console.log(a)////////////////////////////////////////////////////
            if ((a.includes(a))==true){ ////////
            }///////
            else{/////
              playersquestions.splice(i,i+1)///////
              delete z['name']////
              a.push(username)////
              z['name']=a////
              playersquestions.splice(i,0,z)////new name is added in list of name
            }
          }
          else{}
        }
        var totalscore=((questions.length)+(playersquestions.length)*5)/6
        if(score>=totalscore){
          var userquestion=userinput("Enter your question about me....")
          var questionanswer=userinput("Enter your answer for your question.....")
          b={}
          b['question']=userquestion
          b['answer']=questionanswer
          b['name']=[username]
          playersquestions.splice(i,0,b)//push userquestion &questionanswer to playersquestions
        }
        var first=highscore[1]
        var second=highscore[2]
        var third=highscore[3]
        w={}
        if(score>first.score){
          w['1']=username
          w['score']=score
          highscore.splice(0,0,w)
          highscore.pop()
        }
        else if((score<=first.score) && (score>second.score)){
          w['2']=username
          w['score']=score
          highscore.splice(1,0,w)
          highscore.pop()
        }
        else if((score<=second.score) && (score>third.score)){
          w['3']=username
          w['score']=score
          highscore.splice(2,0,w)
          highscore.pop()
        }
      }
      else{
      console.log("Thankyou your score is---"+score)
      }
    }
    else{
      console.log("Thankyou your score is---"+score)
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
score=0
life=3