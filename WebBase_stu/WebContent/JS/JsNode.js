/**
 * 
 */
      //给p添加子节点
	/*function addNode() {
		var pp=document.createElement("p");        //创建节点
		pp.innerHTML="ss mmp";                     //赋值
	//	var par=document.getElementById("id001");  //父节点
		var par=document.getElementsByTagName("body")[0]; 
		par.appendChild(pp);
	}*/
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
	//ppt Demo
	window.onload = initAll;
	function initAll() {
		document.getElementsByTagName("form")[0].onsubmit =function(){
			return addNode();
		}
	}

	function addNode() {
		var inText = document.getElementById("textarea").value;
		var newText = document.createTextNode(inText);
		var newGraf = document.createElement("p");
		newGraf.appendChild(newText);
		var docBody = document.getElementsByTagName("body")[0];
		docBody.appendChild(newGraf);

		return false; // 此处不可以省略，起到抑制默认行为的作用
	}
	function delNode() {
		var allGrafs = document.getElementsByTagName("p");
		if (allGrafs.length > 1) {
			var lastGraf = allGrafs.item(allGrafs.length - 1);
			var docBody = document.getElementsByTagName("body")[0];
			docBody.removeChild(lastGraf)
		}
		// return false;
	}
	function addContentForTexArea() {
		var allGrafs = document.getElementsByTagName("p");
		if (allGrafs.length > 1) {
			var fisrtGraf = allGrafs.item(0)
			var txtArea = fisrtGraf.childNodes[1];
			txtArea.value = "268";
		}
		// return false;
	}

	function insertBeforeDemo() {
		var newItem = document.createElement("LI");
		var inputText = prompt("请添加要插入的内容：","");
		var textnode = document.createTextNode(inputText);
		newItem.appendChild(textnode)

		var list = document.getElementById("List");
		list.insertBefore(newItem, list.childNodes[0]);
		return false;
	}

	function replaceChildDemo() {
		var newItem = document.createElement("LI");
		var inputText = prompt("请添加要替换的内容：","");
		var textnode = document.createTextNode(inputText);
		newItem.appendChild(textnode)

		var list = document.getElementById("List");
		list.replaceChild(newItem, list.childNodes[0]);
		return false;
	}
	