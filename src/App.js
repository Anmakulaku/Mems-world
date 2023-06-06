import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import TopMems from './pages/TopMems';
import Error404 from './pages/Error404';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MemsData from './MemsData';
import AddMemeForm from './components/AddMemeForm';

function App() {
  const [memData, setMemsData] = useState(MemsData);

    const handleUpvote = (mem) => {
    setMemsData((prevMemsData) => {
      const updatedMemsData = prevMemsData.map((m) => {
        if (m.title === mem.title) {
          return { ...m, upvotes: m.upvotes + 1 };
        }
        return m;
      });
      return updatedMemsData;
    });
  };

  const handleDownvote = (mem) => {
    setMemsData((prevMemsData) => {
      const updatedMemsData = prevMemsData.map((m) => {
        if (m.title === mem.title) {
          return { ...m, downvotes: m.downvotes + 1 };
        }
        return m;
      });
      return updatedMemsData;
    });
  };
  const handleAddMeme = (newMeme) => {
    setMemsData((prevMemsData) => [...prevMemsData, newMeme]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation  />
        <main className="content">
          <Routes>
            <Route path="/" element={
                <MainPage memData={memData} onUpvote={handleUpvote} onDownvote={handleDownvote} />
            } />
            <Route path="/TopMems" element={
                <TopMems memData={memData} onUpvote={handleUpvote} onDownvote={handleDownvote} />
            } />
            <Route path="*" element={<Error404 />} />
            <Route path="/AddMemeForm" element={<AddMemeForm onSubmit={handleAddMeme} />
            } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
