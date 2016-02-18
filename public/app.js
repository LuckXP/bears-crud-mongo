console.log('my waist\n👌');

function deleteBear (event) {
	event.preventDefault();

	var $button = $(event.target);
	var id = $button.data("id");
	
	console.log(id);
	$.ajax("/api/bears/" + id, {method:"DELETE"}).done( function() {
		$button.closest("tr").remove();
	});
}

$('.deleteBear').on('click', deleteBear);