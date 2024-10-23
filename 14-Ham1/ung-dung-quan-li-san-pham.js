var products = ["Mạnh"]

function getProducts() {
    let content = ""
    for (let i = 0; i < products.length; i++) {
        content += `<tr>
              <td>${[i+1]}</td>
              <td>${products[i]}</td>
              <td><button onclick="edit(${i})">Edit</button><button onclick="remove(${i})">Delete</button></td>
              </tr>`

    }
    document.getElementById("content").innerHTML = content
    document.getElementById("count").innerHTML = `Tổng số lượng: ${products.length} sản phẩm`
}
getProducts()

function adds() {
    let product = document.getElementById("newProduct").value
    products.push(product)
    getProducts()
    document.getElementById("newProduct").value = ""
}

function remove(id) {
    let check = confirm("Are you sure you want to delete?")
    if (check) {
        products.splice(id,1)
        getProducts()
    }
}
// function edit(id) {
//     let check = confirm("Are you sure you want to edit ?")
//     if (check) {
//
//     }
// }

// function edit(id) {
//     let newName = prompt("Nhập tên mới cho sản phẩm:", products[id]);
//     if (newName !== null && newName.trim() !== "") {
//         products[id] = newName.trim();
//         getProducts()
//     }
// }

function edit(id) {
    let newProductName = prompt("Enter new product name:", products[id]);
    if (newProductName) {
        products[id] = newProductName;
        getProducts();
    }
}