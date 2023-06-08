
async function onHomePageLoad() {
  let storedValue :string = localStorage.getItem('sessionKey')!;
  const url = `/home/data?storedValue=${encodeURIComponent(storedValue)}`;
  var result = await fetch(url);
  var jsonData = await result.json();
  console.log(jsonData);
  console.log(jsonData[1]);
  console.log(jsonData[1].end_date);

  // getting user workout routines
  let top_box_bottom = document.getElementById("top_box_bottom");
  if(top_box_bottom != null){
    top_box_bottom.innerHTML = '';
    for (let i = 0; i <jsonData.length; i++) {

      const routinesDiv = document.createElement('div');
      const nameDiv = document.createElement('div');
      const startDateDiv = document.createElement('div');
      const endDateDiv = document.createElement('div');

      routinesDiv.innerHTML = '';
      nameDiv.innerText = jsonData[i].routine_name;
      startDateDiv.innerText = jsonData[i].start_date;
      endDateDiv.innerText = jsonData[i].end_date;

      routinesDiv.appendChild(nameDiv);
      routinesDiv.appendChild(startDateDiv);
      routinesDiv.appendChild(endDateDiv);

      routinesDiv.classList.add('routinesDiv');
      top_box_bottom.appendChild(routinesDiv);
    }
  }
    

}

// Event listener for the page load event
window.addEventListener("load", onHomePageLoad);