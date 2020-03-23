import React,{useState} from 'react';
import cx from 'classnames';

const MovieTabs = React.memo((props) => {
    const {sort_by, updateSorting} = props;
    const [tabName, setTab] = useState('popularity.desc')

    const handleClick = value => {
        return (e) => {
            updateSorting(value);
            setTab({
                tabName: value
            })
        }
    }

    const sortingChange = (value) =>{ 
        return cx(
        'inline-block',
        'border',
        'rounded',
        'py-1',
        'px-3',
        'hover:border-blue-200',
        {
        'text-white': sort_by === value,
        'border-indigo-500': sort_by === value,
        'bg-gray-200': !(sort_by === value),
        'border-white': !(sort_by === value),
        'text-black-500': !(sort_by === value),
        'hover:bg-blue-200': !(sort_by === value),
    })
}

    // const getClassName = value => {
    //     return `${sort_by === value ? "inline-block border border-indigo-500 rounded py-1 px-3  text-white"
    //     :"inline-block border bg-gray-200 border-white rounded hover:border-blue-200 text-black-500 hover:bg-blue-200 py-1 px-3"}`
    // }
    console.log('tabName is ', tabName);
    return (
        
        
        <ul className="flex w-3/4">
            <li className="mr-3">
                <div className={sortingChange( 'popularity.desc' )} onClick={handleClick('popularity.desc')} >Popularity desc</div>
            </li>
            <li className="mr-3">
                <div className={sortingChange( 'revenue.desc')} onClick={handleClick('revenue.desc')}>Revenue desc</div>
            </li>
            <li className="mr-3">
                <div className={sortingChange( 'vote_average.desc')} onClick={handleClick('vote_average.desc')}>Vote average desc</div>
            </li>
        </ul>
    )
})

export default MovieTabs;