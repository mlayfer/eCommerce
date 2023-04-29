import React, {useEffect, useState} from "react";

export const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [mainProductId, setMainProductId] = useState(1);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=9")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    const chooseMainProduct = (id) => {
        setMainProductId(id);
    }

    return (
        <ProductsContext.Provider value={{products, mainProductId, chooseMainProduct}}>
            {children}
        </ProductsContext.Provider>
    );
};