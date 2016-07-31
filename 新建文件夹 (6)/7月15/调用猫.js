<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script >
	var cat={
      name:"haha ",
      age:12,
      sayname: function(){
      	alert("我是"+this.name)
        return name
      	}
        
      	eat:function(food){
      		alert("我喜欢"+food)
      	
      },
      count:function(num2,num1,sign){

      	 if (sign=="+") 
      	    {
   	 	        var sum=Number(num2)+Number(num1)
   	        };
    	 if (sign=="-") 
    	    {
    	 	var sum=Number(num2)-Number(num1)
   	        };
   	 if (sign=="*")
   	        {
   	 	var sum=Number(num2)*Number(num1)
  	        };
  	 if (sign=="/") 
  	        {
    	 	var sum=Number(num2)/Number(num1)
    	    };
    	    alert(sum)
      }
 } 
     cat.sayname().cat.eat()
	</script>
</body>
</html>