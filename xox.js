var i=0;
let tekshirX=0;
let tekshirO=0;
var tozala=0;
var t1=document.getElementById('td1');
var t2=document.getElementById('td2');
var t3=document.getElementById('td3');
var t4=document.getElementById('td4');
var t5=document.getElementById('td5');
var t6=document.getElementById('td6');
var t7=document.getElementById('td7');
var t8=document.getElementById('td8');
var t9=document.getElementById('td9');
var hisobO=document.getElementById('ho');
var hisobX= document.getElementById('hx');
var jad=document.getElementById('jadval');
var massiv=['td1','td2','td3','td4','td5','td6','td7','td8','td9'];
var bX=true;
var bO=true;
var Ho=0;
var Hx=0;
 
function fuk(t){

    var a=document.getElementById(t);
   
    if(a.textContent===" " && i%2==0 && bX===true)
    {console.log(i); tozala++;
        a.style.color='blue';a.innerHTML="<h1>O</h1>";i++;
     O();
     for(var k=0;k<massiv.length;k++){if(massiv[k]===t){massiv.splice(k,1);}};
     bX=false;
      }
      suniy();
 } 
function suniy(){
if(i%2==1)
    {tozala++;
  
        var randomIndex = Math.floor(Math.random() * massiv.length); 
    var randomElement =document.getElementById(massiv[randomIndex]);
console.log(randomElement);


 setTimeout(function(){
       if(randomElement.textContent===" ") {randomElement.style.color='lime';
       randomElement.innerHTML="<h1>X</h1>"; X();}},500);
       i++;
       
    for(var k=0;k<massiv.length;k++){if(massiv[k]===massiv[randomIndex]){massiv.splice(k,1);}};
   
}
 
}

// O
function O(){if(t1.textContent==="O" && t2.textContent==="O" && t3.textContent==="O")
{t1.style.backgroundColor='red';t2.style.backgroundColor='red';t3.style.backgroundColor='red';
tekshirO++;
};
if(t4.textContent==="O" && t5.textContent==="O" && t6.textContent==="O")
{t4.style.backgroundColor='red';t5.style.backgroundColor='red';t6.style.backgroundColor='red';
tekshirO++;
};
if(t7.textContent==="O" && t8.textContent==="O" && t9.textContent==="O")
{t7.style.backgroundColor='red';t8.style.backgroundColor='red';t9.style.backgroundColor='red';
tekshirO++;};
//
if(t1.textContent==="O" && t4.textContent==="O" && t7.textContent==="O")
{t1.style.backgroundColor='red';t4.style.backgroundColor='red';t7.style.backgroundColor='red';
tekshirO++;
};
if(t2.textContent==="O" && t5.textContent==="O" && t8.textContent==="O")
    {t2.style.backgroundColor='red';t5.style.backgroundColor='red';t8.style.backgroundColor='red';
    tekshirO++;
};
if(t3.textContent==="O" && t6.textContent==="O" && t9.textContent==="O")
{t3.style.backgroundColor='red';t6.style.backgroundColor='red';t9.style.backgroundColor='red';
tekshirO++;};
//
if(t1.textContent==="O" && t5.textContent==="O" && t9.textContent==="O")
{t1.style.backgroundColor='red';t5.style.backgroundColor='red';t9.style.backgroundColor='red';
tekshirO++;};
//
if(t3.textContent==="O" && t5.textContent==="O" && t7.textContent==="O")
{t3.style.backgroundColor='red';t5.style.backgroundColor='red';t7.style.backgroundColor='red';
tekshirO++;
};

if(tekshirO==1) 
{

bO=false;
Ho++; 
hisobO.style.color='white';
hisobO.style.backgroundColor='dodgerblue';
hisobO.textContent=Ho;
tozalash();

}
if(tozala==9 &&( tekshirO==0 || tekshirX==0)){setTimeout(tozalash(),200);}}
//X
  //BIRINCHI
 function X() {
  if(t1.textContent==="X" && t2.textContent==="X" && t3.textContent==="X")
  {t1.style.backgroundColor='red';t2.style.backgroundColor='red';t3.style.backgroundColor='red';
 tekshirX++;
};

  if(t4.textContent==="X" && t5.textContent==="X" && t6.textContent==="X")
  {t4.style.backgroundColor='red';t5.style.backgroundColor='red';t6.style.backgroundColor='red';
  tekshirX++;
};


  if(t7.textContent==="X" && t8.textContent==="X" && t9.textContent==="X")
  {t7.style.backgroundColor='red';t8.style.backgroundColor='red';t9.style.backgroundColor='red';
  tekshirX++;};

  //IKKINCHI
  if(t1.textContent==="X" && t4.textContent==="X" && t7.textContent==="X")
  {t1.style.backgroundColor='red';t4.style.backgroundColor='red';t7.style.backgroundColor='red';
 tekshirX++;
};

  if(t2.textContent==="X" && t5.textContent==="X" && t8.textContent==="X")
  {t2.style.backgroundColor='red';t5.style.backgroundColor='red';t8.style.backgroundColor='red';
  tekshirX++;
};

  
  if(t3.textContent==="X" && t6.textContent==="X" && t9.textContent==="X")
  {t3.style.backgroundColor='red';t6.style.backgroundColor='red';t9.style.backgroundColor='red';
  tekshirX++;};
 
 //UCHINCHI
 if(t1.textContent==="X" && t5.textContent==="X" && t9.textContent==="X")
  {t1.style.backgroundColor='red';t5.style.backgroundColor='red';t9.style.backgroundColor='red';
 tekshirX++;
};

  if(t3.textContent==="X" && t5.textContent==="X" && t7.textContent==="X")
  {t3.style.backgroundColor='red';t5.style.backgroundColor='red';t7.style.backgroundColor='red';
  tekshirX++;
};
  bX=true;
if(tekshirX==1) {
  Hx++;
  hisobX.style.color='white';
hisobX.style.backgroundColor='lawngreen';
  hisobX.textContent=Hx;
  tozalash();}
if(tozala==9 && tekshirO==0 && tekshirX==0){setTimeout(tozalash(),200);}}

 
// tozala

function tozalash(){setTimeout(function(){
  if(Ho%3==0){bO=true;}
    t1.textContent=" ";
    t2.textContent=" ";
    t3.textContent=" ";
    t4.textContent=" ";
    t5.textContent=" ";
    t6.textContent=" ";
    t7.textContent=" ";
    t8.textContent=" ";
    t9.textContent=" ";
   t1.style.backgroundColor="white";
   t2.style.backgroundColor="white";
   t3.style.backgroundColor="white";
   t4.style.backgroundColor="white";
   t5.style.backgroundColor="white";
   t6.style.backgroundColor="white";
   t7.style.backgroundColor="white";
   t8.style.backgroundColor="white";
   t9.style.backgroundColor="white";
   hisobO.style.color='dodgerblue';
hisobO.style.backgroundColor='white';
hisobX.style.color='lawngreen';
hisobX.style.backgroundColor='white';
  tozala=0;
tekshirX=0;
tekshirO=0;
massiv=['td1','td2','td3','td4','td5','td6','td7','td8','td9'];
if(bO===true) {i=1; suniy();}
else {bX=true;bO=true;}
  },2000);
 i=0;
//

}
