import React from 'react'

const MovieTabs = (props) => {
    const {sort_by, updateSorting} = props;
    const handleClick = value => {
        return () => {
            updateSorting(value);
        }
    }

    const getClassName = value => {
        return `${sort_by === value ? "inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
        :"inline-block border bg-gray-200 border-white rounded hover:border-blue-200 text-black-500 hover:bg-blue-200 py-1 px-3"}`
    }

    return (
        <ul className="flex">
            <li className="mr-3">
                <a className={getClassName('popularity.desc')} onClick={handleClick('popularity.desc')}>Popularity desc</a>
            </li>
            <li className="mr-3">
                <a className={getClassName('revenue.desc')} onClick={handleClick('revenue.desc')}>Revenue desc</a>
            </li>
            <li className="mr-3">
                <a className={getClassName('vote_average.desc')} onClick={handleClick('vote_average.desc')}>Vote average desc</a>
            </li>
        </ul>
    )
}

export default MovieTabs