import React ,{useState} from "react"


export default function AddCustomer(){


return (

<form>
  <div class="mb-3">
    <label for="Name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" required/>
    <div id="invalidCheck3Feedback" class="invalid-feedback"> </div>
  </div>
  
  <div class="mb-3">
    <label for="email" class="form-label">E-mail</label>
    <input type="email" class="form-control" id="name" aria-describedby="emailHelp" required/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>


  <div class="mb-3">
    <label for="phone" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="phone" required/>
  </div>

  <div class="mb-3">
  <label for="gender" class="form-label">Gender</label>
    <select class="form-select" required aria-label="select example">
      <option value="1">Female</option>
      <option value="2">Male</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

<h1> Enter ypour Credentials</h1>

  <div class="mb-3">
    <label for="userName" class="form-label" required>UserName</label>
    <input type="text" class="form-control" id="userName" />
  </div>

  <div class="mb-3">
    <label for="password" class="form-label" required>Password</label>
    <input type="password" class="form-control" id="password"/>
  </div>

  <div class="mb-3">
    <label for="Repassword" class="form-label" required>Re - Password</label>
    <input type="password" class="form-control" id="Repassword"/>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/ >
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>



)

}