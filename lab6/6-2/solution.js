function solve() {
  var text = document.getElementById("text").value;
  var namingConvention = document.getElementById("naming-convention").value;

  var words = text.split(" ");
  var result = "";

  if (namingConvention === "Pascal Case") {
      for (var i = 0; i < words.length; i++) {
          result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      }
  } else if (namingConvention === "Camel Case") {
      for (var i = 0; i < words.length; i++) {
          if (i === 0) {
              result += words[i].toLowerCase();
          } else {
              result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
          }
      }
  } else {
      result = "Error!";
  }

  document.getElementById("result").textContent = result;
}
