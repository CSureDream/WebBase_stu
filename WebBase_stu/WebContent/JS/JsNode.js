/**
 * 
 */
      //给p添加子节点
	function addNode() {
		var pp=document.createElement("p");        //创建节点
		pp.innerHTML="ss mmp";                     //赋值
	//	var par=document.getElementById("id001");  //父节点
		var par=document.getElementsByTagName("body")[0]; 
		par.appendChild(pp);
	}
	//删除x节点
	function remove() {
		//创建x的父节点 和x节点的对象
		var parent =document.getElementsByTagName("body")[0];
		var p= document.getElementById("id002");
		parent.removeChild(p);  //调用方法 
	}
	//替换节点
	function replace() {
		var pps=document.createElement("p");
		pps.innerText="pps go";
		var bod = document.getElementsByTagName("body")[0];
		var old=document.getElementById("id002");
		bod.replaceChild(pps,old);
	}