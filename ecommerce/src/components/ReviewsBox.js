import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Rate, Space, Checkbox, Select } from "antd";
import { allReviews, enums, sortValues } from "../Constants";

const ReviewsBox = () => {

    const [reviews, setReviews] = useState([]);
    const [filters, setFilters] = useState([]);
    const [reviewsToShow, setReviewsToShow] = useState([]);

    useEffect(() => {
        setReviews(allReviews);
        setReviewsToShow(allReviews);
    }, []);

    useEffect(() => {
        setReviewsToShow(reviews);
    }, [reviews]);

    const handleSort = (sortType) => {
        const sortFunctions = {
            newest: (a, b) => new Date(b.date) - new Date(a.date),
            oldest: (a, b) => new Date(a.date) - new Date(b.date),
            highest: (a, b) => b.rating - a.rating,
            lowest: (a, b) => a.rating - b.rating,
        };
        const sortedReviews = [...reviews].sort(sortFunctions[sortType]);
        setReviewsToShow(filters.length > 0 ? sortedReviews.filter((review) => filters.includes(review?.rating)) : sortedReviews);
    };

    const handleFilter = (checkedValues) => {
        setFilters(checkedValues);
        setReviewsToShow(checkedValues.length ? reviews.filter((review) => checkedValues.includes(review?.rating)) : allReviews);
    };

    return (
        <ReviewsBoxWrapper>
            <SortFiltersWrapper>
                <SortButtonsWrapper>
                    <StyledSelect defaultValue="newest" onChange={handleSort}>
                        <Select.Option value="newest">{sortValues.NEWEST}</Select.Option>
                        <Select.Option value="oldest">{sortValues.OLDEST}</Select.Option>
                        <Select.Option value="highest">{sortValues.HIGHEST_RATING}</Select.Option>
                        <Select.Option value="lowest">{sortValues.LOWEST_RATING}</Select.Option>
                    </StyledSelect>
                </SortButtonsWrapper>
                <FiltersWrapper>
                    <Checkbox.Group onChange={handleFilter}>
                        <Checkbox value={5}>5 <OnlyScreens>{enums.STARS}</OnlyScreens></Checkbox>
                        <Checkbox value={4}>4 <OnlyScreens>{enums.STARS}</OnlyScreens></Checkbox>
                        <Checkbox value={3}>3 <OnlyScreens>{enums.STARS}</OnlyScreens></Checkbox>
                    </Checkbox.Group>
                </FiltersWrapper>
            </SortFiltersWrapper>

            <ReviewsWrapper>
                {reviewsToShow.map((review, index) => (
                    <ReviewWrapper key={index}>
                        <Space direction="vertical">
                            <Rate disabled value={review?.rating || 0} />
                            <ReviewTitle>{review?.title}</ReviewTitle>
                            <ReviewText>{review?.text}</ReviewText>
                            <ReviewDate>{review?.date}</ReviewDate>
                        </Space>
                    </ReviewWrapper>
                ))}
            </ReviewsWrapper>
        </ReviewsBoxWrapper>
  );
};

const OnlyScreens = styled.span`
  @media (max-width: 800px) {
    display: none;
  }
`;

const ReviewsBoxWrapper = styled.div`
  margin-top: 40px;
`;

const SortButtonsWrapper = styled.div`
  margin-bottom: 8px;
`;

const FiltersWrapper = styled.div`
  margin-bottom: 8px;
`;

const ReviewsWrapper = styled.div`
  display: grid;
  gap: 12px;
  max-height: 760px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ReviewWrapper = styled.div`
  border: 1px solid #f0f0f0;
  padding: 12px;
`;

const ReviewTitle = styled.h4`
  margin: 0;
`;

const ReviewText = styled.p`
  margin: 0;
`;

const ReviewDate = styled.span`
  font-size: 12px;
  color: #888;
`;

const SortFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

const StyledSelect = styled(Select)`
  width: 130px;
`;

export default ReviewsBox;
