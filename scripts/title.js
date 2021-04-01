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
					"Ｒ Ｅ|",
					"Ｒ Ｅ |",
					"Ｒ Ｅ Ｇ|",
					"Ｒ Ｅ Ｇ |",
					"Ｒ Ｅ Ｇ Ａ|",
					"Ｒ Ｅ Ｇ Ａ |",
					"Ｒ Ｅ Ｇ Ａ .|",
					"Ｒ Ｅ Ｇ Ａ . |",
					"Ｒ Ｅ Ｇ Ａ . Ｆ|",
					"Ｒ Ｅ Ｇ Ａ . Ｆ |",	
					"Ｒ Ｅ Ｇ Ａ . Ｆ Ｕ|",
					"Ｒ Ｅ Ｇ Ａ . Ｆ Ｕ |",	
					"Ｒ Ｅ Ｇ Ａ . Ｆ Ｕ Ｎ|",
					"Ｒ Ｅ Ｇ Ａ . Ｆ Ｕ Ｎ |",	];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
