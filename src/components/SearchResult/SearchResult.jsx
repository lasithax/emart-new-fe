import React from "react"
import Catg from "../shops/Catg"
import ShopCart from "../shops/ShopCart"
import "../shops/style.css"

function SearchResult({ addToCart, shopItems }) {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Search Results</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchResult