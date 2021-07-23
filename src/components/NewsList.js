import React from 'react';
import NewItem from './NewItem';

const NewsList = ({news}) => {

    return (
       <div className="d-flex flex-wrap justify-content-around">
        {news.map(item => <NewItem key={item.url} {...item}/>)}
       </div>
    );
}

export default NewsList;