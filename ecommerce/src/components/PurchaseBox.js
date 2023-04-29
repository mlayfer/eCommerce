import React, { useContext } from "react";
import styled from "styled-components";
import { Button, Card } from 'antd';
import { ProductsContext } from "../providers/ProductsContext";
import { enums } from "../Constants";

const PurchaseBox = () => {

    const { products, mainProductId } = useContext(ProductsContext);

    if (!products) {
        return <div>{enums.LOADING}</div>;
    }

    const { price } = products[mainProductId - 1];
    const discount = 20;
    const newPrice = price * (1 - discount / 100);
    const availability = "In stock - delivery by Today";
    const formattedPrice = newPrice.toFixed(2);
    const formattedOldPrice = price.toFixed(2);

    return (
        <PurchaseWrapper title={enums.PURCHASE} bordered={true}>
            <PriceWrapper>
                <OldPrice>${formattedOldPrice}</OldPrice>
                <Discount>{discount}% off</Discount>
                <Price>${formattedPrice}</Price>
            </PriceWrapper>
            <Availability>{availability}</Availability>
            <ButtonsWrapper>
                <StyledButton type="default">{enums.ADD_TO_CART}</StyledButton>
                <StyledButton type="primary">{enums.BUY_NOW}</StyledButton>
            </ButtonsWrapper>
        </PurchaseWrapper>
    );
};

const PurchaseWrapper = styled(Card)`
  .ant-card-body {
    padding: 24px;
    border-radius: 0 0 8px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #007bff;
`;

const Discount = styled.span`
  color: #007bff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  font-size: 18px;
  color: #6c757d;
  margin-top: 8px;
`;

const Availability = styled.span`
  margin-top: 16px;
`;

const StyledButton = styled(Button)`
  display: block;
  width: 200px;
  text-align: center;
  margin-bottom: 8px;
`;

export default PurchaseBox;
