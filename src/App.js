//import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo iniDiscount="coming" nama="Hitam Putih Keren" category="VANS"/>
    </div>
  );
}
function iniapa() {
  return (
<div>
<ProdukInfo />
</div>
  );
}
function FotoProduk() {
  return (
      <div className="Foto">
        <img src="sepatu.jpg" />
      </div>
  );
}

function CheckDiscount(props) {
const {iniDiscount} = props;
if (iniDiscount == "yes") {
  return (
    <p>Discount 50% off</p>
  );
}
else if (iniDiscount == "coming") {
  return (
    <p>Akan ada diskon segera</p>
  );
}
else {
  return (
    <p>Belum ada Discount</p>
  );
}
}

function ProdukInfo(props) {
  const { category,nama, iniDiscount } = props ;
  const benefits = ["Tidak kusut air", "Bahan Halus", "Tidak Gerah"]
  const listBenefits = benefits.map((itemBenefits) =>
  <li>{itemBenefits}</li>
  );
  return (
    <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <p className="Title">{nama}</p>
        <p className="Price">RP. 350.000 ,00</p>
        <CheckDiscount iniDiscount={iniDiscount}/>
        <p className="Info">
          one of the most recognizable shoes in the AJ Collection, The Vans 3.
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCart(nama, e)} href='#'>Add to Cart</a>
      </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli Produk" + e);
}

export default App;
