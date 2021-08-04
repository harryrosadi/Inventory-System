import React, { Component } from "react";
import "./productList.css";
import { Link } from "react-router-dom";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  editUser = (product) => this.props.updateUser(product);

  addProduct = (move) => {
    this.props.goToPage("AddForm");
  };

  listPenjualan = (data) => {
    const { listProduct } = this.props;

    console.log("list penjualan in productList", data);

    listProduct(data);
  };

  editDiskon = (data) => {
    console.log("diskon in list: ", data);

    const { setDiskon } = this.props;
    setDiskon(data);
  };

  pembelianBarang = (e) => {
    this.props.detailHandler(e.id - 1);
    this.props.tambahStok(e.id);
    // this.props.goToPage("pembelian");
    console.log("crooooootttt", e.id);
    console.log("coooo", e);
  };

  renderProductList = () => {
    const { datas } = this.props;
    console.log("INI", datas);

    return datas.map((product, idx) => {
      console.log(product);

      return (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{product.nameProduct}</td>
          <td>{product.hargaBeli}</td>
          <td>{product.hargaJual}</td>
          <td>{product.qty}</td>
          <td>
            {/* <button data-id={product.id}>Detail</button> */}
            <Link to="/formEdit">
              <button
                className="editButton"
                onClick={() => this.editUser(product)}
              >
                Edit
              </button>
            </Link>
            <Link to="/diskon">
              <button
                className="diskonButton"
                onClick={() => this.editDiskon(product)}
              >
                Diskon
              </button>
            </Link>
            <Link to="/pembelian">
              <button
                className="stokButton"
                onClick={() => this.pembelianBarang(product)}
              >
                Add Stock
              </button>
            </Link>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        <Link to="/tambahBarang">
          <button
            className="buttonAdd"
            // onClick={() => this.props.goToPage("AddForm")}
          >
            Add New Product
          </button>
        </Link>
        <table width="70%">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Harga Beli</th>
              <th>Harga Jual</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderProductList()}</tbody>
        </table>
      </>
    );
  }
}

export default ProductList;
