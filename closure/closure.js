//1
function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  blab();
}
//2
function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  setTimeout(blab, 2000);
}
//3
function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  return blab;
}
var blabLater = nonsense("blabla");
var blabAgainLater = nonsense("blablaagian");
//4
