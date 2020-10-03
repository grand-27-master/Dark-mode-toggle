var toggle1=document.getElementById("toggle");

toggle1.addEventListener("change",(e)=>{
	document.body.classList.toggle("dark",e.target.checked);
});