// JavaScript Document
	var checked=0;
        var ansflag=0;

	//post method will not work if any function has error
	function getchecked(opt){
		checked=opt;
if (ansflag==1){}
else
{
ansflag=1;
document.getElementById(1).style.border='none';
document.getElementById(2).style.border='none';
document.getElementById(3).style.border='none';
document.getElementById(4).style.border='none';
document.getElementById(checked).style.border='dashed';
document.getElementById(checked).style.borderWidth='1px';
document.getElementById(checked).style.borderradius='5px';
if (checked==1){document.getElementById('a').checked=true;}
if (checked==2){document.getElementById('b').checked=true;}
if (checked==3){document.getElementById('c').checked=true;}
if (checked==4){document.getElementById('d').checked=true;}
}



	}



	function getchecked_test(){ 
disable_option(checked);
		ansflag=1;
		//checked=opt;
		if(checked>=1 && checked<=5)
		{
		var ans = document.getElementById('showans').name;		
		reset_ans();
		if(ans == checked)
			{document.getElementById(ans).style.background='#00B75B';
                          save_user_question();
                        }
		else
			{
			document.getElementById(ans).style.background='#00B75B';
			document.getElementById(checked).style.background='#FF8080';
                          save_user_question();
			}
		disable_option(checked);	
		}
		else { alert("Please select option first.");}
		
	}

	
	function disable_option(checked)
	{
	if(checked=='1')
		{

			document.getElementById('b').disabled=true;
			document.getElementById('c').disabled=true;
			document.getElementById('d').disabled=true;
			document.getElementById('showans').style.display='none';
		}
	if(checked=='2')
		{
			document.getElementById('a').disabled=true;
			document.getElementById('c').disabled=true;
			document.getElementById('d').disabled=true;
			document.getElementById('showans').style.display='none';
		}
	if(checked=='3')
		{
			document.getElementById('b').disabled=true;
			document.getElementById('a').disabled=true;
			document.getElementById('d').disabled=true;
			document.getElementById('showans').style.display='none';
		}
	if(checked=='4')
		{
			document.getElementById('b').disabled=true;
			document.getElementById('c').disabled=true;
			document.getElementById('a').disabled=true;
			document.getElementById('showans').style.display='none';
		}
	}
	
	function reset_ans(){
		document.getElementById('1').style.background='#FAFAFA';
		document.getElementById('2').style.background='#FAFAFA';
		document.getElementById('3').style.background='#FAFAFA';
		document.getElementById('4').style.background='#FAFAFA';
	}

	
		
	
	function show_ans_forum(opt,ans){
	    var status = document.getElementById("status").innerText;
	    if(status==="0"){
	    checked=opt;
	    ansflag=1;
	    ans=ans;
		if(ans == checked)
			{document.getElementById(ans).style.background='#00B75B';
                          }
		else
			{
			document.getElementById(ans).style.background='#00B75B';
			document.getElementById(checked).style.background='#FF8080';

			}
			document.getElementById('showans').style.display='none';
			document.getElementById("status").innerText="1";
			disable_option(checked);
			save_user_question();
			//post method will not work if any function has error
    	}
	}
	function show_ans_forum2(qid,opt,ans,qn){
    var s="status"+qid;
    var o="o"+qid+opt;
    var a="o"+qid+ans;
    var y = document.getElementById(qn).scrollHeight;
    var z = 'a'+qn;
    var z = document.getElementById(z).scrollHeight;
    //alert(y);
    var status = document.getElementById(s).innerText;
    var r = document.getElementById('right').innerText;
    r=parseInt(r);
    var w = document.getElementById('wrong').innerText;
    w=parseInt(w);
    var u = document.getElementById('unanswered').innerText;
    u=parseInt(u);
    
	    if(status==="0"){
	        document.getElementById('unanswered').innerText = u - 1;

		if(opt == ans)
			{document.getElementById(a).style.background='#00B75B';
			document.getElementById('right').innerText = r + 1;
			document.getElementById('right2').innerText = r + 1;
            }
		else
			{
			document.getElementById(a).style.background='#00B75B';
			document.getElementById(o).style.background='#FF8080';
			document.getElementById('wrong').innerText = w + 1;
			}
			document.getElementById(s).innerText="1";
			setTimeout(function(){
			    window.location.hash =  qn1;
			    window.scrollBy({ top: 0,  left: 0,   behavior: 'smooth' });
		},500);

    	}
	}
	
	function show_ans(){
        disable_option(checked);
	if(checked>=1 && checked<=5)
		{
		var ans = document.getElementById('showans').name;		
		reset_ans();
		if(ans == checked)
			{document.getElementById(ans).style.background='#00B75B';
                          }
		else
			{
			document.getElementById(ans).style.background='#00B75B';
			document.getElementById(checked).style.background='#FF8080';

			}
document.getElementById("answer").innerHTML = "Correct Answer is "+document.getElementById(ans).innerText+"<br>";
		$('#answer').show();
		}
	else
		{
		alert("Select option first.");
		}
	}
		function hideans(){
			$('#answer').hide();
		}
		
		
	function testmode(){
			if(checked>=1 && checked<=5)
				{
					var uans;
					switch(checked){
					case 1:
						uans = 'A';
						break;
					case 2:
						uans ='B';
						break;
					case 3:
						uans ='C';
						break;
					case 4:
						uans ='D';
						break;
					}
					//alert(uans);
				//var ans = document.getElementById('answer').name;
				//alert(ans);
				var ans = $("#answer").text();
				
				if(uans==ans)
				{
					alert("Correct Answer.");
				}
				else
				{	
					alert("Wrong Answer. Correct is "+ans);
				}
			}
			else
			{
				alert("Select option first.");
			}
		}
		
		

function get_state_name(country_name){
	
	if(window.XMLHttpRequest)
	{
	var xmlrq = new XMLHttpRequest();
	}
	else
	{
	var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
	}

  xmlrq.onreadystatechange = function() {
    if (xmlrq.readyState == 4 && xmlrq.status == 200) {
      document.getElementById("state").innerHTML = xmlrq.responseText;
    }
	//alert("Ready state : "+xmlrq.readyState +" Status : "+ xmlrq.status );
  }
  xmlrq.open("GET", "state-common.php?cid="+country_name, true);
  xmlrq.send();
}


function next_question(){ansflag="";

	if(checked!="")

			{
document.getElementById('nextq').style.display='none';
			if(window.XMLHttpRequest)
			{
			var xmlrq = new XMLHttpRequest();
			}
			else
			{
			var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
			}
		    xmlrq.onreadystatechange = function() {
			    if (xmlrq.readyState == 4 && xmlrq.status == 200) {
			      document.getElementById("mid1").innerHTML = xmlrq.responseText;
				  checked="";
				  }
		    	}
			//alert("Ready state : "+xmlrq.readyState +" Status : "+ xmlrq.status );
			  xmlrq.open("GET", "logical.php?opt="+checked, true);
			  xmlrq.send();  

		}
		else
		{
		alert("Please submit answer first");
		}
	/*}
	else
	{
		alert("Please select option first");
	}*/
}

function next_question2(){ansflag="";

document.getElementById('nextq').style.display='none';
document.getElementById('finish_test').style.display='none';
document.getElementById('prevq').style.display='none';
			if(window.XMLHttpRequest)
			{
			var xmlrq = new XMLHttpRequest();
			}
			else
			{
			var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
			}
		    xmlrq.onreadystatechange = function() {
			    if (xmlrq.readyState == 4 && xmlrq.status == 200) {
			      document.getElementById("mid1").innerHTML = xmlrq.responseText;
				  checked="";
				  }
		    	}
			//alert("Ready state : "+xmlrq.readyState +" Status : "+ xmlrq.status );
			  xmlrq.open("GET", "logicmock2.php?opt="+checked, true);
			  xmlrq.send();  

}

function finishtest(){
localStorage.setItem("test", "end");
document.getElementById("time").innerHTML = "EXPIRED";
document.getElementById('nextq').style.display='none';
document.getElementById('finish_test').style.display='none';
document.getElementById('prevq').style.display='none';

			if(window.XMLHttpRequest)
			{
			var xmlrq = new XMLHttpRequest();
			}
			else
			{
			var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
			}
		    xmlrq.onreadystatechange = function() {
			    if (xmlrq.readyState == 4 && xmlrq.status == 200) {
			      document.getElementById("mid1").innerHTML = xmlrq.responseText;
				  checked="";
				  window.location.reload();
				  }
		    	}
			//alert("Ready state : "+xmlrq.readyState +" Status : "+ xmlrq.status );
			  xmlrq.open("GET", "showresult.php", true);
			  //xmlrq.open("GET", "testresult.php", true);
			  xmlrq.send();  
			  

}

function getchecked2(opt,qid){
checked=opt;
var qqid="qp" + qid;

	if(checked!=="")

			{

document.getElementById(qqid).style.background='#00cc00';
document.getElementById(1).style.background='none';
document.getElementById(2).style.background='none';
document.getElementById(3).style.background='none';
document.getElementById(4).style.background='none';

document.getElementById(checked).style.background='#cceeff';

			if(window.XMLHttpRequest)
			{
			var xmlrq = new XMLHttpRequest();
			}
			else
			{
			var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
			}

			//alert("Ready state : "+xmlrq.readyState +" Status : "+ xmlrq.status );
			  xmlrq.open("GET", "logicmock.php?opt="+checked, true);
			  xmlrq.send();  

		}


}

function prev_question(){
		
			if(window.XMLHttpRequest)
			{
			var xmlrq = new XMLHttpRequest();
			}
			else
			{
			var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
			}
		    xmlrq.onreadystatechange = function() {
			    if (xmlrq.readyState == 4 && xmlrq.status == 200) {
			      document.getElementById("mid1").innerHTML = xmlrq.responseText;
				  checked="";
				  }
		    	}
			//alert("Ready state : "+xmlrq.readyState +" Status : "+ xmlrq.status );
			  xmlrq.open("GET", "prelogical.php", true);
			  xmlrq.send();  
		
	/*}
	else
	{
		alert("Please select option first");
	}*/
}
function prev_question2(){
document.getElementById('nextq').style.display='none';
document.getElementById('finish_test').style.display='none';
document.getElementById('prevq').style.display='none';		
			if(window.XMLHttpRequest)
			{
			var xmlrq = new XMLHttpRequest();
			}
			else
			{
			var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
			}
		    xmlrq.onreadystatechange = function() {
			    if (xmlrq.readyState == 4 && xmlrq.status == 200) {
			      document.getElementById("mid1").innerHTML = xmlrq.responseText;
				  
				  }
		    	}
			//alert("Ready state : "+xmlrq.readyState +" Status : "+ xmlrq.status );
			  xmlrq.open("GET", "prelogical.php", true);
			  xmlrq.send();  
		
	/*}
	else
	{
		alert("Please select option first");
	}*/
}

function gotoquestion(revque){

			if(window.XMLHttpRequest)
			{
			var xmlrq = new XMLHttpRequest();
			}
			else
			{
			var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
			}
		    xmlrq.onreadystatechange = function() {
			    if (xmlrq.readyState == 4 && xmlrq.status == 200) {
			      document.getElementById("mid1").innerHTML = xmlrq.responseText;
				  
				  }
		    	}
			xmlrq.open("GET", "review_mock_select.php?revq="+revque, true);
			  xmlrq.send();  
}

function update_test_question(){
	//alert(checked);
	getchecked_test();
		if(window.XMLHttpRequest)
		{
		var xmlrq = new XMLHttpRequest();
		}
		else
		{
		var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
		}

	    xmlrq.onreadystatechange = function() {
	    if (xmlrq.readyState == 4 && xmlrq.status == 200) {
			  {
		     
			  }
	    }
		//alert("Ready state : "+xmlrq.readyState +" Status : "+ xmlrq.status );
	   }
	  xmlrq.open("GET", "update_question.php?opt="+checked, true);
	  xmlrq.send();
}

function mark_question(){
	//alert(checked);
		if(window.XMLHttpRequest)
		{
		var xmlrq = new XMLHttpRequest();
		}
		else
		{
		var xmlrq = new ActiveXObject("Microsoft.XMLHTTP");
		}

	    xmlrq.onreadystatechange = function() {
	    if (xmlrq.readyState == 4 && xmlrq.status == 200) {
			  {
		     document.getElementById('mark_que').disable="true";
			  }
	    }
		//alert("Ready state : "+xmlrq.readyState +" Status : "+ xmlrq.status );
	   }
	  xmlrq.open("GET", "mark_question.php", true);
	  xmlrq.send();
}


function trimurl() {
    return;
}

//this function only for Questions.php
function show_ans_alpha(){
	//alert("u click");
        ansflag=1;
	show_ans();
	save_user_question();
}
function save_user_question(){
   if(checked!=0)
    {
        $.ajax({
			url: '#',
			type: "POST",
			data:  'opt='+checked,
			success: function( data ) {
			//alert("successfully exec");	
			},
			error: function( abc ) {
				//alert("Some Error Occure! Please Try Again..");
			}
		});
    }
}



function myFunction() {
    try{
  var c;
  var substring = 'height: 0px;';
  var h;
  var i; var j; var asid; var adid;
for (i = 1; i < 21; i++) {
    if(i===2 || i===4 || i===7 || i===9 || i===12 || i===15 || i===18 || i===20 ){
    adid="adslot" + i;
c=document.getElementById(adid).innerHTML;
for (j = 0; j < 11; j++) {
asid = "aswift_" + j;
  if(c.indexOf(substring) !== -1){
      if(c.indexOf(asid) !== -1){
  h=document.getElementById(asid).style.height;
  document.getElementById(adid).style.height=h;
  //c=c.replace(/height: 0px;/gi,'height:' + h + ';');
//remove ad
//document.getElementById(adid).innerHTML="";
//set height
  document.getElementById(adid).innerHTML=c;
      }
}
}
}
}
}
catch(err) {}
}





