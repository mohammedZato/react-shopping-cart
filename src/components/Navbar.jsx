import React, { useContext, useState } from "react";
import myLogo from "../images/myLogo.png";
import myFlag from "../images/ghana1.png";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { shoppingContext } from "../Context";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import CategorySidebar from "./categorySidebar";
import { Grid, Search, ShoppingCart, User, } from "lucide-react";

export default function Navbar() {
    const [item, setItem] = useState("");
    const { cartItems, setSidebarToggle, setCategoryToggle, } = useContext(shoppingContext);
    const navigate = useNavigate();

    function handleSidebarToggle() {
        setSidebarToggle(prevState => !prevState);
    };

    function handleCategoryToggle() {
        setCategoryToggle(prevState => !prevState);
    };

    return (
        <nav>
            <div class="mb-4 pt-1 mx-1 flex items-center justify-center space-x-5">
                <div>
                    <img 
                        src={myLogo} 
                        alt="" 
                        class="w-20"
                    />
                </div>
                <div class="relative">
                    <input 
                        type="text" 
                        class="border py-3 px-4 w-64 rounded-3xl border-black"
                        placeholder="I'm shopping for..."
                        id="item"
                        name="item"
                        value={item}
                        onChange={(event) => setItem(event.target.value)}
                    />
                    <button class="px-5 py-1 rounded-full bg-black absolute top-0 bottom-0 left-[181px] hover:border-black">
                        <Search className="size-8 text-white"/>
                    </button>
                </div>
                <Sidebar />
                <div class="hidden lg:flex lg:flex-row lg:space-x-7">
                    <div class="flex items-center cursor-pointer">
                        <span>
                            <Grid className="size-7 mr-1 text-black"/>
                        </span>
                        <h3 class="text-sm text-black">Download the <br /> AliExpress app</h3>
                    </div>
                    <div class="flex items-center cursor-pointer">
                        <img 
                            src={myFlag} 
                            alt="" 
                            class="w-6 mr-1"
                        />
                        <h3 class="text-sm text-black">EN/ <br /> <strong>GHS</strong></h3>
                    </div>
                    <div class="flex items-center cursor-pointer">
                        <span>
                            <User className="size-8 mr-1 text-black"/>
                        </span>
                        <strong className="text-black">Sign in / <br /> Register</strong>
                    </div>
                    <div onClick={() => navigate("/cart")} class="flex items-center cursor-pointer relative">
                        <span class="text-black">
                            <ShoppingCart className="size-8"/>
                        </span>
                        <div class="absolute top-0 right-[-10px] text-black bg-red-500 border rounded-full px-2">{cartItems.length}</div>
                    </div>
                </div>  
                <div>
                    <span class="text-4xl text-black cursor-pointer lg:hidden">
                        <ion-icon onClick={handleSidebarToggle} class="text-black" name="menu-outline"></ion-icon>
                    </span>
                </div>
            </div> 
            <div class="flex items-center px-10 lg:justify-center lg:space-x-6">
                <button class="rounded-3xl bg-black text-white mr-auto lg:mr-0 hover:scale-x-110 transition-transform duration-500">
                    Categories
                </button>
                <ul class="flex flex-wrap md:space-x-3 lg:space-x-6">
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-red-500 font-bold hover:text-black" href="">SuperDeals</a>
                    </li>
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-black hover:text-black" href="">Plus</a>
                    </li>
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-black hover:text-black" href="">New</a>
                    </li>
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-black hover:text-black"  href="">AliExpress Business</a>
                    </li>
                    <li class="text-[17px] hidden md:block lg:text-[20px]">
                        <a class="text-black hover:text-black" href="">Home & Garden</a>
                    </li>
                    <div onClick={handleCategoryToggle} class="text-[17px] lg:text-[20px] text-black font-medium hover:scale-110 transition-transform duration-300 cursor-pointer">
                        More
                    </div>
                </ul>
            </div>
            <CategorySidebar />
        </nav>
    )
}