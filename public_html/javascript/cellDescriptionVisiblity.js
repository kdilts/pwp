$( document ).ready(function() {
	$carousel = $('.carousel');
	data = $carousel.data('flickity');

	descriptions = document.getElementsByClassName('cell-description');

	hideAll();
	descriptions[0].style='display:block;';

	$carousel.on( 'select.flickity', function() {
		hideAll();
		showDesc(data.selectedIndex);
	});

});

hideAll = function(){
	for(var i in descriptions){
		descriptions[i].style='display:none;';
	}
};

showDesc = function(n){
	descriptions[n].style='display:block;';
};