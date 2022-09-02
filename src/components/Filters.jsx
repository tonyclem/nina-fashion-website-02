import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from "../utils/helpers";



const Filters = () => {
   const { 
    filters: {
      text,
      category,
      brand,
      color,
      min_price,
      price,
      max_price,
      shipping
    },
    updateFilters,
    all_products,
    clearFilters
   } = useFilterContext()

   const categories = getUniqueValues(all_products, "category");
   const brands = getUniqueValues(all_products, "brand");
   const colors = getUniqueValues(all_products, "colors");


  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search */}
          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((itemCategory, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${
                      category === itemCategory.toLowerCase()
                        ? " active "
                        : null
                    }`}
                  >
                    {itemCategory}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end categories */}
          {/* Company */}
          <div className="form-control">
            <h5>Company</h5>
            <select
              name="brand"
              value={brand}
              onChange={updateFilters}
              className="brand"
            >
              {brands.map((companyName, index) => {
                return <option key={index}>{companyName}</option>;
              })}
            </select>
          </div>
          {/* end company */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.slice(0, 6).map((itemsColors, index) => {
                if (itemsColors === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }

                return (
                  <button
                    key={index}
                    name="color"
                    onClick={updateFilters}
                    data-color={itemsColors}
                    className={`${
                      color === itemsColors ? "color-btn active" : "color-btn"
                    }`}
                    style={{
                      background: itemsColors,
                    }}
                  >
                    {color === itemsColors ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end color */}

          {/* Price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div>
          {/* End Price */}

          {/* Check */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              value={shipping}
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filter
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
