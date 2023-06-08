
async function onPageLoad() {
  console.log("Page loaded!"); // Replace with your desired actions
  // Add your code here to perform actions on page load

  let sessionKey : string = generateString(50);
  localStorage.setItem("sessionKey", sessionKey);

  let val = document.getElementById('storedValue');
  if (val != null) {
    val.value = sessionKey;
    console.log("it is not null");
  }
}

// program to generate random strings
// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length: number) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
  
// Event listener for the page load event
window.addEventListener("load", onPageLoad);

