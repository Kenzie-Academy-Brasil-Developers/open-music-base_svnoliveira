import { products, categories } from "./productsData.js";
import { handleThemeChange, savedThemePreference } from "./theme.js";
import { renderFilters, renderCards } from "./render.js";
import { setupFilters } from "./filters.js";
import { handleSlider } from "./price-filters.js";

savedThemePreference();
handleThemeChange();
renderFilters(categories);
setupFilters();
handleSlider();
renderCards(products);