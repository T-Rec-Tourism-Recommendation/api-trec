# T-REC API Documentation

## Base URL

[https://api-trec-im2d257paa-et.a.run.app/](https://api-trec-im2d257paa-et.a.run.app/)

## Destinasi

**Endpoint** : **/destinasi**

**Method**:  GET

**Description** : Get 30 destinasi random from database

**Example request :**

GET https://api-trec-im2d257paa-et.a.run.app/destinasi

**Example response to two of the many destinations :** 

```json
[
    {
        "id": 3,
        "Place_id": 3,
        "Place_Name": "Dunia Fantasi",
        "City": "Jakarta",
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/33.%20Lawang%20Sewu.jpg"
    },
    {
        "id": 49,
        "Place_id": 400,
        "Place_Name": "Hutan Bambu Keputih",
        "City": "Surabaya",
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/49.%20Hutan%20Bambu%20Keputih.jpg"
    },
]
```

## Detail Destinasi

**Endpoint : /detailDestinasi/:id** 

**Method:** GET

**Description** : Get detail destinasi from place id

**Example request:**

GET https://api-trec-im2d257paa-et.a.run.app/detailDestinasi/14

**Example response:**

```json
{
    "ID": 1,
    "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/1.Monas.jpg",
    "namaTempat": "Monumen Nasional",
    "Lokasi": "Jakarta",
    "HTM": 20000,
    "Deskripsi": "Monumen Nasional atau yang populer disingkat dengan Monas atau Tugu Monas adalah monumen peringatan setinggi 132 meter (433 kaki) yang didirikan untuk mengenang perlawanan dan perjuangan rakyat Indonesia untuk merebut kemerdekaan dari pemerintahan kolonial Hindia Belanda. Pembangunan monumen ini dimulai pada tanggal 17 Agustus 1961 di bawah perintah presiden Soekarno dan dibuka untuk umum pada tanggal 12 Juli 1975. Tugu ini dimahkotai lidah api yang dilapisi lembaran emas yang melambangkan semangat perjuangan yang menyala-nyala. Monumen Nasional terletak tepat di tengah Lapangan Medan Merdeka, Jakarta Pusat.",
    "google_maps_link": "https://www.google.com/maps?q=-6.1753924,106.8271528"
}
```

## Search Destinasi

**Endpoint : /search**

**Method: POST**

**Description:** Search data yang diinginkan dari database

**Example request:**

POST https://api-trec-im2d257paa-et.a.run.app/search?input=bandung

**Example response:**

```json
[
    {
        "id": 21,
        "Place_id": 216,
        "Place_Name": "Farm House Susu Lembang",
        "City": "Bandung",
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/21.%20Farm%20House%20Susu%20Lembang.jpg"
    },
    {
        "id": 22,
        "Place_id": 217,
        "Place_Name": "Kebun Binatang Bandung",
        "City": "Bandung",
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/22.%20Kebun%20Binatang%20Bandung.jpg"
    },
]
```

## Filter Destinasi

**********************************Endpoint: /filter**********************************

**Method:** POST

**Description:** Filter data berdasarkan kategori dan kota

**Example request and response filter category**

**Endpoint :** https://api-trec-im2d257paa-et.a.run.app/filter?cat=budaya

```json
[
    {
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/1.Monas.jpg",
        "id": 1,
        "Place_id": 1,
        "Place_Name": "Monumen Nasional",
        "City": "Jakarta",
        "Category": "Budaya"
    },
    {
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/2.%20Kota%20Tua.jpg",
        "id": 2,
        "Place_id": 2,
        "Place_Name": "Kota Tua",
        "City": "Jakarta",
        "Category": "Budaya"
    },
]
```

**Example filter kota**

**Endpoint :** https://api-trec-im2d257paa-et.a.run.app/filter?kota=Semarang

```
[
    {
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/31.%20Grand%20Maerakaca.jpg",
        "id": 31,
        "Place_id": 336,
        "Place_Name": "Grand Maerakaca",
        "City": "Semarang",
        "Category": "Taman Hiburan"
    },
    {
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/32.%20Kampung%20Pelangi.jpg",
        "id": 32,
        "Place_id": 337,
        "Place_Name": "Kampung Pelangi",
        "City": "Semarang",
        "Category": "Taman Hiburan"
    },
]
```

**Example filter data keduanya**

**Endpoint:** https://api-trec-im2d257paa-et.a.run.app/filter?cat=budaya&kota=Semarang

```json
[
    {
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/33.%20Lawang%20Sewu.jpg",
        "id": 33,
        "Place_id": 338,
        "Place_Name": "Lawang Sewu",
        "City": "Semarang",
        "Category": "Budaya"
    },
    {
        "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/34.%20Sam%20Po%20Kong.jpeg",
        "id": 34,
        "Place_id": 339,
        "Place_Name": "Sam Poo Kong Temple",
        "City": "Semarang",
        "Category": "Budaya"
    }
]
```

## Rekomendasi

**********************************Endpoint: /recommendation**********************************

**Method:** POST

**Description:** Melihat data hasil rekomendasi dan menfilter berdasarkan kota

**Example request and response rekomendasi**

Endpoint : POST https://api-trec-im2d257paa-et.a.run.app/recommendation (request JSON)

```
{
    "text": "saya ingin pergi ke tempat wisata yang dekat dengan alam, karena saya ingin melihat banyak pemandangan yang menyejukkan mata"
}
```

**Example Response:**

```json
"rekomendasi": "Cagar Alam",
"destinasi": [
        {
            "id": 7,
            "Place_Id": 7,
            "Place_Name": "Kebun Binatang Ragunan",
            "Description": "Kebun Binatang Ragunan adalah sebuah kebun binatang yang terletak di daerah Ragunan, Pasar Minggu, Jakarta Selatan, Indonesia. Kebun binatang seluas 140 hektare ini didirikan pada tahun 1864. Di dalamnya terdapat berbagai koleksi yang terdiri dari 295 spesies dan 4040 spesimen.\\nRagunan sempat ditutup selama sekitar tiga minggu sejak 19 September 2005 karena hewan-hewan di dalamnya ada yang terinfeksi flu burung, tetapi dibuka kembali pada 11 Oktober 2005.Kebun binatang ini memiliki banyak spesies hewan yang langka antara lain kakatua, orangutan, gorila, anoa dan gajah",
            "Category": "Cagar Alam",
            "City": "Jakarta",
            "Price": 4000,
            "Coordinate": "{'lat': -6.3124593, 'lng': 106.8201865}",
            "Lat": -6.3124593,
            "Longi": 106.8201865,
            "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/37.%20Taman%20Kasmaran.jpg"
        },
        {
            "id": 19,
            "Place_Id": 93,
            "Place_Name": "Gembira Loka Zoo",
            "Description": "Kebun Binatang Gembira Loka biasa disebut Gembira Loka Zoo (disingkat GL Zoo, bahasa Jawa: ꦏꦼꦧꦺꦴꦤ꧀ꦫꦗꦒꦼꦩ꧀ꦧꦶꦫꦭꦺꦴꦏ, translit. Kêbon Raja Gêmbira Loka) adalah kebun binatang yang berada di Kota Yogyakarta. Berisi berbagai macam spesies dari belahan dunia, seperti orang utan, gajah asia, simpanse, harimau, dan lain sebagainya. Kebun Binatang Gembira Loka menjadi daya tarik tersendiri bagi para wisatawan Yogyakarta. Gembira Loka Zoo sempat rusak parah akibat gempa bumi Yogyakarta tahun 2006. Tetapi, setelah direnovasi Kebun Binatang Gembira Loka tetap dicari para wisatawan.",
            "Category": "Cagar Alam",
            "City": "Yogyakarta",
            "Price": 60000,
            "Coordinate": "{'lat': -7.806234399999999, 'lng': 110.3967977}",
            "Lat": -7.8062344,
            "Longi": 110.3967977,
            "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/19.%20Gembira%20Loka%20Zoo.jpg"
        },
		]
}
```

**Example request and response rekomendasi**

https://api-trec-im2d257paa-et.a.run.app/recommendation?kota=semarang

```json
{
    "rekomendasi": "Cagar Alam",
    "destinasi": [
        {
            "id": 36,
            "Place_Id": 341,
            "Place_Name": "Hutan Wisata Tinjomoyo Semarang",
            "Description": "Awalnya taman wisata hutan Tinjomoyo Semarang (smg) ini merupakan sebuah kebun binatang dengan ragam binatang hutan di dalamnya. Namun terjadi banjir besar, hingga memutuskan jembatan besar yang menjadi akses utama menuju hutan wisata. Hutan Tinjomoyo sendiri memiliki kontur wilayah dengan perpaduan bukit, sungai dan hutan. Tumbuhan yang paling banyak terdapat di sini adalah vegetasi pohon jati serta pinus. Oleh karena itu, tak heran jika kawasan ini cocok sekali dijadikan hutan wisata yang masih alami.Dengan luas lahan 57,5 hektare area tersebut lebih sering dimanfaatkan sebagai tempat berkemah",
            "Category": "Cagar Alam",
            "City": "Semarang",
            "Price": 3000,
            "Coordinate": "{'lat': -7.0296837, 'lng': 110.3999611}",
            "Lat": -7.0296837,
            "Longi": 110.3999611,
            "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/36.%20Hutan%20Tinjomoyo.png"
        },
        {
            "id": 40,
            "Place_Id": 355,
            "Place_Name": "Umbul Sidomukti",
            "Description": "Kawasan wisata umbul Sidomukti merupakan salah satu Wisata Alam Pegunungan di Semarang, berada di Desa Sidomukti Kecamatan Bandungan Kabupaten Semarang. Kawasan wisata ini dengan didukung fasiltas & Servis: Outbond Training, Adrenalin Games, Taman Renang Alam, Camping Ground, Pondok Wisata, Pondok Lesehan, serta Meeting Room.",
            "Category": "Cagar Alam",
            "City": "Semarang",
            "Price": 75000,
            "Coordinate": "{'lat': -7.1945903, 'lng': 110.3733583}",
            "Lat": -7.1945903,
            "Longi": 110.3733583,
            "urlImage": "https://storage.googleapis.com/destination-image/gambar-destinasi/40.%20candi%20gedong%20songo.jpg"
        }
    ]
}
```
