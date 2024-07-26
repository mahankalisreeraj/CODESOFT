function btn_type(a) {
  var xy = document.getElementById("box");
  if (a != "eql" && a != "reset" && a != "back_space") {
    xy.value = xy.value + a;
  } else if (a == "eql") {
    var temp = eval(xy.value);
    xy.value = temp;
  } else if (a == "reset") {
    xy.value = "";
  } else if (a == "back_space") {
    var val = xy.value;
    xy.value = '';
    for (var i = 0; i < val.length - 1; i++) {
        xy.value += val[i];
    }
  }
  console.log(xy.value);    
}
