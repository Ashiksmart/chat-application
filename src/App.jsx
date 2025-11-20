// import './App.css'
import LoginForm  from './components/loginForm'

function App() {
 const appStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
 }
  return (
    <div style={appStyle}>
       <LoginForm/>
    </div>
  )
}

export default App
