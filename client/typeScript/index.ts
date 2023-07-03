
async function onPageLoad() {
  // localStorage.clear();
  // sessionStorage.clear();
  console.log(sessionStorage.getItem('sessionKey')!);

  // let sessionKey : string = generateString(50);
  // sessionStorage.setItem("sessionKey", sessionKey);

  // console.log(sessionStorage.getItem('sessionKey')!)
//   let val = <HTMLInputElement>document.getElementById('storedValue');
//   if (val != null) {
//     val.value = sessionKey;
//     console.log("it is not null");
//   }
}

// // program to generate random strings
// // declare all characters
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// function generateString(length: number) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }
  
// Event listener for the page load event
window.addEventListener("load", onPageLoad);

