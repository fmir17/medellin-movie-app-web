angular.module("MyFirstApp",[])
.controller("FirstController",['$scope','$http',function($scope, $http){
	
	$scope.guardarPelicula = function() {
		var id = document.getElementById("id").value;
		var title = document.getElementById("title").value;
		var duration = document.getElementById("duration");
		var genre = document.getElementById("genre");
		var format = document.getElementById("format").value;
		var director = document.getElementById("director").value;
		var cast = document.getElementById("cast").value;
		var urlImage = document.getElementById("urlImage").value;
		var urlVideo = document.getElementById("urlVideo").value;
		var description = document.getElementById("description").value;
		
//		Creacion del Json pelicula
		var movie = JSON.stringify({
			id : id,
			title : title,
			description : description,
			duration : duration,
			urlImage : urlImage,
			genre : genre,
			format : format,
			director : director,
			cast : cast,
			urlVideo : urlVideo		
		});

		$http.post('https://medellin-movie.herokuapp.com/movie/',jsonIncidente).success(function(data) {
			alert("Pelicula guardada exitosamente");
		}).error(function(data) {
			alert("Ha ocurrido un error al guardar la pelicula");
		});

	}
}]);