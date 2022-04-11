import { React, useState } from 'react';
import Button from '@mui/material/Button';

function App() {

  const [fieldState, setField] = useState({
    fname: '',
    lname: '',
    email: '',
    gender: '',
    courses: 'Node.js',
    error:{
      fname: '',
      lname: '',
      email: '',
      gender: ''
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    var errKey = Object.keys(fieldState).filter((key) =>{
      if (fieldState[key] === '' && key !== 'error'){
      }
      return key;
    });

    var error = {...fieldState.error};
      errKey.map((key) => {
      error[key] = `${key} is required`;
      return error
    });

    setField({error});

    if (errKey.length >= 1) {
      console.error('Please fill all fields');
    }
    else console.log(fieldState);
  }

  const handleChange = (e) => {

    var error = {...fieldState.error};

    if(e.target.value === ''){
      error[e.target.name] = `${e.target.name} is required`;
    }
    else{
        error[e.target.name] = ''
    }
    
    setField({ error ,[e.target.name]: [e.target.value]})
    console.log(fieldState)
  }

  return (
    <>

      <h3 style={{ paddingLeft: '60px' }}>Controlled forms</h3>
      <form style={{margin: "20px"}} onSubmit={handleSubmit}>

        <label for="fname">First name:</label> &nbsp;
        <input type="text"
          name="fname"
          value={fieldState.fname}
          onChange={(e) => handleChange(e)}
        /><br />
        <span style={{ color: 'red' }}> {fieldState.error.fname}</span>
        <br />

        <label for="lname">Last name:</label> &nbsp;
        <input type="text"
          name="lname"
          value={fieldState.lname}
          onChange={(e) => handleChange(e)}
        /><br />
        <span style={{ color: 'red' }}> {fieldState.error.lname}</span>
        <br />

        <label for="email">Email:</label> &nbsp;
        <input type="email"
          name="email"
          value={fieldState.email}
          onChange={(e) => handleChange(e)}
        /><br />
        <span style={{ color: 'red' }}> {fieldState.error.email}</span>
        <br />

        <label for="gender">Gender:</label> &nbsp;
        <input type="radio"
          name="gender"
          value= "male"
          onChange={(e) => handleChange(e)}
        />
        Male &nbsp;

        <input type="radio"
          name="gender" 
          value="female"
          onChange={(e) => handleChange(e)}
        />
        Female &nbsp;<br />
        <span style={{ color: 'red' }}> {fieldState.error.gender}</span>
        <br />

        <label for="courses">Courses</label> &nbsp;
        <select name='courses'
          value={fieldState.courses}
          onChange={(e) => handleChange(e)}
        >
          <option value="nodejs">Node.js</option>
          <option value="reactjs">React.js</option>
          <option value="vuejs">Vue.js</option>
        </select><br /><br />

        <Button variant="outlined" type='submit'>Submit</Button>&nbsp;
        <Button variant="outlined" type='button'>Reset</Button>

      </form>
    </>
  );
}

export default App;
