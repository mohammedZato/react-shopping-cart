import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const shoppingContext = createContext();

function GlobalState({children}) {
    const [productList, setProductList] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [categoryToggle, setCategoryToggle] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function fetchProductList() {
        setLoading(true);

        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json()

        setProductList(result.products);
        setLoading(false);
    }

    useEffect(() => {
        fetchProductList();
        setCartItems(JSON.parse(localStorage.getItem("cartItems")) || [])
    }, []);

    async function fetchCategoryList() {
        const response = await fetch("https://dummyjson.com/products/categories");
        const result = await response.json();

        setCategoryList(result);
    }

    useEffect(() => {
        fetchCategoryList();
    }, []);

    function handleAddToCart(fetchProductDetails) {
        let cpyExistingCartItems = [...cartItems];
        const findIndexOfCartItem = cpyExistingCartItems.findIndex(cartItem => cartItem.id === fetchProductDetails.id);

        if (findIndexOfCartItem === -1) {
            cpyExistingCartItems.push({
                ...fetchProductDetails,
                quantity: 1,
                totalPrice: fetchProductDetails.price
            })
        } else {
            cpyExistingCartItems[findIndexOfCartItem] = {
                ...cpyExistingCartItems[findIndexOfCartItem],
                quantity: cpyExistingCartItems[findIndexOfCartItem].quantity + 1,
                totalPrice: (cpyExistingCartItems[findIndexOfCartItem].quantity + 1) * cpyExistingCartItems[findIndexOfCartItem].price
            }
        }

        setCartItems(cpyExistingCartItems);
        localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
        navigate("/cart");
    }

    function handleRemoveProduct(fetchProductDetails, isFullyRemoved) {
        // check if products exist within list
        let cpyExistingCartItems = [...cartItems];
        const findIndexOfCartItem = cpyExistingCartItems.findIndex(item => item.id === fetchProductDetails.id);

        //Remove one item from list with splice 
        if (isFullyRemoved) {
            cpyExistingCartItems.splice(findIndexOfCartItem, 1)
        } else {
            cpyExistingCartItems[findIndexOfCartItem] = {
                // destructure content of item
                ...cpyExistingCartItems[findIndexOfCartItem],
                quantity: cpyExistingCartItems[findIndexOfCartItem].quantity - 1,
                totalPrice: (cpyExistingCartItems[findIndexOfCartItem].quantity - 1) * cpyExistingCartItems[findIndexOfCartItem].price
            }
        }

        localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
        setCartItems(cpyExistingCartItems);
    }

    return <shoppingContext.Provider 
        value={{ 
            productList, 
            setProductList, 
            categoryList, 
            setCategoryList, 
            loading, 
            setLoading, 
            productDetails, 
            setProductDetails, 
            cartItems, 
            setCartItems, 
            handleAddToCart, 
            handleRemoveProduct, 
            sidebarToggle, 
            setSidebarToggle, 
            categoryToggle,
            setCategoryToggle,
        }}>
            {children}
    </shoppingContext.Provider>
}

export default GlobalState;