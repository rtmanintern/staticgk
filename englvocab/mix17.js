
function getquiz()
{
	
}
function aaaa() {
    getquiz();
	
    var gv = document.getElementById("GridView1");
    var qus = gv.rows[1].cells[1].innerHTML;
    document.getElementById("Label4").innerHTML = qus;
    var op1 = gv.rows[1].cells[2].innerHTML;
    document.getElementById("radio11").innerHTML = op1;
    var op2 = gv.rows[1].cells[3].innerHTML;
    document.getElementById("radio22").innerHTML = op2;
    var op3 = gv.rows[1].cells[4].innerHTML;
    document.getElementById("radio33").innerHTML = op3;
    var op4 = gv.rows[1].cells[5].innerHTML;
    document.getElementById("radio44").innerHTML = op4;
    //btndisable();
    //chcekkr()
    //document.getElementById("start").style.display = "none";
    document.getElementById("test").style.display = "block";
    btn_disable();
    check_boomark();
	
	 var s = "<div id=snackbar></div>";
        document.body.innerHTML+= s;
        document.getElementById("snackbar").innerHTML = "";
        
	countdown(480);
}

function attept() {
    
    var gv = document.getElementById("GridView1");
    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
    var qn = document.getElementById("Label3").innerHTML;
    
    //radiodisable();
    //wrong_shake();
    
    var cr = gv.rows[qn].cells[6].innerHTML;
    
    var crr = cr.toString() + cr.toString();
    
    //document.getElementById("radio"+crr).classList.add("btn-success1");
    if (r1.checked) {
        if (gv.rows[qn].cells[7].innerHTML == 1 || gv.rows[qn].cells[7].innerHTML == 2 || gv.rows[qn].cells[7].innerHTML == 3 || gv.rows[qn].cells[7].innerHTML == 4) {
            gv.rows[qn].cells[7].innerHTML = "";
            gv.rows[qn].cells[7].innerHTML = "1";
            
            
           

        }
        else {
            gv.rows[qn].cells[7].innerHTML = "1";
            
        }
    }
    else if (r2.checked) {
        if (gv.rows[qn].cells[7].innerHTML == 1 || gv.rows[qn].cells[7].innerHTML == 2 || gv.rows[qn].cells[7].innerHTML == 3 || gv.rows[qn].cells[7].innerHTML == 4) {
            gv.rows[qn].cells[7].innerHTML = "";
            gv.rows[qn].cells[7].innerHTML = "2";

        }
        else {
            gv.rows[qn].cells[7].innerHTML = "2";
        }
    }
    if (r3.checked) {
        if (gv.rows[qn].cells[7].innerHTML == 1 || gv.rows[qn].cells[7].innerHTML == 2 || gv.rows[qn].cells[7].innerHTML == 3 || gv.rows[qn].cells[7].innerHTML == 4) {
            gv.rows[qn].cells[7].innerHTML = "";
            gv.rows[qn].cells[7].innerHTML = "3";

        }
        else {
            gv.rows[qn].cells[7].innerHTML = "3";
        }
    }
    if (r4.checked) {
        if (gv.rows[qn].cells[7].innerHTML == 1 || gv.rows[qn].cells[7].innerHTML == 2 || gv.rows[qn].cells[7].innerHTML == 3 || gv.rows[qn].cells[7].innerHTML == 4) {
            gv.rows[qn].cells[7].innerHTML = "";
            gv.rows[qn].cells[7].innerHTML = "4";

        }
        else {
            gv.rows[qn].cells[7].innerHTML = "4";
        }
    }
    else {

    }
    var lbcorect = document.getElementById("labelcorrect");
    var lbwrong = document.getElementById("labelwrong");
    if (gv.rows[qn].cells[6].innerHTML == gv.rows[qn].cells[7].innerHTML)
    {
       
        //localStorage.setItem(document.getElementById("GridView1").rows[1].cells[9].innerHTML, lbcorect.innerHTML);
        //for score store
        document.getElementById(qn).style.backgroundColor = "#51FF85";
        document.getElementById(qn).style.color = "#FFFFFF";
		var goqus = document.getElementById("GridView1").rows[qn].cells[0].innerHTML;
		var topic = document.getElementById("TOPIC").innerHTML;
		
        if (topic == "I") 
		{
			goqus=5000+Number(goqus);
			if (localStorage.getItem(goqus) != null) 
			{
				localStorage.removeItem(goqus);
		}}
		else if (topic == "O") 
		{
			goqus=6000+Number(goqus);
			if (localStorage.getItem(goqus) != null) 
			{
				localStorage.removeItem(goqus);
		}}
		else if (topic == "P") 
		{
			goqus=7000+Number(goqus);
			if (localStorage.getItem(goqus) != null) 
			{
				localStorage.removeItem(goqus);
		}}
		
		else if (topic == "S") 
		{
			goqus=8000+Number(goqus);
			if (localStorage.getItem(goqus) != null) 
			{
				localStorage.removeItem(goqus);
		}}
		
		else if (topic == "A") 
		{
			goqus=9000+Number(goqus);
			if (localStorage.getItem(goqus) != null) 
			{
				localStorage.removeItem(goqus);
		}}
		else if (topic == "M") 
		{
			goqus=10000+Number(goqus);
			if (localStorage.getItem(goqus) != null) 
			{
				localStorage.removeItem(goqus);
		}}
		
        
		if (localStorage.getItem(topic) == null)
		{
			localStorage.setItem(topic,"1");
		}
		else
		{
			var t=localStorage.getItem(topic);
			t=Number(t)+1;
			localStorage.setItem(topic,t);
		}
		
		
		
		
		
    }
    else
    {
        
        var wrr = gv.rows[qn].cells[7].innerHTML;
        var wrrr = wrr.toString() + wrr.toString();
        var move = document.getElementById("radio" + wrrr)
        
        //document.getElementById("radio" + wrrr).classList.add("btn-danger1");
       
        
        
       
       document.getElementById(qn).style.backgroundColor = "#51FF85";
        document.getElementById(qn).style.color = "#FFFFFF";
		
		var goqus = document.getElementById("GridView1").rows[qn].cells[0].innerHTML;
		 var topic = document.getElementById("TOPIC").innerHTML;
        if (topic == "I") {
            //var goqus = document.getElementById("goqus").innerHTML;
            var data = document.getElementById("GridView1").rows[qn].cells[0].innerHTML;
            data = 5000 + Number(data);
            localStorage.setItem(data, data);
        }
        else if (topic == "O") {
            //var goqus = document.getElementById("goqus").innerHTML;
            var data = document.getElementById("GridView1").rows[qn].cells[0].innerHTML;
            data = 6000 + Number(data);
            localStorage.setItem(data, data);
        }
		else if (topic == "P") {
            //var goqus = document.getElementById("goqus").innerHTML;
            var data = document.getElementById("GridView1").rows[qn].cells[0].innerHTML;
            data = 7000 + Number(data);
            localStorage.setItem(data, data);
        }
		
		else if (topic == "S") {
            //var goqus = document.getElementById("goqus").innerHTML;
            var data = document.getElementById("GridView1").rows[qn].cells[0].innerHTML;
            data = 8000 + Number(data);
            localStorage.setItem(data, data);
        }
		else if (topic == "A") {
            //var goqus = document.getElementById("goqus").innerHTML;
            var data = document.getElementById("GridView1").rows[qn].cells[0].innerHTML;
            data = 9000 + Number(data);
            localStorage.setItem(data, data);
        }
		else if (topic == "M") {
            //var goqus = document.getElementById("goqus").innerHTML;
            var data = document.getElementById("GridView1").rows[qn].cells[0].innerHTML;
            data = 10000 + Number(data);
            localStorage.setItem(data, data);
        }
        var lbw = lbwrong.innerHTML;
        lbwrong.innerHTML = Number(lbw) + 1;
		var tt=topic+"W";
       if (localStorage.getItem(tt) == null)
		{
			localStorage.setItem(tt,"1");
		}
		else
		{
			var t=localStorage.getItem(tt);
			
			t=Number(t)+1;
			localStorage.setItem(tt,t);
		}
		
		
		
		
		
		
		

    }
    //document.getElementById("ButtonSol").style.display = "block";
    //count_coreect_wrong();
    //color();
}
function radiodisable()
{
    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
    r1.disabled = true;
    r2.disabled = true;
    r3.disabled = true;
    r4.disabled = true;
}

function radiorefresh() {
    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
    r1.checked = false;
    r2.checked = false;
    r3.checked = false;
    r4.checked = false;
    r1.disabled = false;
    r2.disabled = false;
    r3.disabled = false;
    r4.disabled = false;
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
    document.getElementById("ButtonSol").style.display = "none";
   

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

function prev1() {
    //alert("hi");
	
    var lb = document.getElementById("Label3").innerHTML;
	if(lb!=1)
	{
    lb = Number(lb) - 1;
    check_radio();
    radiorefresh();
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
  
    quspallet_btn_click(lb);
    //btn_disable();
  
    window.location.href = "#" +lb;
   
    if (document.getElementById("qusscroll").classList.contains("bounceInLeft") == false) {
        document.getElementById("qusscroll").classList.add("bounceInLeft");
    }
    check_boomark();
	}
}

function next() {
    //color();
    
    var lb = document.getElementById("Label3").innerHTML;
	if(lb!=document.getElementById("GridView1").rows.length-1)
	{
    lb = Number(lb) + 1;
	//check_radio()
    //wrong_shake();
    radiorefresh();
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
    quspallet_btn_click(lb);
    btn_disable();
    //var d = document.getElementById("bb");
    //d.scrollLeft += 26;
    window.location.href = "#" + lb;
    

    if (gv.rows[lb].cells[7].innerHTML == "1" || gv.rows[lb].cells[7].innerHTML == "2" || gv.rows[lb].cells[7].innerHTML == "3" || gv.rows[lb].cells[7].innerHTML == "4")
    {
        
        //document.getElementById("ButtonSol").style.display = "block";
    }
    
    if (document.getElementById("qusscroll").classList.contains("bounceInRight") == false) {
        document.getElementById("qusscroll").classList.add("bounceInRight");
    }
    check_boomark();
	}
}

function count_coreect_wrong()
{
    var lbcorect = document.getElementById("labelcorrect");
    var lbwrong = document.getElementById("labelwrong");
    var gv = document.getElementById("GridView1");
    var qn = document.getElementById("Label3").innerHTML;
    if(gv.rows[qn].cells[6].innerHTML==gv.rows[qn].cells[7].innerHTML)
    {
        lbcorect = Number(lbcorect) + 1;
    }
    else
    {
        lbwrong = Number(lbwrong) + 1;
    }
}

function quspallet_btn_click(idd)
{
    radiorefresh();
    
    var gv=document.getElementById("GridView1");

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
        //document.getElementById("dir").innerHTML=gv.rows[idd].cells[9].innerHTML;
        
    
    btn_disable();
    check_boomark();
	check_radio();
}

function viewsol()
{
    
    var gv = document.getElementById("GridView1");
    var lb = document.getElementById("Label3").innerHTML;
        var lbsol = document.getElementById("divsol");
        lbsol.style.display = "block";
        document.getElementById("LabelSol").innerHTML = gv.rows[lb].cells[8].innerHTML;
        
        //$("#divsol").slideToggle();
           
       
    
   
}

function btn_disable()
{
    var lb = document.getElementById("Label3").innerHTML;
    var last_qus = document.getElementById("GridView1").rows.length;
    

    if (lb==1)
    {
        document.getElementById("Button1").disabled = true;
    }
    else
    {
        document.getElementById("Button1").disabled = false;

    }
    if (lb == (Number(last_qus)-1)) {
        document.getElementById("Button2").disabled = true;
    }
    else {
        document.getElementById("Button2").disabled = false;

    }

}

function wrong_shake()
{
    var a = document.getElementById("radio11");
    var b = document.getElementById("radio22");
    var c = document.getElementById("radio33");
    var d = document.getElementById("radio44");
    if (a.classList.contains("shake")==true)
    {
        a.classList.remove("shake");
        
       
    }
    if (b.classList.contains("shake") == true) {
        b.classList.remove("shake");
        
    }
    if (c.classList.contains("shake") == true) {
        c.classList.remove("shake");
        
    }
    if (d.classList.contains("shake") == true) {
        d.classList.remove("shake");
        
       
    }
   

}

function bookmark1()
{
   var topic=document.getElementById("TOPIC").innerHTML;
    var book = document.getElementById("book_mark");
    var lb = document.getElementById("Label3").innerHTML;
    var goqus = document.getElementById("goqus").innerHTML;
    var data = document.getElementById("GridView1").rows[lb].cells[0].innerHTML;
    if (topic == "I") {
        data = 0 + Number(data);
    }
	 else if (topic == "O") {
        data = 1000 + Number(data);
    }
	 else if (topic == "P") {
        data = 2000 + Number(data);
    }
	 
	 else if (topic == "S") {
        data = 3000 + Number(data);
    }
	else if (topic == "A") {
        data = 4000 + Number(data);
    }
	else if (topic == "M") {
        data = 11000 + Number(data);
    }
    if (book.classList.contains("book_yes") == true) {
        book.classList.remove("book_yes");
        book.classList.add("book_no");
        localStorage.removeItem(data);
        document.getElementById("snackbar").innerHTML = "REMOVED FROM BOOKMARK...";
       tost();
       

    }
    else if (book.classList.contains("book_no") == true) {
        book.classList.remove("book_no");
        book.classList.add("book_yes");
        localStorage.setItem(data, data);
        document.getElementById("snackbar").innerHTML = "ADDED TO BOOKMARK...";
        tost();

    }
}

function check_boomark()
{
     var f;
    var topic = document.getElementById("TOPIC").innerHTML;
    var book = document.getElementById("book_mark");
    var lb = document.getElementById("Label3").innerHTML;
    var goqus = document.getElementById("GridView1").rows[lb].cells[0].innerHTML;
	
    if (topic == "I") {
        var key1 = 0 + Number(goqus);
    }
    else if (topic == "O") {
        var key1 = 1000 + Number(goqus);
    }
	else if (topic == "P") {
        var key1 = 2000 + Number(goqus);
    }
	
	else if (topic == "S") {
        var key1 = 3000 + Number(goqus);
    }
	else if (topic == "A") {
        var key1 = 4000 + Number(goqus);
    }
	else if (topic == "M") {
        var key1 = 11000 + Number(goqus);
    }
    if (localStorage.getItem(key1) == null) {
        f = 0;
    }
    else {
        f = 1;
    }
    if (f == 0) {
        if (book.classList.contains("book_yes") == true) {
            book.classList.remove("book_yes");
        }
        if (book.classList.contains("book_no") == false) {
            book.classList.add("book_no");
        }
        //alert("no");

    }
    else if (f == 1) {



        if (book.classList.contains("book_no") == true) {
            book.classList.remove("book_no");
        }
        if (book.classList.contains("book_yes") == false) {
            book.classList.add("book_yes");
        }
        //alert("yes");

    }
    
}
function check_radio()
{
	var gv=document.getElementById("GridView1");
	var lbb = document.getElementById("Label3").innerHTML;
	  var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
	if (gv.rows[lbb].cells[7].innerHTML==1)
		r1.checked=true;
	else if (gv.rows[lbb].cells[7].innerHTML==2)
		r2.checked=true;
	else if (gv.rows[lbb].cells[7].innerHTML==3)
		r3.checked=true;
	else if (gv.rows[lbb].cells[7].innerHTML==4)
		r4.checked=true;
}
	
function quizstart(id)
{
	//var gv=document.getElementById("GridView1");
	document.getElementById("202020").style.display="none";
	//alert(id);
	j=1;
	if (id=="t1")
	{
		document.getElementById("spanchapter").innerHTML=document.getElementById(id).innerHTML;;
		var r = document.getElementById('GridView1').rows.length;
	//alert("Lenght:-"+r);
	document.getElementById("spanchapter").innerHTML="Set 1";
		for (i=1;i<=20;i++)
		{
			document.getElementById("GridView1").rows[j].cells[0].innerHTML=document.getElementById("GridView2").rows[i].cells[0].innerHTML;
			document.getElementById("GridView1").rows[j].cells[1].innerHTML=document.getElementById("GridView2").rows[i].cells[1].innerHTML;
			document.getElementById("GridView1").rows[j].cells[2].innerHTML=document.getElementById("GridView2").rows[i].cells[2].innerHTML;
			document.getElementById("GridView1").rows[j].cells[3].innerHTML=document.getElementById("GridView2").rows[i].cells[3].innerHTML;
			document.getElementById("GridView1").rows[j].cells[4].innerHTML=document.getElementById("GridView2").rows[i].cells[4].innerHTML;
			document.getElementById("GridView1").rows[j].cells[5].innerHTML=document.getElementById("GridView2").rows[i].cells[5].innerHTML;
			document.getElementById("GridView1").rows[j].cells[6].innerHTML=document.getElementById("GridView2").rows[i].cells[6].innerHTML;
			document.getElementById("GridView1").rows[j].cells[8].innerHTML=document.getElementById("GridView2").rows[i].cells[8].innerHTML;
			j++;
		}
	}
	
	else 
	{
		j=1;
		//alert(id.replace("t",""));
		var idd=id.replace("t","");
		var e=idd*20;
		var s=e-20;
		//alert ("Start="+s);
		//alert("End="+e);
		document.getElementById("spanchapter").innerHTML="Set "+idd;
		for (i=s+1;i<=e;i++)
		{
			document.getElementById("GridView1").rows[j].cells[0].innerHTML=document.getElementById("GridView2").rows[i].cells[0].innerHTML;
			document.getElementById("GridView1").rows[j].cells[1].innerHTML=document.getElementById("GridView2").rows[i].cells[1].innerHTML;
			document.getElementById("GridView1").rows[j].cells[2].innerHTML=document.getElementById("GridView2").rows[i].cells[2].innerHTML;
			document.getElementById("GridView1").rows[j].cells[3].innerHTML=document.getElementById("GridView2").rows[i].cells[3].innerHTML;
			document.getElementById("GridView1").rows[j].cells[4].innerHTML=document.getElementById("GridView2").rows[i].cells[4].innerHTML;
			document.getElementById("GridView1").rows[j].cells[5].innerHTML=document.getElementById("GridView2").rows[i].cells[5].innerHTML;
			document.getElementById("GridView1").rows[j].cells[6].innerHTML=document.getElementById("GridView2").rows[i].cells[6].innerHTML;
			document.getElementById("GridView1").rows[j].cells[8].innerHTML=document.getElementById("GridView2").rows[i].cells[8].innerHTML;
			j++;
	}
		
		
	} 
	
	
	aaaa();
	myFunction1();
	var d=document.getElementById("GridView1").rows[1].cells[8].innerHTML;
	//document.getElementById("spanchapter").innerHTML="SSC CGL Tier 1 ("+d+")"
}

function a()
{
	var tg="<table class='table table-hover txt-center' id='menu'><thead><tr><th>Quiz Sets</th><th>Score</th></tr></thead><tbody>";
	var ad="";
	
	var r = document.getElementById('GridView2').rows.length;
	//alert("Lenght:-"+r);
	var l=parseInt(r/20);
	//alert(l);
	for (i=1;i<=l;i++)
	{
		ad+="<tr><td class='col-sm-8'><button type='button' class='button button1 text-left  btn-lg' style='float:left;background-color: white;color: black;border: 2px solid #4CAF50;width:80%' id="+"t"+i+" onclick='quizstart(this.id)'>Set  "+i+"</button></td><td class=col-sm-2'></td></tr>  ";


		
	}
	var last=tg+ad+"</tbody> </table>";
	document.getElementById("2020").innerHTML=last;
	
	quizscore();
	
	
}

function tost()
{
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    

}