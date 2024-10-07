import { Request, Response } from 'express';
import PrismaService from './prisma.service';



export class PrismaController {
    constructor(
        private readonly prismaService = new PrismaService(),
    ) {}
    
    onCreateManicurist= async(req:Request, res:Response) =>{
        const payload= req.body;
        const mensaje =await this.prismaService.onCreateManicuristReceived(payload);   
        res.status(200).send(mensaje);
    }
   

}

