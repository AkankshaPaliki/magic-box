 //  to generate a random array 
function randomarray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
          let k =  array[j]; 
          array[j] = array[i];
          array[i] = k;
    }
}
// Create an array of digits from 1 to 9
function randomgrid() {
    let values = Array.from(Array(9).keys());
    randomarray(values);
    let box = Array(3).fill().map(() => Array(3).fill());
    values.forEach((values, i) => {
        box[Math.floor(i/3)][i%3] = values;
    });
  
    return box;
}
// to find the sum of rows ,coloumnsand diagonals so that it is magic square
function Magicbox(box) {
    let rowSum = Array(3).fill(0),
        colSum = Array(3).fill(0),
        diagonalSum = Array(2).fill(0);

// To Check Rows , Columns and Diagonal elements of the grid
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j< 3; j++) {
            rowSum[i] += box[i][j];
            colSum[j] += box[i][j];
            if (i == j) diagonalSum[0] += box[i][j];
            if (i + j == 2) diagonalSum[1] += box[i][j];
        }
    }
    let sum = rowSum.concat(colSum, diagonalSum);
    return sum.every(val => val === sum[0]);
}
//to print the magic box in a box format
function printSquare(box) 
{
  console.log("-------------")
	for (let i = 0; i < box.length; i++) 
  {
		let row = box[i] , rowString = ""
		for (let j = 0; j < row.length; j++) 
    {
			rowString += ("| " + row[j]	+ " ")
		}
		console.log(rowString + "|")
		if (i == (box.length-1)) 
    {
			console.log("-------------")
		} 
    else 
    {
			console.log("----+---+----")
		}
	}
}
 // To check the sum of rows,columns and diagonals of the grid 
function check(){ 
    while(true){
        let box = randomgrid();
        if(Magicbox(box)==true){

            printSquare(box)
            break
       } 
    
    }
}
check()
 


