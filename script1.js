var twice=0, win=0;
var buves, anksciauBuves;
var pav, buvesPav="";
var id, buvesId=-1;
var x;



function vykdymas()
{
	if(twice==1 && buves==x)//ant to pacio paspaudė
	{
		document.getElementById(x).src="back.png";
		buvesPav="";
		buvesId=-1;
		buves="";
		twice=0;
		return; //baigiam funkcija
	}
	else if (id==buvesId && twice==1) //du vienodi
	{
		document.getElementById(x).style.visibility="hidden";
		document.getElementById(buves).style.visibility="hidden";
		win++;
		twice=0;
	}
	else if (twice<2) 
	{
		twice++;
		buvesPav=pav;
		buvesId=id;
	}
	else if (twice==2) //paskutiniai du blogi tai uzdarom juos
	{
		document.getElementById(buves).src="back.png";
		document.getElementById(anksciauBuves).src="back.png";
		twice=1;
		buvesPav=pav;
		buvesId=id;
	}
	document.getElementById(x).src=pav;
	anksciauBuves = buves;
	buves = x;
}

function apsiversk1()
{
	x="p1";
	pav="husky1.png"
	id=1;
	vykdymas(x, pav);
}
function apsiversk2()
{
	x="p2";
	pav="shiba1.png"
	id=2;
	vykdymas(x, pav);
}
function apsiversk3()
{
	x="p3";
	pav="retriever.png"
	id=3;
	vykdymas(x, pav);
}
function apsiversk4()
{
	x="p4";
	pav="retriever1.png"
	id=3;
	vykdymas(x, pav);
}
function apsiversk5()
{
	x="p5";
	pav="husky.png"
	id=1;
	vykdymas(x, pav);
}
function apsiversk6()
{
	x="p6";
	pav="poodle.png"
	id=4;
	vykdymas(x, pav);
}
function apsiversk7()
{
	x="p7";
	pav="labrador.png"
	id=5;
	vykdymas(x, pav);
}
function apsiversk8()
{
	x="p8";
	pav="poodle1.png"
	id=4;
	vykdymas(x, pav);
}
function apsiversk9()
{
	x="p9";
	pav="shiba.png"
	id=2;
	vykdymas(x, pav);
}
