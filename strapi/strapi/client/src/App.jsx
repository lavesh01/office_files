import { Route, Routes } from 'react-router-dom';

import BlogPage from './pages/BlogPage';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/blog-page' element={<BlogPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
