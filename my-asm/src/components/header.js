const Header = function () {
    // Backticks - string interpolation
    return `
    <header class="bg-blue-500">
    <div class="container mx-auto flex items-center justify-center space-x-16">
        <a href="/"><img class="w-12 m-2" src="/logo.png"/></a>
        <div class="flex">
            <input class="w-96 h-6 rounded-sm" placeholder=" Nhập sách cần tìm..."/>
            <button class="w-24 flex bg-blue-400 text-white rounded-sm">
            <i class="fa-solid fa-magnifying-glass p-1"></i> Tìm kiếm
            </button>
        </div>
        <div class="flex">
            <a id="login" href="" class="hover:text-white"><i class="fa-solid fa-arrow-right-to-bracket"></i> Đăng nhập </a> /
            <a id="signup" href="" class="hover:text-white"><i class="fa-solid fa-user-plus"></i> Đăng ký</a>
        </div>
        <a href="" class="hover:text-white"><i class="fa-solid fa-cart-shopping w-4 "></i> Cart</a>
    </div> 
    <div class="bg-gray-100 h-8"></div>
  </header>
        `;
  }
  
  export default Header