var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo(){
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"

 arr = randomCreationofarray(1210000);

	var matrice = [];


 matrice =creationof2darray(arr,1100)
output = FwAlgo(matrice);
divOutput.innerHTML = output ;

        	
        }	
 function creationof2darray(array, size) {
    var matrice = [];
    for(var i = 0; i < array.length; i += size) {
        matrice.push(array.slice(i, i + size));
    }
    return matrice;
}
    
//end run

function FwAlgo(matrice){
	var m = [];
   m = matrice;

    var t0 = performance.now();
        console.log(t0);

          for (var i = 0; i<m.length;  i++) {


          	for (var j = 0; j<m.length;  j++)
          	{

                  	for (var k = 0; k<m.length;  k++)
                  	{


                  		m[j][k]=m[j][k] || (m[j][i] && m[i][k]);

}

          	}

 }
           var t1 = performance.now();
        console.log(t1);
        console.log(t1 - t0);

          return (t1 - t0) ;
}//end sol1

function randomCreationofarray(size)
{
var arr = [];
for (var i=0;i<size;i++)
{

     arr.push(Math.round(Math.random()))
}
return arr

}

	</div>
</body>
</html>