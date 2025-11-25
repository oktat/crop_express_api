import Crop from '../models/crop.js'

const CropController = {
    async index(req, res) {
        try {
            await CropController.tryIndex(req, res)
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
        const crops = await Crop.findAll()
        res.status(200)
        res.json({
            success: true,
            data: crops
        })
    },
    async show(req, res) {
        try {
            await CropController.tryShow(req, res)
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
        const crop = await Crop.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: crop
        })
    },
    async store(req, res) {
        try {
            await CropController.tryStore(req, res)
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
        const tmpCrop = {
            name: req.body.name,
            type: req.body.type,
            proteinContent: req.body.proteinContent,
            producerId: req.body.producerId
        }        
        const crop = await Crop.create(tmpCrop)
        res.status(201)
        res.json({
            success: true,
            data: crop
        })
    },
    async update(req, res) {
        try {
            await CropController.tryUpdate(req, res)
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
        const tempCrop = {
            name: req.body.name,
            type: req.body.type,
            proteinContent: req.body.proteinContent,
            producerId: req.body.producerId
        }
        const recordNumber = await Crop.update(tempCrop, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const crop = await Crop.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: crop
        })
    },
    async destroy(req, res) {
        try {
            await CropController.tryDestroy(req, res)
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
        const crop = await Crop.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: crop
        })
    }
}

export default CropController