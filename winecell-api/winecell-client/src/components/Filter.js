import React from 'react';

export const Filter = ({ handleChange, onClick }) => {

    return(
   
        <div className='col-12 p1'>
            <fieldset className='col-4 mx-auto shadow escape-bg-fade'>
                <div className='h3 underline' >Filter Options</div>
                <p className='pl2' >Filter by Price</p>
                Min Price: <input type='number' min='0' step='0.01' name='minPrice' onChange={handleChange} /><br />
                Max Price: <input type='number' min='0' step='0.01' name='maxPrice' onChange={handleChange} />
                <div className="field">
        <button onClick={onClick} className="ui secondary button">
        Find wines
      </button>
    </div>
            </fieldset>
        </div>
        
    )
}