import React from 'react';
import PropTypes from 'prop-types';

import NewItem from './NewItem';

const NewsList = ({news}) => {

    return (
       <div className="d-flex flex-wrap justify-content-around">
        {news.map(item => <NewItem key={item.url} {...item}/>)}
       </div>
    );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsList;