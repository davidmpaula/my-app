"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "./context/CartContext"

interface ClothingItem {
	id: number
	name: string
	description: string
	imageUrl: string
	price: number
}

const clothingItems: ClothingItem[] = [
	{
		id: 1,
		name: "T-Shirt",
		description: "A comfortable and stylish t-shirt.",
		imageUrl: "/images/tshirt.jpg", // Ensure this path is correct
		price: 20
	},
	{
		id: 2,
		name: "Jeans",
		description: "Classic denim jeans for everyday wear.",
		imageUrl: "/images/jeans.jpg", // Ensure this path is correct
		price: 50
	},
	{
		id: 3,
		name: "Jacket",
		description: "A warm and fashionable jacket.",
		imageUrl: "/images/jacket.jpg", // Ensure this path is correct
		price: 80
	},
	{
		id: 4,
		name: "Sweater",
		description: "A cozy and stylish sweater.",
		imageUrl: "/images/sweater.jpg", // Ensure this path is correct
		price: 60
	},
	{
		id: 5,
		name: "Shorts",
		description: "Comfortable shorts for casual wear.",
		imageUrl: "/images/shorts.jpg", // Ensure this path is correct
		price: 30
	},
	{
		id: 6,
		name: "Hat",
		description: "A stylish hat to complete your outfit.",
		imageUrl: "/images/hat.jpg", // Ensure this path is correct
		price: 25
	}
]

export default function Home() {
	const { cart, addToCart } = useCart()

	const handleAddToCart = (item: ClothingItem) => {
		const newItem = { ...item, key: `${item.id}-${Date.now()}` } // Generate a unique key
		addToCart(newItem)
	}

	return (
		<div>
			<div className='bg-gray-100 min-h-screen py-12'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl font-bold text-center text-gray-900 mb-8 animate-fade-in'>
						Welcome to Our Clothing Store
					</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
						{clothingItems.map((item) => (
							<div
								key={item.id}
								className='bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl'
							>
								<Image
									src={item.imageUrl}
									alt={item.name}
									width={500}
									height={400}
									className='object-cover h-64 w-full'
								/>
								<div className='p-6'>
									<h2 className='text-xl font-semibold mb-2 text-gray-900'>{item.name}</h2>
									<p className='text-gray-600 mb-4'>{item.description}</p>
									<p className='text-lg font-bold text-gray-900'>${item.price}</p>
									<button
										onClick={() => handleAddToCart(item)}
										className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full transition-colors duration-300'
									>
										Add to Cart
									</button>
									<Link href={`product/${item.id}`}>
										<div className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 w-full transition-colors duration-300 block text-center'>
											View Product
										</div>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
