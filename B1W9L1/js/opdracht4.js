

function multiply(){
    var input = (11);
    while(input >= 11){
    var input = prompt("tot welke tafel wil je?");		
    }
    var input1 = (1);
    while(input1 <= input ){
        for(var i = 1; i <= 10; i++){
        var answer = (i * input1); 
        document.write( input1 + " x " + i + " = " + answer + "<br>");	
        }
        document.write("<br>");
        var input1 = (input1 + 1);
    }
}
multiply();
