// let peopleArray = ["Abdullah", "Wasay", "Rehman", "Rashid Hussian", "Saima Rashid", "Mahnoor"];

// // const peopleFunc = ()=>{
// //     return `people are ${peopleArray[2]}`
// // }
// // console.log(peopleFunc());


// // const singleStatFunc = statment => `this is the way to write the function when we have the single parameter or single statment and we not return the value in this way of write ${statment}`;

// // console.log(singleStatFunc(peopleArray[1]));

// // const personsObject = {
// //     home: "Misri Khan",
// //     laptop: "Abdullah",
// //     ArrowFunct: () => personsObject.laptop ,
// //     bike: "Rashid Hussain"

// // }
// // console.log(personsObject.laptop);

// // console.log(personsObject.ArrowFunct());

// //  for of loop use for array 
// // for (const items of peopleArray) {
// //     console.log(items + " this is the home members");

// // }

// // for(const keys in personsObject){
// //        console.log(`${keys}  value is  ${personsObject[keys]}`);
// // }

// //    in forEach no this is return even by the use of return

// // let arrayEachLoop = peopleArray.forEach(items => {
// //     if(items.length <= 6){
// //         console.log(items);
// //     }
// // }) 

// //  map return the value when we use return keyWords    first argument
// // const arrayMapLoop = peopleArray.map((items , index , arr) => console.log(index , items , arr))

const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech",
        img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung",
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell",
        img: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=400&h=300&fit=crop"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL",
        img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas",
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva",
        img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks",
        img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland",
        img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=300&fit=crop"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster",
        img: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=300&fit=crop"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic",
        img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG",
        img: "https://images.unsplash.com/photo-1585730062411-9c56d97db8e9?w=400&h=300&fit=crop"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson",
        img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville",
        img: "https://images.unsplash.com/photo-1569672587-12a7d65495ad?w=400&h=300&fit=crop"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine",
        img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker",
        img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=300&fit=crop"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie",
        img: "https://images.unsplash.com/photo-1588072432839-68d6b36dd9b3?w=400&h=300&fit=crop"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline",
        img: "https://images.unsplash.com/photo-1588072432907-59d0e3aaea88?w=400&h=300&fit=crop"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren",
        img: "https://images.unsplash.com/photo-1531346681931-25c6bc69e9a9?w=400&h=300&fit=crop"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm",
        img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture",
        img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder",
        img: "https://images.unsplash.com/photo-1595425837375-4273453d3042?w=400&h=300&fit=crop"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn",
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam",
        img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex",
        img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify",
        img: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=400&h=300&fit=crop"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton",
        img: "https://images.unsplash.com/photo-1571019614241-69ef1d9e6b7b?w=400&h=300&fit=crop"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig",
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja",
        img: "https://images.unsplash.com/photo-1632151931853-3ce1e0c9a4cf?w=400&h=300&fit=crop"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid",
        img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=300&fit=crop"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool",
        img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch",
        img: "https://images.unsplash.com/photo-1601880368244-84efc8a1601f?w=400&h=300&fit=crop"
    }
];
let category = ["All"]
let categoryMap = products.filter(items => {
    if (!category.includes(items.category)) {
        category.push(items.category)
    }
})
let catogryBtn = document.querySelector("#CatogryBtn");
let productCardSection = document.querySelector("#productCardSection");
let btnSection = category.map(items => {
    catogryBtn.innerHTML += `<button type="button" class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onclick="categoryDisplay('${items}')" >${items}</button>`
})

const categoryDisplay = (items) => {

    const flteredProducts = products.filter(item => item.category === items);
    renderFun(flteredProducts);
}

const renderFun = (products) => {
    productCardSection.innerHTML = ""
    products.map((item, index, arr) => {
        productCardSection.innerHTML += `<div class="container mx-auto p-6">
    <!-- Grid wrapper -->
    <div class="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition duration-300">
        <!-- Product Image -->
        <div class="mb-4">
            <img src="${item.img}" 
                 alt="${item.name}" 
                 class="w-full h-48 object-cover rounded-xl mb-4">
        </div>
        
        <h3 class="text-xl font-semibold text-gray-800 mb-2">${item.name}</h3>
        <h4 class="text-md font-medium text-gray-500 mb-2">${item.brand}</h4>
        <p class="text-sm text-gray-600 mb-1">Category: ${item.category}</p>
        <p class="text-lg font-bold text-indigo-600">$${item.price.toFixed(2)}</p>
        <button onclick="addCart('${index}')" 
                class="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition cursor-pointer">
            Add to Cart
        </button>
    </div>
</div>
`

    })
}
renderFun(products)

const cartArray = []
let count;
const addCart = (index) => {
    //    cartArray.push(products[index])
    //     console.log(cartArray);
    if (!cartArray.includes(products[index])) {
        cartArray.push(products[index]);
        products[index].qty = 1;
        // console.log(cartArray)
    } else {
        products[index].qty += 1;

    }
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    console.log(cartArray);
}

const cartPage = () => {
    window.location = "cart.html"
}