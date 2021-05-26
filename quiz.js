window.onload = function() {
	show(0);
}

let questions = [
		 {
			 
	 id:1,
		 question:"Q1:Which statement is true",
		 answer: "Exe can run independently",
		 options:[
		   "Exe can run independently",
		   "Exe cannot run independently",
		   "All can run independently",
		   "None of these"]
	     },
{
	 id:2,
		question:"Q2:A tool that is used for running Applet is ",
		 answer: "Applet viewer",
		 options:[
		   "Javap",
		   "Javac",
		   "Applet viewer",
		   "Applet run"]
	     },
		 {
	id:3,		 
		 question:"Q3: Which is the keyword used fir deriving classes in java",
		 answer: "Extends",
		 options:[
		   "Implements",
		   "Extends",
		   "Throws",
		   "Inherits"]
	     },
		 {
	id:4,		 
		question:"Q4: What are the two types of exceptions available in java",
		 answer: "Checked and compile",
		 options:[
		   "Checked and compile",
		   "Unchecked and compile",
		   "Checked and Unchecked",
		   "Compile and non-compile"]
	     },
		 { 
	id:5,		 
		question:"Q5: Which one of the following statements is FALSE",
		 answer: "Multi threads can manipulate files and get user input at the same time",
		 options:[
		   "Java supports multi-threads programming",
		   "Threads in a single program can have different priorities",
		   "Multi threads can manipulate files and get user input at the same time",
		   "two threads can never act in the same object at the same time"]
	     },	
		 {		 
	id:6,		 
		question:"Q6:A subclass can use the keyword in its constructor in order to invoke the constructor of its immediate super class",
		 answer: "Super",
		 options:[
		   "final",
		   "Super",
		   "Extends",
		   "None of these"]
	     },	 
 ];

function submitForm(e){
	e.preventDefault();
	let name = document.forms["welcome_form"]["name"].value;
	
	sessionStorage.setItem("name", name);
	
	location.href = "quiz.html";
	
}


let question_count = 0;

let point = 0;


function next() {
	
	let user_answer = document.querySelector("li.option.active").innerHTML;
	
     if(user_answer == questions[question_count].answer){
		point += 1;
		
		sessionStorage.setItem("points", point);
	 }
	 
	 
	if (question_count == questions.length - 1){
		sessionStorage.setItem("time", `${minutes} min ${seconds} sec`);
		clearInterval(mytime);
		location.href = "end.html";
		return;
	}
	
	
	

	

	
	question_count ++;
	show(question_count);
	
}
 function show(count) {
	 let question = document.getElementById("questions");
	 
	 
	 //question.innerHTML = "<h2>" + questions[count].question + "</h2>";
	 
	 
	 question.innerHTML = `
	 ${questions[count].question}
	 
	  <ul class="option_group">
				    <li class="option">${questions[count].options[0]}</li>
					<li class="option">${questions[count].options[1]}</li>
					<li class="option">${questions[count].options[2]}</li>
					<li class="option">${questions[count].options[3]}</li>
				</ul>
	 
	 `;
	 
	 toggleActive();
 
 }
 
 function toggleActive() {
	 let option = document.querySelectorAll("li.option");
	 
	 for(let i=0; i< option.length; i++) {
		 option[i].onclick = function() {
			 for(let j=0; j< option.length; j++){
				if(option[j].classList.contains("active")) {
					option[j].classList.remove("active");
				}
			 }
			 option[i].classList.add("active");
		 }
	 }
 }	 