import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import NavBar from './scenes/NavBar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from './scenes/Projects';
import { motion } from 'framer-motion';

function App() {
    const [selectedPage, setSelectedPage] = useState('home');
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 1060px)");
    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY === 0) {setIsTopOfPage(true); setSelectedPage("home")}
        if(window.scrollY !== 0) setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll); 
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <div className="app bg-deep-blue">

        <NavBar
            isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        />
        <div className='w-5/6 mx-auto md:h-full'>
          {isDesktop && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("home")}
          >
            <Landing setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>
        <LineGradient/>
        <div className='w-5/6 mx-auto md:h-auto'>
          <motion.div
            margin="0 0 -100px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <MySkills />
          </motion.div>
        </div>
        <LineGradient/>
        <div className='w-5/6 mx-auto'>
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("projects")}
          >
            <Projects />
          </motion.div>
        </div>
        <LineGradient/>
    </div>
}

export default App
