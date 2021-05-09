<script>
//object	Eye's	object	variable 			Data	Brain
//Mounika 			Mother	whatsthespltoday	chicken
//							wndadwillcome		8 PM
//							canigotoshopping	yes u can
//							comesoon			sure mom

//Different ways to convert this conversation into coding
//First method
//-----------------
var whatsthespltoday = "chicken"
var wndadwillcome = "8 PM"
var canigotoshopping = "yes u can"
var comesoon = "sure mom"
//console.log(whatsthespltoday,wndadwillcome,canigotoshopping,comesoon)
document.write(whatsthespltoday,wndadwillcome,canigotoshopping,comesoon)
document.write(whatsthespltoday,'<br>',wndadwillcome,'<br>',canigotoshopping,'<br>',comesoon)
document.writeln(whatsthespltoday,'<br>',wndadwillcome,'<br>',canigotoshopping,'<br>',comesoon)

//document.write(whatsthespltoday," ",wndadwillcome," ",canigotoshopping," ",comesoon)
						//JavaScript error: Uncaught SyntaxError: Invalid or unexpected token on line 16
//Second method
//-----------------

//Function Mother()		//JavaScript error: Uncaught SyntaxError: Unexpected identifier on line 21
function Mother(){
var whatsthespltoday = "chicken"
var wndadwillcome = "8 PM"
var canigotoshopping = "yes u can"
var comesoon = "sure mom"
//console.log(whatsthespltoday,wndadwillcome)    
document.write(canigotoshopping,'<br>',comesoon)   
}
document.write(whatsthespltoday,'<br>',wndadwillcome)         //JavaScript error: Uncaught ReferenceError: whatsthespltoday is not defined on line 10
Mother()

//Third method
//---------------------
<script>
var whatsthespltoday = "chicken"
var wndadwillcome = "8 PM"
var canigotoshopping = "yes u can"
var comesoon = "sure mom"

class Mounika{
 whatsthespltoday = "fish"
 wndadwillcome = "8 PM"
 canigotoshopping = "yes u can"
 comesoon = "sure mom"
//document.write(whatsthespltoday,'<br>',wndadwillcome,'<br>',canigotoshopping,'<br>',comesoon) //JavaScript error: Uncaught SyntaxError: Unexpected token '.' on line 12

}                            //} missimg--JavaScript error: Uncaught SyntaxError: Unexpected end of input on line 39

new Mounika()
document.write(whatsthespltoday,'<br>',wndadwillcome,'<br>',canigotoshopping,'<br>',comesoon)
</script>

//Fourth Method
//-----------------------

<script>
var brother = ["yes","good",100]
document.write(brother[0],'<br>')
document.write(brother[1],'<br>')
document.write(brother[2])
</script>

//Fifth Method
//-------------------------
<script>
var brother ={
	name : "mounika",
	age : 10
	
}
document.write(brother.name,'<br>'brother.age)
document.write(brother[name])
</script>

//Practice
//--------------------------

<script>
var douhaveanyinterview = "yes"
var howuperform = "good"
var wtsthepackage = 60000
 function sister()
 {
 var douhaveanyinterview = "yes"
var howuperform = "bad"
var wtsthepackage = 70000
document.write(douhaveanyinterview,'<br>',howuperform,'<br>',wtsthepackage)   //it will print inside the function data
}
document.write(douhaveanyinterview,'<br>',howuperform,'<br>',wtsthepackage)    //it will print outside the function data

sister()
</script>

//Another method
//---------------------------------
<script>

function sister(douhaveanyinterview , howuperform ,wtsthepackage)
{
document.write(douhaveanyinterview,'<br>',howuperform,'<br>',wtsthepackage)
}

sister("yes", "good",70000)
</script>

//class example
//-----------------------------

<script>
var douhaveanyinterview = "yes"
var howuperform = "good"
var wtsthepackage = 60000
class sister
{
  douhaveanyinterview = "yes"
  howuperform = "bad"
  wtsthepackage = 70000
}
document.write(douhaveanyinterview,'<br>',howuperform,'<br>',wtsthepackage)  //it will access outside data
//sister()    //JavaScript error: Uncaught TypeError: Class constructor sister cannot be invoked without 'new' on line 14
let p = new sister()
document.write(p.douhaveanyinterview,'<br>',p.howuperform,'<br>',p.wtsthepackage)  //it will access inside class

</script>

<script>
class Mother
{
 douhaveanyinterview = "yes"
 howuperform = "good"
 wtsthepackage = 60000
}
var p = new Mother()
document.write(p.douhaveanyinterview,'       ',p.howuperform,'      ',p.wtsthepackage)  //it will access inside class
</script>


//output with spaces
//-------------------------------------
<script>
var douhaveanyinterview = "yes"
var howuperform = "good"
var wtsthepackage = 60000
document.write(douhaveanyinterview,'       ',howuperform,'      ',wtsthepackage)
</script>




