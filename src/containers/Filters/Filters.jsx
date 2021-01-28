import React, { useState, useEffect } from 'react';
import { FiltersWrapper, Wrapper, IntegerPart, FractionalPart, Channels, SubmitButton, Separator, ClearButton, FilterLabel, ButtonsWrapper } from './Filters.styles';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { fetchReviewsStartAsync } from '../../redux/app/app.actions';
import { insertDecimal } from '../../utils/utils';
const Filters = () => {
    const dispatch = useDispatch();
    const [integersList] = useState([0, 1, 2, 3, 4, 5]);
    const [fractionalList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // i aimed to get list of channels dynamically but could'nt find the related API
    const [channelsList] = useState(['AIRBNB', 'HOLIDU', 'BOOKINGCOM']);
    const { register, handleSubmit } = useForm();
    const [activeInteger, setActiveInteger] = useState('');
    const [activefractional, setActivefractional] = useState('');
    const [activeChannel, setActiveChannel] = useState('');
    const [score, setScore] = useState(0);

    const onSubmit = data => {
        dispatch(fetchReviewsStartAsync(null, null, score, data.Channels));
    }


    const clearFilterResults = () => {
        dispatch(fetchReviewsStartAsync(1, 5, null, null, true));
    }



    useEffect(() => {
        if (activefractional !== '' && activeInteger === '') { setActiveInteger(0); }
        if (activefractional === '' && activeInteger !== '') { setActivefractional(0); }
        if (activefractional !== '' && activeInteger !== '') { setScore(insertDecimal(Number(activeInteger + activefractional))); }
    }, [activeInteger, activefractional, activeChannel])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FiltersWrapper>
                <FilterLabel>
                    Filter
                </FilterLabel>
                <Wrapper>
                    <label>By Score</label>
                    <IntegerPart ref={register} value={activeInteger} onChange={e => setActiveInteger(e.target.value)}>
                        <option key={'integersList_0'} value="" ></option>
                        {integersList.map(element => <option key={'integersList_' + element} value={element}  > {element}</option>)}
                    </IntegerPart>
                    <Separator>.</Separator>
                    <FractionalPart ref={register} value={activefractional} onChange={e => setActivefractional(e.target.value)}>
                        <option key={'FractionalPart_0'} value="" ></option>
                        {fractionalList.map((element, index) => <option key={'FractionalPart_' + index} value={element} >{element}</option>
                        )}
                    </FractionalPart>
                </Wrapper>

                <Wrapper>
                    <label>By Channel</label>
                    <Channels ref={register} value={activeChannel} onChange={e => setActiveChannel(e.target.value)}>
                        <option key={'channelsList_0'} value=''></option>
                        {channelsList.map(element => <option key={'channelsList_' + element} value={element}>{element}</option>)}
                    </Channels>
                </Wrapper>
                <ButtonsWrapper>
                    <ClearButton onClick={clearFilterResults}>Clear</ClearButton>
                    <SubmitButton>Submit</SubmitButton>
                </ButtonsWrapper>
            </FiltersWrapper>

        </form >
    )
}

export default Filters;