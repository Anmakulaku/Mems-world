import React from 'react';
import UpvoteIcon from '../components/UpvoteIcon';
import DownvoteIcon from '../components/DownvoteIcon';

export default function MemBox({mem, onUpvote, onDownvote}) {
    return (
        <div className='mem-container'>
            <div className='mem-title'>{mem.title}</div>
            <img src={mem.imageUrl} alt={mem.title} className='mem-img'/>
                <div className="votes-box">
                    <div className="votes">
                        <p className='plus'>{mem.upvotes}</p>
                        <p>/</p>
                        <p className='minus'>{mem.downvotes}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={() => onUpvote(mem)} className="icon">
                    <UpvoteIcon /></button>
                    <button onClick={() => onDownvote(mem)} className="icon">
                    <DownvoteIcon /></button>
                </div>
        </div>
    );
}