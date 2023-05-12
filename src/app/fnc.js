var names = ['test1', 'test2', 'test3', 'test4'];

setInterval(function() {
  var rand = Math.floor(Math.random() * 4);
  document.getElementById("name").innerHTML = names[rand];
}, 2000);