function wrong_qn()
{
	var gv=document.getElementById("nn1");
	for (m=1;m<=11;m++)
	{
		var c=0;
		 for (var i = 0; i < localStorage.length; i++)
			 {
        var k=localStorage.key(i);
        if (k % 1 == 0)
        {
            if (m == 1&&k>12000&&k<13000) {
				k=Number(k)-12000;
				c=Number(c)+1;
                
            }
            else if (m == 2&&k>13000&&k<14000) {
				
				k=Number(k)
                k = k-13000;
                c=Number(c)+1;
            }
            else if (m == 3 && k > 14000 && k < 15000) {
                k = Number(k)-14000;
                c=Number(c)+1;
            }
            else if (m == 4 && k > 15000 && k < 16000) {
                k =  Number(k)-15000;
               c=Number(c)+1;
            }
            else if (m == 5 && k > 16000 && k < 17000) {
                k = Number(k)-16000;
                c=Number(c)+1;
            }
			else if (m == 6 && k > 17000 && k < 18000) {
                k = Number(k)-17000;
                c=Number(c)+1;
            }
			else if (m == 7 && k > 18000 && k < 19000) {
                k = Number(k)-18000;
                c=Number(c)+1;
            }
			else if (m == 8 && k > 19000 && k < 20000) {
                k = Number(k)-19000;
                c=Number(c)+1;
            }
			else if (m == 9 && k > 20000 && k < 21000) {
                k = Number(k)-20000;
                c=Number(c)+1;
            }
			else if (m == 10 && k > 21000 && k < 22000) {
                k = Number(k)-21000;
                c=Number(c)+1;
            }
			else if (m == 11 && k > 22000 && k < 23000) {
                k = Number(k)-22000;
                c=Number(c)+1;
            }
            //st += "<tr><td>" + localStorage.key(i) + "</td></tr>";

        }
        

    }
	gv.rows[m].cells[2].innerHTML=c;
	}
	
}

function book_qn()
{
	var gv=document.getElementById("nn2");
	for (m=1;m<=11;m++)
	{
		var c=0;
		 for (var i = 0; i < localStorage.length; i++)
			 {
        var k=localStorage.key(i);
        if (k % 1 == 0)
        {
             if (m == 1&&k>1000&&k<2000) {
				
				k=Number(k)
                k = k-1000;
                c=Number(c)+1;
            }
            else if (m == 2 && k > 2000 && k < 3000) {
                k = Number(k)-2000;
                c=Number(c)+1;
            }
            else if (m == 3 && k > 3000 && k < 4000) {
                k =  Number(k)-3000;
               c=Number(c)+1;
            }
            else if (m == 4 && k > 4000 && k < 5000) {
                k = Number(k)-4000;
                c=Number(c)+1;
            }
			else if (m == 5 && k > 5000 && k < 6000) {
                k = Number(k)-5000;
                c=Number(c)+1;
            }
			else if (m == 6 && k > 6000 && k < 7000) {
                k = Number(k)-6000;
                c=Number(c)+1;
            }
			else if (m == 7 && k > 7000 && k < 8000) {
                k = Number(k)-7000;
                c=Number(c)+1;
            }
			else if (m == 8 && k > 8000 && k < 9000) {
                k = Number(k)-8000;
                c=Number(c)+1;
            }
			else if (m == 9 && k > 9000 && k < 10000) {
                k = Number(k)-9000;
                c=Number(c)+1;
            }
			else if (m == 10 && k > 10000 && k < 11000) {
                k = Number(k)-10000;
                c=Number(c)+1;
            }
			else if (m == 11 && k > 11000 && k < 12000) {
                k = Number(k)-11000;
                c=Number(c)+1;
            }
			
            //st += "<tr><td>" + localStorage.key(i) + "</td></tr>";

        }
        

    }
	gv.rows[m].cells[2].innerHTML=c;
	}
	
}

function f1()
{
	
	
	var t=document.getElementById("nn");
	
	if (localStorage.getItem("CE")==null)
	{
		t.rows[1].cells[2].innerHTML="0";
			
			t.rows[1].cells[2].style.color="green";
	}
	else 
	{
		t.rows[1].cells[2].innerHTML=localStorage.getItem("CE");
		
			t.rows[1].cells[2].style.color="green";
	}
	if (localStorage.getItem("CEW")==null)
	{
		t.rows[1].cells[3].innerHTML="0";
			
			t.rows[1].cells[3].style.color="red";
	}
	else 
	{
		t.rows[1].cells[3].innerHTML=localStorage.getItem("CEW");
		
			t.rows[1].cells[3].style.color="red";
	}
	if (localStorage.getItem("SI")==null)
	{
		t.rows[2].cells[2].innerHTML="0";
			
			t.rows[2].cells[2].style.color="green";
	}
	else 
	{
		t.rows[2].cells[2].innerHTML=localStorage.getItem("SI");
		
			t.rows[2].cells[2].style.color="green";
	}
	if (localStorage.getItem("SIW")==null)
	{
		t.rows[2].cells[3].innerHTML="0";
			
			t.rows[2].cells[3].style.color="red";
	}
	else 
	{
		t.rows[2].cells[3].innerHTML=localStorage.getItem("SIW");
		
			t.rows[2].cells[3].style.color="red";
	}
	if (localStorage.getItem("FI")==null)
	{
		t.rows[3].cells[2].innerHTML="0";
	
			t.rows[3].cells[2].style.color="green";
	}
	else 
	{
		t.rows[3].cells[2].innerHTML=localStorage.getItem("FI");
		
			t.rows[3].cells[2].style.color="green";
	}
	if (localStorage.getItem("FIW")==null)
	{
		t.rows[3].cells[3].innerHTML="0";
			
			t.rows[3].cells[3].style.color="red";
	}
	else 
	{
		t.rows[3].cells[3].innerHTML=localStorage.getItem("FIW");
		
			t.rows[3].cells[3].style.color="red";
	}
	if (localStorage.getItem("OW")==null)
	{
		t.rows[4].cells[2].innerHTML="0";
			
			t.rows[4].cells[2].style.color="green";
	}
	else 
	{
		t.rows[4].cells[2].innerHTML=localStorage.getItem("OW");
	
			t.rows[4].cells[2].style.color="green";
	}
	if (localStorage.getItem("OWW")==null)
	{
		t.rows[4].cells[3].innerHTML="0";
			
			t.rows[4].cells[3].style.color="red";
	}
	else 
	{
		t.rows[4].cells[3].innerHTML=localStorage.getItem("OWW");
		
			t.rows[4].cells[3].style.color="red";
	}
    if (localStorage.getItem("ID")==null)
	{
		t.rows[5].cells[2].innerHTML="0";
			
			t.rows[5].cells[2].style.color="green";
	}
	else 
	{
		t.rows[5].cells[2].innerHTML=localStorage.getItem("ID");
		
			t.rows[5].cells[2].style.color="green";
	}
	if (localStorage.getItem("IDW")==null)
	{
		t.rows[5].cells[3].innerHTML="0";
			
			t.rows[5].cells[3].style.color="red";
	}
	else 
	{
		t.rows[5].cells[3].innerHTML=localStorage.getItem("IDW");
		
			t.rows[5].cells[3].style.color="red";
	}
	if (localStorage.getItem("SY")==null)
	{
		t.rows[6].cells[2].innerHTML="0";
			
			t.rows[6].cells[2].style.color="green";
	}
	else 
	{
		t.rows[6].cells[2].innerHTML=localStorage.getItem("SY");
		
			t.rows[6].cells[2].style.color="green";
	}
	if (localStorage.getItem("SYW")==null)
	{
		t.rows[6].cells[3].innerHTML="0";
			
			t.rows[6].cells[3].style.color="red";
	}
	else 
	{
		t.rows[6].cells[3].innerHTML=localStorage.getItem("SYW");
		
			t.rows[6].cells[3].style.color="red";
	}
	if (localStorage.getItem("AN")==null)
	{
		t.rows[7].cells[2].innerHTML="0";
			
			t.rows[7].cells[2].style.color="green";
	}
	else 
	{
		t.rows[7].cells[2].innerHTML=localStorage.getItem("AN");
		
			t.rows[7].cells[2].style.color="green";
	}
	if (localStorage.getItem("ANW")==null)
	{
		t.rows[7].cells[3].innerHTML="0";
			
			t.rows[7].cells[3].style.color="red";
	}
	else 
	{
		t.rows[7].cells[3].innerHTML=localStorage.getItem("ANW");
		
			t.rows[7].cells[3].style.color="red";
	}
	if (localStorage.getItem("MI")==null)
	{
		t.rows[8].cells[2].innerHTML="0";
			
			t.rows[8].cells[2].style.color="green";
	}
	else 
	{
		t.rows[8].cells[2].innerHTML=localStorage.getItem("MI");
		
			t.rows[8].cells[2].style.color="green";
	}
	if (localStorage.getItem("MIW")==null)
	{
		t.rows[8].cells[3].innerHTML="0";
			
			t.rows[8].cells[3].style.color="red";
	}
	else 
	{
		t.rows[8].cells[3].innerHTML=localStorage.getItem("MIW");
		
			t.rows[8].cells[3].style.color="red";
	}
	
	if (localStorage.getItem("VO")==null)
	{
		t.rows[9].cells[2].innerHTML="0";
			
			t.rows[9].cells[2].style.color="green";
	}
	else 
	{
		t.rows[9].cells[2].innerHTML=localStorage.getItem("VO");
		
			t.rows[9].cells[2].style.color="green";
	}
	if (localStorage.getItem("VOW")==null)
	{
		t.rows[9].cells[3].innerHTML="0";
			
			t.rows[9].cells[3].style.color="red";
	}
	else 
	{
		t.rows[9].cells[3].innerHTML=localStorage.getItem("VOW");
		
			t.rows[9].cells[3].style.color="red";
	}
	
	if (localStorage.getItem("NA")==null)
	{
		t.rows[10].cells[2].innerHTML="0";
			
			t.rows[10].cells[2].style.color="green";
	}
	else 
	{
		t.rows[10].cells[2].innerHTML=localStorage.getItem("NA");
		
			t.rows[10].cells[2].style.color="green";
	}
	if (localStorage.getItem("NAW")==null)
	{
		t.rows[10].cells[3].innerHTML="0";
			
			t.rows[10].cells[3].style.color="red";
	}
	else 
	{
		t.rows[10].cells[3].innerHTML=localStorage.getItem("NAW");
		
			t.rows[10].cells[3].style.color="red";
	}
	
	
	if (localStorage.getItem("PA")==null)
	{
		t.rows[11].cells[2].innerHTML="0";
			
			t.rows[11].cells[2].style.color="green";
	}
	else 
	{
		t.rows[11].cells[2].innerHTML=localStorage.getItem("PA");
		
			t.rows[11].cells[2].style.color="green";
	}
	if (localStorage.getItem("PAW")==null)
	{
		t.rows[11].cells[3].innerHTML="0";
			
			t.rows[11].cells[3].style.color="red";
	}
	else 
	{
		t.rows[11].cells[3].innerHTML=localStorage.getItem("PAW");
		
			t.rows[11].cells[3].style.color="red";
	}
}

	
	
	function f2()
	{
		f1();
		book_qn();
		wrong_qn();
	}
	
	function narr()
	{
		var sol="How to changes the tense in indirect speech <br>"+
"•	If the reporting verb is in present or future tense, no changes are made to the verb/tense of the reported speech.<br>"+
"•	If the reporting verb is in past tense, we make changes to the reported verb as per the below rule:<br> <br>"+
"•	Simple present tense changes to simple past tense.<br>"+
"•	Present continuous tense changes to past continuous tense.<br>"+
"•	Present perfect tense changes to past perfect tense.<br>"+
"•	Present Perfect continuous tense changes to past perfect continuous tense.<br>"+
"•	Simple past tense changes to past perfect tense.<br>"+
"•	Past continuous tense changes to past perfect continuous tense.<br>"+
"•	No changes are made to past perfect and past perfect continuous tense.<br>"+
"•	Can, shall, will, may, must changes to could, should, would, might and must respectively.<br>"+
"•	If there are any universal truth, habitual fact in the reporting speech, no changes are made to the reported verb’s tense.<br>"+
"•	Say/Said is changed to ask/asked/wonder/wondered/enquire of/enquired of etc as per the sense of the sentence.<br>"+
"•	Inverted commas "+"'  " +"   '"+" are removed.<br>" +
"•	If the reported speech is in YES/NO question form then if/whether is used before reported speech.<br>"+
"•	If the reported speech is in the form of WH-Question (who/what/why/how/where/when/which etc), no conjunction is used before the question word. The question word itself works as a conjunction.<br>"+
"•	Reported verb is made assertive; i.e. it is kept in the order of subject + verb.<br>"+
"•	The sign of interrogation (?) is removed and full stop is used.<br> <br>"+

"How some words change in indirect speech<br><br>"+
"•	Words like “this, these, tomorrow, yesterday change to that, those, the next day, the previous day” respectively.<br>"+
"Below are the rules for changing the pronouns correctly:<br>"+
"•	First person pronoun changes according to the subject of reporting speech.<br>"+
"•	Second person pronoun changes according to the object of reporting speech.<br>"+
"•	Third person pronoun does not change in indirect speech";

		//var le=document.getElementById("GridView1").rows.length;
		//var gv = document.getElementById("GridView1");
		//for (var i=0;i<le;i++)
		//{
			//gv.rows[i].cells[8].innerHTML=sol;
		//}
		return sol;
	}