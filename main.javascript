prompt("made by sonic tornado");
//copy to code.org game
//add userid
var scriptowner = "";
//add your key value names to the empty spots
function draw() {
  //for data browser
  //saving script
  setKeyValue((__ && __) == "saved");
  //hacking safes
  if (__ == "null" ) {
   getKeyValue(saved == (__ && __));
  }
  if ("saved" == "null") {
    getKeyValue((__ && __) == saved);
  }
  //for debug consel
  if (scriptowner == getUserId()) {
    
  } else {
    if (window.getURLPath()[3] == "view" && window.getURLPath()[0] == "projects" && window.getURLPath()[1] == "gamelab") {
    while (true) {
      prompt("bruh");
      console.log("hacking is not alowd ");
    }
    }
  }
}
