import React, {useState} from 'react';
import useSpinner from './useSpinner';
import useSpinner2 from './useSpinner2';
import MovieCard from './movieCard';

export default function SearchMovies(){

   const [query, setQuery] = useState('');
   const [movies, setMovies] = useState([]);
   const [spinner, showSpinner, hideSpinner] = useSpinner();
   const [spinner2, showSpinner2, hideSpinner2] = useSpinner2();
   
    const searchForMovies = async (e) => {
        e.preventDefault();

        const input = document.getElementById('input');
        const button = document.getElementsByClassName('button')[0];
        input.addEventListener('keyup', function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                button.click();
            }
        });

        const url=`https://api.themoviedb.org/3/search/movie?api_key=0e840459214eccb29ba732044e6e4e23&language=en-US&query=${query}&page=1&include_adult=false`;
        
        //-----------------------------------------------------------
        const fetchFailed = document.getElementById('fetchFailed');
        const pageNo = document.getElementById('pageNo');

        const style = {
            display: 'block',
            backgroundColor: '#222',
            fontSize: '1.8rem',
            color: 'goldenrod',
            margin: '4rem 0',
            padding: '2.5rem',
            textAlign: 'center'
        }

        const style2 = {
            display: 'none'
        }

        const style3 = {
            display: 'block',
            backgroundColor: '#222',
            fontSize: '1.5rem',
            color: 'white',
            margin: '4rem 0 0 0',
            padding: '1.5rem',
            textAlign: 'center'
        }
        //-------------------------------------------
        
        const buttonText = document.getElementsByClassName('button-text')[0];
        if (input.value < 1) {
            fetchFailed.innerHTML = 'Search field cannot be empty.';
            Object.assign(fetchFailed.style, style);
            hideSpinner();
            hideSpinner2();
            buttonText.innerHTML = 'Search';
        }else {
            showSpinner();
            showSpinner2();
            buttonText.innerHTML = 'Searching...';
            fetchFailed.innerHTML = '';
             Object.assign(fetchFailed.style, style2);
             pageNo.innerHTML = '';
             Object.assign(pageNo.style, style2);
            try {
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results);
                //-------------------------------------
               
                hideSpinner();
                hideSpinner2();
                buttonText.innerHTML = 'Search';
                fetchFailed.innerHTML = '';
                Object.assign(fetchFailed.style, style2);
                pageNo.innerHTML = 'Page 1 of 1';
                Object.assign(pageNo.style, style3);

            }catch(err) {
                console.error(err);
                
                //---------------------------------------
                setTimeout(() => {
                    hideSpinner();
                    hideSpinner2();
                    buttonText.innerHTML = 'Search';
                    fetchFailed.innerHTML = 'Failed to fetch API. Check connection and try again';
                    Object.assign(fetchFailed.style, style);
                }, 1500);
                
                Object.assign(pageNo.style, style2);
                //----------------------------------------
            
            }
        }
    }

   
    
    return(  
        <>
            <form className='form' onSubmit={searchForMovies}>
                <label className='label' htmlFor='query'>Movie Name</label>
                <input id='input' className='input' type='test' name='query'
                placeholder='e.g Thor Ragnarok' autoComplete='off' value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className='button' type='submit'><span className='button-text'>Search</span>{spinner2}</button>
            </form>
            {spinner}

            <div id='fetchFailed'></div>

            <div className='card-list'>
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>

            <div id='pageNo'></div>
        </>
    );
}

