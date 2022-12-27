// fetch("http://dummyjson.com/products")
//  .then((res) => res.json())
//  .then((data) => {
//    console.log(data);
// });


function getProductCard(product) {
  return `<div class="col-3">
                    <div class="card">
                    <div class="ratio ratio-4x3">
                        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                    </div>    
                        <div class="card-body">
                            <p class="card-name">${product.title}</p>
                            <p class="card-category">${product.category}</p>
                            <p class="card-price">${product.price}$</p>
                        </div>
                    </div>
                </div> `;
}
const productsTarget = document.querySelector('#productsTarget');


function getPagination(total, currentPage,limit) {
    let pagination = `<nav aria-label="...">
                          <ul class="pagination pagination-sm justify-content-center">`;
    const totalPages= Math.ceil(total / limit);
    for(let page=1; page<=totalPages; page++){
      if(page === currentPage){
        pagination += `
        <li class="page-item active" aria-current="page">
      <span class="page-link">${[page]}</span>
    </li>`
      }else{
        pagination += `<li class="page-item">
        <a class="page-link" href="javascript:getProducts(${limit},${limit * (page-1)});">${page}</a></li>`
      }
    }

    pagination += `</ul></nav>`;
    return pagination;   
}

async function getProducts(limit = 12, skip = 0) {
  productsTarget.innerHTML = '';
  // const res = await fetch(`http://dummyjson.com/products/search?q=laptop`);
  const res = await fetch(`http://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  const data = await res.json();

  // same as below loop
  // for(i=0; i<data.products.lenght;i++){
  //   const product = data.products[i];
  // }
  for (const product of data.products) {
    productsTarget.innerHTML += getProductCard(product);
  }
  productsTarget.innerHTML += getPagination(data.total,skip/limit +1,limit);
}

// getProductCard. 









getProducts();