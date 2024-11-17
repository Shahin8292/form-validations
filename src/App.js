import { useState } from 'react';
import './App.css';

function App() {
  const [inputs, setInputs] =  useState({
    name:"",
    gmail:"",
    password:"",
    conpassword:""
  })

  const [inputActive, setInputActive] = useState({
    name:false,
    gmail:false,
    password:false,
    conpassword:false
  })

  const heandelChange=(e)=>{
      setInputs(prev=>({...prev,[e.target.name] : e.target.value}))
  }

  const hendelOnSubmit=(e)=>{
    e.preventDefault();
  }

  const heandleAcive=(e)=>{
    setInputActive(prev=>({...prev,[e.target.name] : [true]}))
  }


  return (
    <div className="App">
        <div className='register__form__wrapper'>
          <h4>Register Form</h4>
            <form className='form' onSubmit={hendelOnSubmit}>
              <div className='input__field'>
                  <label for="name">Enter your Name</label>
                  <input type="text" 
                  name="name"
                   value={inputs.name} 
                   id='name'  
                   placeholder='Enter Your Name'
                    onChange={heandelChange}
                    required
                    pattern='^[A-Za-Z0-9]{3,16}$'
                    onBlur={heandleAcive}
                    focused={inputActive.name.toString()}
                  />
              <span className='err'>User Name Should be 3-16 characters and should't include any special characters!</span>
              </div>

              <div className='input__field'>
                  <label for="gmail">Enter your Gmail</label>
                  <input type="email" name="gmail" 
                  value={inputs.gmail} id='gmail' 
                   placeholder='Enter Your gmail' 
                   onChange={heandelChange}
                   required
                   onBlur={heandleAcive}
                   focused={inputActive.gmail.toString()}
                   />
                   <span className='err'>It should be Valid Gmail</span>
              </div>
              <div className='input__field'>
                  <label for="password">Enter your password</label>
                    <input type="text" name="password" 
                    value={inputs.password} id='password'  
                    placeholder='Enter Your Password' 
                    onChange={heandelChange}
                    required
                    pattern='^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}'
                    onBlur={heandleAcive}
                    focused={inputActive.password.toString()}
                    />
                  <span className='err'>Password Should be 8-20 characters and at least 1 letter 1 number 1 special characters!</span>
              </div>
              <div className='input__field'>
                  <label for="con-password">Enter your Re-Type Password</label>
                  <input type="text" name="conpassword" 
                  value={inputs.conpassword} id='con-password' 
                   placeholder='Re-Type Password' 
                   onChange={heandelChange}
                   required
                   pattern={inputs.password}
                   onBlur={heandleAcive}
                   focused={inputActive.conpassword.toString()}
                   />
                   <span className='err'>Password Not Match!</span>
              </div>

              <button type="submit">Register</button>
            </form>
        </div>
    </div>
  );
}

export default App;
