import React from 'react';

export default function SearchMovies(){
    const searchForMovies = async (e) => {
        e.preventDefault();
        console.log('submitting');
    }
    return(
        <form className='form' onSubmit={searchForMovies}>
            <label className='label' htmlFor='query'>Movie Name</label>
            <input className='input' type='test' name='query' placeholder='e.g Thor Rhagnarok'/>
            <button className='button' type='submit'>Search</button>
        </form>
    );
}

