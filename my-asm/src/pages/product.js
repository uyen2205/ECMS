import Header from "../components/header"
import Footer from "../components/footer"
// import Card from "../components/card"
// import Advertisement from "../components/advertisement"

// Data
import data from '../../db.json' assert {type: 'json'}
// Pages
const product = function () {
  return `
      ${Header()}
      
          ${data.books.map(function (book) {
            return `
        <> 
            <div class="grid grid-cols-3">
            <div class="col-span-1">
                 <img src="${book.images[0].base_url}" alt="Ảnh lớn" class="class="object-cover w-full h-full"">
                  <div class="grid grid-cols-5 gap-4 mt-5">
                        <img src="${book.images[0].thumbnail_url}" alt="Ảnh nhỏ 1" class="w-full h-16 object-cover">
                        <img src="${book.images[0].thumbnail_url}" alt="Ảnh nhỏ 2" class="w-full h-16 object-cover">
                        <img src="${book.images[0].thumbnail_url}" alt="Ảnh nhỏ 3" class="w-full h-16 object-cover">
                        <img src="${book.images[0].thumbnail_url}" alt="Ảnh nhỏ 4" class="w-full h-16 object-cover">
                        <img src="${book.images[0].thumbnail_url}" alt="Ảnh nhỏ 5" class="w-full h-16 object-cover">
                  </div>
                </div>
                <div class="col-span-2">
                

                <!-- Thông tin sản phẩm -->
                <h3 class="text-xl font-semibold mb-2">${book.name}</h3>
                <!-- Đánh giá sao -->
                <div class="flex items-center mb-2">
                  <div class="text-yellow-500">
                    ★★★★★| ${book.rating_average}
                  </div>
                  <span class="text-gray-600 ml-2">(Đánh giá từ 123 người dùng)</span>
                </div>
              
                <!-- Số lượng bán -->
                <p class="text-gray-600 mb-4">Số lượng bán: 500 đơn hàng</p>
              <p>${book.short_description}</p>
                <!-- Giá sản phẩm -->
                <span class="text-lg text-green-500 font-semibold">${book.list_price}</span> <!-- Giá mới -->
                <span class="text-lg text-gray-500 line-through mr-2">${book.original_price}</span>
                <div class="flex items-center mb-4">
                <label for="quantity" class="mr-2">Số lượng:</label>
                <input type="number" id="quantity" name="quantity" class="border p-2 w-16 text-center" value="1">
              </div>
                <!-- Nút mua hàng -->
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Mua Ngay</button>
              

                
                </div>
            </div> 
        </div>

        <div class="mt-4 mb-4">
        <h3 class="text-2xl font-bold"> Các sản phẩm tương tự</h3>
        
        <div class="grid grid-cols-5 gap-4 mt-4">
        <!-- Card 1 -->
        <div class="col-span-1">
          <div class="border border-gray-300 p-4">
            <!-- Hình ảnh sản phẩm -->
            <img src="${book.images[0].base_url}" alt="Sản phẩm 1" class="w-full h-32 object-cover mb-4">
      
            <!-- Thông tin sản phẩm -->
            <h3 class="text-lg font-semibold mb-2">${book.name}</h3>
            <div class="text-yellow-500">
            ★★★★★| ${book.rating_average}
          </div>
            <p class="text-gray-600">${book.list_price}</p>
          </div>
        </div>

        <div class="col-span-1">
        <div class="border border-gray-300 p-4">
          <!-- Hình ảnh sản phẩm -->
          <img src="${book.images[0].base_url}" alt="Sản phẩm 1" class="w-full h-32 object-cover mb-4">
    
          <!-- Thông tin sản phẩm -->
          <h3 class="text-lg font-semibold mb-2">${book.name}</h3>
          <div class="text-yellow-500">
          ★★★★★| ${book.rating_average}
        </div>
          <p class="text-gray-600">${book.list_price}</p>
        </div>
      </div>
      <div class="col-span-1">
      <div class="border border-gray-300 p-4">
        <!-- Hình ảnh sản phẩm -->
        <img src="${book.images[0].base_url}" alt="Sản phẩm 1" class="w-full h-32 object-cover mb-4">
  
        <!-- Thông tin sản phẩm -->
        <h3 class="text-lg font-semibold mb-2">${book.name}</h3>
        <div class="text-yellow-500">
        ★★★★★| ${book.rating_average}
      </div>
        <p class="text-gray-600">${book.list_price}</p>
      </div>
    </div>
    <div class="col-span-1">
    <div class="border border-gray-300 p-4">
      <!-- Hình ảnh sản phẩm -->
      <img src="${book.images[0].base_url}" alt="Sản phẩm 1" class="w-full h-32 object-cover mb-4">

      <!-- Thông tin sản phẩm -->
      <h3 class="text-lg font-semibold mb-2">${book.name}</h3>
      <div class="text-yellow-500">
      ★★★★★| ${book.rating_average}
    </div>
      <p class="text-gray-600">${book.list_price}</p>
    </div>
  </div>
  <div class="col-span-1">
  <div class="border border-gray-300 p-4">
    <!-- Hình ảnh sản phẩm -->
    <img src="${book.images[0].base_url}" alt="Sản phẩm 1" class="w-full h-32 object-cover mb-4">

    <!-- Thông tin sản phẩm -->
    <h3 class="text-lg font-semibold mb-2">${book.name}</h3>
    <div class="text-yellow-500">
    ★★★★★| ${book.rating_average}
  </div>
    <p class="text-gray-600">${book.list_price}.</p>
  </div>
</div>
        </div>
        
        <div class="border border-gray-300 p-4 mt-4 mb-4">
    
        <p class="text-2xl font-bold">Mô tả sản phẩm </p>
        <!-- Mô tả sản phẩm dài -->
        <div class="text-gray-700 mb-4 mt-8">
          <p>${book.description}</p>
        </div>
      </div>



            `
            
          }).join("")}
      ${Footer()}
    `
}

export default  product 

