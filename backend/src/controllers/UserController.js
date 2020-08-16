const connection = require('../database/connection');

module.exports = {
    //CRUD -> CREATE, READ, UPDATE, DELETE
    async create(request, response){
        const {
            nome, 
            idade, 
            whatsapp, 
            endereco, 
            sexo, 
            batalhaoatual, 
            batalhaointeresse, 
            orgao,
            cpf, 
            comportamento, 
            matriculaestadual 
        } = request.body;
        
        try{
            await connection('users').insert({
                nome, 
                idade, 
                whatsapp, 
                endereco, 
                sexo, 
                batalhaoatual, 
                batalhaointeresse, 
                orgao,
                cpf, 
                comportamento, 
                matriculaestadual 
            });
        }catch(err){ 
            console.log('ERRO: Os dados do usuário NÃO foram inseridos com sucesso! '+err);
        }

        return response.json('O usuário foi criado com sucesso!');
    },

    async index(request, response){
        try{
            const users = await connection('users').select('*');
            return response.json(users);
        }catch(err){
            console.log('Erro ao listar usuários! '+err);
        }
    },
    
    async update(request, response){
        const { cpf } = request.body;
        try{
            await connection('users').where('cpf', cpf).update({name: 'name'});
            return response.json('Update succesfully');
        }catch(err){
            console.log('Error '+err);
        }
    },
    
    async delete(request, response){
        const { cpf } = request.body;
        try{
        const users = await connection('users').where('cpf', cpf).del();
        return response.json('Deleted sucessfully! '+users);
        }catch(err){
            console.log('Erro ao deletar usuário por cpf!'+err);
        }
    },
};