import React, { useContext } from "react";
import styled from "styled-components";
import { Rate } from "antd";
import { ProductsContext } from "../providers/ProductsContext";
import { enums } from "../Constants";

const MainProduct = () => {

    const { products, mainProductId } = useContext(ProductsContext);

    if (!products) {
        return <div>{enums.LOADING}</div>;
    }

    const { title, price, description, image, rating } = products[mainProductId-1];

    return (
        <ProductWrapper>
            <ProductImage alt={title} src={image} />
            <ProductInfo>
                <ProductTitle>{title}</ProductTitle>
                <ProductPrice>${price.toFixed(2)}</ProductPrice>
                <ProductDescription>{description}</ProductDescription>
                <ProductRating>
                    <Rate disabled value={rating?.rate || 0} />
                    <span style={{ marginLeft: "10px" }}>{rating.count} reviews</span>
                </ProductRating>
            </ProductInfo>
        </ProductWrapper>
    );
};

const ProductWrapper = styled.div`
  padding: 14px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: -webkit-fill-available;
  height: auto;
  text-align: left;
  padding: 0 35px;
`;

const ProductInfo = styled.div`
  margin-top: 20px;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
`;

const ProductDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const ProductRating = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export default MainProduct;
