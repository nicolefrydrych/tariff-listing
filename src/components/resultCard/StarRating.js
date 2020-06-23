import React from 'react'
import StarRatings from 'react-star-ratings'
import styled from 'styled-components'

export default function StarRating({ starRating, averageRating, ratingCount }) {
  return (
    <StarRatingContainer>
      <StarRatings
        rating={starRating}
        starRatedColor="#f2d44c"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="0px"
      />
      <AverageStarRating>{averageRating}</AverageStarRating>
      <RatingsCount>{ratingCount}</RatingsCount>
    </StarRatingContainer>
  )
}

const StarRatingContainer = styled.div`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  line-height: 24px;
`

const AverageStarRating = styled.span`
  color: grey;
  font-size: 16px;
  margin-left: 4px;
`

const RatingsCount = styled.span`
  color: #005ea8;
  font-size: 16px;
  margin-left: 6px;
`
