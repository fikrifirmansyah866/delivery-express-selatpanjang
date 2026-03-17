function login() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
}

function logout() {
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}

function showOrder() {
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('orderPage').style.display = 'block';
}

function backHome() {
  document.getElementById('orderPage').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
}

function order() {
  let pickup = document.getElementById('pickup').value;
  let dropoff = document.getElementById('dropoff').value;

  if (pickup === "" || dropoff === "") {
    alert("Isi lokasi dulu!");
    return;
  }

  // simulasi jarak & harga
  let jarak = Math.floor(Math.random() * 10) + 1; // 1-10 km
  let harga = jarak * 3000;

  alert(
    "Order Berhasil!\n\n" +
    "Jarak: " + jarak + " km\n" +
    "Harga: Rp " + harga
  );

  backHome();
}
