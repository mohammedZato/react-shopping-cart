import React, { useContext, useEffect } from "react";
import { shoppingContext } from "../Context";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCart, StarIcon } from "lucide-react";

export default function ProductDetails() {
    const { productDetails, setProductDetails, cartItems, handleAddToCart, } = useContext(shoppingContext);
    const { id } = useParams();
    const navigate = useNavigate();

    async function fetchProductDetails() {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();

        if (result) {
            setProductDetails(result);
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    return (
        <div className="font-poppins">
            <div onClick={() => navigate("/cart")} class="text-slate-700 text-3xl text-right mx-10 pt-8 relative cursor-pointer">
                <div className="absolute right-1">
                    <ShoppingCart className="size-8"/>
                </div>
                <span class="absolute -right-0.5 top-[24px] text-sm text-white bg-red-600 rounded-full px-2 border">
                    {cartItems.length}
                </span>
            </div>
            <div class="p-6 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
                <div class="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
                    <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div class="px-2 py-7 rounded-xl shadow-lg relative">
                            <img 
                                class="w-4/5 rounded object-cover"
                                src={productDetails.thumbnail}
                                alt={productDetails.title}
                            />
                        </div>
                        <div class="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                            {
                                productDetails.images &&
                                productDetails.images.map(imageElt => {
                                    return (
                                        <div class="w-24 cursor-pointer">
                                            <img src={imageElt} alt="Product secondary Image" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div class="lg:w-80 border-b pb-5 border-gray-300">
                        <h2 class="text-2xl font-medium text-black text-[#3333333}">{productDetails.title}</h2>
                        <div class="flex flex-wrap gap-4 mt-4">
                            <p class="text-base text-black font-bold">${productDetails.price}</p>
                        </div>
                        <div>
                            <button 
                                onClick={() => handleAddToCart(productDetails)}
                            //Disable button if item already exists in cart items
                                disabled={cartItems.findIndex(item => item.id === productDetails.id) > -1}
                                class=" disabled:opacity-65 mt-5 min-w-[200px] px-4 mb-4 py-3 border border-[#333] bg-transparent text-black text-sm font-semibold rounded hover:bg-gray-400">
                                    Add to cart
                            </button>
                        </div>
                        <div class="border-b pb-5 border-gray-300">
                            <h3 class="text-md text-black">
                                {productDetails.description}
                            </h3>
                            <div class="text-yellow-400 mt-2 flex flex-row items-center space-x-1">
                                <StarIcon />
                                <div>
                                    {productDetails.rating}
                                </div>
                            </div>
                        </div>
                        <div class="border-b pb-5 border-gray-300">
                            <h2 class="text-lg text-black font-bold cursor-pointer mt-2 hover:text-slate-500">
                                Delivery &#11166;
                            </h2>
                            <h3 class="text-md text-black font-medium">
                                <strong>Shipping</strong>: $5.99
                            </h3>
                            <h3 class="text-md text-black font-medium">
                                <strong>MOQ</strong>: {productDetails.minimumOrderQuantity} 
                            </h3>
                            <h3 class="text-black">
                                <strong>DeliveryDelivery</strong>: {productDetails.shippingInformation}
                            </h3>
                        </div>
                        <div class="border-b pb-5 border-gray-300">
                            <h2 class="text-lg text-black font-bold cursor-pointer mt-2 hover:text-slate-500">
                                Service
                            </h2>
                            <h3 class="text-black">
                                Return Policy: {productDetails.returnPolicy}
                            </h3>
                        </div>
                        {/* <div class=" pb-5 border-gray-300">
                            <h2 class="text-lg font-bold cursor-pointer mt-2">
                                Reviews 3
                            </h2>
                            <div class="max-w-52 max-h-32">
                                <div class="bg-gray-200 rounded-lg p-4 mt-2"> 
                                    <h3>Name: {productDetails.reviews[0].reviewerName}</h3>
                                    <h3>Comment: {productDetails.reviews[0].comment}</h3>
                                    <h3>Rating: {productDetails.reviews[0].rating}</h3>
                                </div>
                                <h4 class="text-lg font-bold cursor-pointer mt-3 hover:text-slate-500">
                                    View More Reviews &#11166;
                                </h4>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>  
    )
}