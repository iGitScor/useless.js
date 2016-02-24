var inutile = (function() {

  var structure = {};

  structure.film = {};
  structure.film.justiciers = [];
  structure.film.batman = function () {
    return Array(16).join("SOS" - 1) + " Batman!";
  };
  structure.film.justiciers.push("batman");
  structure.film["à l'aide"] = function () {
    var justicier = Math.floor(Math.random()*structure.film.justiciers.length);
    console.log(structure.film[
      structure.film.justiciers[justicier]
    ]());
  };

  return structure;

}());
