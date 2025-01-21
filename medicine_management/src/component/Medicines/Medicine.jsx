import React, { useEffect, useState } from "react";
import MedicineForm from "./MedicineForm";
import MedicineItem from "./MedicineItem";
import { getMedicines } from "../../sevices/MedicineService";


function Medicine() {

    let [medicines, setMedicines] = useState([])

    useEffect(() => {
        getMedicines()
            .then(data => {
                setMedicines(data);
            })
    }, [])
    return (

        <div>

            <div class="container">
                <div class="row">
                    <div class="col">
                        {/* Medicine Form Start */}
                        <MedicineForm />
                        {/* Medicine Form End */}
                    </div>

                    <div class="col">
                        {/* Displaying Medicines : Start */}
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            {medicines.map((m) => {
                                return (
                                    <MedicineItem
                                    medicineName={m.medicineName}
                                    price={m.price}
                                    expiryDate={m.expiryDate}
                                    />
                                )
                            })}
                        </div>
                        {/* Displaying Medicines : End */}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Medicine;