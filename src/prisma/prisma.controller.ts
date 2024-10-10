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
        const { nombre_producto, cantidad, costo_unitario, precio_venta } = payload;
        const mensaje =await this.prismaService.onCreateInventaryReceived(nombre_producto, cantidad, costo_unitario, precio_venta);   
        res.status(200).send(mensaje);
    }
    onGetAllInventary= async(req:Request, res:Response) =>{
        
        const mensaje =await this.prismaService.onGetAllInventaryReceived();   
        res.status(200).send(mensaje);
    }
    onGetInventary= async(req:Request, res:Response) =>{
        const nombre= req.params.nombre;
        const mensaje =await this.prismaService.onGetInventaryReceived(nombre);   
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
        const { cliente_id, manicurista_id, fecha, hora } = payload;
        const mensaje =await this.prismaService.onCreateNewturnReceived(cliente_id, manicurista_id, fecha, hora);   
        res.status(200).send(mensaje);
    }
    onGetTurns= async(req:Request, res:Response) =>{
        const mensaje =await this.prismaService.onGetTurnsReceived();   
        res.status(200).send(mensaje);
    }
    onGetSpecificTurn= async(req:Request, res:Response) =>{
        const payload= req.params;
        const { cliente_id } = payload;
        const mensaje =await this.prismaService.onGetSpecificTurnsReceived(cliente_id);   
        res.status(200).send(mensaje);
    }
    onCreateNewfinanceReport= async(req:Request, res:Response) =>{
        const payload= req.body;
        const { nombre_reporte, contenido } = payload;
        const mensaje =await this.prismaService.onCreateNewfinanceReportReceived(nombre_reporte, contenido);   
        res.status(200).send(mensaje);
    }
    onGetAllFinancesReports= async(req:Request, res:Response) =>{
        
        const mensaje =await this.prismaService.onGetAllFinancesReportsReceived();   
        res.status(200).send(mensaje);
    }
    onGetFinancesReport= async(req:Request, res:Response) =>{
        const id= req.params.id;
        
        const mensaje =await this.prismaService.onGetFinancesReportReceived(id);   
        res.status(200).send(mensaje);
    }

}

