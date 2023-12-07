
import React, { useState } from 'react';


export default function AddMemeForm( {onSubmit} ) {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMeme = {
            title,
            imageUrl: imageUrl,
            upvotes: 0,
            downvotes: 0,
        };
        onSubmit(newMeme);
        setTitle('');
        setImageUrl('');
    };

    return (
        <div className="form-container">
            <div className='form-background'>
                <form onSubmit={handleSubmit}>
                <span>Jesteś niezalogowany, więc dodany przez Ciebie mem musi poczekać na akceptację przez moderatora. Nie będziesz mógł go edytować, ani usunąć. Zaloguj się, aby dodawać memy szybciej i móc je modyfikować. </span>
                <h2>Tytuł:</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <h2>Źródło obrazka:</h2>
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button type="submit" className='add-mem'>Dodaj mema</button>
                </form>
            </div>
        </div>
    );
}
