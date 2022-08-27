import React from 'react'
import styled from 'styled-components'
import { BsList, BsFillGridFill } from "react-icons/bs";
import { useFilterContext } from '../context/filter_context';

const SortDisplayViews = () => {
    const { grid_view, setGridView, setListView } = useFilterContext();
  return (
    <Wrapper>
        <h2 className="sort-h2">All Products</h2>
        <hr />
        <div className="btn-container">
          <button
            type="button"
            className={`${grid_view ? "active" : null}`}
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            className={`${!grid_view ? "active" : null}`}
            onClick={setListView}
          >
            <BsList />
          </button>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin: 3rem 4rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  
  @media (min-width: 768px) {
    column-gap: 2rem;
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--on-primary);
      color: var(--on-primary);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--on-primary);
      color: var(--on-primary-color);
    }
  }
`;

export default SortDisplayViews
