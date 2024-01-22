import Header from "../components/header"
import Footer from "../components/footer"
// import Card from "../components/card"
// import Advertisement from "../components/advertisement"

// Data
import data from '../../db.json' assert {type: 'json'}
// Pages
const HomePage = function () {
  return `
      ${Header()}
      <div class="bg-gray-100 h-7"></div>
  
      <div class="container mx-auto my-4">
      
        <img class="" src="./public/icons/banner.png" alt="Banner Image"/>
        <div class="w-15 bg-gray-100 ">
        <a href="">Phổ biến</a>
        <a href="">Bán chạy</a>
        <a href="">Hàng mới</a>
        <a href="">Giá thấp</a>
        <a href="">Giá cao</a>
        </div>
        <div class="flex flex-wrap -mx-2">
          ${data.books.map(function (book) {
            return `
              <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
                <div class="">
                  <img class="w-full h-26 " src="${book.images[0].base_url}" alt="Book Image">
                  <div class="p-4">
                  
                    <p class="text-gray-700 text-sm hover: gray"> <a href="/product.js">${book.name} </a> </p>
                    <div class="text-yellow-500">
                    ★★★★★| ${book.rating_average}
                  </div>
                  
                    <p class="text-gray-500 text-xs">${book.list_price}</p>
                  </div>
                </div>
              </div>
            `;
          }).join("")}
      ${Footer()}
    `
}

export default HomePage
