const { Deposit } = require('../models/deposit')

class depositController {
    async createDeposit(request, response) {
        try {
            const { user_id, corporate_name, cnpj, trading_name, email, phone, cellphone, cep, log, number,
                town, city, state, complement, latitude, longitude } = request.body;

            if (!user_id || !corporate_name || !cnpj || !trading_name || !email || !phone || !cellphone || !cep || !log || !town || !city || !state) {
                return response.status(400).send({ message: "Fill the inputs!" })
            }


            const eCNPJ = await Deposit.findOne({ where: { cnpj } });
            if (eCNPJ) {
                return response.status(409).json({ message: 'CNPJ already registered' });
            }

            const eCorporateName = await Deposit.findOne({ where: { corporate_name } });
            if (eCorporateName) {
                return response.status(409).json({ message: 'Corporate Name is already registered!' });
            }

            const data = await Deposit.create({
                user_id,
                corporate_name,
                cnpj,
                trading_name,
                email,
                phone,
                cellphone,
                cep,
                log,
                number,
                town,
                city,
                state,
                complement,
                latitude,
                longitude
            })
            return response.status(201).send(data)
        } catch (error) {
            console.log(error.message)
            return response.status(400).send({ message: "The deposit could not be created!" })
        }
    }
    async updateDepositData(request, response) {
        try {
            const { id } = request.params
            const { user_id, trading_name, email, phone, cellphone, complement, latitude, longitude } = request.body

            const deposit = await Deposit.findByPk(id)

            if (!deposit) {
                return response.status(404).send({ message: 'Deposit not found!' })
            }

            if (trading_name) {
                deposit.trading_name = trading_name
            } if (email) {
                deposit.email = email
            } if (phone) {
                deposit.phone = phone
            } if (cellphone) {
                deposit.cellphone = cellphone
            } if (complement) {
                deposit.complement = complement
            } if (latitude) {
                deposit.latitude = latitude
            } if (longitude) {
                deposit.longitude = longitude
            }

            await deposit.save()

            return response.status(200).send({ message: 'Deposit data successfuly updated!' })
        } catch (error) {
            console.log(error)
            return response.status(400).send({ message: 'Deposit data could not update!', error })
        }
    }
    async updateDepositStatus(request, response) {
        try {
            const { id } = request.params
            const { status } = request.body
            const deposit = await Deposit.findByPk(id)

            if (!deposit) {
                return response.status(404).send({ message: 'Deposit not found!' })
            }

            if (status) {
                deposit.status = status
            }
            await deposit.save()

            return response.status(200).send(deposit)
        } catch (error) {
            return response.status(400).send({ message: 'Deposit status could not update!', error })
        }
    }
    async listDeposit(request, response) {
        try {
            const { status } = request.query;
            console.log(status)
            let list = {};

            if (status) {
                list = { status };
            }

            const deposits = await Deposit.findAll({
                where: list,
            });

            return response.status(200).send(deposits);
        } catch (error) {
            console.log(error.message);
            return response.status(400).send({ message: 'Was not possible to list the deposits!' });
        }
    }
    async listDepositById(request, response) {
        try {
            const { id } = request.params
            const data = await Deposit.findByPk(id)
    
            return response.status(200).send(data)
        } catch (error) {
            console.log(error.message);
            return response.status(400).send({ message: 'Was not possible to list the deposits!' });
        }
    }
    async deleteDeposit(request, response){
        const { id } = request.params
        try {
            const deposit = await Deposit.findByPk(id)
            console.log(deposit.status)

            if(!deposit){
                return response.status(404).send({message: 'Deposit not found!'})
            }

            if(deposit.status !== 'inactive' ){
                return response.status(400).send({message: 'Could not delete the deposit, maybe it is active or it has some medicines in it.'})
            }else{
                await deposit.destroy()
                return response.status(200).send({message: 'Deposit successfuly deleted!'})
            }
        } catch (error) {
            return response.status(400).send({message: 'Could not delete the deposit!', error})
        }
    }
}

module.exports = new depositController()