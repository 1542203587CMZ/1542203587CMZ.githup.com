window.onload=function(){
var pic=document.getElementsByClassName("TP"),
    Mpic=document.getElementsByClassName("pic2")[0],
	bigimg=document.getElementById("bimg");


Mpic.style.display='none';
for(let i=0;i<pic.length;++i){
	pic[i].onclick=function(e){
		var src=pic[i].src;
        bigimg.src=src;
        Mpic.style.display='block';
}
}
Mpic.onclick=function(e){
    Mpic.style.display='none';
}


var but1=document.getElementById("item1");
var but2=document.getElementById('item2');
var but3=document.getElementById('item3');
document.getElementById("text1").style.display="none";
document.getElementById("text2").style.display="none";
document.getElementById("text3").style.display="none";
	but1.onclick=function(e){
        this.style.backgroundColor='silver';
        but2.style.backgroundColor='white';
        but3.style.backgroundColor='white';
        document.getElementById("text1").style.display="inline";
		document.getElementById("text2").style.display="none";
		document.getElementById("text3").style.display="none";

}
	but2.onclick=function(e){
        but2.style.backgroundColor='silver';
        but1.style.backgroundColor='white';
        but3.style.backgroundColor='white';
        document.getElementById("text1").style.display="none";
		document.getElementById("text2").style.display="inline";
		document.getElementById("text3").style.display="none";

}
	but3.onclick=function(e){
        but3.style.backgroundColor='silver';
        but1.style.backgroundColor='white';
        but2.style.backgroundColor='white';
        document.getElementById("text1").style.display="none";
		document.getElementById("text2").style.display="none";
		document.getElementById("text3").style.display="inline";
	}


var add=document.getElementsByClassName("items")[0],
    btu=document.getElementById("bttun");
    last=document.getElementsByClassName("add")[0];

var j=0;
    btu.onclick=function(){
    	var parent=this.parentElement;
        var addHtml="<div class=\"items\"><div class=\"item it1\">1</div><div class=\"item Delete\">Delete</div></div>";
        var n=parseInt(parent.children[parent.childElementCount-2].children[0].innerText)+1;
        this.insertAdjacentHTML("beforeBegin",addHtml);
        parent.children[parent.childElementCount-2].children[0].innerText=n;
        parent.children[parent.childElementCount-2].children[1].addEventListener("click",function(){
            this.parentElement.remove();
        });

    }
    
     last.children[i].children[1].addEventListener("click",function(){
            this.parentElement.remove();
        });
}



