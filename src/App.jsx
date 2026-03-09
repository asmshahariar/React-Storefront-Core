import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        {/* Navigation placeholder */}
        <header className="p-4 bg-white shadow-sm">
          <h1 className="text-xl font-bold text-indigo-600">Storefront</h1>
        </header>

        {/* Main Content */}
        <main className="p-4">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="flex justify-center items-center h-64">
                  <h2 className="text-2xl font-semibold">Welcome to the App</h2>
                </div>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
