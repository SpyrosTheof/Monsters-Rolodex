import React from 'react';


export const SearchBox = (props)=>(
    
    <input className='search' type='search' placeholder={props.placeholder} onChange={props.handleChange}/>
)


