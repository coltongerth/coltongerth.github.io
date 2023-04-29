// import './App.css';
import LogoLink from "./components/logo_link"
import TextHeader from "./components/text_header"
import TextBody from "./components/text_body"
import LineDrawing from "./components/decorative_line"
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
            <div className="colton-description">
              <TextBody text = "My name is Colton Gerth, I am a full-stack Software Engineer with experience in a large variety of tools. I have collaborated in the development of several web-based programs that have been in use by several scientific organizations such as the United States Forest Service and the University of Oregon." />
            </div>
          </div>
        </main>
        <aside>
          <div className="projects-section">
            <TextHeader text="Projects" />
            <LineDrawing />

          </div>
          {/* this will be projects */}
        </aside>

      </section>
      
        
        
      </body>
    </div>
  );
}

export default App;
