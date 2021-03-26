//Rudson Martina
//Software Developer

//Products and prices 
const beer = Number(2.2);
const soda = Number(1.8);
const wine = Number(2.9);
const snack8 = Number(3.2);
const snack16 = Number(5.2);
//The counter
var beerQty = Number(0);
var sodaQty = Number(0);
var wineQty = Number(0);
var snack8Qty = Number(0);
var snack16Qty = Number(0);
var order = " ";

//A Function with a while loop so i won't have to call the function everytime
function fullOrder(){

       while (order != "quit"){
            order = prompt("What would you like to order? Choose from Beer soda wine and snacks");
            if (order == "beer"){
                beerQty = prompt("Hoeveel bier wilt u aan uw bestelling toevoegen?");            
            }
            else if (order == "soda"){
                sodaQty = prompt("Hoeveel fris wilt u aan uw bestelling toevoegen?");
            }
            else if (order == "wine"){
                wineQty = prompt("Hoeveel wijn wilt u aan uw bestelling toevoegen?");
            }
            else if (order == "snack"){
                var snackCount = prompt("Wilt u het per 8 of per 16?");{
                if(snackCount == "8"){
                    snack8Qty = prompt("Hoeveel porties van 8 snacks wilt u aan uw bestelling toevoegen?");
                }
                if(snackCount == "16"){
                    snack16Qty = prompt("Hoeveel portiesvan 16 snacks wilt u aan uw bestelling toevoegen?");
                }
            }
            }
            else{
                alert("Geef een geldige product van onze menu aan");
            }
        }
        if (beerQty > 0){
            document.write(beerQty + "x beer" + "<br>");
        }
        if (sodaQty > 0){
            document.write(sodaQty + "x fris" + "<br>");
        }
        if (wineQty > 0){
            document.write(wineQty + "x wine" + "<br>");   
        }
        if (snack8Qty > 0){
            document.write(snack8Qty + "x 8 snacks" + "<br>");   
        }
        if (snack16Qty > 0){
            document.write(snack16Qty + "x 16 snacks" + "<br>");  
        }
        document.write("Total: $" + ((beer * beerQty) + (soda * sodaQty) + (wine * wineQty) + (snack8 * snack8Qty) + (snack16 * snack16Qty)));

}
fullOrder();


