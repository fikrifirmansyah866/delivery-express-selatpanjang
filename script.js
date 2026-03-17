function login() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
}

function showOrder() {
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('orderPage').style.display = 'block';
}

function order() {
  let pickup = document.getElementById('pickup').value;
  let dropoff = document.getElementById('dropoff').value;

  alert('Order dibuat dari ' + pickup + ' ke ' + dropoff);
                                       }
