import React, { Component } from "react";
import "./form.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   id: props.selectedUser.id ? props.selectedUser.id : "",
      //   nameProduct: props.selectedUser.nameProduct
      //     ? props.selectedUser.nameProduct
      //     : "",
      //   hargaBeli: props.selectedUser.hargaBeli
      //     ? props.selectedUser.hargaBeli
      //     : "",
      //   hargaJual: props.selectedUser.hargaJual
      //     ? props.selectedUser.hargaJual
      //     : "",
      //   qty: props.selectedUser.qty ? props.selectedUser.qty : "",
      //   thumbnailUrl: props.selectedUser.thumbnailUrl
      //     ? props.selectedUser.thumbnailUrl
      //     : "",
      //   diskon: props.selectedUser.diskon ? props.selectedUser.diskon : 0,
    };
  }

  updateUsers = (newProduct) => {
    console.log(newProduct);
    // if (newProduct.id === "")
    // const oldProduct = this.props.productList;
    // oldProduct.push({
    //   id: oldProduct.length
    //     ? Math.max(...oldProduct.map((product) => product.id)) + 1
    //     : 1,
    //   nameProduct: newProduct.nameProduct,
    //   hargaBeli: newProduct.hargaBeli,
    //   hargaJual: newProduct.hargaJual,
    //   qty: newProduct.qty,
    //   thumbnailUrl: newProduct.thumbnailUrl,
    //   diskon: newProduct.diskon,
    // });
    //   return this.setState(
    //     {
    //       productList: oldProduct,
    //     }
    //     // () => this.props.goToPage("productList")
    //   );
    // }
    const oldProduct = this.props.productList;
    const idxProduct = oldProduct
      .map((product) => product.id)
      .indexOf(newProduct.id);
    console.log(idxProduct);
    oldProduct.splice(idxProduct, 1, newProduct);
    this.setState(
      {
        productList: oldProduct,
      }
      // () => this.props.goToPage("productList")
    );
  };

  onSaveHandler = () => {
    const { id, nameProduct, hargaBeli, hargaJual, qty, thumbnailUrl } =
      this.state;
    if (nameProduct === "" || hargaBeli === "" || hargaJual === "")
      return Swal.fire("Waahhh ... ", "yang bener dong", "error");

    this.updateUsers(
      this.props.AddStockProduct({
        id: id,
        nameProduct: nameProduct,
        hargaBeli: hargaBeli,
        hargaJual: hargaJual,
        qty: qty,
        thumbnailUrl: thumbnailUrl,
        diskon: 0,
      })
    );
    return Swal.fire("Mantap ... ", "gitu doong bener", "success");
  };

  setValue = (e) => this.setState({ [e.target.name]: e.target.value });

  componentWillUnmount() {
    this.props.resetUserEdit();
  }

  // cancel = () => {
  //   this.props.goToPage("productList");
  // };

  render() {
    const { id, nameProduct, hargaBeli, hargaJual, thumbnailUrl } = this.state;
    return (
      // <Link to="/formEdit">
      <table className="MyTable">
        <tbody>
          <tr>
            <td>Name Product</td>
            <td>
              <input type="hidden" value={id} />
              <input type="hidden" value={thumbnailUrl} />

              <input
                type="text"
                name="nameProduct"
                value={nameProduct}
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td>Harga Beli</td>
            <td>
              <input
                type="text"
                name="hargaBeli"
                value={hargaBeli}
                onChange={this.setValue}
              />
            </td>
          </tr>
          <tr>
            <td>Harga Jual</td>
            <td>
              <input
                type="text"
                name="hargaJual"
                value={hargaJual}
                onChange={this.setValue}
              />
            </td>
          </tr>
          {/* <tr>
            <td>Quantity</td>
            <td>
              <input
                type="text"
                name="qty"
                value={qty}
                onChange={this.setValue}
              />
            </td>
          </tr> */}
          <tr>
            <td colSpan="3" align="left">
              <Link to="/productList">
                <button className="buttonSaveEdit" onClick={this.onSaveHandler}>
                  Save Edit
                </button>
              </Link>
              <Link to="/productList">
                <button className="buttonCancel" onClick={this.cancel}>
                  Cancel
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      // </Link>
    );
  }
}

// const mapStateToProps = (state) => ({
//   AddNew: state.dataReducer.product,
// });
// const mapDispatchToProps = (dispatch) => ({
//   AddNewProduct: (productBaru) =>
//     dispatch({ type: "ADD", payload: { productBaru } }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

const mapStateToProps = (state) => ({
  productList: state.dataReducer.product,
});

const mapDispatchToProps = (dispatch) => ({
  AddStockProduct: (addStock) =>
    dispatch({ type: "STOCK", payload: { addStock } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
