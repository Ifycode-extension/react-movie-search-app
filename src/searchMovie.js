import React from 'react';

export default function SearchMovies(){
    const searchForMovies = async (e) => {
        e.preventDefault();
        console.log('submitting');

        const query = 'Thor Rhagnarok';
        const url=`https://api.themoviedb.org/3/movie/550?api_key=0e840459214eccb29ba732044e6e4e23&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }catch(err) {
            console.error(err);
        }
    }
    
    return(
        <form className='form' onSubmit={searchForMovies}>
            <label className='label' htmlFor='query'>Movie Name</label>
            <input className='input' type='test' name='query' placeholder='e.g Thor Rhagnarok'/>
            <button className='button' type='submit'>Search</button>
        </form>
    );
}

