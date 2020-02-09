
var nb=prompt('donner un entier positif'); 

if (nb<0) {alert ('vous devez saisir un entier positif')}; 
etoile(nb);

function etoile(nb) { 
var message = ""
var esp = nb-1 ;
if (nb<25) {

for (i=0;i<nb;i++){ 
for (j=0;j<(esp-i);j++){ 
	message += " ";
} 
for (k=0;k<=(2*i);k++){ 
	message += "#";
}
message += "\n";
} 
console.log(message)}
}