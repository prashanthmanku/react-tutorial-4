import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  /* // using if else adding logic inside fn
  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Lougout</button>
    }
    return <button>login</button>
  }
  */

  render() {
    const {isLoggedIn} = this.state
    /* let authButton
    if (isLoggedIn === true) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Lougin</button>
    }
    */
    return (
      <div className="container">
        <Welcome />
        {/* {this.renderAuthButton()} */}
        {/* {authButton} */}
        {/* {isLoggedIn ? <button>Logout</button> : <button>Login</button>} */}

        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
