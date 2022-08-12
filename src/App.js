import './App.scss';
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import Projects from "./components/Projects/Projects";
import WhatWillCourseGiveYou from "./components/WhatWillCourseGiveYou/WhatWillCourseGiveYou";
import How from "./components/How/How";

function App() {
  return (
    <main>
      <Header/>

      <div className="container mx-auto">
        <Statistics/>
        <How/>
        <Projects/>
        <WhatWillCourseGiveYou/>
      </div>
    </main>
  );
}

export default App;
