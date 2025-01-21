import React from "react"


function MedicineForm() {
    return (

        <div className='container border border-primary border-3 p-3 my-3'>

        <form action="">

            {/* Medicine Name */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Medicine Name:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="medicineName"/>
                    
            </div>

            {/*Medicine Price */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Medicine Price:</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="price"/>
                    
            </div>

            {/*Medicine expiry date */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Expiry Date:</label>
                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="expiryDate"/>
                    
            </div>

            {/* Button to submit form */}
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
        </div>
    )
}

export default MedicineForm