function hide() {
	first.hidden = true;
	second.hidden = true;
	third.hidden = true;
	fourth.hidden = true;
	fifth.hidden = true;
	sixth.hidden = true;
};

hide();

var i = 0;
function test() {
	i = i + 1;
	if ( i == 1 ) {
		first.hidden = false;
	} else if ( i == 2) {
		second.hidden = false;
	} else if ( i == 3) {
		third.hidden = false;
	} else if ( i == 4) {
		fourth.hidden = false;
	} else if ( i == 5) {
		fifth.hidden = false;
	} else if ( i == 6) {
		sixth.hidden = false;
	} else if ( i == 7) {
		i = 0;
		hide();
	}
}