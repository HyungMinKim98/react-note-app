import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Container } from '../ErrorPage/ErrorPage.styles';
import { ButtonOutline, EmptyMsgBox } from '../../styles/styles';
import { BottomSection, Box, InputBox, TopBox, TopSection } from './AllNotes.style';
import { toggleFiltersModal } from '../../store/modal/modalSlice';
import getAllNotes from '../../utils/getAllNotes';
import { FiltersModal } from '../../components';

const AllNotes = () => {
  const dispatch = useAppDispatch();
  const { mainNotes} = useAppSelector((state) => state.notesList);
  const { viewFiltersModal } = useAppSelector((state) => state.modal);
  const [filter, setFilter] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }

  const clearHandler = () => {
    setFilter("");

  }

  // In your `AllNotes` component
return (
  <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {viewFiltersModal && (
      <FiltersModal 
        handleFilter = {filterHandler}
        handleClear = {clearHandler}
        filter = {filter}
      />
    )}
    {/* notes */}
    {mainNotes.length === 0 ? (
      <EmptyMsgBox>
        노트가 없습니다.
      </EmptyMsgBox>
    ): (
      <>
        <TopSection>  {/* Use TopSection here */}
          <TopBox>
            <InputBox>
              <input
                type={"text"}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder='노트의 제목을 입력해주세요.'
              />
            </InputBox>
            <div className='notes__filter-btn'>
              <ButtonOutline
                onClick={() => dispatch(toggleFiltersModal(true))}
                className='nav__btn'
              >
                <span>정렬</span>
              </ButtonOutline>
            </div>
          </TopBox>
        </TopSection>
        <BottomSection>  {/* Use BottomSection here */}
          <Box>
            {/* Notes */}
            { getAllNotes(mainNotes, filter)}
          </Box>
        </BottomSection>
      </>
    )}
  </Container>
)

}

export default AllNotes