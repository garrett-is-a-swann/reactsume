import React from 'react';

function BuzzwordList(buzzwords) {
    return (
        <div className='buzzwords'>
            {buzzwords.map(buzzword => <i>{buzzword}</i>).join(' | ')}
        </div>
    );
}
