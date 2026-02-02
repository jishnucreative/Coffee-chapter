"use client";

const categories = ["Cappuccino", "Espresso", "Cortado", "Flat White"];

const products = [
  {
    id: 1,
    name: "Nescafe Original",
    price: "₹78.00",
    image:
      "https://i.pinimg.com/originals/68/c2/40/68c240f5797946566996da6780c9b61e.png",
    discount: "-3%",
  },
  {
    id: 2,
    name: "Caramel Cappuccino",
    price: "₹85.00",
    image:
      "https://static.vecteezy.com/system/resources/previews/027/145/815/original/iced-coffee-with-cream-milk-perfect-for-drink-catalog-ai-generated-png.png",
    discount: "-10%",
  },
  {
    id: 3,
    name: "Vanilla Latte",
    price: "₹105.00",
    image:
      "https://i.pinimg.com/originals/c9/c4/f7/c9c4f73587fef7d3e9f6d07671648fb3.png",
    discount: "-5%",
  },
  {
    id: 4,
    name: "Premium Brew",
    price: "₹83.00",
    image:
      "https://png.pngtree.com/png-vector/20240615/ourmid/pngtree-iced-coffee-cappuccino-cup-png-image_12777368.png",
    discount: "-4%",
  },
  {
    id: 5,
    name: "Coffee Lab",
    price: "₹95.00",
    image:
      "https://png.pngtree.com/png-clipart/20240731/original/pngtree-mocha-coffee-frappe-in-glass-png-image_15678155.png",
  },
  {
    id: 6,
    name: "Hazelnut Cappuccino",
    price: "₹75.00",
    image:
      "https://png.pngtree.com/png-clipart/20231003/original/pngtree-coffee-milkshake-in-take-away-pot-png-image_13229914.png",
  },
];

export default function PopularProducts() {
  return (
    <section className="py-20 bg-[url('https://copilot.microsoft.com/th/id/BCO.c632640c-f00e-435f-902e-1a5f4ef3cebd.png')] bg-center bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-10">
          Popular Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10">
          {products.map((item) => (
            <div key={item.id} className="group relative text-center">
              {/* Discount */}
              {item.discount && (
                <span className="absolute top-2 right-2 text-xs text-red-500">
                  {item.discount}
                </span>
              )}

              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>

              {/* Price */}
              <p className="text-sm text-gray-500 mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
