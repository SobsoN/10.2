const span = $("span");
span.each(function(index, element) {
	if (index % 2 == 0) {
		$(element).css('color', 'red');
	}
});

const paragraph = $('p');
paragraph.each(function(index, element) {
	const button = '<br /><button class="btn" data-tmp="' + index + '">Click me </button>';
	$(element).append(button);
});
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});