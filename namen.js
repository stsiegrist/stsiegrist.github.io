var vor;
var mittel;
var nach;
var namenstring="";
var domswing="";

var treffer;
var gender;
var platz;
var laenge=0;
var chart=0;
var zahlenarray=new Array(70);
var qsummearray=new Array(6);
var zahlenout=new Array(14);


function ablauf() {
	clear();
	checkString(namenstring.toUpperCase()+" -1",zahlenarray);
	verteile(zahlenarray,qsummearray);
	qsumme();
	zahlen();
	schwingung(zahlenout);
	
}

function clear() {
	for(var i=0;i<zahlenarray.length;i++)
		{zahlenarray[i]=0;}
	for(var i=0;i<qsummearray.length;i++)
		{qsummearray[i]=0;}
	for(var i=0;i<zahlenout.length;i++)
		{zahlenout[i]=0;}
	domswing="";
	laenge=0;
}

function getDomSchwingung() {
	schwingung(zahlenout);
	return domswing;
}


function zahlen() {
	zahlenout[0]=qsummearray[0];
	zahlenout[1]=quersumme(quersumme(qsummearray[0]));
	zahlenout[2]=qsummearray[1];
	zahlenout[3]=quersumme(quersumme(qsummearray[1]));
	zahlenout[4]=qsummearray[2];
	zahlenout[5]=quersumme(quersumme(qsummearray[2]));
	zahlenout[6]=qsummearray[3];
	zahlenout[7]=quersumme(quersumme(qsummearray[3]));
	zahlenout[8]=qsummearray[4];
	zahlenout[9]=quersumme(quersumme(qsummearray[4]));
	zahlenout[10]=qsummearray[5];
	zahlenout[11]=quersumme(quersumme(qsummearray[5]));

	zahlenout[12]=zahlenout[0]+zahlenout[2]+zahlenout[4]+zahlenout[6]+zahlenout[8]+zahlenout[10];
	zahlenout[13]=zahlenout[1]+zahlenout[3]+zahlenout[5]+zahlenout[7]+zahlenout[9]+zahlenout[11];

	while(zahlenout[12]>22)
	{
		zahlenout[12]=quersumme(zahlenout[12]);
	}

	while(zahlenout[13]>9)
	{
		zahlenout[13]=quersumme(zahlenout[13]);
	}

}

function qsumme() {

	for(var i=0;i<qsummearray.length;i++)
	{
		while(qsummearray[i]>22)
		{
			qsummearray[i]=quersumme(qsummearray[i]);

		}
	}
}

function checkString(s,a)
{
	var tmp;
	var j=0;
	var d=0;

	for(var i=0;i<a.length;i++)
	{
		tmp=s.substring(i,i+2);

		if(tmp == "-1")
			break;

		if((tmp == "AH" ||tmp == "CH" ||tmp == "WH" ||tmp == "TZ" ||tmp == "SH" ||tmp == "TA" ||tmp == "TH" || tmp == "M " ||tmp == "P " ))
		{
			if(tmp == "AH")
				a[j]=5;
			if(tmp == "CH")
				a[j]=8;
			if(tmp == "WH")
				a[j]=16;
			if(tmp == "TZ")
				a[j]=18;
			if(tmp == "SH")
				a[j]=21;
			if(tmp == "TA")
				a[j]=22;
			if(tmp == "TH")
				a[j]=22;
			if(tmp == "M ")
				a[j]=12;
			if(tmp == "P ")
				a[j]=12;

			d++;
		}
		else if(d==1)
			{	d=0;
				j++;
			}
		else
		{
			if(tmp.charAt(0)=='A')
				a[j]=1;

			if(tmp.charAt(0)=='B')
				a[j]=2;

			if(tmp.charAt(0)=='G')
				a[j]=3;

			if(tmp.charAt(0)=='D')
				a[j]=4;

			if(tmp.charAt(0)=='E'||tmp.charAt(0)=='H')
				a[j]=5;

			if(tmp.charAt(0)=='O'||tmp.charAt(0)=='U'||tmp.charAt(0)=='V'||tmp.charAt(0)=='W')
				a[j]=6;

			if(tmp.charAt(0)=='Z')
				a[j]=7;

			if(tmp.charAt(0)=='T')
				a[j]=9;

			if(tmp.charAt(0)=='I'||tmp.charAt(0)=='J')
				a[j]=10;

			if(tmp.charAt(0)=='C')
				a[j]=11;

			if(tmp.charAt(0)=='L')
				a[j]=12;

			if(tmp.charAt(0)=='M')
				a[j]=13;

			if(tmp.charAt(0)=='N')
				a[j]=14;

			if(tmp.charAt(0)=='S'||tmp.charAt(0)=='X')
				a[j]=15;

			if(tmp.charAt(0)=='Y')
				a[j]=16;

			if(tmp.charAt(0)=='F'||tmp.charAt(0)=='P')
				a[j]=17;

			if(tmp.charAt(0)=='K'||tmp.charAt(0)=='Q')
				a[j]=19;

			if(tmp.charAt(0)=='R')
				a[j]=20;

			if(tmp.charAt(0)!=' ')
			j++;
		}
	}
}

function verteile(a, p) {
	var counter=0;

	for(var i=0;i<a.length;i++)
	{
		if(a[i]==0)
			break;
		counter++;
	}

	laenge=counter;

	if(counter<10 || chart==13)
	{

		for(var i=0;a[i]+a[i+6]!=0;i=i+6)
		{
			p[0]=p[0]+a[i];
		}


		for(var i=1;a[i]+a[i+6]!=0;i=i+6)
		{
			p[1]=p[1]+a[i];
		}

		for(var i=2;a[i]+a[i+6]!=0;i=i+6)
		{
			p[2]=p[2]+a[i];
		}


		for(var i=3;a[i]+a[i+6]!=0;i=i+6)
		{
			p[0]=p[0]+a[i];
		}


		for(var i=4;a[i]+a[i+6]!=0;i=i+6)
		{
			p[1]=p[1]+a[i];
		}

		for(var i=5;a[i]+a[i+6]!=0;i=i+6)
		{
			p[2]=p[2]+a[i];
		}

		chart=0;
	}

	else
	{


		for(var i=0;a[i]+a[i+6]!=0;i=i+6)
		{
			p[0]=p[0]+a[i];
		}


		for(var i=1;a[i]+a[i+6]!=0;i=i+6)
		{
			p[1]=p[1]+a[i];
		}

		for(var i=2;a[i]+a[i+6]!=0;i=i+6)
		{
			p[2]=p[2]+a[i];
		}

		for(var i=3;a[i]+a[i+6]!=0;i=i+6)
		{
			p[3]=p[3]+a[i];
		}

		for(var i=4;a[i]+a[i+6]!=0;i=i+6)
		{
			p[4]=p[4]+a[i];
		}

		for(var i=5;a[i]+a[i+6]!=0;i=i+6)
		{
			p[5]=p[5]+a[i];
		}

		chart=1;
	}
}

function schwingung(a) {

		var b=new Array(23);
		var n=new Array(23);

		for(var i=0;i<b.length;i++) {
			b[i]=i;
		}
		b[0]=-1;

		for(var i=0;i<n.length;i++) {
			n[i] = 0;
		}

		for(var i=0;i<b.length;i++)
		{
			for(var j=0;j<a.length;j++)
			{
				if(b[i]==a[j])
					n[i]++;
			}
		}

		for(var i=0;i<n.length;i++)
		{
			if(n[i]>=3)
				domswing=domswing+"   "+(i);
		}
		domswing = "1  2";

}

function quersumme(a) {
	var t=parseInt(a);
	var f=0;
	while(t>0)
	{
		f=f+t%10;
		t=parseInt(t/10);
	}

	return f;
}