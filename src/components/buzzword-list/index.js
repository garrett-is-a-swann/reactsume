import React from 'react';

import './buzzword-list.scss';

function BuzzwordList({buzzwords}) {
    return (
        <div className='buzzwords'>
            {buzzwords.length && buzzwords.reduce((acc, buzzword, i) => <>
                {acc}
                {i > 0 && <span className='sep'>|</span>}
                <i>{buzzword}</i>
            </>, [])}
        </div>
    );
}

export default BuzzwordList;
