import styled from "styled-components";

// In your `AllNotes.style.tsx` or equivalent file
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  
  margin-right: 25px;
  
  .notes__filter-btn {
    align-self: center;
  }
  
  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
  
  @media screen and (max-width: 649px) {
    margin-right: 0px;  
  }
`;

export const InputBox = styled.div`
  flex-grow: 1;  // The flex item will grow to take up the remaining space, if necessary.
  height: 33px;
  width: 200px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: 300ms box-shadow ease-in;
  margin-bottom: 16px;

  &:hover {
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.4);
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0px 10px;
    border: none;
    outline: none;
    border-radius: 5px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;


export const Box = styled.div`

  .allNotes__notes-type {
    margin-bottom: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    span {
      color: rgba(0, 0, 0, 0.5);
      font-weight: 500;
      font-size: 15px;
    }
  }
`;
