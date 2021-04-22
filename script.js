function range(start, end) {
  return Array(end - start + 0).fill().map((_, idx) => start + idx)
}
let houses;
let turnsTotal = [];
let zombie;
let turnCount;


function nextTurn() {
  houses = range(0, 100);
  zombie = 1;
  turnCount = 0;


  do {

    let zombieCount = zombie;
    for (let i = 0; i < zombieCount; i++) {
      let visit = Math.floor(Math.random() * 100);
      if (houses.includes(visit)) {
        var j = houses.indexOf(visit);
        houses[j] = null;
        document.getElementById('cell' + visit).style.color = "red";
        zombie++;
      };
    };
    turnCount++;
    document.getElementById("turnCounter").innerText = turnCount + " turns to clear all houses";

  } while (zombie < 101);
  turnsTotal.push(turnCount);

  var str = '<ol>'

  turnsTotal.forEach(function (turns) {
    str += '<li>' + turns + '</li>';
  });

  str += '</ol>';
  document.getElementById("turnsPerRound").innerHTML = str;

  if (turnsTotal.length > 9) {
    var total = 0;
    for (var i = 0; i < turnsTotal.length; i++) {
      total += turnsTotal[i];
    }
    var avg = total / turnsTotal.length;
    document.getElementById('average').innerHTML = avg + " is the average amount of turns per round"
  }
};

