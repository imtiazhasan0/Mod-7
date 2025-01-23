const loadallproducts=()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                displayproduct(data);
            });
}

const displayproduct=(products)=>{
    const productContainer=document.getElementById("product-container");
    products.forEach((products) => {
        const div=document.createElement("div");
        div.innerHTML=`
        <img src="" alt="" />
        <h5>H</h5>
        <p></p>
        <button>Details</button>
        <button>Add To Cart</button>
        `;


        productContainer.appendChild(div);
    });
}

loadallproducts();