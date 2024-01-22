const app = document.querySelector("#app");
import HomePage from "./pages/HomePage";
import { render, router } from "./utilities";
import product from "./pages/product";

// import pro from "./pages/";
// import NotFoundPage from "./pages/NotFound";
// import ProductAdd from "./pages/admin/Product-add";



// ĐĂNG KÝ KHAI BÁO
router.on("/", () => render(HomePage, app));
router.on("/product.js", () => render(product, app));


// START
router.resolve();