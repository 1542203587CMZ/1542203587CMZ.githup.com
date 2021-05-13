//点击p1改变字体颜色
document.getElementById("p1").onclick=function (){
	p1.style.color='red';
}

//点击p2将h1内容变成当前的日期
document.getElementById("p2").onclick=function (){
	var date = new Date();
	var year=date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var time=year+"-"+month+"-"+day;
	document.getElementById("f1").innerHTML=time;
}

//点击p3对象，将其父对象的l1元素增加类
document.getElementById("p3").onclick=function (){
	document.getElementById("p3").classList.add("fn-active");
}


//点击p4对象,删除表格的p8元素
document.getElementById("p4").onclick=function (){
	var parent=document.getElementById("d1");
	var child=document.getElementById("p8");
	parent.removeChild(child);
}

//点击p5对象,打开一个新窗口,里面显示淘宝主页
document.getElementById("p5").onclick=function (){
	window.open("https://www.taobao.com/");
}

//点击p6对象,在 ul 的最后添加一个 li 元素，其内容是 p9
document.getElementById("p6").onclick=function (){
	var para=document.createElement("li");
	var node=document.createTextNode("p9");
    para.appendChild(node);
	var element=document.getElementById("d1");
	element.appendChild(para);
}

//点击li对象, 弹出 alert 对话框显示当前点击 li 的序号
document.getElementById("d1").onclick=function (e){
	 alert(e.target.innerHTML);
}


//点击p7对象,将 m-box 的宽度设置到屏幕宽度;
document.getElementById("p7").onclick=function (e){
	document.getElementById("p7").style.width=screen.width;
}


