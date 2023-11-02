// const main = document.querySelector("#main")
// const basket = document.querySelector("#basket")
// const getUser = () => {
//     const res = fetch(`https://dummyjson.com/products`)
//     res
//         .then((val) => val.json())
//         .then((data) => {
//             (data["products"]).map((item) => {
//                 main.innerHTML += `
//         <div class="card" style="width:18rem; id="${item.id}">
//             <img src ="${item.image[0]}" class="card-img-top" alt="..." style="height:300px;">
//             <div class = "card-body">
//                 <h5 class = "card-title">Name:${item.title}</h5>
//                 <h5 class = "card-title">Price:${item.price}</h5>
//                 <h5 class = "card-title">Rating:${item.rating}</h5>
//                 <h5 class = "card-title">Stock:${item.stock}</h5>
//                 <button type="button" class="btn btn-success" onclick="addToBasket(this)">Add to Basket</button>
//             </div>
//          </div>`
//             })
//         })
// }

// const addToBasket = (e) => {
//     basket.innerHTML += ``
// }
// getUser()



const cardContainer= document.querySelector(".cardContainer");
const BASE_URL = "https://dummyjson.com";
const getPosts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    const data = res.json();
    return data;
  };

const creatCard = () => {
    getPosts().then((data) => {
      data.products.map((elem) => {
        const card = document.createElement("div");
        card.style.border = "1px solid red";
        card.style.width = "18rem";
        const id = document.createElement("p");
        const title = document.createElement("p");
        const price = document.createElement("p");
        const images = document.createElement("img");
        id.innerText = elem.id;
        title.innerText = elem.title;
        price.innerText = elem.price;
        images.setAttribute("src" ,elem.images[1]);
        images.style.width = "150px";
        card.append(id,title,price,images);
        cardContainer.appendChild(card);
        
      })
    })
}
creatCard()