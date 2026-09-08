const bookdata = [
    { image: "", price: 465 },
    { image: "", price: 465 },
    { image: "", price: 465 },
    { image: "", price: 465 },
    { image: "", price: 465 },
    { image: "", price: 465 }
];

function Book(props) {

    const div = document.createElement("div");
    div.setAttribute("class", "card");

    const image = document.createElement("img");

    image.setAttribute("src", props.image);
    image.setAttribute("width", "100px");
    image.setAttribute("height", "100px");

    const h2 = document.createElement("h2");
    h2.innerText = "Price: $" + props.price;

    const bt = document.createElement("button");
    bt.innerText = "Add to Cart";
       bt.onclick=()=>addToCart(props);
    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(bt);

    return div;
}
cart = [];
function addToCart(data){
cart.push(data);
    console.log(data,"data added succesfully");
    console.log(cart);
    alert("Book added to cart successfully!");
}
const bookstore = bookdata.map((book) =>
    Book(book)
);

const parent = document.getElementById("root");

bookstore.forEach((book) => {
    parent.appendChild(book);
});