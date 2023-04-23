import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='lef_trow'>
            <i className='fa fa-phone'></i>
            <label> +94 710 236 541</label>
            <i className='fa fa-envelope'></i>
            <label> support@emart.com</label>
          </div>
          <div className='right_row_RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span><i class="fa fa-language" aria-hidden="true"></i></span>
            <label>EN</label>
            <span><i class="fa fa-money" aria-hidden="true"></i></span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
