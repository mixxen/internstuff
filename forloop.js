//Chris program
var text = "Hi my name is Chris. This is a test. Does your name start with a C like Chris?";
var name = "Chris";
var hits = 0;

for(var i = 0; i < text.length; i++) {
  for(var j = 0; j < name.length; j++) {

    if(text[i+j] !== name[j])
      break; //break from "j" loop if letters do not equal

    console.log(text[i+j] + ',' + name[j] + ' >> ' + i + ',' + j);

    if(j === name.length-1)
      hits++; //if we get this far then there is a match

  }
}

console.log(name + " appeared " + hits + " times.");