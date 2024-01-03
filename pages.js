let maincontents = document.getElementsByClassName("class_maincontents")

let btn_main = document.getElementById("mainpage_btn");
let btn_calendar = document.getElementById("calendar_btn");
let btn_book = document.getElementById("bookshell_btn");
let btn_rental = document.getElementById("bookshell_btn");
	for(let i = 0;i < maincontents.length;i++){
		maincontents[i].style.display = "none";
	}

btn_main.addEventListener("click",()=>{
	for(let i = 0;i < maincontents.length;i++){
		maincontents[i].style.display = "none";
	}
	maincontents[0].style.display = "block";
});

btn_calendar.addEventListener("click",()=>{
	for(let i = 0;i < maincontents.length;i++){
		maincontents[i].style.display = "none";
	}
	maincontents[1].style.display = "block";
});
btn_book.addEventListener("click",()=>{
	for(let i = 0;i < maincontents.length;i++){
		maincontents[i].style.display = "none";
	}
	maincontents[2].style.display = "block";
});
btn_rental.addEventListener("click",()=>{
	for(let i = 0;i < maincontents.length;i++){
		maincontents[i].style.display = "none";
	}
	maincontents[3].style.display = "block";
});
