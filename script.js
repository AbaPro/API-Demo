function refreshImage() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then(gotdata);
  function gotdata(json) {
    let img = json.image;
    document.getElementById(
      "tmp"
    ).innerHTML += ` <img class="imgg " src="${img}" width='250px' height='250px'>
    `;
  }
}
