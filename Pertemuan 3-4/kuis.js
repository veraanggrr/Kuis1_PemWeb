// Data yang akan diisi ke dalam tabel
const data = [
  { no: 1, nama: "VERA", nim: "NIM001", kelas: "Kelas A", link: "Link 1" },
  { no: 2, nama: "NURIL", nim: "NIM002", kelas: "Kelas B", link: "Link 2" },
  { no: 3, nama: "PUTRI", nim: "NIM003", kelas: "Kelas C", link: "Link 3" },
  { no: 4, nama: "SAKILA", nim: "NIM004", kelas: "Kelas D", link: "Link 4" },
  { no: 5, nama: "FAUZIYAH", nim: "NIM005", kelas: "Kelas E", link: "Link 5" },
];

// Membuat elemen tabel dan mengisi dengan data
const table = document.getElementById("KUIS");
const headerRow = document.createElement("tr");
const headers = ["No", "Nama", "NIM", "Kelas", "Link"];

// Membuat header tabel dengan border dan warna
headers.forEach((headerText) => {
  const header = document.createElement("th");
  header.textContent = headerText;
  header.style.backgroundColor = "#DB1514"; // Mengatur warna latar belakang header
  header.style.color = "white"; // Mengatur warna teks menjadi putih
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Mengisi tabel dengan data dan menambahkan border pada setiap sel
data.forEach((item, index) => {
  const row = document.createElement("tr");
  Object.values(item).forEach((text, i) => {
    const cell = document.createElement("td");

    if (i === 0) {
      // Menambahkan event listener untuk kolom "No" agar mendeteksi keydown
      cell.tabIndex = 0; // Membuat cell dapat di-fokus untuk menerima keydown
      cell.textContent = text;
      cell.addEventListener("keydown", function (event) {
        console.log(`Key pressed in No column: ${event.key}`); // Mencetak tombol yang ditekan di konsol
      });
    } else if (i === 4) {
      // Membuat cell link
      const link = document.createElement("a");
      link.href = "#";
      link.id = `link${index + 1}`;
      link.textContent = text;
      cell.appendChild(link);
    } else {
      cell.textContent = text;

      // Menambahkan event listener untuk nama agar zoom saat diklik dan kembali lagi
      if (i === 1) {
        cell.style.cursor = "pointer"; // Menambahkan cursor pointer untuk indikasi klik
        let zoomed = false; // Status zoom
        cell.addEventListener("click", function () {
          if (!zoomed) {
            cell.style.transform = "scale(1.5)";
            zoomed = true;
          } else {
            cell.style.transform = "scale(1)";
            zoomed = false;
          }
          cell.style.transition = "transform 0.3s"; // Menambahkan animasi zoom
        });

        // Menambahkan efek mouseover
        cell.addEventListener("mouseover", function () {
          cell.style.backgroundColor = "violet"; // Mengubah warna background saat mouseover
        });
        cell.addEventListener("mouseout", function () {
          cell.style.backgroundColor = ""; // Mengembalikan warna background saat mouseout
        });
      }

      // Menambahkan event listener untuk NIM agar warna berubah menjadi pelangi saat diklik
      if (i === 2) {
        cell.style.cursor = "pointer"; // Menambahkan cursor pointer untuk indikasi klik
        const colors = [
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet",
          "white",
        ];
        let colorIndex = 0;
        cell.addEventListener("click", function () {
          cell.style.backgroundColor = colors[colorIndex]; // Mengubah warna background secara bergantian
          colorIndex = (colorIndex + 1) % colors.length; // Mengubah indeks warna
        });
      }

      // Menambahkan event listener untuk Kelas agar berubah warna saat di-double click
      if (i === 3) {
        cell.addEventListener("dblclick", function () {
          cell.style.backgroundColor = "yellow"; // Mengubah warna latar belakang menjadi kuning saat double click
        });
      }
    }

    row.appendChild(cell);
  });
  table.appendChild(row);
});

// Menambahkan event listener ke setiap link
document.getElementById("link1").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.style.backgroundColor = "lightblue";
});

document.getElementById("link2").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelectorAll("#KUIS tr")[2].style.backgroundColor = "lightgreen";
});

document.getElementById("link3").addEventListener("click", function (event) {
  event.preventDefault();
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "link di klik";
  document.body.appendChild(newParagraph);
});

document.getElementById("link4").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("KUIS").style.display = "none";
});

document.getElementById("link5").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Link Fauziyah di klik!");
});
