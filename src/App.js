import {Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Layout from './components/common/Layout';

const App = () => {
  return(
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path="/loginPage" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;