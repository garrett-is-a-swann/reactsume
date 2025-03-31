import React from 'react';

import './join-around.css';

function JoinAround({list, sep}) {
    if (!sep) {
        sep = '|';
    }

    const values = list?.length && list.reduce((acc, item, i) => {
        if (i > 0) {
            acc.push(
                <span key={`seperator-${i}`} className='join-around-sep'>{sep}</span>
            );
        }
        acc.push(item);
        return acc;
    }, []);

    return (
        <div className='join-around'>
            {values}
        </div>
    );
}

export default JoinAround;
