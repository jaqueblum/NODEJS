const Notas = require ('../Model/Notas');

module.exports = {
    async index (req, res) {

        let notas = await Notas.find();
        return req.json(notas);
    },

    async show(req, res) {
        let notas = await Notas.findOne({_id: req.params.id});
        return res.json(notas);
    },
    async store (req, res) {
        await Notas.create({
            user_id : req.body.user_id,
            materia_id : req.body.materia_id,
            primeiroBim : req.body.primeiroBim,
            segundoBim : req.body.segundoBim,
            terceiroBim : req.body.terceiroBim,
            quartoBim : req.body.quartoBim
        });
        await notas.populate('user').populate('materia').execPopulate();
        return res.status(200).json({success :"Notas Cadastradas com Sucesso!!", data : notas})
    },
    async update (req, res) {

        let notas = await Notas.findOne({_id: req.params.id});
        console.log(notas)

            notas.primeiroBim = req.body.primeiroBim,
            notas.segundoBim = req.body.segundoBim,
            nontas.terceiroBim = req.body.terceiroBim,
            notas.quartoBim = req.body.quartoBim
        
        await Notas.updateOne({_id: req.params.id}, notas).then(result => {
         res.status(202).json({message :"Notass editadas com Sucesso!!"});
        });
        console.log(notas)
    },
    async destroy (req, res) {
        await Notas.deleteOne({_id: req.params.id});
        return res.status(202).json({success :"Notass deletadas com Sucesso!!"})
    }

}