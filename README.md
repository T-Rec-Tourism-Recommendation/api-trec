# T-REC API Documentation

## Base URL

[https://api-trec-sxk5htqkea-et.a.run.app/](https://api-trec-sxk5htqkea-et.a.run.app/search)

## Destinasi

**Endpoint** : **/destinasi**

**Method**:  GET

**Description** : Get 30 destinasi random from database

**Example request :**

GET [https://api-trec-sxk5htqkea-et.a.run.app/](https://api-trec-sxk5htqkea-et.a.run.app/search)destinasi

**Example response to one of the many destinations :** 

```
{
        "Place_id": 128,
        "Place_Name": "Gumuk Pasir Parangkusumo",
        "City": "Yogyakarta",
        "urlImage": ""
    },
```

## Detail Destinasi

**Endpoint : /detailDestinasi/:id** 

**Method:** GET

**Description** : Get detail destinasi from place id

**Example request:**

POST [https://api-trec-sxk5htqkea-et.a.run.app/](https://api-trec-sxk5htqkea-et.a.run.app/search)detailDestinasi/14

example response

```
{
    "ID": 14,
    "urlImage": "",
    "namaTempat": "Pulau Pelangi",
    "Lokasi": "Jakarta",
    "HTM": 900000,
    "Deskripsi": "Pulau Pelangi adalah sebuah pulau yang terletak di Kepulauan Seribu di Daerah Khusus Ibukota Jakarta, Indonesia. Pulau Pelangi adalah sebuah pulau yang terletak di Kepulauan Seribu di Daerah Khusus Ibukota Jakarta, Indonesia, Pulau Pelangi / biasa disebut Pulau Petondan Besar ( Pelangi Island ) merupakan pulau resort yang sesuai untuk berlibur. Pulau Resort ini mempunyai konsep natural, karena sebagian wilayahnya di penuhi dengan rerimbunan pohon yang menyejukan mata, Keindahan alam dan lautnya layak untuk dikunjungi. Dikelilingi oleh rimbunan pohon dan laut berwarana biru jernih membuat suasanan sejuk dan nyaman. Kondisi yang ideal untuk wisata bersama keluarga. Dengan akomodasi yang langsung menghadap ke laut membuat turis betah berlama-lama di Pulau Pelangi.\\nMenurut informasi, Pulau Pelangi atau Pulau Petondan Besar merupakan pulau yang berada pada gugusan Kepulauan Seribu. Secara administratif termasuk dalam wilayah Kabupaten Administratif Kepulauan Seribu provinsi DKI Jakarta. Bersamaan dengan Pulau Petondan Kecil merupakan sebuah resort berlibur. Letaknya berdekatan dengan gugusan yang sama dengan Pulau Kelor dan Pulau Kelapa.\\nUntuk mencapai Pelangi Resort dibutuhkan waktu 90 menit perjalanan dari dermaga Pantai Mutiara. Terdapat kapal speedboat khusus di pier R1 Pantai Mutiara yang membawa penumpang kesana. Letaknya 60 â€“ 70 km dari Pantai Mutiara memang lumayan jauh. Namun perjalanan anda terbayar lunas begitu sampai di Pulau Pelangi.\n",
    "google_maps_link": "https://www.google.com/maps?q=-5.587055,106.5885"
}
```

## Search Destinasi

**Endpoint : /search**

**Method: POST**

**Description:** Search data yang diinginkan dari database

**Example request:**

POST https://api-trec-sxk5htqkea-et.a.run.app/search?input=bandung

**Example response:**

```json
{
        "Place_Name": "GunungTangkuban perahu",
        "City": "Bandung",
        "urlImage": ""
    },
    {
        "Place_Name": "Jalan Braga",
        "City": "Bandung",
        "urlImage": ""
    },
    {
        "Place_Name": "Gedung Sate",
        "City": "Bandung",
        "urlImage": ""
    },
    {
        "Place_Name": "Trans Studio Bandung",
        "City": "Bandung",
        "urlImage": ""
    },
```

# Filter Destinasi

**********************************Endpoint: /filter**********************************

**Method:** POST

**Description:** Filter data berdasarkan kategori dan kota

**Example request and response filter category**

**Endpoint :** /filter?cat=budaya

```json
{
        "urlImage": "",
        "Place_id": 82,
        "Place_Name": "Museum Satria Mandala",
        "City": "Jakarta",
        "Category": "Budaya"
    },
    {
        "urlImage": "",
        "Place_id": 86,
        "Place_Name": "Keraton Yogyakarta",
        "City": "Yogyakarta",
        "Category": "Budaya"
    },
```

**Example filter kota**

**Endpoint :** /filter?kota=Semarang

```
{
        "urlImage": "",
        "Place_id": 335,
        "Place_Name": "Candi Gedong Songo",
        "City": "Semarang",
        "Category": "Budaya"
    },
    {
        "urlImage": "",
        "Place_id": 336,
        "Place_Name": "Grand Maerakaca",
        "City": "Semarang",
        "Category": "Taman Hiburan"
    },
```

**Example filter data keduanya**

**Endpoint:** /filter?cat=budaya&kota=Semarang

```json
{
        "urlImage": "",
        "Place_id": 335,
        "Place_Name": "Candi Gedong Songo",
        "City": "Semarang",
        "Category": "Budaya"
    },
    {
        "urlImage": "",
        "Place_id": 338,
        "Place_Name": "Lawang Sewu",
        "City": "Semarang",
        "Category": "Budaya"
    },
```

# Rekomendasi

**********************************Endpoint: /recommendation**********************************

**Method:** POST

**Description:** Melihat data hasil rekomendasi dan menfilter berdasarkan kota

**Example request and response rekomendasi**

Endpoint : POST /recommendation (request JSON)

```
{
    "text": "saya ingin pergi ke tempat wisata yang dekat dengan alam, karena saya ingin melihat banyak pemandangan yang menyejukkan mata"
}
```

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

/recommendation?kota=semarang
