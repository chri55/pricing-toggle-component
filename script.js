const togglePrices = (e) => {
  console.log(e);
  if (e.target.checked) {
    document.querySelector("#basic").innerHTML = '&dollar;19.99';
    document.querySelector("#professional").innerHTML = '&dollar;24.99';
    document.querySelector("#master").innerHTML = '&dollar;39.99';
  } else {
    document.querySelector("#basic").innerHTML = '&dollar;199.99';
    document.querySelector("#professional").innerHTML = '&dollar;249.99';
    document.querySelector("#master").innerHTML = '&dollar;399.99';
  }
  document.querySelectorAll('.toggle-name').forEach(e => e.classList.toggle('selected'));
}

document.querySelector("#toggleswitch").addEventListener('change', togglePrices);