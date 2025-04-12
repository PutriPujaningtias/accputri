
const stokData = [
    { nama: "Lego", stok: 14, hargaModal: 4800, hargaJual: 6500 },
    { nama: "Slime Karakter", stok: 6, hargaModal: 2800, hargaJual: 5000 }
];

function updateStokTable() {
    const tbody = document.querySelector("#stok-table tbody");
    tbody.innerHTML = "";
    stokData.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.nama}</td>
            <td>${item.stok}</td>
            <td>Rp${item.hargaModal.toLocaleString()}</td>
            <td>Rp${item.hargaJual.toLocaleString()}</td>
        `;
        tbody.appendChild(row);
    });
}

function updateProdukDropdown() {
    const select = document.getElementById("produk");
    stokData.forEach(item => {
        const option = document.createElement("option");
        option.value = item.nama;
        option.textContent = item.nama;
        select.appendChild(option);
    });
}

document.getElementById("pos-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const namaProduk = document.getElementById("produk").value;
    const jumlah = parseInt(document.getElementById("jumlah").value);

    const produk = stokData.find(p => p.nama === namaProduk);
    if (!produk) return alert("Produk tidak ditemukan.");
    if (jumlah > produk.stok) return alert("Stok tidak mencukupi!");

    produk.stok -= jumlah;

    const total = produk.hargaJual * jumlah;

    const table = document.querySelector("#transaksi-table tbody");
    const row = table.insertRow();
    row.innerHTML = `
        <td>${produk.nama}</td>
        <td>Rp${produk.hargaJual.toLocaleString()}</td>
        <td>${jumlah}</td>
        <td>Rp${total.toLocaleString()}</td>
    `;

    updateStokTable();
    document.getElementById("pos-form").reset();
});

updateProdukDropdown();
updateStokTable();
