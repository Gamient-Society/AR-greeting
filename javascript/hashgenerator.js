let key; //Var to store HashCode
let decoded;
let user = 0;
//decoderSectionSTART
//func. to encode the input

// To generate random number
function keyGen() {
  let number = Math.floor(100000 + Math.random() * 900000 + user);
  user++;
  return number;
}

const db = new restdb("5fec198a823229477922c59b");
//for generateLinkButton
$(".input-button").click(function() {
  let ok = ".input-name";
  let input = $(ok).val();
  console.log(input);
  key = keyGen();

  var obj = new db.nameid({
    name: input,
    id: key
  });
  obj.save((err, res) => {
    if (!err) {
      console.log(res);
    }
  });

  // To copy Generated link with a random key
  $("#path").val("");
  $("#path").val("https://gamient-society.github.io/AR-greeting/view/?id=" + key)
  $("#path").focus();
  $("#path").select();

  try {
    //var to copy text
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
console.log(key);
