import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import HeaderTile from "../components/HeaderTile";
import ProductTile from "../components/ProductTile";
import { shoppingContext } from "../Context";
import CategoryTile from "../components/CategoryTile";
import Footer from "../components/Footer";
import ExtraCategory from "../components/ExtraCategory";

export default function ExplorePage() {
    const { productList, categoryList, cartItems } = useContext(shoppingContext);

    return (
        <div>
            <Navbar />
            <HeaderTile />
            <h1 class="font-bold text-black font-mono text-center mt-9 tracking-tight">BEST DEALS OF THE MONTH</h1>
            <main class="grid grid-cols-2 mx-3 gap-4 md:grid-cols-3 lg:mt-10 lg:gap-5 lg:grid-cols-4">
                {
                    productList &&
                    productList.map(singleProductItem => {
                        return <ProductTile 
                            key={singleProductItem.id} 
                            {...singleProductItem}
                        />
                    })
                } 
            </main>
            <h2 class="text-black text-3xl font-bold font-mono text-center my-8">Shop By Category</h2>
            <div class="grid grid-cols-2 mx-3 gap-4 md:grid-cols-3 lg:mt-10 lg:gap-5 lg:grid-cols-4">
                {
                    categoryList &&
                    categoryList.map(singleCategory => {
                        return <CategoryTile 
                            key={singleCategory.id}
                            {...singleCategory}
                        />
                    })
                }
            </div>
            <ExtraCategory />
            <Footer />
        </div>
    )
}