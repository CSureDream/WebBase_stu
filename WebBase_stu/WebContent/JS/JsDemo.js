/**
 * Js demo
 */
function Hello() {
	document.write("hello world");
}
function DialogBox() {
	var tmp;
	// 弹出警告框
	tmp = alert("welcome");
	alert(tmp);
	// 弹出确认框
	tmp = confirm("can you ");
	alert(tmp);
	// 弹出输入框
	tmp = prompt("age?", "23");
	alert(tmp);
}
function NVGClose() {
	window.close();
}
// for in 对象的所有属性
function forin() {
	var args = forin.arguments.length; // 获取个数
	console.info("args :" + args) // 控制台输出

	var array = [ 33, "ss", "sm", "wf", 22.3 ];
	for (tmp in array) {
		console.info(tmp + "----" + array[tmp]);
	}
}
function fo() {
	var myObject = new Object();
	myObject.name = "ss";
	myObject.age = 22;
	myObject.phone = "555 1234"
	for (prop in myObject) {
		console.info("The property" + prop + "is" + myObject);
	}
}
// 自定义构造函数
function pasta(grain, width, shape, hasEgg) {
	this.grain = "grain";
	this.width = "width";
	this.shap = "shap";
	this.hasEgg = "hasEgg";
	// 函数后面没有圆括号 ()，不是调用的函数而是对自身的引用
	this.toString = pastaToString;
}
function pastaToString() {
	return "Grain:" + this.grain + "\n" + "Width" + this.width + "/n" + "Egg?"
			+ Boolean(this.hasEgg);
}
       function pastDemo(){
    	   var spaghetti=new pasta("wheat", 0.2, "cicle",true);
      console.info(spaghetti);
       //使用原型对象添加属性或方法
    	   pasta.prototype.foodgroup="carbohy";
       //使用expando 添加属性或方法
    	   spaghetti.color="red";
    	   spaghetti.dry="5";
           spaghetti.fresh="0.6";
           //输出属性
           console.info("圆形"+spaghetti.foodgroup);
           console.info(spaghetti);
           //重新创建对象 查看属性
           var  spaghetti1=new pasta()
           console.info(spaghetti1);
       }

//自定义对象
function Student(name){
	    this.name=name;
	    this.getName=getName;
}
  function getName(){
	  return this.name;
  }
  function Button1_onclick(){
	  var s=new Student("ss",20,"sm","4563215");
	  alert(s.getName());
	  alert(s.name);
  }
  //数组和对象
        
  