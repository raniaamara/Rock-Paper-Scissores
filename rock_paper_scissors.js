
    
    let reset=document.getElementById("reset");
    let userMove = "";
    let computermove = "";
    let result = "";
    let isAutoplayig=false;
    let interval;

    function rondom( ){
        let r =Math.random();
        if (r>=0 && r<=1/3){
        return  "rock";
        }
        else if (r>1/3 && r<=2/3){
            return "paper";
        }
        else if (r>2/3 && r<=1){
            return "scissors";
        }
    }


  
    let score =JSON.parse(localStorage.getItem('score'))|| {
    wins: 0,
    losses: 0,
    ties: 0
    }; 

    reset.addEventListener("click", () =>{
        score.wins = 0;
        score.ties = 0;
        score.losses = 0;
        localStorage.removeItem('score');
        document.querySelector('.score').innerHTML=   `Wins:${score.wins} , Losses: ${score.losses}, Ties:${score.ties}`;
        
    })
    function play(userMove){
    computermove=rondom( );
    if(userMove==='rock') {
        if(computermove==='rock'){
            result='Tie';
        }
          if(computermove==='paper'){
            result='Lost';
        }
         if(computermove==='scissors'){
            result='win';
        }
    }
    if(userMove==='paper') {
        if(computermove==='rock'){
            result='win';
        }
          if(computermove==='paper'){
            result='Tie';
        }
         if(computermove==='scissors'){
            result='Lost';
        }
    }
    if(userMove==='scissors') {
        if(computermove==='rock'){
            result='Lost';
        }
          if(computermove==='paper'){
            result='win';
        }
         if(computermove==='scissors'){
            result='Tie';
        }
    }

    if(result==='Tie'){
        score.ties ++;
        }
        else if(result==='Lost'){
        score.losses ++;
        }
        else if(result==='win'){
        score.wins ++;
    }

        localStorage.setItem('score', JSON.stringify(score));
         document.querySelector('.result').innerHTML= `your move: <img src="${userMove}-emoji.png" class="move"> Computer move:<img src="${computermove}-emoji.png" class="move"> result:${ result }`  ;
        document.querySelector('.score').innerHTML=   `Wins:${score.wins} , Losses: ${score.losses}, Ties:${score.ties}`;
        
     }
     function autoplay(){
         if(isAutoplayig===false){
          isAutoplayig=true;  
         interval= setInterval (function(){
         let moves=['rock','paper','scissors'];
         let randommove=moves[Math.floor(Math.random()*3)];
          play(randommove);  },1000);
          document.getElementById('auto').innerHTML='Stop Play';
        }
        else{
            isAutoplayig=false;
            clearInterval(interval);
           document.getElementById('auto').innerHTML='Auto Play';
        }
      
     }