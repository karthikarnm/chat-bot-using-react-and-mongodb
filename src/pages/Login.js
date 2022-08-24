import React, { useState } from 'react'

export default function Login() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch("http://localhost:8000/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        Email,
        Password,
      }),
    })
    const data = await response.json()
    console.log(data)
    if (data.user) {
      alert('Login sucessfully ')
      window.location.href = '/Home'
    }
    else {
      alert("plz check")
    }
  }


  return (
    <div>
      <center>
        <h1 className='heading'>Login here {Email.data}</h1>
      </center><br /><br />
      <div className='container bg dark'>
        <div className='row'>
          <div className="col-md-6 side-image1">
            <img src='./images/login3.jpg' alt="" />
          </div>
          <div className='col-md-6'>
            <form action='/' method='post' className='form1' onSubmit={loginUser}><br /><br />
              <div class="mb-3">
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
              </div>
              <div class="mb-3">
                <label for="validationCustom02" class="form-label">Password</label>
                <input class="form-control"
                  value={Password}
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  name="name" required />
              </div>
              <center>
                <button
                  value="Login"
                  type="submit"
                  class="btn btn-primary">Login
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
