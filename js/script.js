document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form submit secara default

  // Mengambil nilai dari form
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('message').value;

  // Mengambil waktu saat ini
  const currentTime = new Date();
  const currentTimeString = currentTime.toLocaleString(); // Mengubah waktu ke format string yang mudah dibaca

  // Menampilkan nilai ke div displayMessage
  const displayMessageDiv = document.getElementById('displayMessage');
  displayMessageDiv.innerHTML = `
      <h3>Pesan yang Dikirim</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender === 'male' ? 'Laki-laki' : 'Perempuan'}</p>
      <p><strong>Pesan:</strong> ${message}</p>
      <p><strong>Waktu Pengiriman:</strong> ${currentTimeString}</p>
  `;

  // Mengirimkan data atau memproses lebih lanjut
  alert('Formulir telah dikirim!');
});
