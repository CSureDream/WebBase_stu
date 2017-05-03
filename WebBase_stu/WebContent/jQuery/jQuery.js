//指定下标过滤
function indexSelect() {
	$('li:eq(2)').css('color', 'red');
}
// 文本内容过滤
function containSelect() {
	$('li:contains(to)').css('color', 'blue');
}
// 包涵过滤
function hasSelect() {
	$('li:has(span)').css('color', 'red');
}
// 属性选择器
function nameSelect() {
	$('input[id=ipt]').val("hello");
}
// 表单input选择器
function inputSelect() {
	console.log($('#my_form :text'));
	console.log($('#my_form :input:checked'));
}
// 表单select选择器
function fSelect() {
	// console.log($('#sel :selected'));
	console.log($('#sel :selected'));
}
function formSelect2() {
	console.log($('#sel :selected'));
}
// jQuery方法
// attr()
function attrDemo() {
	console.log($('#my_form').attr('action'));
	$('#my_form').attr('action', 'bar.php');
	console.log($('#my_form').attr('action'));
}
// HTML text
function htmlText() {
	console.log($('p').html())
	$('p').html('<i>world</i>')
	console.log($('p').html())
	console.log('html 改为text后')
	console.log($('p').text())
	$('p').html('<i>world</i>')
	console.log($('p').text())
}
// append prepend
function appendDemo() {
	$('#id01').append('sukidau').css('color', 'blue')
}
// prepend
function prependDemo() {
	$('#id01').prepend('wfsm').css('color', 'red')
}
// after and before
function afterDemo() {
	$('#id01').after('<p>sukdau</p>')
}
function beforeDemo() {
	$('#id01').before('<p>smwf</p>')
}
// clone
function cloneDemo() {
	$('#id02').after($('#id02').clone())
}
// replaceWith 替换标签
function replace_withDemo() {
	$('#id01').replaceWith('<p><b>sukidau</b></p>')
}
// wrap用来给某个元素外部再包围一对指定的标签
function wrapDemo() {
	$('#id01').wrap('<div></div>')
	console.log($('div').html())
}
// wrapInner的作用是在元素内部包围一对标签
function wrapInnerDemo() {
	$('#id01').wrapInner('<span></span>')
	console.log($('#id01').html())
}
// remove方法，可以将选择到的元素从页面中删除
function removeDemo1() {
	$('li').remove()
}
function removeDemo2() {
	$('li').remove('.fruit')
}
// empty用来清空当前选择器选择到的元素下所有的子元素
function emptyDemo() {
	$('ul').empty()
}
// 事件
$(function() {
	$('#btn').bind('click', function() {
		$(this).attr('disabled', 'true')
	})

	// 设置边框颜色时 一定要设置边框的style
   // bind 后面 多个事件时 使用 花括号将所有事件包起来.bind({事件1:函数 ,事件2:函数~})
	$('#text').bind({
		focus : function() {
			$(this).css('border', ' solid red');
		},
		blur : function() {
			$(this).css('border', 'solid black');
		}
	})

	// 鼠标不悬停
	$('#btn2').hover(function() {
		$(this).val('进入')
	}, function() {
		$(this).val('退出')
	})

	$('#btn1').mouseover(function() {
		$(this).val("mouseover -已进入");
	}).mouseout(function() {
		$(this).val("mouseout -已退出");
	})
})
