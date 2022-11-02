import './App.css';
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";

function App() {
    return (<>
            <div className={"app-container"}>
                <SideBar/>
                <div className={'app-content-container'}>
                    <Home/>
                    <About/>
                    <Portfolio/>
                    <Resume/>
                </div>
            </div>
        </>
    );
}

export default App;
