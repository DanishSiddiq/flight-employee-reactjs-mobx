import React from "react";

const Search = ({ txtSearch, handleOnChange, handleSearchCountries, handleResetCountries }) => {
    return (
        <div className='div-search'>                    
            <input className='test' 
                type='text' 
                name='txtSearch' 
                value={txtSearch} 
                onChange={event => handleOnChange(event)} >
            </input>

            &nbsp;
            
            <input 
                type='button'
                name='btnSearch'
                value='Search'
                onClick={event => handleSearchCountries(event)} >                
            </input>
            
            &nbsp;
            
            <input 
                type='button'
                name='btnReset'
                value='Reset'
                onClick={event => handleResetCountries(event)} >                
            </input>
        </div>
    )
}

export default React.memo(Search);