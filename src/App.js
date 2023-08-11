//import logo from '@/logo.svg';
import '@/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PublicRouter from '@/pages/Public/PublicRouter';
import AdminRouter from '@/pages/Admin/AdminRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PublicRouter/>}/>
            <Route path="/admin/*" element={<AdminRouter/>}/>
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;