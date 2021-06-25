function arvutus () {
var height = Number(document.getElementById("height").value);
var weight = Number(document.getElementById("weight").value);
var result = weight / (height * height) * 10000;
document.getElementById("result").innerHTML = result.toFixed(2);
if (result < 18.5) {
    document.getElementById("comment").innerHTML = "ALAKAAL";
  } else if (result > 18.5 && result < 25) {
    document.getElementById("comment").innerHTML = "NORMAALKAAL";
  } else if (result > 25 && result < 30) {
    document.getElementById("comment").innerHTML = "ÜLEKAAL";
  } else if (result > 30 && result < 40) {
    document.getElementById("comment").innerHTML = "RASVUMINE";
  } else if (result > 40) {
    document.getElementById("comment").innerHTML = "OHTLIKULT RASVUNUD";
  }
}