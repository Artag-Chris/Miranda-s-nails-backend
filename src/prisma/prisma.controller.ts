import { Request, Response } from 'express';
import PrismaService from './prisma.service';



export class PrismaController {
    constructor(
        private readonly prismaService = new PrismaService(),
    ) {}
    
    onCreateManicurist= async(req:Request, res:Response) =>{
        //se desfragmentara el body
        const payload= req.body;
        const mensaje =await this.prismaService.onCreateManicuristReceived(payload);   
        res.status(200).send(mensaje);
    }
   
    onGetManicurist= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onGetManicuristReceived(payload);   
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
        const mensaje =await this.prismaService.onCreateClientReceived(payload);   
        res.status(200).send(mensaje);
    }
    onGetClients= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onGetClientsReceived(payload);   
        res.status(200).send(mensaje);
    }
    onGetClient= async(req:Request, res:Response) =>{
        const payload= req.params;
        const mensaje =await this.prismaService.onGetClientsReceived(payload);   
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

}

