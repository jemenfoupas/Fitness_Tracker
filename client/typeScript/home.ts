
async function onHomePageLoad() {
  // let storedValue :string = sessionStorage.getItem('sessionKey')!;
  // console.log(sessionStorage.getItem('sessionKey')!)
  // console.log("in js", storedValue.sessionKey);

  let sessionKey : string = storedValue.sessionKey;
  sessionStorage.setItem("sessionKey", sessionKey);

  const url = `/home/data?storedValue=${encodeURIComponent(sessionKey)}`;
  var result = await fetch(url);
  var jsonData = await result.json();


  // getting user workout routines
  let top_box_bottom = document.getElementById("top_box_bottom");
  
  if(top_box_bottom != null){
    // top_box_bottom.innerHTML = '';
    for (let i = 0; i <jsonData.length; i++) {

      const form = document.createElement('form');
      form.action = '/home/routine'; 
      form.method = 'get';
      form.id = 'myForm';

      const routinesDiv = document.createElement('div');
      const nameDiv = document.createElement('div');
      const startDateDiv = document.createElement('div');
      const endDateDiv = document.createElement('div');

      const inputField = document.createElement('input');
      // inputField.type = 'text';
      inputField.type = 'hidden';
      inputField.id = 'fieldName';
      inputField.name = 'fieldName';
      inputField.value = jsonData[i].routine_id;

      nameDiv.innerText = jsonData[i].routine_name;
      startDateDiv.innerText = jsonData[i].start_date;
      endDateDiv.innerText = jsonData[i].end_date;
      
      form.appendChild(inputField);
      form.appendChild(nameDiv);
      form.appendChild(startDateDiv);
      form.appendChild(endDateDiv);

      routinesDiv.appendChild(form);

      if(routinesDiv != null){
        routinesDiv.addEventListener('click', submitForm)
      }
      routinesDiv.classList.add('routinesDiv');

      top_box_bottom.appendChild(routinesDiv);
    }
  }
}

function submitForm() {
  let theForm = document.getElementById('myForm') as HTMLFormElement; ;
  if(theForm != null){
    theForm.submit();
  }
}

// Event listener for the page load event
window.addEventListener("load", onHomePageLoad);