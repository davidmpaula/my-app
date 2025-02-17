"use client"
import { useEffect, useState, use } from "react"

import Image from "next/image"
import { useCart } from "../context/CartContext"
import router from "next/router"

interface ClothingItem {
	id: number
	name: string
	description: string
	imageUrl: string
	price: number
}

export default function ProductDetailComponent(product: any) {
	// const product = clothingItems.find((item) => item.id === Number(id))
	// const { addToCart } = useCart()

	// const [selectedColor, setSelectedColor] = useState("")
	// const [selectedSize, setSelectedSize] = useState("")
	// const [isClient, setIsClient] = useState(false)

	// useEffect(() => {
	// 	setIsClient(true)
	// }, [])

	// if (!isClient || !product) {
	// 	return null
	// }

	// const handleAddToCart = () => {
	// 	const newItem = {
	// 		...product,
	// 		color: selectedColor,
	// 		size: selectedSize,
	// 		key: `${product.id}-${product.name}-${selectedColor}-${selectedSize}`
	// 	}
	// 	addToCart(newItem)
	// 	router.push("/cart")
	// }

	return (
		<div className='bg-gray-100 min-h-screen py-12'>
			<div className='container mx-auto px-4'>
				<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
					<Image
						src={product.imageUrl}
						alt={product.name}
						width={500}
						height={400}
						className='object-cover h-64 w-full'
					/>
					{/* <div className='p-6'>
						<h2 className='text-2xl font-bold mb-4 text-gray-900'>{product.name}</h2>
						<p className='text-gray-600 mb-4'>{product.description}</p>
						<p className='text-lg font-bold text-gray-900 mb-4'>${product.price}</p>
						<div className='mb-4'>
							<label className='block text-gray-600 mb-2'>Color</label>
							<select
								value={selectedColor}
								onChange={(e) => setSelectedColor(e.target.value)}
								className='w-full p-2 rounded bg-gray-200 text-gray-900'
							>
								<option value=''>Select Color</option>
								<option value='Red'>Red</option>
								<option value='Blue'>Blue</option>
								<option value='Green'>Green</option>
								<option value='Black'>Black</option>
								<option value='White'>White</option>
							</select>
						</div>
						<div className='mb-4'>
							<label className='block text-gray-600 mb-2'>Size</label>
							<select
								value={selectedSize}
								onChange={(e) => setSelectedSize(e.target.value)}
								className='w-full p-2 rounded bg-gray-200 text-gray-900'
							>
								<option value=''>Select Size</option>
								<option value='S'>Small</option>
								<option value='M'>Medium</option>
								<option value='L'>Large</option>
								<option value='XL'>Extra Large</option>
							</select>
						</div>
						<button
							onClick={handleAddToCart}
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition-colors duration-300'
						>
							Add to Cart
						</button> */}
					{/* </div> */}
				</div>
			</div>
		</div>
	)
}
