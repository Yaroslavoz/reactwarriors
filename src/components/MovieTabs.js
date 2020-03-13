import React from 'react'

const MovieTabs = () => {
    return (
        <ul class="flex">
            <li class="mr-3">
                <a class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="#">Popularity desc</a>
            </li>
            <li class="mr-3">
                <a class="inline-block border bg-gray-200 border-white rounded hover:border-blue-200 text-black-500 hover:bg-blue-200 py-1 px-3" href="#">Revenue desc</a>
            </li>
            <li class="mr-3">
                <a class="inline-block border bg-gray-200 border-white rounded hover:border-blue-200 text-black-500 hover:bg-blue-200 py-1 px-3" href="#">Vote average desc</a>
            </li>
        </ul>
    )
}

export default MovieTabs