let key; //Var to store HashCode
let savedName = "";
let decoded ;
//decoderSectionSTART
//func. to encode the input
function setName(name){
  savedName = name + savedName;

}
function encoder(name, length){
    let temp = "";
    let letter = '';
    for(let i = 0 ; i<length ; i++){
      letter = name.charAt(i);
      let conv = letter.charCodeAt(0) & 255;
      if(conv < 100){
        conv = "0" + conv;
        temp =  temp + conv ;
      }
      else{
        temp = temp + conv;
      }


    }
    console.log(temp);
    return temp;
  }

//function to decode the hashKey
  function decoder(key , length){
    let temp = 0;
    let decoded = "";

    for(let i = 0; i < length; i++)
      {
        let conv = key.slice(i*3, (i*3)+3);
        decoded = decoded + String.fromCharCode(conv);

      }
    return decoded;
  }

  //for generateLinkButton
  $(".input-button").click(function(){
    let ok = ".input-name";
    let input = $(ok).val();
    setName(input);
    let length = input.length;
    key = encoder(input, length);
  });

  console.log(key);
