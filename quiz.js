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
		 
	{
	id:7,		 
		question:"Q7: Visual basic is a tool that allows to develop windows.............. application ",
		 answer: "GUI(Graphical user interface)",
		 options:[
		   "GUI(Graphical user interface)",
		   "GUI(Graphical user interrupts)",
		   "GUI(Graphical user information)",
		   "GIU(Graphical interface user)"]
	     },	 
		 
		 {
	id:8,		 
		question:"Q8: Visual basic program built around............",
		 answer: "Controls",
		 options:[
		   "Methods",
		   "Controls",
		   "Properties",
		   "Events"]
	     },	 
		 
		  {
	id:9,		 
		question:"Q9:All the control in tool box expected......... are objects in VB ",
		 answer: "Pointers",
		 options:[
		   "Image control",
		   "Data",
		   "Picture box",
		   "Pointers"]
	     },	 
		 {
	id:10,		 
		question:"Q10:The ............ consists of the title bar,menu bar and tool bar",
		 answer: "Main window",
		 options:[
		   "Tool box",
		   "Properties window",
		   "Main window",
		   "Project explorer window"]
	     },	 
		 {
	id:11,		 
		question:"Q11:Which is not a common control event",
		 answer: "Single click",
		 options:[
		   "Single click",
		   "Click",
		   "Double click",
		   "Mouse move"]
	     },	 	 
		 {
	id:12,		 
		question:"Q12:A check box can also appear as",
		 answer: "Button",
		 options:[
		   "Button",
		   "Radio button",
		   "Scroll bar",
		   "Both a and b"]
	     },	 	 
		 
		  {
	id:13,		 
		question:"Q13:To show system date and time we use.......",
		 answer: "Now",
		 options:[
		   "Date",
		   "Time",
		   "Now",
		   "None of these"]
	     },	 	 
		 
		 	  {
	id:14,		 
		question:"Q14:A table cam be deleted from the database by using .........",
		 answer: "Drop",
		 options:[
		   "Delete",
		   "Drop",
		   "Exit",
		   "None of these"]
	     },	 	 
		 
		 
		 	  {
	id:15,		 
		question:"Q15:Face is an attribute of ........ tag",
		 answer: "Font",
		 options:[
		   "Table",
		   "Body",
		   "Img",
		   "Font"]
	     },	 	 
		 
		 	  {
	id:16,		 
		question:"Q16:UNIX is a .......... and ............ operating system",
		 answer: "Multiprocessing and multitasking",
		 options:[
		   "Singleprocessing and single tasking",
		   "Multiprocessing and multitasking",
		   "Singleprocessing and multitasking",
		   "Multiprocessing and singletasking"]
	     },	 	 
		 
		  	  {
	id:17,		 
		question:"Q17:PID stands for ............",
		 answer: "Process identification",
		 options:[
		   "Process interface data",
		   "Process identification",
		   "Process independently",
		   "None of these"]
	     },	 	 
		 
		   {
	id:18,		 
		question:"Q18:PERT stands for ............",
		 answer: "Program evaluation and review",
		 options:[
		   "Program evaluation and report",
		   "Process evaluation and review",
		   "Program evaluation and review",
		   "None of these"]
	     },	 

  {
	id:19,		 
		question:"Q19:PDU stands for ............",
		 answer: "Protocol data unit",
		 options:[
		   "Protocol device unit",
		   "Protocol data unit",
		   "Process data unit",
		   "Process device unit"]
	     },	 

{
	id:20,		 
		question:"Q20:SRS stands for ............",
		 answer: "System requirement specification",
		 options:[
		   "System requirement specification",
		   "System requirement software",
		   "system requirement security",
		   "System record software"]
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
