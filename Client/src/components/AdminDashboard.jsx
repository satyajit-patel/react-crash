import React, { useState } from 'react';
import { createFlashcard, updateFlashcard, deleteFlashcard } from '../apis/Api';

function AdminDashboard({ setFlashcards }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFlashcard = await createFlashcard({ question, answer });
        setFlashcards(prevFlashcards => [...prevFlashcards, newFlashcard]);
        setQuestion('');
        setAnswer('');
    };

    // Implement edit and delete similarly

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Question"
                    required
                />
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Answer"
                    required
                />
                <button type="submit">Add Flashcard</button>
            </form>
            {/* Add edit and delete functionality */}
        </div>
    );
}

export default AdminDashboard;
