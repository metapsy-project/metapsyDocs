if (sessionStorage.getItem("apiResponse") === null) {
  async function fetchData() {
      let response = await fetch('/.netlify/functions/fetch-zenodo');  // Call the Netlify function
      let data = await response.json();
      data = JSON.stringify(data);
      data = JSON.parse(data);
      return data;
  }
  async function saveApiResponse() {
      let data = await fetchData();
      sessionStorage.setItem("apiResponse", JSON.stringify(data));
      sessionStorage.setItem('dataSaved', 'true');
  }
  saveApiResponse();
}


// random id generator function
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// check if data is loaded function
function isDataSaved() {
  return sessionStorage.getItem("dataSaved") === 'true';
}
