var phrase = document.getElementById("phrase");
  var d = new Date();
  var n = d.getDay()
  console.log = n;
if (console.log == 5) {
phrase.innerHTML = "Happy Friday!";
} else if (console.log == 1) {
phrase.innerHTML = "Happy Monday!";
}  else if (console.log == 2) {
phrase.innerHTML = " Happy Tuesday!";
} else if (console.log == 3) {
phrase.innerHTML = "Happy Wednesday!";
} else if (console.log == 4) {
phrase.innerHTML = "Happy Thursday!";
} else if (console.log == 6) {
phrase.innerHTML = "Happy Saturday!";
} else if (console.log == 0) {
phrase.innerHTML = "Happy Sunday!";
}
