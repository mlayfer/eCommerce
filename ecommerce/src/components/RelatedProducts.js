import React, { useContext } from "react";
import styled from "styled-components";
import { ProductsContext } from "../providers/ProductsContext";
import { enums } from "../Constants";

const RelatedProducts = () => {

    const { products, chooseMainProduct, mainProductId } = useContext(ProductsContext);

    if (!products) {
        return <div>{enums.LOADING}</div>;
    }

    return (
        <RelatedProductsWrapper>
            <RelatedProductsTitle>{enums.MORE_PRODUCTS}</RelatedProductsTitle>
            <RelatedProductsList>
                {products.map((p) => (
                    p.id !== mainProductId &&
                        <RelatedProductItem key={p?.id} onClick={() => chooseMainProduct(p?.id)}>
                        <RelatedProductImage alt={p?.title} src={p?.image} />
                        <RelatedProductInfo>
                            <RelatedProductTitle>{p?.title}</RelatedProductTitle>
                            <RelatedProductPrice>${p?.price.toFixed(2)}</RelatedProductPrice>
                        </RelatedProductInfo>
                    </RelatedProductItem>
                ))}
            </RelatedProductsList>
        </RelatedProductsWrapper>
    );
};

const RelatedProductsWrapper = styled.div`
  margin-top: 30px;
`;

const RelatedProductsTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const RelatedProductsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const RelatedProductItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;

  &:hover {
    cursor: pointer;
    background-color: #F3F3F3FF;
  }
`;

const RelatedProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 10px;
`;

const RelatedProductInfo = styled.div`
  flex: 1;
`;

const RelatedProductTitle = styled.span`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const RelatedProductPrice = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  display: block;
`;

export default RelatedProducts;