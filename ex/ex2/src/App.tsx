import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'


import { Navbar } from './app/Navbar'
import { PostsList } from './components/PostsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<PostsList />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
