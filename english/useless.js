var useless = (function() {

  var structure = {};

  structure.movie = {};
  structure.movie.avengers = [];
  structure.movie.batman = function () {
    return Array(16).join("SOS" - 1) + " Batman!";
  };
  structure.movie.avengers.push("batman");
  structure.movie["please help"] = function () {
    var avenger = Math.floor(Math.random() * structure.movie.avengers.length);
    console.log(structure.movie[
      structure.movie.avengers[avenger]
    ]());
  };

  return structure;

}());
