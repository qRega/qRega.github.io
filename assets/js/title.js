if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"Ｒ|",
					"Ｒ |",
					"Ｒ E|",
					"Ｒ E |",
					"Ｒ E G|",
					"Ｒ E G |",
					"Ｒ E G A|",
					"Ｒ E G A |",
					"Ｒ E G A .|",
					"Ｒ E G A . |",
					"Ｒ E G A . F|",
					"Ｒ E G A . F |",	
					"Ｒ E G A . F U|",
					"Ｒ E G A . F U |",	
					"Ｒ E G A . F U N|",
					"Ｒ E G A . F U N |",	];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}