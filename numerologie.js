var canvas = null;
var ctx = null;
var fehler=0;
var dx=250;
var dy=0;
var start=1;


var XOUT = 2000;
var YOUT = 2000;

var img_stern = null;
var img_dreieck = null;
var img_s1 = null;
var img_s2 = null;
var img_s3 = null;
var img_s4 = null;
var img_s5 = null;
var img_s6 = null;
var img_s7 = null;
var img_s8 = null;
var img_s9 = null;
var img_s101 = null;
var img_s112 = null;
var img_s123 = null;
var img_s134 = null;
var img_s145 = null;
var img_s156 = null;
var img_s167 = null;
var img_s178 = null;
var img_s189 = null;
var img_s191 = null;
var img_s202 = null;
var img_s213 = null;
var img_s224 = null;

function init() {
	canvas  = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	

	initImages();
	clearChart(1);
	
	
}

function initImages() {
	
	
	img_stern = new Image();
	img_stern.src = "stern.gif";
	img_stern.onload = function() {ctx.drawImage(img_stern, XOUT, YOUT);}
	
	img_dreieck = new Image();
	img_dreieck.src = "dreieck.gif";
	img_dreieck.onload = function() {ctx.drawImage(img_dreieck, XOUT, YOUT);}
	
	img_s1 = new Image();
	img_s1.src = "s1.gif";
	img_s1.onload = function() {ctx.drawImage(img_s1, XOUT, YOUT);}
	
	img_s2 = new Image();
	img_s2.src = "s2.gif";
	img_s2.onload = function() {ctx.drawImage(img_s2, XOUT, YOUT);}
	
	img_s3 = new Image();
	img_s3.src = "s3.gif";
	img_s3.onload = function() {ctx.drawImage(img_s3, XOUT, YOUT);}
	
	img_s4 = new Image();
	img_s4.src = "s4.gif";
	img_s4.onload = function() {ctx.drawImage(img_s4, XOUT, YOUT);}
	
	img_s5 = new Image();
	img_s5.src = "s5.gif";
	img_s5.onload = function() {ctx.drawImage(img_s5, XOUT, YOUT);}
	
	img_s6 = new Image();
	img_s6.src = "s6.gif";
	img_s6.onload = function() {ctx.drawImage(img_s6, XOUT, YOUT);}
	
	img_s7 = new Image();
	img_s7.src = "s7.gif";
	img_s7.onload = function() {ctx.drawImage(img_s7, XOUT, YOUT);}
	
	img_s8 = new Image();
	img_s8.src = "s8.gif";
	img_s8.onload = function() {ctx.drawImage(img_s8, XOUT, YOUT);}
	
	img_s9 = new Image();
	img_s9.src = "s9.gif";
	img_s9.onload = function() {ctx.drawImage(img_s9, XOUT, YOUT);}
	
	img_s101 = new Image();
	img_s101.src = "s101.gif";
	img_s101.onload = function() {ctx.drawImage(img_s101, XOUT, YOUT);}
	
	img_s112 = new Image();
	img_s112.src = "s112.gif";
	img_s112.onload = function() {ctx.drawImage(img_s112, XOUT, YOUT);}
	
	img_s123 = new Image();
	img_s123.src = "s123.gif";
	img_s123.onload = function() {ctx.drawImage(img_s123, XOUT, YOUT);}
	
	img_s134 = new Image();
	img_s134.src = "s134.gif";
	img_s134.onload = function() {ctx.drawImage(img_s134, XOUT, YOUT);}
	
	img_s145 = new Image();
	img_s145.src = "s145.gif";
	img_s145.onload = function() {ctx.drawImage(img_s145, XOUT, YOUT);}
	
	img_s156 = new Image();
	img_s156.src = "s156.gif";
	img_s156.onload = function() {ctx.drawImage(img_s156, XOUT, YOUT);}
	
	img_s167 = new Image();
	img_s167.src = "s167.gif";
	img_s167.onload = function() {ctx.drawImage(img_s167, XOUT, YOUT);}
	
	img_s178 = new Image();
	img_s178.src = "s178.gif";
	img_s178.onload = function() {ctx.drawImage(img_s178, XOUT, YOUT);}
	
	img_s189 = new Image();
	img_s189.src = "s189.gif";
	img_s189.onload = function() {ctx.drawImage(img_s189, XOUT, YOUT);}
	
	img_s191 = new Image();
	img_s191.src = "s191.gif";
	img_s191.onload = function() {ctx.drawImage(img_s191, XOUT, YOUT);}
	
	img_s202 = new Image();
	img_s202.src = "s202.gif";
	img_s202.onload = function() {ctx.drawImage(img_s202, XOUT, YOUT);}
	
	img_s213 = new Image();
	img_s213.src = "s213.gif";
	img_s213.onload = function() {ctx.drawImage(img_s213, XOUT, YOUT);}
	
	img_s224 = new Image();
	img_s224.src = "s224.gif";
	img_s224.onload = function() {ctx.drawImage(img_s224, XOUT, YOUT);}
	
}



function drawChart() {
	clearCanvas();
	namenstring = document.getElementById("nameneingabe").value;
	ablauf();
	zeichneSymbole(zahlenout,chart,dx,dy);	
}

function clearCanvas() {
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(0,0,canvas.width, canvas.height);
}

function clearChart(mode) {
	
	clearCanvas();
	ctx.drawImage(img_stern, dx,dy);
	document.getElementById("simpleChart").checked = false;
	if(mode) {
		document.getElementById("nameneingabe").value = "";
	}
	else {
		document.getElementById("nameneingabe").select();
	}
	
}


function checkState() {
	fehler = 0;
	fehlerString(document.getElementById("nameneingabe").value.toUpperCase());
	fehlerZahl(document.getElementById("nameneingabe").value.toUpperCase());
	if(document.getElementById("simpleChart").checked){chart=13;}
	else{chart=0;}
	if(fehler==1){clearChart(0);}
	else{drawChart();}
}

function fehlerString(s0) {
	var s=s0.toUpperCase();
	
	if(document.getElementById("nameneingabe").value == "Bitte keine Sonderzeichen eingeben")
		fehler=1;

	for(var i=0;i<s.length;i++) {
		if((s.charCodeAt(i)<65||s.charCodeAt(i)>90) && (s.charCodeAt(i)!=32))
		{	
			document.getElementById("nameneingabe").value = "Bitte keine Sonderzeichen eingeben";
			fehler=1;
			break;
		}
	}
}

function fehlerZahl(s) {
	if(document.getElementById("nameneingabe").value == "Dieser Name ist zu klein")
		fehler=1;

		var c=0;

		for(var i=0; i<s.length;i++)
		{	if(s.charCodeAt(i)==32)
			{}
			else
			c++;
		}

		if(c==0)
			fehler=1;
		else
		if(c<3)
		{	document.getElementById("nameneingabe").value = "Dieser Name ist zu klein";
			fehler=1;

		}
}

function zeichneSymbole(a, chart, x, y) {

		if(chart==0)
		{	ctx.drawImage(img_dreieck, x, y);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillText(a[0]+" - "+a[1],  x+440,y+300);
			ctx.fillText((a[2])+" - "+(a[3]),  x+40,y+300);
			ctx.fillText((a[4])+" - "+(a[5]),x+300,y+60);
			ctx.fillText((a[12])+" - "+(a[13]),x+240,y+300);

			ctx.fillText("Karma: "+(a[0])+" - "+(a[1]),30,150);
			ctx.fillText("Talente: "+(a[2])+" - "+(a[3]),30,175);
			ctx.fillText("Ziele: "+(a[4])+" - "+(a[5]),30,200);
			ctx.fillText("Seelenbestimmung: "+(a[12])+" - "+(a[13]),30,225);
			ctx.fillText("Dominante Schwingung: "+domswing,30,250);



		}
		else
		{	ctx.drawImage(img_stern, x, y);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillText((a[0])+" - "+(a[1]),  x+440,y+200);
			ctx.fillText((a[2])+" - "+(a[3]),  x+440,y+300);
			ctx.fillText((a[4])+" - "+(a[5]),  x+300,y+440);
			ctx.fillText((a[6])+" - "+(a[7]),  x+40,y+300);
			ctx.fillText((a[8])+" - "+(a[9]),  x+40,y+200);
			ctx.fillText((a[10])+" - "+(a[11]),x+300,y+60);
			ctx.fillText((a[12])+" - "+(a[13]),x+240,y+300);

			ctx.fillText("physisches Karma: "+(a[0])+" - "+(a[1]),30,150);
			ctx.fillText("spirituelles Karma: "+(a[2])+" - "+(a[3]),30,165);
			ctx.fillText("physische Talente: "+(a[4])+" - "+(a[5]),30,200);
			ctx.fillText("spirituelle Talente: "+(a[6])+" - "+(a[7]),30,215);
			ctx.fillText("physische Ziele: "+(a[8])+" - "+(a[9]),30,250);
			ctx.fillText("spirituelle Ziele: "+(a[10])+" - "+(a[11]),30,265);
			ctx.fillText("Seelenbestimmung: "+(a[12])+" - "+(a[13]),30,300);
			ctx.fillText("Dominante Schwingung: "+domswing,30,330);

		}
		
		
		for(var i=0;i<a.length;i=i+2)
		{

		var bedingung=a[i];

		switch (bedingung)
		{
			case 0: break;

			case 1:	if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s1,x+365,y+312 );break;
							case 2:		ctx.drawImage(img_s1,x+92,y+312 );break;
							case 4:		ctx.drawImage(img_s1,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s1,x+230,y+223 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s1,x+365,y+143 );break;
							case 2:		ctx.drawImage(img_s1,x+365,y+312 );break;
							case 4:		ctx.drawImage(img_s1,x+230,y+387 );break;
							case 6:		ctx.drawImage(img_s1,x+92,y+312 );break;
							case 8:		ctx.drawImage(img_s1,x+92,y+143 );break;
							case 10:	ctx.drawImage(img_s1,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s1,x+230,y+223 );break;
						}
					}
					break;
			case 2:	if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s2,x+365,y+312 );break;
							case 2:		ctx.drawImage(img_s2,x+92,y+312 );break;
							case 4:		ctx.drawImage(img_s2,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s2,x+230,y+223 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s2,x+365,y+143 );break;
							case 2:		ctx.drawImage(img_s2,x+365,y+312 );break;
							case 4:		ctx.drawImage(img_s2,x+230,y+387 );break;
							case 6:		ctx.drawImage(img_s2,x+92,y+312 );break;
							case 8:		ctx.drawImage(img_s2,x+92,y+143 );break;
							case 10:	ctx.drawImage(img_s2,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s2,x+230,y+223 );break;
						}
					}
					break;
			case 3:	if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s3,x+365,y+312 );break;
							case 2:		ctx.drawImage(img_s3,x+92,y+312 );break;
							case 4:		ctx.drawImage(img_s3,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s3,x+230,y+223 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s3,x+365,y+143 );break;
							case 2:		ctx.drawImage(img_s3,x+365,y+312 );break;
							case 4:		ctx.drawImage(img_s3,x+230,y+387 );break;
							case 6:		ctx.drawImage(img_s3,x+92,y+312 );break;
							case 8:		ctx.drawImage(img_s3,x+92,y+143 );break;
							case 10:	ctx.drawImage(img_s3,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s3,x+230,y+223 );break;
						}
					}
					break;
			case 4:	if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s4,x+365,y+312 );break;
							case 2:		ctx.drawImage(img_s4,x+92,y+312 );break;
							case 4:		ctx.drawImage(img_s4,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s4,x+230,y+223 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s4,x+365,y+143 );break;
							case 2:		ctx.drawImage(img_s4,x+365,y+312 );break;
							case 4:		ctx.drawImage(img_s4,x+230,y+387 );break;
							case 6:		ctx.drawImage(img_s4,x+92,y+312 );break;
							case 8:		ctx.drawImage(img_s4,x+92,y+143 );break;
							case 10:	ctx.drawImage(img_s4,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s4,x+230,y+223 );break;
						}
					}
					break;
			case 5:	if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s5,x+365,y+312 );break;
							case 2:		ctx.drawImage(img_s5,x+92,y+312 );break;
							case 4:		ctx.drawImage(img_s5,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s5,x+230,y+223 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s5,x+365,y+143 );break;
							case 2:		ctx.drawImage(img_s5,x+365,y+312 );break;
							case 4:		ctx.drawImage(img_s5,x+230,y+387 );break;
							case 6:		ctx.drawImage(img_s5,x+92,y+312 );break;
							case 8:		ctx.drawImage(img_s5,x+92,y+143 );break;
							case 10:	ctx.drawImage(img_s5,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s5,x+230,y+223 );break;
						}
					}
					break;
			case 6:	if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s6,x+365,y+312 );break;
							case 2:		ctx.drawImage(img_s6,x+92,y+312 );break;
							case 4:		ctx.drawImage(img_s6,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s6,x+230,y+223 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s6,x+365,y+143 );break;
							case 2:		ctx.drawImage(img_s6,x+365,y+312 );break;
							case 4:		ctx.drawImage(img_s6,x+230,y+387 );break;
							case 6:		ctx.drawImage(img_s6,x+92,y+312 );break;
							case 8:		ctx.drawImage(img_s6,x+92,y+143 );break;
							case 10:	ctx.drawImage(img_s6,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s6,x+230,y+223 );break;
						}
					}
					break;
			case 7:	if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s7,x+365,y+312 );break;
							case 2:		ctx.drawImage(img_s7,x+92,y+312 );break;
							case 4:		ctx.drawImage(img_s7,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s7,x+230,y+223 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s7,x+365,y+143 );break;
							case 2:		ctx.drawImage(img_s7,x+365,y+312 );break;
							case 4:		ctx.drawImage(img_s7,x+230,y+387 );break;
							case 6:		ctx.drawImage(img_s7,x+92,y+312 );break;
							case 8:		ctx.drawImage(img_s7,x+92,y+143 );break;
							case 10:	ctx.drawImage(img_s7,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s7,x+230,y+223 );break;
						}
					}
					break;
			case 8:	if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s8,x+365,y+312 );break;
							case 2:		ctx.drawImage(img_s8,x+92,y+312 );break;
							case 4:		ctx.drawImage(img_s8,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s8,x+230,y+223 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s8,x+365,y+143 );break;
							case 2:		ctx.drawImage(img_s8,x+365,y+312 );break;
							case 4:		ctx.drawImage(img_s8,x+230,y+387 );break;
							case 6:		ctx.drawImage(img_s8,x+92,y+312 );break;
							case 8:		ctx.drawImage(img_s8,x+92,y+143 );break;
							case 10:	ctx.drawImage(img_s8,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s8,x+230,y+223 );break;
						}
					}
					break;
			case 9:	if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s9,x+365,y+312 );break;
							case 2:		ctx.drawImage(img_s9,x+92,y+312 );break;
							case 4:		ctx.drawImage(img_s9,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s9,x+230,y+223 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s9,x+365,y+143 );break;
							case 2:		ctx.drawImage(img_s9,x+365,y+312 );break;
							case 4:		ctx.drawImage(img_s9,x+230,y+387 );break;
							case 6:		ctx.drawImage(img_s9,x+92,y+312 );break;
							case 8:		ctx.drawImage(img_s9,x+92,y+143 );break;
							case 10:	ctx.drawImage(img_s9,x+230,y+70 );break;
							case 12:	ctx.drawImage(img_s9,x+230,y+223 );break;
						}
					}
					break;
			case 10:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s101,x+365,y+297 );break;
							case 2:		ctx.drawImage(img_s101,x+92,y+297 );break;
							case 4:		ctx.drawImage(img_s101,x+230,y+57 );break;
							case 12:	ctx.drawImage(img_s101,x+230,y+213 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s101,x+365,y+133 );break;
							case 2:		ctx.drawImage(img_s101,x+365,y+297 );break;
							case 4:		ctx.drawImage(img_s101,x+230,y+374 );break;
							case 6:		ctx.drawImage(img_s101,x+92,y+297 );break;
							case 8:		ctx.drawImage(img_s101,x+92,y+133 );break;
							case 10:	ctx.drawImage(img_s101,x+230,y+57 );break;
							case 12:	ctx.drawImage(img_s101,x+230,y+213 );break;
						}
					}
					break;
			case 11:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s112,x+350,y+318 );break;
							case 2:		ctx.drawImage(img_s112,x+77,y+318 );break;
							case 4:		ctx.drawImage(img_s112,x+215,y+77 );break;
							case 12:	ctx.drawImage(img_s112,x+215,y+233 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s112,x+350,y+143 );break;
							case 2:		ctx.drawImage(img_s112,x+350,y+318 );break;
							case 4:		ctx.drawImage(img_s112,x+215,y+379 );break;
							case 6:		ctx.drawImage(img_s112,x+77,y+318 );break;
							case 8:		ctx.drawImage(img_s112,x+77,y+143 );break;
							case 10:	ctx.drawImage(img_s112,x+215,y+77 );break;
							case 12:	ctx.drawImage(img_s112,x+215,y+233 );break;
						}
					}
					break;
			case 12:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s123,x+365,y+295 );break;
							case 2:		ctx.drawImage(img_s123,x+92,y+295 );break;
							case 4:		ctx.drawImage(img_s123,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s123,x+230,y+213 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s123,x+365,y+138 );break;
							case 2:		ctx.drawImage(img_s123,x+365,y+295 );break;
							case 4:		ctx.drawImage(img_s123,x+230,y+376 );break;
							case 6:		ctx.drawImage(img_s123,x+92,y+295 );break;
							case 8:		ctx.drawImage(img_s123,x+92,y+138 );break;
							case 10:	ctx.drawImage(img_s123,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s123,x+230,y+213 );break;
						}
					}
					break;
			case 13:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s134,x+365,y+295 );break;
							case 2:		ctx.drawImage(img_s134,x+92,y+295 );break;
							case 4:		ctx.drawImage(img_s134,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s134,x+230,y+213 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s134,x+365,y+138 );break;
							case 2:		ctx.drawImage(img_s134,x+365,y+295 );break;
							case 4:		ctx.drawImage(img_s134,x+230,y+376 );break;
							case 6:		ctx.drawImage(img_s134,x+92,y+295 );break;
							case 8:		ctx.drawImage(img_s134,x+92,y+138 );break;
							case 10:	ctx.drawImage(img_s134,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s134,x+230,y+213 );break;
						}
					}
					break;
			case 14:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s145,x+352,y+318 );break;
							case 2:		ctx.drawImage(img_s145,x+79,y+318 );break;
							case 4:		ctx.drawImage(img_s145,x+217,y+77 );break;
							case 12:	ctx.drawImage(img_s145,x+217,y+233 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s145,x+352,y+143 );break;
							case 2:		ctx.drawImage(img_s145,x+352,y+318 );break;
							case 4:		ctx.drawImage(img_s145,x+217,y+379 );break;
							case 6:		ctx.drawImage(img_s145,x+79,y+318 );break;
							case 8:		ctx.drawImage(img_s145,x+79,y+143 );break;
							case 10:	ctx.drawImage(img_s145,x+217,y+77 );break;
							case 12:	ctx.drawImage(img_s145,x+217,y+230 );break;
						}
					}
					break;
			case 15:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s156,x+359,y+318 );break;
							case 2:		ctx.drawImage(img_s156,x+86,y+318 );break;
							case 4:		ctx.drawImage(img_s156,x+224,y+77 );break;
							case 12:	ctx.drawImage(img_s156,x+224,y+233 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s156,x+359,y+143 );break;
							case 2:		ctx.drawImage(img_s156,x+359,y+318 );break;
							case 4:		ctx.drawImage(img_s156,x+224,y+379 );break;
							case 6:		ctx.drawImage(img_s156,x+86,y+318 );break;
							case 8:		ctx.drawImage(img_s156,x+86,y+143 );break;
							case 10:	ctx.drawImage(img_s156,x+224,y+77 );break;
							case 12:	ctx.drawImage(img_s156,x+224,y+230 );break;
						}
					}
					break;
			case 16:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s167,x+365,y+295 );break;
							case 2:		ctx.drawImage(img_s167,x+92,y+295 );break;
							case 4:		ctx.drawImage(img_s167,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s167,x+230,y+213 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s167,x+365,y+138 );break;
							case 2:		ctx.drawImage(img_s167,x+365,y+295 );break;
							case 4:		ctx.drawImage(img_s167,x+230,y+376 );break;
							case 6:		ctx.drawImage(img_s167,x+92,y+295 );break;
							case 8:		ctx.drawImage(img_s167,x+92,y+138 );break;
							case 10:	ctx.drawImage(img_s167,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s167,x+230,y+213 );break;
						}
					}
					break;
			case 17:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s178,x+365,y+295 );break;
							case 2:		ctx.drawImage(img_s178,x+92,y+295 );break;
							case 4:		ctx.drawImage(img_s178,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s178,x+230,y+213 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s178,x+365,y+138 );break;
							case 2:		ctx.drawImage(img_s178,x+365,y+295 );break;
							case 4:		ctx.drawImage(img_s178,x+230,y+376 );break;
							case 6:		ctx.drawImage(img_s178,x+92,y+295 );break;
							case 8:		ctx.drawImage(img_s178,x+92,y+138 );break;
							case 10:	ctx.drawImage(img_s178,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s178,x+230,y+213 );break;
						}
					}
					break;
			case 18:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s189,x+365,y+295 );break;
							case 2:		ctx.drawImage(img_s189,x+92,y+295 );break;
							case 4:		ctx.drawImage(img_s189,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s189,x+230,y+213 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s189,x+365,y+138 );break;
							case 2:		ctx.drawImage(img_s189,x+365,y+295 );break;
							case 4:		ctx.drawImage(img_s189,x+230,y+376 );break;
							case 6:		ctx.drawImage(img_s189,x+92,y+295 );break;
							case 8:		ctx.drawImage(img_s189,x+92,y+138 );break;
							case 10:	ctx.drawImage(img_s189,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s189,x+230,y+213 );break;
						}
					}
					break;
			case 19:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s191,x+365,y+295 );break;
							case 2:		ctx.drawImage(img_s191,x+92,y+295 );break;
							case 4:		ctx.drawImage(img_s191,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s191,x+230,y+213 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s191,x+365,y+138 );break;
							case 2:		ctx.drawImage(img_s191,x+365,y+295 );break;
							case 4:		ctx.drawImage(img_s191,x+230,y+376 );break;
							case 6:		ctx.drawImage(img_s191,x+92,y+295 );break;
							case 8:		ctx.drawImage(img_s191,x+92,y+138 );break;
							case 10:	ctx.drawImage(img_s191,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s191,x+230,y+213 );break;
						}
					}
					break;
			case 20:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s202,x+365,y+295 );break;
							case 2:		ctx.drawImage(img_s202,x+92,y+295 );break;
							case 4:		ctx.drawImage(img_s202,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s202,x+230,y+213 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s202,x+365,y+138 );break;
							case 2:		ctx.drawImage(img_s202,x+365,y+295 );break;
							case 4:		ctx.drawImage(img_s202,x+230,y+376 );break;
							case 6:		ctx.drawImage(img_s202,x+92,y+295 );break;
							case 8:		ctx.drawImage(img_s202,x+92,y+138 );break;
							case 10:	ctx.drawImage(img_s202,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s202,x+230,y+213 );break;
						}
					}
					break;
			case 21:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s213,x+365,y+295 );break;
							case 2:		ctx.drawImage(img_s213,x+92,y+295 );break;
							case 4:		ctx.drawImage(img_s213,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s213,x+230,y+213 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s213,x+365,y+138 );break;
							case 2:		ctx.drawImage(img_s213,x+365,y+295 );break;
							case 4:		ctx.drawImage(img_s213,x+230,y+376 );break;
							case 6:		ctx.drawImage(img_s213,x+92,y+295 );break;
							case 8:		ctx.drawImage(img_s213,x+92,y+138 );break;
							case 10:	ctx.drawImage(img_s213,x+230,y+55 );break;
							case 12:	ctx.drawImage(img_s213,x+230,y+213 );break;
						}
					}
					break;
			case 22:if(chart==0 )
					{switch (i)
						{	case 0:		ctx.drawImage(img_s224,x+365,y+300 );break;
							case 2:		ctx.drawImage(img_s224,x+92,y+300 );break;
							case 4:		ctx.drawImage(img_s224,x+230,y+60 );break;
							case 12:	ctx.drawImage(img_s224,x+230,y+218 );break;
						}
					}
					else
					{switch (i)
						{	case 0:		ctx.drawImage(img_s224,x+365,y+140 );break;
							case 2:		ctx.drawImage(img_s224,x+365,y+300 );break;
							case 4:		ctx.drawImage(img_s224,x+230,y+380 );break;
							case 6:		ctx.drawImage(img_s224,x+92,y+300 );break;
							case 8:		ctx.drawImage(img_s224,x+92,y+140 );break;
							case 10:	ctx.drawImage(img_s224,x+230,y+60 );break;
							case 12:	ctx.drawImage(img_s224,x+230,y+218 );break;
						}
					}
					break;


		}
		}

	}
