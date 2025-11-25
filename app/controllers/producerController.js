import Producer from '../models/producer.js'

const ProducerController = {
    async index(req, res) {
        try {
            await ProducerController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const producers = await Producer.findAll()
        res.status(200)
        res.json({
            success: true,
            data: producers
        })
    },
    async show(req, res) {
        try {
            await ProducerController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const producer = await Producer.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: producer
        })
    },
    async store(req, res) {
        try {
            await ProducerController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const tmpProducer = {
            name: req.body.name,
            country: req.body.country,
            yearOfFoundation: req.body.yearOfFoundation,
            capacityHectare: req.body.capacityHectare
        }
        const producer = await Producer.create(tmpProducer)
        res.status(201)
        res.json({
            success: true,
            data: producer
        })
    },
    async update(req, res) {
        try {
            await ProducerController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const tempProducer = {
            name: req.body.name,
            country: req.body.country,
            yearOfFoundation: req.body.yearOfFoundation,
            capacityHectare: req.body.capacityHectare
        }
        const recordNumber = await Producer.update(tempProducer, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const producer = await Producer.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: producer
        })
    },
    async destroy(req, res) {
        try {
            await ProducerController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const producer = await Producer.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: producer
        })
    }
}

export default ProducerController