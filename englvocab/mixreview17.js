var pid;
function viewresult()
{
	var c=0,w=0;
	
	var gv1=document.getElementById("GridView1");
	for (i=1;i<=20;i++)
	{
		document.getElementById(i).setAttribute('onclick','quspallet_btn_click1(this.id)');
		if (gv1.rows[i].cells[7].innerHTML!=0)
		{
		if (gv1.rows[i].cells[6].innerHTML==gv1.rows[i].cells[7].innerHTML)
		{
			 document.getElementById(i).style.backgroundColor = "#51FF85";
             document.getElementById(i).style.color = "#FFFFFF";
			 c=Number(c)+1;
		}
		else
		{
			document.getElementById(i).style.backgroundColor = "#DA463F";
        document.getElementById(i).style.color = "#FFFFFF";
		w=Number(w)+1;
		}
		}	
		
	}
	
	    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
    r1.disabled = true;
    r2.disabled = true;
    r3.disabled = true;
    r4.disabled = true;
	document.getElementById("submitrow").style.display="none";
	document.getElementById("scorerow").style.display="block";
	document.getElementById("spanchapter").innerHTML="Review";
	
			document.getElementById("quizcomp").style.display="none";
	document.getElementById("test").style.display="block";
	document.getElementById("Button1").setAttribute('onclick','prev11()');
	document.getElementById("Button2").setAttribute('onclick','next11()');
	
	quspallet_btn_click1(1);
	document.getElementById("labelcorrect").innerHTML=c;
		document.getElementById("labelwrong").innerHTML=w;
		
		/* var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today =  dd + '/' + mm + '/' + yyyy; */
document.getElementById("ButtonSol").style.display = "block";
qusstatus();
document.getElementById("Button1").disabled=false;
	document.getElementById("Button2").disabled=false;

}

function prev11() {
    //alert("hi");
    var lb = document.getElementById("Label3").innerHTML;
	
    lb = Number(lb) - 1;
    
   radiorefresh1();
    //wrong_shake();
    var gv = document.getElementById("GridView1");
    var qn = gv.rows[lb].cells[0].innerHTML;
    document.getElementById("Label3").innerHTML = qn;
    //var type = gv.rows[lb].cells[8].innerHTML;
    
    //document.getElementById("Label2").innerHTML = "QUESTION TYPE:-" + " " + type;
    var qus = gv.rows[lb].cells[1].innerHTML;
    document.getElementById("Label4").innerHTML = qus;
    var op1 = gv.rows[lb].cells[2].innerHTML;
    document.getElementById("radio11").innerHTML = op1;
    var op2 = gv.rows[lb].cells[3].innerHTML;
    document.getElementById("radio22").innerHTML = op2;
    var op3 = gv.rows[lb].cells[4].innerHTML;
    document.getElementById("radio33").innerHTML = op3;
    var op4 = gv.rows[lb].cells[5].innerHTML;
    document.getElementById("radio44").innerHTML = op4;
   // radiocheck();
  
    quspallet_btn_click1(lb);
    //btndisable();
  
    //var d = document.getElementById("bb");
    //d.scrollLeft -= 26;
    window.location.href = "#" +lb;
    if (gv.rows[lb].cells[7].innerHTML == "1" || gv.rows[lb].cells[7].innerHTML == "2" || gv.rows[lb].cells[7].innerHTML == "3" || gv.rows[lb].cells[7].innerHTML == "4") {
        
        //document.getElementById("ButtonSol").style.display = "none";
    }
    if (document.getElementById("qusscroll").classList.contains("bounceInLeft") == false) {
        document.getElementById("qusscroll").classList.add("bounceInLeft");
    }
    check_boomark();
	}
	


function next11() {
    //color();
    
    var lb = document.getElementById("Label3").innerHTML;
	if(lb!=document.getElementById("GridView1").rows.length-1)
	{
    lb = Number(lb) + 1;
    //wrong_shake();
    radiorefresh1();
    var gv = document.getElementById("GridView1");
    var qn = gv.rows[lb].cells[0].innerHTML;
    document.getElementById("Label3").innerHTML = qn;
   
    var qus = gv.rows[lb].cells[1].innerHTML;
    document.getElementById("Label4").innerHTML = qus;
    var op1 = gv.rows[lb].cells[2].innerHTML;
    document.getElementById("radio11").innerHTML = op1;
    var op2 = gv.rows[lb].cells[3].innerHTML;
    document.getElementById("radio22").innerHTML = op2;
    var op3 = gv.rows[lb].cells[4].innerHTML;
    document.getElementById("radio33").innerHTML = op3;
    var op4 = gv.rows[lb].cells[5].innerHTML;
    document.getElementById("radio44").innerHTML = op4;

    //radiocheck();
    //btndisable();
    quspallet_btn_click1(lb);

    //var d = document.getElementById("bb");
    //d.scrollLeft += 26;
    window.location.href = "#" + lb;
    

    if (gv.rows[lb].cells[7].innerHTML == "1" || gv.rows[lb].cells[7].innerHTML == "2" || gv.rows[lb].cells[7].innerHTML == "3" || gv.rows[lb].cells[7].innerHTML == "4")
    {
        
        //document.getElementById("ButtonSol").style.display = "none";
    }
    
    if (document.getElementById("qusscroll").classList.contains("bounceInRight") == false) {
        document.getElementById("qusscroll").classList.add("bounceInRight");
    }
    check_boomark();
	}
	
}

function quspallet_btn_click1(idd)
{
    
    radiorefresh1();
    var gv=document.getElementById("GridView1");
	//document.getElementById("dir").innerHTML=gv.rows[idd].cells[9].innerHTML;
	
    if (gv.rows[idd].cells[6].innerHTML == gv.rows[idd].cells[7].innerHTML)
    {
        
      
        document.getElementById("Label3").innerHTML = idd;

        var qus = gv.rows[idd].cells[1].innerHTML;
        document.getElementById("Label4").innerHTML = qus;
        var op1 = gv.rows[idd].cells[2].innerHTML;
        document.getElementById("radio11").innerHTML = op1;
        var op2 = gv.rows[idd].cells[3].innerHTML;
        document.getElementById("radio22").innerHTML = op2;
        var op3 = gv.rows[idd].cells[4].innerHTML;
        document.getElementById("radio33").innerHTML = op3;
        var op4 = gv.rows[idd].cells[5].innerHTML;
        document.getElementById("radio44").innerHTML = op4;
        var id1 = gv.rows[idd].cells[6].innerHTML;
        document.getElementById("radio" + id1 + id1).classList.add("btn-success1");
    }
    else if (gv.rows[idd].cells[7].innerHTML == 1 || gv.rows[idd].cells[7].innerHTML == 2 || gv.rows[idd].cells[7].innerHTML == 3 || gv.rows[idd].cells[7].innerHTML == 4) {

        
        document.getElementById("Label3").innerHTML = idd;

        var qus = gv.rows[idd].cells[1].innerHTML;
        document.getElementById("Label4").innerHTML = qus;
        var op1 = gv.rows[idd].cells[2].innerHTML;
        document.getElementById("radio11").innerHTML = op1;
        var op2 = gv.rows[idd].cells[3].innerHTML;
        document.getElementById("radio22").innerHTML = op2;
        var op3 = gv.rows[idd].cells[4].innerHTML;
        document.getElementById("radio33").innerHTML = op3;
        var op4 = gv.rows[idd].cells[5].innerHTML;
        document.getElementById("radio44").innerHTML = op4;
        var id1 = gv.rows[idd].cells[6].innerHTML;
		
        document.getElementById("radio" + id1 + id1).classList.add("btn-success1");
        var wrong = gv.rows[idd].cells[7].innerHTML;
        document.getElementById("radio" + wrong + wrong).classList.add("btn-danger1");
        
        if (document.getElementById("radio" + wrong + wrong).classList.contains("shake") == false)
        {
            
            document.getElementById("radio" + wrong + wrong).classList.add("shake");
          
        }
       
        
    }
    else
    {
        document.getElementById("Label3").innerHTML = idd;

        var qus = gv.rows[idd].cells[1].innerHTML;
        document.getElementById("Label4").innerHTML = qus;
        var op1 = gv.rows[idd].cells[2].innerHTML;
        document.getElementById("radio11").innerHTML = op1;
        var op2 = gv.rows[idd].cells[3].innerHTML;
        document.getElementById("radio22").innerHTML = op2;
        var op3 = gv.rows[idd].cells[4].innerHTML;
        document.getElementById("radio33").innerHTML = op3;
        var op4 = gv.rows[idd].cells[5].innerHTML;
        document.getElementById("radio44").innerHTML = op4;
		 var id1 = gv.rows[idd].cells[6].innerHTML;
		document.getElementById("radio" + id1 + id1).classList.add("btn-success1");
        
        
    }
   
    check_boomark();
	qusstatus();
	//btndisable();
	
	document.getElementById("ButtonSol").style.display = "block";
}

function unatt()
{
	
}
function radiorefresh1() {
    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
    r1.checked = false;
    r2.checked = false;
    r3.checked = false;
    r4.checked = false;
    
    var r11 = document.getElementById("radio11");
    var r22 = document.getElementById("radio22");
    var r33 = document.getElementById("radio33");
    var r44= document.getElementById("radio44");
    r11.classList.remove("btn-success1");
    r22.classList.remove("btn-success1");
    r33.classList.remove("btn-success1");
    r44.classList.remove("btn-success1");
    r11.classList.remove("btn-danger1");
    r22.classList.remove("btn-danger1");
    r33.classList.remove("btn-danger1");
    r44.classList.remove("btn-danger1");
    var lbsol = document.getElementById("divsol");
    lbsol.style.display = "none";
    
   

    wrong_shake();
    if (document.getElementById("qusscroll").classList.contains("bounceInLeft")==true)
    {
        document.getElementById("qusscroll").classList.remove("bounceInLeft");
    }
    else if ( document.getElementById("qusscroll").classList.contains("bounceInRight")==true)
    {
        document.getElementById("qusscroll").classList.remove("bounceInRight");
    }

}

function start()
{
	var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today =  dd + '/' + mm + '/' + yyyy;
//alert(today);
var r=dd%10;
r=(r*7)%10;
r=r+20;
document.getElementById("today").innerHTML="Can You Score "+r+""+"/40";
quizstart();
myFunction1();

}
function qusstatus()
{
	var lb = document.getElementById("Label3").innerHTML;
	var gv1=document.getElementById("GridView1");
	var s=document.getElementById("status11");
	if (gv1.rows[lb].cells[7].innerHTML==0)
	{
		s.innerHTML="( Not Answered )";
		s.style.color="#85867C ";
		
	}
	else
	{
		if (gv1.rows[lb].cells[6].innerHTML==gv1.rows[lb].cells[7].innerHTML)
		{
			s.innerHTML="( Correct )";
			s.style.color="#3FB407 ";
		
		}
		else
		{
			s.innerHTML="( Wrong )";
			s.style.color="#E43625 ";
		}
	}
}

function reattempt()
{
	



}

function countdown(minutes) {
    time=minutes,r=document.getElementById('time'), tmp=time;
pid= setInterval(function()
{
var c=tmp--,m=(c/60)>>0,s=(c-m*60)+'';
r.textContent=m+':'+(s.length>1?'':'0')+s
tmp!=0||(tmp=time);
if (r.innerHTML=="0:01")
{
submit();
}
}

,1000);

}



function submit()
{
	document.getElementById("test").style.display="none";
	var gv1=document.getElementById("GridView1");
	var qus="";
	var att="";
	var c=0,w=0,s=0;
	for(var i=1;i<=20;i++)
	{
		
		if(gv1.rows[i].cells[7].innerHTML!=0)
		{
			if(gv1.rows[i].cells[6].innerHTML==gv1.rows[i].cells[7].innerHTML)
		    {
				c=Number(c)+1;
			}
			else
			{
				w=Number(w)+1;
			}
		}
		
	}
	
	s=c*2-w*0.5;
	//localStorage.setItem("TESTQ",qus);
	//localStorage.setItem("TESTA",att);
	document.getElementById("score").innerHTML=s;
	document.getElementById("correct").innerHTML=" "+c+" Correct";
	document.getElementById("wrong").innerHTML=" "+w+" Wrong";
	document.getElementById("skip").innerHTML=" "+ (20-(c+w)) +" Unattempt";
	var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today =  dd + '/' + mm + '/' + yyyy;
//localStorage.setItem("TODAY",today);
var r=dd%10;
r=(r*7)%10;
r=20;
document.getElementById("cutoff").innerHTML=r;
if (s>=r)
{
	document.getElementById("status1").innerHTML="Cleared";
	document.getElementById("status1").style.color="#00cc00";
}
else{
	document.getElementById("status1").innerHTML="Not Cleared";
	document.getElementById("status1").style.color="#ff704d";
}
	
	var time=document.getElementById("time").innerHTML;
	var t=time.split(':');
	var m=t[0];
	var s=t[1];
	var total=(7-m)+" : "+(60-s)+" sec";
	document.getElementById("timetake").innerHTML=total;
	document.getElementById("quizcomp").style.display="block";
	var s1=c*2-w*0.5;
	//var details=total+"/"+" "+c+" Correct"+ "/"+" "+ (25-(c+w)) +" Unattempt"+ "/"+" "+w+" Wrong"+"/"+""+ s1 +""+"/" +r + "/"+document.getElementById("status1").innerHTML;
	//localStorage.setItem("DETAILS",details);
	var d=document.getElementById("spanchapter").innerHTML;
	var tt=document.getElementById("TOPIC").innerHTML;
	localStorage.setItem(tt+" "+d,s1);
	document.getElementById("time").innerHTML="timeup";
	clearInterval(pid);
	
}

function quizcompletedata_fill()
{
	if(localStorage.getItem("DETAILS")!=undefined)
	{
		var s=localStorage.getItem("DETAILS");
		var data=s.split('/');
		document.getElementById("timetake").innerHTML=data[0];
		document.getElementById("correct").innerHTML=data[1];
		document.getElementById("skip").innerHTML=data[2];
		document.getElementById("wrong").innerHTML=data[3];
		document.getElementById("score").innerHTML=data[4];
		document.getElementById("cutoff").innerHTML=data[5];
		if(data[6]=="Not Cleared")
		{
			document.getElementById("status1").innerHTML=data[6];
			document.getElementById("status1").style.color="#ff704d";
	        
		}
		else
		{
			document.getElementById("status1").innerHTML=data[6];
			document.getElementById("status1").style.color="#00cc00";
		}
		
		
		
		
	}
}

function quizscore()
{
	 var icon_y="<i class="+"material-icons"+" style="+"color:green;text-align:center;margin-right:10px;float:left;"+">check_circle</i>";
	var icon_n="<i class="+"material-icons"+" style="+"color:red;text-align:center;margin-right:10px;float:left;"+">slideshow</i>";
	var qz=document.getElementById("menu");
	var l = document.getElementById('GridView2').rows.length;
	var tt=document.getElementById("TOPIC").innerHTML;
	
	
	var l=parseInt(l/20);
	for (i=1;i<=l;i++)
	{
		
		//var qs=document.getElementById("t"+i).innerHTML;
		var qs=tt+" "+"Set "+i;
		//alert(qs);
	if(localStorage.getItem(qs)!=undefined)
		{
			document.getElementById("t"+i).innerHTML=icon_y+"Set "+i;
			//qz.rows[i].cells[0].innerHTML=icon_y+qs;
			var s=localStorage.getItem(qs);
			document.getElementById("menu").rows[i].cells[1].innerHTML=s+" / 40";
			
		}
		else
		{
			//qz.rows[i].cells[1].innerHTML=icon_n+qs;
			document.getElementById("t"+i).innerHTML=icon_n+"Set "+i;
			document.getElementById("menu").rows[i].cells[1].innerHTML="Not Attempt";
		}
	}
	
}

function quizmenu()
{/* 
	 document.getElementById("quizcomp").style.display="none";
	document.getElementById("test").style.display="none";
	document.getElementById("202020").style.display="block";
	for (j=1;j<=20;j++)
		{
			document.getElementById("GridView1").rows[j].cells[0].innerHTML="";;
			document.getElementById("GridView1").rows[j].cells[1].innerHTML="";
			document.getElementById("GridView1").rows[j].cells[2].innerHTML="";;
			document.getElementById("GridView1").rows[j].cells[3].innerHTML="";
			document.getElementById("GridView1").rows[j].cells[4].innerHTML="";
			document.getElementById("GridView1").rows[j].cells[5].innerHTML="";
			
			document.getElementById("GridView1").rows[j].cells[6].innerHTML="";
			document.getElementById("GridView1").rows[j].cells[7].innerHTML="";
			
		}
		 document.getElementById("bb").innerHTML="";
		 document.getElementById("Button1").setAttribute('onclick','prev1()');
	document.getElementById("Button2").setAttribute('onclick','next()');
	document.getElementById("labelcorrect").innerHTML="";
		document.getElementById("labelwrong").innerHTML="";
		document.getElementById("status11").innerHTML="";
		radiorefresh1();
	a();  */
	
	window.location="file:///C:/Users/LALRAJIV/Desktop/GS%20APP/GS_Bilingual_APP%20-%20Copy/script_mixq_HI_new.html";
	
	
}