
import React, { useState } from 'react'
export default function SignUp() {

  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [Email, setEmail] = useState('')
  const [Number, setNumber] = useState('')



  const [input, setInput] = useState({

    password: '',
    confirmPassword: ''
  });


  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FirstName,
        LastName,
        Email,
        Number,
        input

      }),
    })
    const data = await response.json()
    console.log(data)
    if (data) {
      alert("Registered")

      window.location.href = '/Login'

      document.getElementById("success").innerHTML = "successfully registered"
    }
    else {
      alert("plz enter valid details")
    }
  }

  (function () {

    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()




  const [error, setError] = useState({

    password: '',
    confirmPassword: ''
  })


  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "Email":
          if (!value) {
            stateObj[name] = "Please enter Email";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {

            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }






  return (
    <div className='bg-pan-bottom'>
      <div className="bg-pan-bottom">
        <center><h1 className='heading'>Welcome to the Dotglasses</h1><br />
        </center><br />
        <div className='container bg-pan-bottom'>
          <div className='row'>
            <div className="col-md-6 side-image">

            </div>

            <div className='col-md-6 .bg-pan-bottom'>
              <h3 className='subheading'> SignIn Here :</h3>

              <form class="row g-3 needs-validation" onSubmit={registerUser}><br /><br />
                <div class="mb-3">
                  <div class="col-md-12">
                    <label for="validationCustom01" class="form-label" >First Name</label>
                    <input class="form-control"
                      value={FirstName}
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                      name="name" required />
                    <div class="valid-feedback">Username field is valid!</div>
                    <div class="invalid-feedback">Username field cannot be blank!</div>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="col-md-12">
                    <label for="validationCustom02" class="form-label">Last Name</label>
                    <input class="form-control"
                      value={LastName}
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      name="name" required />
                    <div class="valid-feedback">Username field is valid!</div>
                    <div class="invalid-feedback">Username field cannot be blank!</div>
                  </div>

                </div>
                <div class="mb-3">
                  <label for="validationCustom02" class="form-label">Email</label>
                  <input class="form-control"
                    value={Email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="name" required />
                  <div class="valid-feedback">Username field is valid!</div>
                  <div class="invalid-feedback">Username field cannot be blank!</div>
                </div>


                <div class="mb-3">

                  <label for="validationCustom02" class="form-label">Mobile Number</label>
                  <input class="form-control"
                    value={Number}
                    type="number"
                    onChange={(e) => setNumber(e.target.value)}
                    name="name" required />
                  <div class="valid-feedback">Username field is valid!</div>
                  <div class="invalid-feedback">Username field cannot be blank!</div>
                </div>

                <div class="mb-3">
                  <label for="validationCustom02" class="form-label">Password</label>
                  <input
                    class="form-control"
                    type="password"
                    name="password"

                    value={input.password}
                    onChange={onInputChange}
                    onBlur={validateInput}></input>
                  {error.password && <span className='err'
                    style={{
                      color: "red"
                    }}
                  >{error.password}</span>}
                </div>
                <div class="mb-3">
                  <label for="validationCustom02" class="form-label">Confirm Password</label>
                  <input
                    class="form-control"
                    type="password"
                    name="confirmPassword"
                    value={input.confirmPassword}
                    onChange={onInputChange}
                    onBlur={validateInput}></input>
                  {error.confirmPassword && <span className='err'
                    style={{
                      color: "red"
                    }}>{error.confirmPassword}</span>}
                </div>


                <div id="success" style={{
                  color: "green"

                }}></div>

                <center>
                  <button
                    varient="primary"
                    value="register"
                    type="submit"
                    id="submit"
                    style={{


                    }}
                    class="btn btn-primary">register
                  </button>    <br />
                </center>
              </form><br />
              <center>
                <label> If Registered :</label>
                <br />
                <form>
                  <button

                    //  value="login"  

                    class="btn btn-success"><a href='Login' style={{ textDecoration: 'none', color: 'white' }}>Login</a>
                  </button>
                </form>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

