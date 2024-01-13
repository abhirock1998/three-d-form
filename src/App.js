import "./App.css";
import { MdPerson } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
function App() {
  return (
    <div className="app">
      <div className="app_form_container">
        <div className="app_form_account_icon">
          <MdPerson size={80} color="#90A4AE" />
        </div>
        <div className="form-icon-half" />
        <h1>Welcome Back</h1>
        <div className="app_form_input_container">
          <div className="app_form_input_icon">
            <MdPerson size={20} color="#90A4AE" />
          </div>
          <input type="email" placeholder="Email" />
        </div>
        <div className="app_form_input_container">
          <div className="app_form_input_icon">
            <FaLock size={20} color="#90A4AE" />
          </div>
          <input type="password" placeholder="Password" />
        </div>
        <input className="login-button" type="submit" value="Submit" />
        <p>New here? Create account</p>
        <p>Forgot your password?</p>
      </div>
    </div>
  );
}

export default App;
