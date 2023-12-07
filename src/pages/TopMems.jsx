import React from 'react';
import MemBox from '../components/MemBox';
import {v4 as uuidv4} from 'uuid';

export default function TopMems({ memData, onUpvote, onDownvote }) {
    const topMemes = memData
    .filter((mem) => mem.upvotes - mem.downvotes > 5);
    // .sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));

    const handleUpvote = (mem) => {
        onUpvote(mem);
    };

    const handleDownvote = (mem) => {
        onDownvote(mem);
    };

    return (
        <div className="background-container">
            {topMemes.map((mem) => (
                <MemBox
                key={uuidv4()}
                mem={mem}
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
                />
            ))}
        </div>
    );
}

