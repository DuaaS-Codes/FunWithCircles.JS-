onEvent("btnEnter", "click", function( ) {
  var radius = prompt("Enter the radius: ");
  setText("lblRadius", "The radius is " + radius);
  var diameter = (2 * radius);
  setText("lblDiameter", "The diameter is " + diameter);
  var area = 3.14159 * (radius * radius);
  setText("lblAnswer", "The area is " + area);
  var circumference = (2 * 3.14159 * radius);
  setText("lblCircumference", "The circumference is " + circumference);
  var surfacearea = 4 * 3.14159 * radius * radius;
  setText("lblSA", "The surface area is " + surfacearea);
var volume = ((4 * 3.14159 * radius * radius * radius )/3);
  setText("lblVolume", "The volume is " + volume);
});
