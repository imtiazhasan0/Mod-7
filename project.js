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
        div.classList.add("card");
        div.innerHTML=`
        <img class="card-img" src=${products.image} alt="" />
        <h5>${products.title}</h5>
        <h3>Price:${products.price}</h3>
        <p>${products.description}</p>
        <button>Details</button>
        <button onclick="handleaddtocart('${products.title}',${products.price})">Add To Cart</button>
        `;


        productContainer.appendChild(div);
    });
}

const handleaddtocart=(name,price)=>{
    const cartcount=document.getElementById("count").innerText;
    let convertedcount=parseInt(cartcount);
    convertedcount=convertedcount+1;
    document.getElementById("count").innerText=convertedcount;

    const addcontainer=document.getElementById("cart-main-container");
    const div=document.createElement("div");
    div.classList.add("cart-info")
    div.innerHTML=`
    <p>${name}</p>
    <h3 class="price">${price}</h3>
    `;

    addcontainer.appendChild(div);
    updatetotal();
}

const updatetotal=()=>{
    const allprice=document.getElementsByClassName("price");
    let count=0;
    for(const element of allprice)
    {
        count=count+ parseFloat(element.innerText);
    }
    document.getElementById("total").innerText=count;
}



loadallproducts();