cdfunction VariabelKonstanta() {
  const nama = "Garvin";
  let umur = 17;
  let status_menikah = true;

  umur = 17;
  // nama = "Bro";
  //Jika baris diatas aktif maka akan terjadi error

  console.log(nama); //nilai nama tidak dapat dirubah alias tetap
  console.log(umur); //nilai umur dapat diubah
  console.log(status_menikah);
}

function Objek() {
  let profil = {
    nama: "Bro ",
    kelebihan: false,
  };

  //mengganti kelebihan di profil
  profil.kelebihan = "Banyak";

  console.log(profil.nama);
  if (profil.kelebihan) {
    console.log(profil.kelebihan);
  } else {
    console.log("Gatau");
  }
}

function Array() {
  let tim = [
    {
      namaTim: "Ulgrim",
      diBuat: "01/01/2020",
      anggota: 1,
    },
    {
      namaTim: "Solo",
      diBuat: "17/12/2019",
      anggota: 1,
    },
  ];
  console.log(tim);
  console.log(tim[1]);
  console.log(tim[1].anggota);
  console.log(tim.length);
}

function ArrayEdit() {
  let tim = [
    {
      namaTim: "Ulgrim",
      diBuat: "01/01/2020",
      anggota: 1,
    },
    {
      namaTim: "Solo",
      diBuat: "17/12/2019",
      anggota: 1,
    },
  ];

  tim.splice(1, 1);
  console.log(tim);

  const timBaru = {
    namaTim: "Tim Baru",
    diBuat: "27/07/2020",
    anggota: 3,
  };

  tim.push(timBaru);
  console.log(tim);
}