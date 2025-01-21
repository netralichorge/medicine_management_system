import React from "react"


function UserRegistration() {
    return (

        <div className='container border border-primary border-1 p-2 my-3 '>
            <form>
            <h1 className='bg-primary p-3 text-green text-center'> Add User</h1>
                
                <div className="mb-3">
                    {/* User Name */}
                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='userName' />
                </div>
                <div className="mb-3">
                    {/* User Email */}
                    <label for="exampleInputEmail1" className="form-label">Email Id:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='emailId' />
                </div>
                <div className="mb-3">
                    {/* User Password */}
                    <label for="exampleInputEmail1" className="form-label"> Password:</label>
                    <input type="password" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='password' />
                </div>

                <div className="mb-3">
                    {/* Confirm Password */}
                    <label for="exampleInputEmail1" className="form-label">Confirm Password:</label>
                    <input type="password" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='confirmPassword' />
                </div>

                {/* Submit button */}
                <button type="button" class="btn btn-primary">Submit</button>
                
            </form>
        </div>
    )
}

export default UserRegistration;