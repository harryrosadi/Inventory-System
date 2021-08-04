export function addData(product) {
  return {
    type: "ADD",
    payload: product,
  };
}

// export function deleteproduct(Id)
// {
//     return {
//     type:'DELETE_product',
//     payload:Id
//     }
// }

export function updateData(product) {
  return {
    type: "UPDATE",
    payload: product,
  };
}
export function tambah(product) {
  return {
    type: "TAMBAH",
    payload: product,
  };
}
