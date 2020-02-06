var error1 = document.getElementById("error1");
error1.hidden = true;
var error2 = document.getElementById("error2");
error2.hidden = true;
var hide = document.getElementById("hide");
var error1s = document.getElementById("error1s");
var error1l = document.getElementById("error1l");
var error1f = document.getElementById("error1f");
var error2s = document.getElementById("error2s");
var error2l = document.getElementById("error2l");
var error2f = document.getElementById("error2f");
error1s.hidden = true;
error1l.hidden = true;
error1f.hidden = true;
error2s.hidden = true;
error2l.hidden = true;
error2f.hidden = true;
var back = document.getElementById("back");
var playernamex = document.getElementById("playernamex");
var playernameo = document.getElementById("playernameo");


function forbiddenChar (a) {
	for (let char of a)
	{
		if (char == "," || char == "=" || char == "\\" || char == "/" || char == "*" || char == "-" || char == "+" || char == " ")
		{
			return true;
		}
	}
	return false;
}

function nameIsInvalid(a)
{
	if (a.trim() == "" || a.length >= 10 || a.length <= 3 || forbiddenChar(a))
	{
		return true;
	}
	else
	{
		return false;
	}
}


function players()
{
	var name1 = document.getElementById('name1');
	var name2 = document.getElementById('name2');

	if (nameIsInvalid(name1.value) || nameIsInvalid(name2.value))
	{
		if (name1.value.trim() == "" || nameIsInvalid(name1.value))
		{
			if (name1.value.trim() == "" || name1.value.length <= 3)
			{
				error1s.hidden = false;
				error1l.hidden = true;
				error1f.hidden = true;
			}
			else
			{
				if (name1.value.length >= 10)
				{
					error1l.hidden = false;
					error1s.hidden = true;
					error1f.hidden = true;
				}
				else
				{
					if (forbiddenChar(name1.value))
					{
						error1f.hidden = false;
						error1s.hidden = true;
						error1l.hidden = true;
					}
				}
			}
			name1.className = "error";
		}
		if (name2.value.trim() == "" || nameIsInvalid(name2.value))
		{
			if (name2.value.trim() == "" || name2.value.length <= 3)
			{
				error2s.hidden = false;
				error2l.hidden = true;
				error2f.hidden = true;
			}
			else
			{
				if (name2.value.length >= 10)
				{
					error2l.hidden = false;
					error2s.hidden = true;
					error2f.hidden = true;
				}
				else
				{
					if (forbiddenChar(name2.value))
					{
						error2f.hidden = false;
						error2s.hidden = true;
						error2l.hidden = true;
					}
				}
			}
			name2.className = "error";
		}
		return false;
	}
	else
	{
		hide.hidden = true;
		back.hidden = true;
		playernamex.innerHTML = name1.value;
		playernameo.innerHTML = name2.value;
		return false;
	}


}