import React from 'react';

function movieList(props){
    return(
        <tr>
            <td>{props.movie.id}</td>
            <td>{props.movie.title}</td>
            <td>{props.movie.rating}</td>
            <td>{props.movie.awards}</td>
            <td>{props.movie.length}</td>
        </tr>
    )
}
export default movieList;