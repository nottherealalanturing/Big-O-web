import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CodeArea } from './pages';

function App() {
  return (
    <>
      <a href="/">home</a>
      <a href="/editor">editor</a>
      <a href="/complexity">complexity</a>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="/editor" element={<CodeArea />} />
        <Route path="/complexity" element={<p>complexity</p>} />
      </Routes>
    </>
  );
}

export default App;
