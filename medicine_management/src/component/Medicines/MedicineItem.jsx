import React from "react";

function MedicineItem({ medicineName, price, expiryDate }) {
    return (

        
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{medicineName}</h5>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text">Date: {expiryDate}</p>
                        <button className="btn btn-success">Update</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

    )
}
export default MedicineItem;