// Alert
// alert("Welcome Sir !")
// let nama_user = prompt("Masukkan Nama Anda : ")

document.write(`<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link href="#"">Nama User</a>
      </li>
    </ul>
  </div>
</div>
</nav>`);


let produk = [
  {
    nama_produk: "OPPO A57",
    foto_produk:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/14/cf9ed5f8-1d43-463c-bb20-ba44ef80220d.jpg",
    harga_produk: "2.000.000",
    alamat_pengirim: "Jakarta",
    rating: [
      {
        rating_b1: 1,
        rating_b2: 2,
        rating_b3: 3,
        rating_b4: 4,
        rating_b5: 5,
      },
    ],
    total_penjualan: [
      {
        rating_b1: 1,
        rating_b2: 0,
        rating_b3: 4,
        rating_b4: 10,
        rating_b5: 720,
      },
    ],
  },
  {
    nama_produk: "OPPO A31",
    foto_produk:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/5/17/3ba0b370-fc05-4e8f-aaa9-21f2a7d42d67.jpg",
    harga_produk: "1.039.000",
    alamat_pengirim: "Bekasi",
    rating: [
      {
        rating_b1: 1,
        rating_b2: 2,
        rating_b3: 3,
        rating_b4: 4,
        rating_b5: 5,
      },
    ],
    total_penjualan: [
      {
        rating_b1: 1,
        rating_b2: 0,
        rating_b3: 4,
        rating_b4: 10,
        rating_b5: 920,
      },
    ],
  },
  {
    nama_produk: "OPPO A53",
    foto_produk:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/7/14/cf9ed5f8-1d43-463c-bb20-ba44ef80220d.jpg",
    harga_produk: "2.099.000",
    alamat_pengirim: "Bandung",
    rating: [
      {
        rating_b1: 1,
        rating_b2: 2,
        rating_b3: 3,
        rating_b4: 4,
        rating_b5: 5,
      },
    ],
    total_penjualan: [
      {
        rating_b1: 1,
        rating_b2: 0,
        rating_b3: 4,
        rating_b4: 10,
        rating_b5: 420,
      },
    ],
  },
  {
    nama_produk: "OPPO A95",
    foto_produk:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/12/bd50af71-e427-4d6c-ad08-e9825c814a8f.jpg",
    harga_produk: "3.199.000",
    alamat_pengirim: "Jakarta",
    rating: [
      {
        rating_b1: 1,
        rating_b2: 2,
        rating_b3: 3,
        rating_b4: 4,
        rating_b5: 5,
      },
    ],
    total_penjualan: [
      {
        rating_b1: 1,
        rating_b2: 0,
        rating_b3: 4,
        rating_b4: 10,
        rating_b5: 220,
      },
    ],
  },
  {
    nama_produk: "OPPO A16",
    foto_produk:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/9/5/ab5a4324-ea7d-4843-92bc-20bea88cfd58.jpg",
    harga_produk: "1.648.000",
    alamat_pengirim: "Jakarta",
    rating: [
      {
        rating_b1: 1,
        rating_b2: 2,
        rating_b3: 3,
        rating_b4: 4,
        rating_b5: 5,
      },
    ],
    total_penjualan: [
      {
        rating_b1: 1,
        rating_b2: 0,
        rating_b3: 4,
        rating_b4: 10,
        rating_b5: 120,
      },
    ],
  },
  {
    nama_produk: "VIVO Y17",
    foto_produk:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/8/14/68217854-038a-4db7-9629-de20ab1f1aa1.jpg",
    harga_produk: "2.000.000",
    alamat_pengirim: "Jakarta",
    rating: [
      {
        rating_b1: 1,
        rating_b2: 2,
        rating_b3: 3,
        rating_b4: 4,
        rating_b5: 5,
      },
    ],
    total_penjualan: [
      {
        rating_b1: 100,
        rating_b2: 0,
        rating_b3: 4,
        rating_b4: 10,
        rating_b5: 2,
      },
    ],
  },
];

// console.log(produk[0].total_penjualan[0].rating_b2);

document.write("<div class='container'>");
document.write("<div class='row'>");

for (let i = 0; i < produk.length; i++) {
  let loop_rating = produk[i].total_penjualan[0];
  let loop_rating_review = produk[i].rating[0];
  let rating_1 = loop_rating.rating_b1;
  let rating_2 = loop_rating.rating_b2;
  let rating_3 = loop_rating.rating_b3;
  let rating_4 = loop_rating.rating_b4;
  let rating_5 = loop_rating.rating_b5;
  let hitung_penjualan = rating_1 + rating_2 + rating_3 + rating_4 + rating_5;

  let rating_review_1 = loop_rating_review.rating_b1;
  let rating_review_2 = loop_rating_review.rating_b2;
  let rating_review_3 = loop_rating_review.rating_b3;
  let rating_review_4 = loop_rating_review.rating_b4;
  let rating_review_5 = loop_rating_review.rating_b5;

  let star_review =
    rating_review_1 * rating_1 +
    rating_review_2 * rating_2 +
    rating_review_3 * rating_3 +
    rating_review_4 * rating_4 +
    rating_review_5 * rating_5;

  let count_star = Math.floor(star_review / hitung_penjualan);
  console.log(count_star);
  console.log(hitung_penjualan);

  document.write("<div class='col-md-2'>");
  document.write(
    "<div class='card shadow mb-5 bg-body rounded' style='width: 12rem; border: none'>"
  );
  document.write("<div class='card-body'> ");
  document.write(
    '<img src="' +
      produk[i].foto_produk +
      '" class="card-img-top w-100" alt="..." height="200px">'
  );

  document.write("<h5 class='card-title'>" + produk[i].nama_produk + "</h5>");

  if (hitung_penjualan > 500) {
    document.write("<p class='label-terlaris'> Terlaris </p> ");
  } else {
    document.write("<p class='card-text mt-5'>  </p> ");
  }

  // document.write(
  //   "<p class='card-text'>" + count_star + "</p> "
  // );

  document.write(
    "<p class='card-text'> Rp. " + produk[i].harga_produk + "</p> "
  );
  document.write(
    "<p class='alamat-store'>" + produk[i].alamat_pengirim + "</p> "
  );

  document.write('<div class="rating">');
  if (count_star >= 4) {
    document.write('<i class="fas fa-star d-inline-block"></i>');
  }
  else {
    document.write('<i class="fas fa-star-half d-inline-block"></i>');
  }

  document.write('<p class="d-inline-block">' + count_star + "</p>");
  document.write('<p class="d-inline-block">|</p>');
  document.write(
    ' <p class="d-inline-block">Terjual ' + hitung_penjualan + "</p>"
  );

  document.write("  </div>");

  document.write("</div>");

  document.write("</div>");
  document.write("</div>");
}

document.write("</div>");
document.write("</div>");
