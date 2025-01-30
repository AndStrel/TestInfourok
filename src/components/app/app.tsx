import { HomePage } from '@pages/homePage';
import { ProfilePage } from '@pages/profilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import style from './app.module.scss';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
