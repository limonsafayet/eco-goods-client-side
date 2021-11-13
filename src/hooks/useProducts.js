import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";

const useProducts = () => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`)
            .then(res => setProductsData(res.data))
    }, []);
    return [productsData, setProductsData];
}

export default useProducts;