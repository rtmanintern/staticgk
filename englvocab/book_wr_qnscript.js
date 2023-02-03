function wrong_qn()
{
	var gv=document.getElementById("nn");
	for (m=1;m<=6;m++)
	{
		var c=0;
		 for (var i = 0; i < localStorage.length; i++)
			 {
        var k=localStorage.key(i);
        if (k % 1 == 0)
        {
            if (m == 1&&k>5000&&k<6000) {
				k=Number(k)-5000;
				c=Number(c)+1;
                
            }
            else if (m == 2&&k>6000&&k<7000) {
				
				k=Number(k)
                k = k-6000;
                c=Number(c)+1;
            }
            else if (m == 3 && k > 7000 && k < 8000) {
                k = Number(k)-7000;
                c=Number(c)+1;
            }
            else if (m == 4 && k > 8000 && k < 9000) {
                k =  Number(k)-8000;
               c=Number(c)+1;
            }
            else if (m == 5 && k > 9000 && k < 10000) {
                k = Number(k)-9000;
                c=Number(c)+1;
            }
			 else if (m == 6 && k > 10000 && k < 11000) {
                k = Number(k)-10000;
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
	var gv=document.getElementById("nn");
	for (m=1;m<=6;m++)
	{
		var c=0;
		 for (var i = 0; i < localStorage.length; i++)
			 {
        var k=localStorage.key(i);
        if (k % 1 == 0)
        {
            if (m == 1&&k<1000) {
				k=Number(k)
				c=Number(c)+1;
                
            }
            else if (m == 2&&k>1000&&k<2000) {
				
				k=Number(k)
                k = k-1000;
                c=Number(c)+1;
            }
            else if (m == 3 && k > 2000 && k < 3000) {
                k = Number(k)-2000;
                c=Number(c)+1;
            }
            else if (m == 4 && k > 3000 && k < 4000) {
                k =  Number(k)-3000;
               c=Number(c)+1;
            }
            else if (m == 5 && k > 4000 && k < 5000) {
                k = Number(k)-4000;
                c=Number(c)+1;
            }
			else if (m == 6 && k > 11000 && k < 12000) {
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

	if (localStorage.getItem("I")==null)
	{
		t.rows[1].cells[2].innerHTML="0";

			t.rows[1].cells[2].style.color="green";
	}
	else
	{
		t.rows[1].cells[2].innerHTML=localStorage.getItem("I");

			t.rows[1].cells[2].style.color="green";
	}
	if (localStorage.getItem("IW")==null)
	{
		t.rows[1].cells[3].innerHTML="0";

			t.rows[1].cells[3].style.color="red";
	}
	else
	{
		t.rows[1].cells[3].innerHTML=localStorage.getItem("IW");

			t.rows[1].cells[3].style.color="red";
	}
	if (localStorage.getItem("O")==null)
	{
		t.rows[2].cells[2].innerHTML="0";

			t.rows[2].cells[2].style.color="green";
	}
	else
	{
		t.rows[2].cells[2].innerHTML=localStorage.getItem("O");

			t.rows[2].cells[2].style.color="green";
	}
	if (localStorage.getItem("OW")==null)
	{
		t.rows[2].cells[3].innerHTML="0";

			t.rows[2].cells[3].style.color="red";
	}
	else
	{
		t.rows[2].cells[3].innerHTML=localStorage.getItem("OW");

			t.rows[2].cells[3].style.color="red";
	}
	if (localStorage.getItem("P")==null)
	{
		t.rows[3].cells[2].innerHTML="0";

			t.rows[3].cells[2].style.color="green";
	}
	else
	{
		t.rows[3].cells[2].innerHTML=localStorage.getItem("P");

			t.rows[3].cells[2].style.color="green";
	}
	if (localStorage.getItem("PW")==null)
	{
		t.rows[3].cells[3].innerHTML="0";

			t.rows[3].cells[3].style.color="red";
	}
	else
	{
		t.rows[3].cells[3].innerHTML=localStorage.getItem("PW");

			t.rows[3].cells[3].style.color="red";
	}
	if (localStorage.getItem("S")==null)
	{
		t.rows[4].cells[2].innerHTML="0";

			t.rows[4].cells[2].style.color="green";
	}
	else
	{
		t.rows[4].cells[2].innerHTML=localStorage.getItem("S");

			t.rows[4].cells[2].style.color="green";
	}
	if (localStorage.getItem("SW")==null)
	{
		t.rows[4].cells[3].innerHTML="0";

			t.rows[4].cells[3].style.color="red";
	}
	else
	{
		t.rows[4].cells[3].innerHTML=localStorage.getItem("SW");

			t.rows[4].cells[3].style.color="red";
	}
    if (localStorage.getItem("A")==null)
	{
		t.rows[5].cells[2].innerHTML="0";

			t.rows[5].cells[2].style.color="green";
	}
	else
	{
		t.rows[5].cells[2].innerHTML=localStorage.getItem("A");

			t.rows[5].cells[2].style.color="green";
	}
	if (localStorage.getItem("AW")==null)
	{
		t.rows[5].cells[3].innerHTML="0";

			t.rows[6].cells[3].style.color="red";
	}
	else
	{
		t.rows[5].cells[3].innerHTML=localStorage.getItem("AW");

			t.rows[5].cells[3].style.color="red";
	}


	if (localStorage.getItem("M")==null)
	{
		t.rows[6].cells[2].innerHTML="0";

			t.rows[6].cells[2].style.color="green";
	}
	else
	{
		t.rows[6].cells[2].innerHTML=localStorage.getItem("M");

			t.rows[6].cells[2].style.color="green";
	}
	if (localStorage.getItem("MW")==null)
	{
		t.rows[6].cells[3].innerHTML="0";

			t.rows[6].cells[3].style.color="red";
	}
	else
	{
		t.rows[6].cells[3].innerHTML=localStorage.getItem("MW");

			t.rows[6].cells[3].style.color="red";
	}
}