var field = document.getElementById('hack');
		var x = 0;
		var txt = 0;
		var imgS;
		var txtHack="";
		var center;
		var perso;
		var xperso=0;
		var yperso=300;
		var hack=false;

    
		window.onload = function() {
		        x=0;
				txt=0;
		xperso=0;
		yperso=300
				txtHack="";
		};

    	document.onkeydown = checkKey;

		function checkKey(e) {

	    e = e || window.event;

	    if (e.keyCode == '38' && x<2) {
	        x++;
	    console.log(e.keyCode+'  '+x);
		setTimeout(resetKin,5000);
	    }
	    else if (e.keyCode == '40' && x>=2 && x<4) {
	        x++;
	    console.log(e.keyCode+'  '+x);
	    }
	    else if (e.keyCode == '37' && (x==4 || x==6)) {
	       x++;
	    console.log(e.keyCode+'  '+x);
	    }
	    else if (e.keyCode == '39'  && (x==5 || x==7)) {
	       x++;
	    console.log(e.keyCode+'  '+x);
	    }
	    else if (e.keyCode == '66'  && x==8) {
	       x++;
	    console.log(e.keyCode+'  '+x);
	    }
	    else if (e.keyCode == '65'  && x==9) {
	       x++;
	    console.log(e.keyCode+'  '+x+'konami code');
	    kinamiCode();
	    }
		else if(hack==true)
		{
			if(e.keyCode=='37')xperso-=4;
			else if(e.keyCode=='39')xperso+=4;
			perso.style.left = xperso+'px';
			perso.style.top = yperso+'px';
		}
		}
		
		function resetKin() {
			x=0;
			txt=0;
			txtHack="";
		}
		
		function pHack() {
			txtHack = txtHack+(Math.round(Math.random()*1.4));
			console.log(txtHack);
			if(txt>80)
			{
				txt=0;
				txtHack+='<br/>';
			}
			center.innerHTML = txtHack;
			txt++;
			setTimeout(pHack,10);
		}
		
		function imgFix() {
			var htML=document.getElementsByTagName('html');
			htML[0].style.overflow = 'hidden';
				imgS = document.getElementsByTagName('img');
		    	console.log('kinamC'+imgS.length);
		    for(var i=0;i<imgS.length;i++)
		    {
		    	console.log(imgS[i].src);
		    	imgS[i].src='images/Hack01F.png';
		    }
			console.log('kiSkull');
			var skull=document.getElementById('skull');
			skull.src = 'images/skull.png';
			skull.style.display = 'flex';
		}

	    function kinamiCode() {
			hack=true;
				imgS = document.getElementsByTagName('img');
				
		    	console.log('kinamC'+imgS.length);
		    for(var i=0;i<imgS.length;i++)
		    {
		    	console.log(imgS[i].src);
		    	imgS[i].src='images/gifHack02.gif';
		    }
			setTimeout(imgFix,7500);
			center = document.getElementById('txtHack');
			perso = document.getElementById('perso');
			perso.style.display = 'flex';
			center.style.background = 'black';
			center.style.color = 'green';
			txtHack='You\'ve just been hack ... Say good bye to your computer when is alive ...<br/>';
			setTimeout(pHack,80);
	    }

	