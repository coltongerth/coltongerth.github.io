// import './App.css';
import LogoLink from "./components/logo_link"
import TextHeader from "./components/text_header"
const gh_logo = require('./assets/github-logo.png')
const li_logo = require('./assets/linkedin-logo.png')

function App() {
  return (
    <div className="app">
      {/* <header className="app-header">
  
      </header> */}
      <body className = "app-body">
      <nav className="logo-holder">
        <ul>
          <li>
            <LogoLink link="https://github.com/coltongerth" src = {gh_logo}/>
          </li>
          <li>
            <LogoLink link="https://www.linkedin.com/in/colton-gerth-3973451a3/" src = {li_logo}/>
          </li>
        </ul>
      </nav>
      <section>
        <main>
        <div className="welcome-body">
          <TextHeader text="Welcome" />
          </div>
        </main>
        <aside>
          this will be projects
        </aside>

      </section>
      
        
        
      </body>
    </div>
  );
}

export default App;
