import { Request, Response } from 'express';
import PrismaService from './prisma.service';



export class PrismaController {
    constructor(
        private readonly prismaService = new PrismaService(),
    ) {}
    
    onCreateManicurist= async(req:Request, res:Response) =>{
        const payload= req.body;
        const { nombre, telefono, email } = payload;
        const response =await this.prismaService.onCreateManicuristReceived(nombre, telefono, email);   
        res.status(200).send(response);
    }
   
    onGetManicurist= async(req:Request, res:Response) =>{
       
        const mensaje =await this.prismaService.onGetManicuristReceived();   
        res.status(200).send(mensaje);
    }
    onCreateInventary= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onCreateInventaryReceived(payload);   
        res.status(200).send(mensaje);
    }
    onGetAllInventary= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onGetAllInventaryReceived(payload);   
        res.status(200).send(mensaje);
    }
    onGetInventary= async(req:Request, res:Response) =>{
        const payload= req.params;
        const mensaje =await this.prismaService.onGetInventaryReceived(payload);   
        res.status(200).send(mensaje);
    }
    onCreateClient= async(req:Request, res:Response) =>{
        const payload= req.body;
        const{nombre, telefono, email} = payload
        const mensaje =await this.prismaService.onCreateClientReceived(nombre, telefono, email);   
        res.status(200).send(mensaje);
    }
    onGetClients= async(req:Request, res:Response) =>{
        const mensaje =await this.prismaService.onGetClientsReceived();   
        res.status(200).send(mensaje);
    }
    onGetClient= async(req:Request, res:Response) =>{
        const name= req.params.name;
        const mensaje =await this.prismaService.onGetClientReceived(name);   
        res.status(200).send(mensaje);
    }
    onCreatehistory= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onCreatehistoryReceived(payload);   
        res.status(200).send(mensaje);
    }
    onGethistory= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onGethistoryReceived(payload);   
        res.status(200).send(mensaje);
    }
    onCreateNewturn= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onCreateNewturnReceived(payload);   
        res.status(200).send(mensaje);
    }
    onGetTurns= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onGetTurnsReceived(payload);   
        res.status(200).send(mensaje);
    }
    onGetSpecificTurn= async(req:Request, res:Response) =>{
        const payload= req.params;
        const mensaje =await this.prismaService.onGetSpecificTurnsReceived(payload);   
        res.status(200).send(mensaje);
    }
    onCreateNewfinanceReport= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onCreateNewfinanceReportReceived(payload);   
        res.status(200).send(mensaje);
    }
    onGetAllFinancesReports= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onGetAllFinancesReportsReceived(payload);   
        res.status(200).send(mensaje);
    }
    onGetFinancesReport= async(req:Request, res:Response) =>{
        const payload= req.params;
        const mensaje =await this.prismaService.onGetFinancesReportReceived(payload);   
        res.status(200).send(mensaje);
    }

}

