
import React from 'react';
import MemBox from '../components/MemBox';
import {v4 as uuidv4} from 'uuid';

export default function MainPage({ memData, onUpvote, onDownvote }) {
    const filteredMems = memData
    .filter((mem) => mem.upvotes - mem.downvotes <= 5);
    // .sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));

    return (
        <div className="background-container">
            {filteredMems.map((mem) => (
                <MemBox
                key={uuidv4()}
                mem={mem}
                onUpvote={onUpvote}
                onDownvote={onDownvote}
                />
            ))}
        </div>
    );
}
