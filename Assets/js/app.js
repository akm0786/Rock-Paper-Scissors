console.log("hello welcome to js");

let userScore=0;
let computerScore=0;


const userScore_span=document.querySelector(".u_score");
const computerScore_span=document.querySelector(".c_score");
const rock_img=document.getElementById("Rock");
const paper_img=document.getElementById("Paper");
const scissors_img=document.getElementById("Scissors");
const result_div=document.querySelector(".result > p")



 function computerChoice(){

 	const options=['Rock','Paper','Scissors'];
 	 const RandomValue=Math.floor((Math.random()*3));

 	 const selection =options[RandomValue];
 	 	return selection;
 }		

		
	function win(user_Selection,comp_Selection){

		userScore++;
		userScore_span.innerHTML=userScore;
		computerScore_span.innerHTML=computerScore;
		result_div.innerHTML=user_Selection+" beats "+comp_Selection+". You Win!";
		document.getElementById(user_Selection).classList.add('green_light');
		setTimeout(function() { document.getElementById(user_Selection).classList.remove('green_light') }  ,300);


	}	
		function lose(user_Selection,comp_Selection){

		computerScore++;
		userScore_span.innerHTML=userScore;
		computerScore_span.innerHTML=computerScore;

		result_div.innerHTML=comp_Selection +" beats "+user_Selection+". Computer Win!";
		document.getElementById(user_Selection).classList.add('red_light');
		setTimeout( function() { document.getElementById(user_Selection).classList.remove('red_light') } ,300);

		
	}		function draw(){

		
		result_div.innerHTML="It's Draw.";
		document.getElementById(user_Selection).classList.add('gray_light');
		setTimeout( function() { document.getElementById(user_Selection).classList.remove('gray_light') } ,300);

		
	}	

function gameArea(user_Choice){

		// console.log("user choice=>"+userChoice);
		// console.log("computer choice=>"+computerChoice());
		const comp_Choice=computerChoice();
		switch(user_Choice+comp_Choice){

			case "PaperRock":
			case "RockScissors":
			case "ScissorsPaper":
			console.log("You wins!");
			win(user_Choice,comp_Choice);
			break;

			case "PaperScissors":
			case "ScissorsRock":
			case "RockPaper":
			console.log("You Loses.");
			lose(user_Choice,comp_Choice);
			break;

			case "PaperPaper":
			case "RockRock":
			case "ScissorsScissors":
			draw(user_Choice,comp_Choice);
			console.log(" Match Draw");
			break;
		}
		
}

function start(){


	Rock.addEventListener('click',function(){
		gameArea("Rock");
	})
	
	Paper.addEventListener('click',function(){
	gameArea("Paper");	
   })
	
	Scissors.addEventListener('click',function(){
	gameArea("Scissors");	
	})

}

start();
