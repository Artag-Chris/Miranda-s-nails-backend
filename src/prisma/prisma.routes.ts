import { Router } from "express";
import { PrismaController } from "./prisma.controller";

export class PrismaRoutes {


    static get routes(){ 
    const router= Router();

    const prismaController =new PrismaController();

    //aqui se crearan las rutas para la base de datos
    router.post(`/manicurist`,prismaController.onCreateManicurist);
    router.get(`/getallmanicurist`,prismaController.onGetManicurist);

    router.post(`/client`,prismaController.onCreateClient);
    router.get(`/clients`,prismaController.onGetClients);
    router.get(`/client:id`,prismaController.onGetClient);

    router.post(`/createhistory`,prismaController.onCreatehistory);
    router.get(`/gethistory`,prismaController.onGethistory);

    router.post(`/inventary`,prismaController.onCreateInventary);
    router.get(`/allinventary`,prismaController.onGetAllInventary);
    router.get(`/inventary:id`,prismaController.onGetInventary);

    router.post(`/newturn`,prismaController.onCreateNewturn);
    router.get(`/turns`,prismaController.onGetTurns);
    router.get(`/turns:id`,prismaController.onGetSpecificTurn);

    router.post(`/financereport`,prismaController.onCreateNewfinanceReport);
    router.get(`/financereport`,prismaController.onGetAllFinancesReports);
    router.get(`/financereport:id`,prismaController.onGetFinancesReport);

return router;
 }
}