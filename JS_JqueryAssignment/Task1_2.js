/* Task 1:- Extract the sentences from this paragraph and display only those which contain
             more than 3 words in it, along with the sentence number. 

    Task 2: Mask the personal vital data from the sentences ( if it is present) i.e, 
    replace the ‘9876535362’ with ‘XXXXXXXXXX’ */


    
let conversation = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!"

let arr = conversation.split(".");
let arr5 =[];
let arr4 =[];
arr.forEach(splitfun);
arr4.forEach(myFunction);

 function myFunction(item, index) {
    let text = "";
    text += index + " : " + item ; 
    console.log(text);
  }

 function splitfun(item, i){
     
        let arr2 = item.split("?");
        
        let a= arr2.length;
        if(a>1){
          arr2.forEach(element => { 
          let arr3 = element.split(" ");
          if(arr3.length>3)
          {
              arr4.push(element.replace(new RegExp("[0-9]", "g"), "X"));
          }              
          });
        }
        else{
            arr4.push(arr2[0].replace(new RegExp("[0-9]", "g"), "X"));
        }
        
  }