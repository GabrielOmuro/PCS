const { createMedicine, updateMedicineData, listMedicine, listMedicineById, deleteMedicine } = require('../controllers/medicine.controller')
const { Router } = require('express')
const { auth } = require('../middleware/auth')

class medicineRouter{
    medicineRoutes(){
        const medicineRoutes = Router()
        medicineRoutes.post('/Medicine/CreateMedicine', auth, createMedicine)
        medicineRoutes.patch('/Medicine/UpdateMedicineData/:id', auth, updateMedicineData)
        medicineRoutes.get('/Medicine/listMedicine', auth, listMedicine )
        medicineRoutes.get('/Medicine/listMedicineById/:id', auth, listMedicineById)
        medicineRoutes.delete('/Medicine/deleteMedicine/:id', auth, deleteMedicine)
        return medicineRoutes
    }
}

module.exports = new medicineRouter()