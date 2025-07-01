console.log("Hello this is JS")

const wrapper = document.querySelector(".sliderWrapper");
console.log(wrapper);

const menuItems = document.querySelectorAll(".menuItem");

const paymentBtn = document.querySelector(".payment");

const buyBtn = document.querySelector(".productBtn");

const closeBtn = document.querySelector(".closeBtn");

// Array of items:
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];


let chosenProduct = products[0];
console.log(chosenProduct);

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelectorAll(".productDesc");

// wrapper.style.transform = "translateX(-100vw);"

menuItems.forEach((item, index) => {
    item.addEventListener("click", ()=> {
        // change the current slide
        console.log("you clicke! " + index)
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product
        chosenProduct = products[index];

        // change texts of currentProduct.
       currentProductTitle.textContent = chosenProduct.title;
       currentProductPrice.textContent = "$" + chosenProduct.price;
       // change the image of currentProduct
        currentProductImg.src = chosenProduct.colors[0].img;


        // assigning new colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    })
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=> {
        currentProductImg.src = chosenProduct.colors[index].img;
    } )
})

currentProductSizes.forEach((size, index)=> {
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white"
            size.style.color =  "black"
        })
        size.style.backgroundColor = "black"
        size.style.color =  "white"
    })
})

buyBtn.addEventListener("click", ()=>{
  paymentBtn.style.display = "flex";

})

closeBtn.addEventListener("click", ()=>{
  paymentBtn.style.display = "none";
})