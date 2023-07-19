const { Medicine } = require('../models/medicines')

class medicineController {
    async createMedicine(request, response) {
        try {
            const { user_id, deposit_id, medicine_name, lab_name, description, dosage, unity_dosage, type, unity_price, quantity } = request.body;

            if (!user_id || !deposit_id || !medicine_name || !lab_name || !description || !dosage || !unity_dosage || !type || !unity_price ||
                !quantity) {
                return response.status(400).send({ message: "Fill the inputs!" })
            }
            
            const eName = await Medicine.findOne({ where: { medicine_name } });
            if (eName) {
                return response.status(409).json({ message: 'Medicine name already registered' });
            }

            const data = await Medicine.create({
                user_id,
                deposit_id,
                medicine_name,
                lab_name,
                description,
                dosage,
                unity_dosage,
                type,
                unity_price,
                quantity
            })

            return response.status(201).send(data)
        } catch (error) {
            console.log(error.message)
            return response.status(400).send({ message: "The medicine could not be created!" })
        }
    }
    async updateMedicineData(request, response) {
        try {
            const { id } = request.params
            const { description, unity_price, quantity } = request.body

            const medicine = await Medicine.findByPk(id)

            if (!medicine) {
                return response.status(404).send({ message: 'Deposit not found!' })
            }

            if (description) {
                medicine.description = description
            } if (unity_price) {
                medicine.unity_price = unity_price
            } if (quantity) {
                medicine.quantity = quantity
            }

            await medicine.save()

            return response.status(200).send({ message: 'Medicine data successfuly updated!' })
        } catch (error) {
            console.log(error)
            return response.status(400).send({ message: 'Medicine data could not update!', error })
        }
    }
    async listMedicine(request, response) {
        try {
            const { type } = request.query;
            let list = {};

            if (type) {
                list = { type };
            }

            const medicine = await Medicine.findAll({
                where: list,
            });

            return response.status(200).send(medicine);
        } catch (error) {
            console.log(error.message);
            return response.status(400).send({ message: 'Was not possible to list the medicines!' });
        }
    }
    async listMedicineById(request, response) {
        try {
            const { id } = request.params
            const data = await Medicine.findByPk(id)

            return response.status(200).send(data)
        } catch (error) {
            console.log(error.message);
            return response.status(400).send({ message: 'Was not possible to list the medicines!' });
        }
    }
    async deleteMedicine(request, response) {
        const { id } = request.params
        try {
            const medicine = await Medicine.findByPk(id)
            console.log(medicine.status)

            if (!medicine) {
                return response.status(404).send({ message: 'Medicine not found!' })
            }

            await medicine.destroy()
            return response.status(200).send({ message: 'Medicine successfuly deleted!' })
        } catch (error) {
            return response.status(400).send({ message: 'Could not delete the medicine!', error })
        }
    }
}

module.exports = new medicineController()