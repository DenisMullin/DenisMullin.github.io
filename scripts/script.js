function validForm()
{
	var flag = 0;
	var name = document.getElementById("name");
	var comment = document.getElementById("clientmessage");
	var mail = document.getElementById("mail");

	var errorname = document.getElementById("errorname");
	var errormessage = document.getElementById("errormessage");
	var errormail = document.getElementById("errormail");


	if (name.value.length < 2)
	{
		errorname.hidden = false;
		flag -= 1;
	}
	if (comment.value.length < 10)
	{
		errormessage.hidden = false;
		flag -= 1
	}
	if (mail.value.length < 1)
	{
		errormail.hidden = false;
		flag -= 1
	}
	if (flag == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}