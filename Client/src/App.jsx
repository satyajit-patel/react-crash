import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import AdminDashboard from './components/AdminDashboard';
import { fetchFlashcards } from './apis/Api';
import Card from "./components/Card";
import './styles.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        async function getFlashcards() {
            const data = await fetchFlashcards();
            setFlashcards(data);
        }
        getFlashcards();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/FlashcardList" />} />
                <Route path='/FlashcardList' element={<FlashcardList arr={flashcards} />} />
                <Route path='/AdminDashboard' element={<AdminDashboard setFlashcards={setFlashcards} />} />
            </Routes>
        </Router>
    );
}

export default App;
