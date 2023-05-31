
async function onPageLoad() {
  console.log("Page loaded!"); // Replace with your desired actions
  // Add your code here to perform actions on page load

  let top_box_bottom = document.getElementsByClassName("top_box_bottom");
  for (let i = 0; i < top_box_bottom.length; i++) {
    top_box_bottom[i].innerHTML = 'Testing here';
    // top_box_bottom[i].innerHTML = 'Testing here';
  }

  var result = await fetch('/home/data');
  var jsonData = await result.json();
  console.log(jsonData);

}

// Event listener for the page load event
window.addEventListener("load", onPageLoad);