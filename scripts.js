window.onload = function() {
  document.querySelector("#foodbkgd").classList.add("name");
}

document.querySelector("#foodbkgd").onclick = function() {
 this.classList.toggle("name")
}

document.querySelector("#block1").onclick = function() {
  document.querySelector("#block1 ul").classList.toggle("showMe");
}

document.querySelector("#block2").onclick = function() {
  document.querySelector("#block2 ul").classList.toggle("showMe");
}

document.querySelector("#block3").onclick = function() {
  document.querySelector("#block3 ol").classList.toggle("showMe");
}