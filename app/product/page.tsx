

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useCart } from "../context/CartContext";

interface ClothingItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "T-Shirt",
    description: "A comfortable and stylish t-shirt.",
    imageUrl: "/images/tshirt.jpg",
    price: 20,
  },
  {
    id: 2,
    name: "Jeans",
    description: "Classic denim jeans for everyday wear.",
    imageUrl: "/images/jeans.jpg",
    price: 50,
  },
  {
    id: 3,
    name: "Jacket",
    description: "A warm and fashionable jacket.",
    imageUrl: "/images/jacket.jpg",
    price: 80,
  },
  {
    id: 4,
    name: "Sweater",
    description: "A cozy and stylish sweater.",
    imageUrl: "/images/sweater.jpg",
    price: 60,
  },
  {
    id: 5,
    name: "Shorts",
    description: "Comfortable shorts for casual wear.",
    imageUrl: "/images/shorts.jpg",
    price: 30,
  },
  {
    id: 6,
    name: "Hat",
    description: "A stylish hat to complete your outfit.",
    imageUrl: "/images/hat.jpg",
    price: 25,
  },
];

// export default function ProductDetails() {
//   const router = useRouter();
//   const { id } = router.query;
//   const product = clothingItems.find((item) => item.id === Number(id));
//   const { addToCart } = useCart();

//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient || !product) {
//     return null;
//   }

//   const handleAddToCart = () => {
//     const newItem = {
//       ...product,
//       color: selectedColor,
//       size: selectedSize,
//       key: `${product.id}-${product.name}-${selectedColor}-${selectedSize}`,
//     };
//     addToCart(newItem);
//     router.push("/cart");
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <Image
//             src={product.imageUrl}
//             alt={product.name}
//             width={500}
//             height={400}
//             className="object-cover h-64 w-full"
//           />
//           <div className="p-6">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900">{product.name}</h2>
//             <p className="text-gray-600 mb-4">{product.description}</p>
//             <p className="text-lg font-bold text-gray-900 mb-4">${product.price}</p>
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Color</label>
//               <select
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//                 className="w-full p-2 rounded bg-gray-200 text-gray-900"
//               >
//                 <option value="">Select Color</option>
//                 <option value="Red">Red</option>
//                 <option value="Blue">Blue</option>
//                 <option value="Green">Green</option>
//                 <option value="Black">Black</option>
//                 <option value="White">White</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-600 mb-2">Size</label>
//               <select
//                 value={selectedSize}
//                 onChange={(e) => setSelectedSize(e.target.value)}
//                 className="w-full p-2 rounded bg-gray-200 text-gray-900"
//               >
//                 <option value="">Select Size</option>
//                 <option value="S">Small</option>
//                 <option value="M">Medium</option>
//                 <option value="L">Large</option>
//                 <option value="XL">Extra Large</option>
//               </select>
//             </div>
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition-colors duration-300"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


export funciton default ProductDet() {
  return ( <div)
}