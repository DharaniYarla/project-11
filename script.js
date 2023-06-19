document.getElementById("myButton").addEventListener("click", function () {
  var boxes = document.getElementsByClassName("box");
  var boxArray = Array.from(boxes);

  boxArray.forEach(function (box, index) {
    setTimeout(function () {
      box.style.display = "block";
      if (box.innerHTML === "") {
        box.style.backgroundColor = "rgb(248, 169, 248)";
      }
    }, 1000 * index);
  });
});
