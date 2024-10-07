import { Router } from "express";
import { PrismaController } from "./prisma.controller";

export class PrismaRoutes {


    static get routes(){ 
    const router= Router();

    const prismaController =new PrismaController();

    //aqui se crearan las rutas para la base de datos
    router.post(`/manicurist`,prismaController.onCreateManicurist);

return router;
 }
}