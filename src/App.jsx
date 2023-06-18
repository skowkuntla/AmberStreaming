import { Route, Routes } from 'react-router-dom';

import { Logo, Sidebar } from './components';
import { MixShows, NowPlaying, Schedule, LandingPage } from './pages';

const App = () => (
  <div className="relative flex">
    <Sidebar />
    <div className="flex-1 flex flex-col bg-cover bg-[url('/src/assets/244712171394.jpg')]">
      <Logo />
      <div className="px-6 h-screen overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
        <div className="flex-1 h-fit pb-40">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/now-playing" element={<NowPlaying />} />
            <Route path="/mix-shows" element={<MixShows />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </div>
      </div>
    </div>
  </div>
);

export default App;
