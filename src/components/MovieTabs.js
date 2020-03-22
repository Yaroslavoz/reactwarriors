import React from 'react';

const MovieTabs = React.memo((props) => {
    const {sort_by, updateSorting} = props;

    const handleClick = value => {
        return () => {
            updateSorting(value);
        }
    }

    const getClassName = value => {
        return `${sort_by === value ? "inline-block border border-indigo-500 rounded py-1 px-3 bg-indigo-500 text-white"
        :"inline-block border bg-gray-200 border-white rounded hover:border-blue-200 text-black-500 hover:bg-blue-200 py-1 px-3"}`
    }
    console.log("Movietabs render");
    return (
        
        
        <ul className="flex w-3/4">
            <li className="mr-3">
                <div className={getClassName('popularity.desc')} onClick={handleClick('popularity.desc')}>Popularity desc</div>
            </li>
            <li className="mr-3">
                <div className={getClassName('revenue.desc')} onClick={handleClick('revenue.desc')}>Revenue desc</div>
            </li>
            <li className="mr-3">
                <div className={getClassName('vote_average.desc')} onClick={handleClick('vote_average.desc')}>Vote average desc</div>
            </li>
        </ul>
    )
})

export default MovieTabs;