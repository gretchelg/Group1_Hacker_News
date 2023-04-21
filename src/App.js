import './App.css';
import Footer from './components/Footer';
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage"
import Home from './components/Home';

const PAGE_HOME = "home"
const PAGE_SEARCH = "search"

function App() {
  const [activePage, setActivePage] = useState(PAGE_HOME);
  const [lastQuery, setLastQuery] = useState("");

  function setActivePageToHome() {
    setActivePage(PAGE_HOME)
  }

  function setActivePageToSearch() {
    setActivePage(PAGE_SEARCH)
  }

  function searchForQuery(query) {
    setLastQuery(query)
    // setActivePage(PAGE_SEARCH)
    setActivePageToSearch()
  }

  return (
    <div className="App">
      
      <NavBar onHomeClicked={setActivePageToHome} onSearchClicked={setActivePageToSearch} />
      <div>
            {
                activePage === PAGE_HOME ? <Home />
                    : activePage === PAGE_SEARCH ? <SearchPage query={lastQuery} />
                    : <Home />
            }
        </div>

      <Footer onSearchBtnClicked={searchForQuery} />
    </div>
  );
}

export default App;
