import React from "react";
import styled from "styled-components";
import { Col, Row } from 'antd';
import MainProduct from "./components/MainProduct";
import RelatedProducts from "./components/RelatedProducts";
import PurchaseBox from "./components/PurchaseBox";
import ReviewsBox from "./components/ReviewsBox";
import { ProductsProvider } from "./providers/ProductsContext";
import Header from "./components/Header";

const App = () => {

    return (
        <>
            <Header />
            <PageWrapper>
                <ContentWrapper>
                  <ProductsProvider>
                      <Row gutter={30} xs={{ gutter: 0 }}>
                          <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 3 }} lg={{ span: 9, order: 3 }}>
                              <ReviewsBox />
                          </Col>
                          <Col xs={{ span: 24, order: 3 }} sm={{ span: 24, order: 2 }} lg={{ span: 6, order: 1 }}>
                              <PurchaseBox />
                              <RelatedProducts />
                          </Col>
                          <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} lg={{ span: 9, order: 2 }}>
                              <MainProduct />
                          </Col>
                      </Row>
                  </ProductsProvider>
              </ContentWrapper>
            </PageWrapper>
        </>
  );

};

const PageWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default App;
