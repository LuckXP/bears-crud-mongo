console.log('my waist\n👌');

var deleteBear = function(event) {
	event.preventDefault();

	var $button = $(event.target);
	var id = $button.data("id");
	
	console.log(id);
	$.ajax("/api/bears/" + id, {method:"DELETE"}).done( function() {
		$button.closest("tr").remove();
	});
}

var addBear = function(event) {
	event.preventDefault();

	var name = $('#name').val();
	var age = $('#age').val();
	var gender = $('#gender').val();
	var $table = $('#bearTable')

	var bear = {};
	bear.name = name;
	bear.age = age;
	bear.gender = gender;
	
	$.ajax({
		url: '/api/bears',
		method: 'POST',
		data: bear
	}).done(function(data){
		console.log('a 🐻 was created', data);
		
		$table.append('<tr data-id=' + data._id + '> \
	  			<td>' + data.name + '</td> \
	  			<td>' + data.age + '</td> \
	  			<td>' + data.gender + '</td> \
	  			<td> \
	  				<button data-id="<%= bears[i].id %>" class="btn btn-default deleteBear" type="delete"> \
	  					d🐻l🐻t🐻 \
	  				</button> \
	  			</td> \
	  		</tr>');
		$('#bearForm')[0].reset();
		// $("#name")[0].reset();
		// $("#age")[0].reset();
		// $("#gender").reset();
	})


}
$('#addBear').on('click', addBear);
$('.deleteBear').on('click', deleteBear);