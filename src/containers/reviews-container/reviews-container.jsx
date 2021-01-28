import React, { useState, useEffect } from 'react';
import { ReviewsContainerWrapper, ContainerHeaderWrapper } from './reviews-container.styles';
import Title from '../../components/Title/Title';
import { fetchReviewsStartAsync } from '../../redux/app/app.actions';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/loading/loading.component';
import ReviewContainer from '../review/review';
import InfiniteScroll from 'react-infinite-scroller';
import Filters from '../../containers/Filters/Filters';
const ReviewsContainer = () => {
    const dispatch = useDispatch();
    const apiResults = useSelector(state => state.app.RESULTS);
    const [results, setResults] = useState(apiResults);
    const [count, setCount] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        // To be called one time on load
        dispatch(fetchReviewsStartAsync(apiResults.page, apiResults.limit));
    }, []);



    useEffect(() => {
        setCount(apiResults.count);
        setResults(apiResults.data);
        setHasMore(apiResults.has_more);
    }, [apiResults]);

    const loadMore = () => {
        if (hasMore === true) { dispatch(fetchReviewsStartAsync(apiResults.page + 1, apiResults.limit)); }
    }


    return (
        <InfiniteScroll
            key={'infinite_scroll_'}
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={<Loading key={'loader'} />}


        >
            <ReviewsContainerWrapper key={'ReviewsContainerWrapper'}>
                <ContainerHeaderWrapper key={'ContainerHeaderWrapper_wrapper'} >
                    <Title key={'title_key'}>{count} Reviews</Title>
                    <Filters key={'filter_key'} />
                </ContainerHeaderWrapper>

                {count === 0 ?
                    <Loading key={'loader_2'} />
                    :
                    results.map((review, index) => <ReviewContainer review={review} key={'review_' + index} />)

                }
            </ReviewsContainerWrapper>
        </InfiniteScroll>
    )
}

export default ReviewsContainer;