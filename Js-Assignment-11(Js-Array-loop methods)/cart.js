const cartRece = JSON.parse(localStorage.getItem("cartArray"));
const cartshow = document.querySelector("#cartshow");
let multiPrice;
const renderCartFun = () => {
  const cartDisplay = cartRece.map((item, index) => {

    multiPrice = item.price * item.qty;
    cartshow.innerHTML += `<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-lg px-4 md:px-8">
    <div class="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
      <!-- product - start -->
      <div class="py-5 sm:py-8">
        <div class="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
          <div class="sm:-my-2.5">
            <a href="#" class="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
              <img src= ${item.img} loading="lazy" alt="Photo by Thái An" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
          </div>

          <div class="flex flex-1 flex-col justify-between">
            <div>
              <a href="#" class="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">${item.name}</a>

              <span class="block text-gray-500">Brand: ${item.brand}</span>
              <span class="block text-gray-500">Color: White</span>
            </div>

            <div>
              <span class="mb-1 block font-bold text-gray-800 md:text-lg">$${item.price}</span>

              <span class="flex items-center gap-1 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                In stock
              </span>
            </div>
          </div>

          <div class="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
           <div class="flex flex-col items-start gap-3">
  <!-- Qty Box -->
  <div class="flex h-12 w-28 items-center rounded-lg border shadow-sm overflow-hidden">
    <button 
      class="flex w-10 h-full items-center justify-center bg-gray-100 text-lg font-bold hover:bg-gray-200 active:bg-gray-300 transition"
      onclick="decrement(${index})">
      −
    </button>

    <input 
      type="number" 
      value=${cartRece[index].qty} 
      id="inputQty-${index}" 
      class="w-full text-center text-base font-medium outline-none border-x px-2 py-1" 
      readonly
    />

    <button 
      class="flex w-10 h-full items-center justify-center bg-gray-100 text-lg font-bold hover:bg-gray-200 active:bg-gray-300 transition"
      onclick="increment(${index})">
      +
    </button>
  </div>

  <!-- Delete Button -->
  <button 
    class="rounded-md bg-red-500 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-600 active:bg-red-700 transition"
    onclick="deleteItem(${index})">
    Delete
  </button>
</div>


            <div class="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
              <span class="block font-bold text-gray-800 md:text-lg">$${Math.floor(cartRece[index].price * cartRece[index].qty)}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- product - end -->      
    </div>
  </div>
</div>`
  })
}
renderCartFun();
const increment = (index) => {
  cartRece[index].qty += 1;
  totalCard();
  cartshow.innerHTML = ""
  renderCartFun()
  localStorage.setItem("check", JSON.stringify(cartRece));
};

const decrement = (index) => {
  if (cartRece[index].qty <= 1) {
    deleteItem()
  }
  if (cartRece[index].qty > 1) {
    cartRece[index].qty -= 1;
  }
  totalCard();
  cartshow.innerHTML = ""
  renderCartFun()
  localStorage.setItem("check", JSON.stringify(cartRece));
}




const totalCard = () => {
  const Subtotal = cartRece.map(item => item.price * item.qty).reduce((acc, cval) => acc + cval, 0);
  const roundSubtotal = Math.floor(Subtotal);
  const total = document.querySelector("#total");
  const dilivery = Subtotal === 0 ? 0 : 5;
  const totalDispaly = total.innerHTML = `
 <div class="flex flex-col items-end gap-4">
      <div class="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
        <div class="space-y-1">
          <div class="flex justify-between gap-4 text-gray-500">
            <span>Subtotal</span>
            <span>$${roundSubtotal}</span>
          </div>

          <div class="flex justify-between gap-4 text-gray-500">
            <span>Shipping</span>
            <span>$5</span>
          </div>
        </div>

        <div class="mt-4 border-t pt-4">
          <div class="flex items-start justify-between gap-4 text-gray-800">
            <span class="text-lg font-bold">Total</span>

            <span class="flex flex-col items-end">
              <span class="text-lg font-bold">$${roundSubtotal + dilivery} USD</span>
            </span>
          </div>
        </div>
      </div>

      <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base cursor-pointer">Check out</button>
    </div>
    <!-- totals - end -->
`
}
totalCard()


const deleteItem = (index) => {
  cartshow.innerHTML = ""
  cartRece.splice(index, 1);
  renderCartFun()
  totalCard()
  localStorage.setItem("check", JSON.stringify(cartRece));
}
