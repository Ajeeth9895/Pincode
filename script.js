

//To get data from input box
let search = document.querySelector("#button_value");
let pincode_input = document.querySelector("#input_value");
var details_view = document.querySelector(".details_area");


//function to fetch  API
let pincode_api = async () => {
  try {
    let api = `https://api.postalpincode.in/pincode/${pincode_input.value}`;

    let data = await fetch(api, {
      method: "GET",
    });

    let res = await data.json();
    details_view.innerHTML="";
    for (let i = 0; i < res[0].PostOffice.length; i++) {

      let state = res[0].PostOffice[i].State;
      let district = res[0].PostOffice[i].District;
      let name = res[0].PostOffice[i].Name;

      let content = `
     <div class="card " style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${'Area: '+name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${'District: '+district}</h6>
        <h6 class="card-text">${'State: '+state}</h6>
        </div>
    </div>
     `;

      
      let details = document.createElement("div");
      details.innerHTML = content;
      details_view.append(details);
    }
  } catch (e) {
    //Alert if enter invalid details
    alert("Enter Valid Pincode");
    console.log(e);
  }
};



//Event for onclick search button and call pincode api
search.addEventListener("click", () => {
  pincode_api();
  pincode_input.value="";
 
});
