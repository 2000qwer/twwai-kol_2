
import auth from '../middleware/auth';
import applicationException from "../service/applicationException";
import business from '../business/business.container';
import {getLast, get1, create1, query1} from '../business/param.manager';
const paramEndpoint = (router) => {
    router.get('/api/params/last', async (request, response, next) => {
        try {
            let result = await business.getParamManager().getLast();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
     });
    router.get('/api/params', async (request, response, next) => {
        try {
            let result = await business.getParamManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
     });



     router.get('/api/params/:id', async (request, response, next) => {
        try {
            let result = await business.getParamManager().get(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
     });


    router.get('/api/params/getAll',async (request, response, next) =>{
        try {
            let result = await business.getParamManager().getAll();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
     } )

    router.post('/api/params/append',async (request, response, next) =>{
        try {
            let result = await business.getParamManager().Add();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
     } )
          
     
};


export default paramEndpoint;
