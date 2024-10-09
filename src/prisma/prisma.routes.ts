import { Router } from "express";
import { PrismaController } from "./prisma.controller";

export class PrismaRoutes {


    static get routes(){ 
    const router= Router();

    const prismaController =new PrismaController();

    //aqui se crearan las rutas para la base de datos
    router.post(`/manicurist`,prismaController.onCreateManicurist);
    router.get(`/manicurist`,prismaController.onGetManicurist);

    router.post(`/client`,prismaController.onCreateClient);
    router.get(`/client`,prismaController.onGetClient);

    router.post(`/createhistory`,prismaController.onCreatehistory);
    router.get(`/gethistory`,prismaController.onGethistory);

    router.post(`/inventary`,prismaController.onCreateInventary);
    router.get(`/inventary`,prismaController.onGetInventary);


return router;
 }
}