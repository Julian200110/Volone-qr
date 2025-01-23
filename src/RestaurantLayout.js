import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaPlus,
  FaArrowLeft,
  FaThumbsUp,
} from "react-icons/fa";

const RestaurantLayout = () => {
  const [favorites, setFavorites] = useState([]);
  const [language, setLanguage] = useState("EN");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);

  // Modal para calificar
  const [showRatePopup, setShowRatePopup] = useState(false);
  const [popupMessage] = useState(
    "Califica este plato en Google Maps para recibir un 15% de descuento."
  );

  const appetizers = [
    {
      id: 1,
      name: "Bruschetta Classic",
      price: "$12.99",
      description: "Fresh tomatoes, garlic, basil on toasted bread",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
      isChefSuggestion: true,
      allergens: ["Gluten", "Dairy"],
      ingredients:
        "Fresh tomatoes, garlic, extra virgin olive oil, fresh basil, baguette, salt, black pepper",
      nutritionalInfo:
        "Calories: 220kcal | Protein: 6g | Carbs: 24g | Fat: 12g",
      quantity: 0,
    },
    {
      id: 2,
      name: "Calamari Fritti",
      price: "$15.99",
      description: "Crispy fried squid with marinara sauce",
      image: "https://images.unsplash.com/photo-1604909052743-94e838986d24",
      isChefSuggestion: false,
      allergens: ["Shellfish", "Gluten"],
      ingredients:
        "Fresh squid, flour, eggs, breadcrumbs, marinara sauce, lemon, parsley",
      nutritionalInfo:
        "Calories: 320kcal | Protein: 18g | Carbs: 28g | Fat: 16g",
      quantity: 0,
    },
    {
      id: 3,
      name: "Caprese Salad",
      price: "$11.99",
      description: "Fresh mozzarella, tomatoes, and basil",
      image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804",
      isChefSuggestion: true,
      allergens: ["Dairy"],
      ingredients:
        "Fresh mozzarella, ripe tomatoes, fresh basil, balsamic glaze, extra virgin olive oil, salt",
      nutritionalInfo:
        "Calories: 280kcal | Protein: 14g | Carbs: 8g | Fat: 22g",
      quantity: 0,
    },
    {
      id: 4,
      name: "Garlic Shrimp",
      price: "$16.99",
      description: "Sautéed shrimp in garlic butter sauce",
      image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6",
      isChefSuggestion: false,
      allergens: ["Shellfish", "Dairy"],
      ingredients:
        "Fresh shrimp, garlic, butter, white wine, parsley, lemon, red pepper flakes",
      nutritionalInfo:
        "Calories: 260kcal | Protein: 24g | Carbs: 4g | Fat: 16g",
      quantity: 0,
    },
  ];

  // Funciones del carrito
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Marcar/desmarcar favoritos + mostrar pop-up
  const toggleFavorite = (id) => {
    if (!favorites.includes(id)) {
      setShowRatePopup(true);
    }
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBack = () => {
    if (showFullDetails) {
      setShowFullDetails(false);
      setSelectedItem(null);
    }
  };

  /***************************************************
   * Sección Carrito
   ***************************************************/
  if (showCart) {
    const totalBeforeDiscount = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return sum + price * item.quantity;
    }, 0);

    const discount = discountApplied ? totalBeforeDiscount * 0.15 : 0;
    const totalAfterDiscount = totalBeforeDiscount - discount;

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
        <header className="backdrop-blur-lg bg-gray-950/80 shadow-2xl border-b border-gray-800/50 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowCart(false)}
                className="text-white hover:text-[#f5a00c] transition-colors duration-300"
              >
                <FaArrowLeft className="text-2xl" />
              </button>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#f5a00c] to-[#e59200] bg-clip-text text-transparent">
                Carrito de Compras
              </h1>
              <div className="w-8" />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-center animate-pulse">
              El carrito está vacío
            </p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900/50 p-4 rounded-xl flex justify-between 
                             items-center gap-4 backdrop-blur-sm hover:bg-gray-900/70 
                             transition-all duration-300 border border-gray-800/50"
                >
                  {/* Imagen y detalles del producto */}
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-[#f5a00c] font-semibold">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  {/* Botones para la cantidad */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 
                                 rounded-lg transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="text-white font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 
                                 rounded-lg transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Resumen de precios y botón de descuento */}
              <div className="mt-6 pt-6 border-t border-gray-800 space-y-4">
                <div className="flex justify-between text-white">
                  <span>Total sin descuento:</span>
                  <span className="font-bold text-[#f5a00c]">
                    ${totalBeforeDiscount.toFixed(2)}
                  </span>
                </div>

                {discountApplied && (
                  <div className="flex justify-between text-white">
                    <span>Descuento (15%):</span>
                    <span className="font-bold text-green-400">
                      - ${discount.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-white">
                  <span>Total a Pagar:</span>
                  <span className="font-bold text-[#f5a00c]">
                    ${totalAfterDiscount.toFixed(2)}
                  </span>
                </div>

                {!discountApplied ? (
                  <button
                    onClick={() => setDiscountApplied(true)}
                    className="w-full flex items-center justify-center bg-gradient-to-r 
                               from-[#f5a00c] to-[#e59200] hover:from-[#e59200] hover:to-[#f5a00c] 
                               text-white py-3 rounded-xl transition-all duration-500 
                               transform hover:-translate-y-1 font-semibold shadow-lg 
                               hover:shadow-[#f5a00c]/20 space-x-2"
                  >
                    <FaThumbsUp className="text-xl" />
                    <span>Aplicar Descuento 15%</span>
                  </button>
                ) : (
                  <p className="text-center text-green-400 font-semibold">
                    ¡Descuento aplicado!
                  </p>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  /***************************************************
   * Sección de Detalles
   ***************************************************/
  if (showFullDetails && selectedItem) {
    const handleAddToCartAndGoCart = () => {
      addToCart(selectedItem);
      setShowCart(true);
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
        <header className="backdrop-blur-lg bg-gray-950/80 shadow-2xl border-b border-gray-800/50 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                className="text-white hover:text-[#f5a00c] transition-colors duration-300"
              >
                <FaArrowLeft className="text-2xl" />
              </button>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#f5a00c] to-[#e59200] bg-clip-text text-transparent">
                Detalles
              </h1>
              <div className="w-8" />
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div
            className="bg-gray-900/50 rounded-2xl overflow-hidden shadow-2xl 
                       border border-gray-800/50 backdrop-blur-sm 
                       hover:shadow-[#f5a00c]/20 transition-all duration-500"
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">
                  {selectedItem.name}
                </h2>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#f5a00c] to-[#e59200] bg-clip-text text-transparent">
                  {selectedItem.price}
                </span>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="mb-8">
                <h3 className="text-[#f5a00c] font-semibold mb-3 text-xl">
                  Alérgenos:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedItem.allergens.map((allergen, index) => (
                    <span
                      key={index}
                      className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full 
                                 text-sm font-medium backdrop-blur-sm hover:bg-red-500/30 
                                 transition-colors duration-300"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-[#f5a00c] font-semibold mb-3 text-xl">
                  Ingredientes:
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedItem.ingredients}
                </p>
              </div>

              <div className="mb-8 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-[#f5a00c] font-semibold mb-3 text-xl">
                  Información Nutricional:
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedItem.nutritionalInfo}
                </p>
              </div>

              <button
                onClick={handleAddToCartAndGoCart}
                className="w-full bg-gradient-to-r from-[#f5a00c] to-[#e59200] 
                           hover:from-[#e59200] hover:to-[#f5a00c] text-white py-4 
                           rounded-xl transition-all duration-500 text-lg font-semibold 
                           shadow-lg hover:shadow-[#f5a00c]/20 transform hover:-translate-y-1"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /***************************************************
   * Sección Principal
   ***************************************************/
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black relative">
      {/* MODAL / POP-UP renovado */}
      {showRatePopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-950/80 border border-gray-800/50 rounded-2xl p-8 shadow-2xl w-full max-w-md text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#f5a00c] to-[#e59200] bg-clip-text text-transparent mb-4">
              ¡Atención!
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {popupMessage}
            </p>
            <button
              onClick={() => setShowRatePopup(false)}
              className="bg-gradient-to-r from-[#f5a00c] to-[#e59200] 
                         hover:from-[#e59200] hover:to-[#f5a00c] 
                         text-white py-3 px-6 rounded-xl transition-all duration-500 
                         transform hover:-translate-y-1 font-semibold shadow-lg 
                         hover:shadow-[#f5a00c]/20"
            >
              Calificar
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="backdrop-blur-lg bg-gray-950/80 shadow-2xl border-b border-gray-800/50 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="text-white hover:text-[#f5a00c] transition-colors duration-300">
              <FaArrowLeft className="text-2xl" />
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#f5a00c] to-[#e59200] bg-clip-text text-transparent">
              Entrantes
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowCart(true)}
                  className="relative group"
                >
                  <FaShoppingCart className="text-2xl text-white group-hover:text-[#f5a00c] transition-colors duration-300" />
                  {cartItems.length > 0 && (
                    <span
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-[#f5a00c] to-[#e59200] 
                                 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center 
                                 transform group-hover:scale-110 transition-transform duration-300"
                    >
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  )}
                </button>
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-gray-800/50 text-white py-2 px-4 rounded-lg 
                           cursor-pointer border border-gray-700/50 
                           hover:border-[#f5a00c] transition-all duration-300 
                           backdrop-blur-sm focus:outline-none 
                           focus:ring-2 focus:ring-[#f5a00c]/50"
              >
                <option value="EN">EN</option>
                <option value="ES">ES</option>
                <option value="FR">FR</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Lista de productos */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {appetizers.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900/50 rounded-2xl shadow-2xl overflow-hidden 
                         hover:shadow-[#f5a00c]/20 transition-all duration-500 
                         border border-gray-800/50 hover:border-[#f5a00c] 
                         backdrop-blur-sm group"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  {/* h-64 para unificar todas las imágenes */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-t-2xl 
                               md:rounded-l-2xl md:rounded-t-none 
                               group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {item.name}
                      </h3>
                      {item.isChefSuggestion && (
                        <span className="bg-gradient-to-r from-[#f5a00c] to-[#e59200] text-white text-sm px-4 py-1.5 rounded-full font-medium shadow-lg">
                          Sugerencia del chef
                        </span>
                      )}
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-[#f5a00c] to-[#e59200] bg-clip-text text-transparent">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        setShowFullDetails(true);
                      }}
                      className="bg-gradient-to-r from-[#f5a00c] to-[#e59200] 
                                 hover:from-[#e59200] hover:to-[#f5a00c] 
                                 text-white px-8 py-3 rounded-xl 
                                 transition-all duration-500 transform hover:-translate-y-1 
                                 shadow-lg hover:shadow-[#f5a00c]/20"
                    >
                      Ver más
                    </button>

                    <div className="flex space-x-6">
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-3 rounded-full ${
                          favorites.includes(item.id)
                            ? "text-red-500"
                            : "text-gray-400"
                        } hover:text-red-500 transition-colors duration-300 transform hover:scale-110`}
                      >
                        <FaHeart className="text-2xl" />
                      </button>
                      <button
                        onClick={() => addToCart(item)}
                        className="p-3 rounded-full bg-gradient-to-r from-[#f5a00c] to-[#e59200] 
                                   hover:from-[#e59200] hover:to-[#f5a00c] text-white 
                                   transition-all duration-500 transform hover:-translate-y-1 
                                   shadow-lg hover:shadow-[#f5a00c]/20"
                      >
                        <FaPlus className="text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default RestaurantLayout;
