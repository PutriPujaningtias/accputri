
document.getElementById("pos-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const kategori = document.getElementById("kategori").value;
    const produk = document.getElementById("produk").value;
    const harga = parseFloat(document.getElementById("harga").value);
    const jumlah = parseInt(document.getElementById("jumlah").value);
    const total = harga * jumlah;

    const table = document.querySelector("#transaksi-table tbody");
    const row = table.insertRow();
    row.innerHTML = `
        <td>${kategori}</td>
        <td>${produk}</td>
        <td>Rp${harga.toLocaleString()}</td>
        <td>${jumlah}</td>
        <td>Rp${total.toLocaleString()}</td>
    `;

    document.getElementById("pos-form").reset();
});
