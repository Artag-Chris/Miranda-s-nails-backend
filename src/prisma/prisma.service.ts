import { PrismaClient } from '@prisma/client';
import { envs } from '../config/envs';

class PrismaService extends PrismaClient {
  constructor() {
   // const dbHost = envs.DB_HOST;
    //const dbPort = envs.DB_PORT;
    //const dbUser = envs.DB_USER;
    //const dbPassword = envs.DB_PASSWORD;
    //const database = envs.DATABASE;

    super( );

    this.init(); 
  }
  
   ///se cambiara los metodos 
   async onCreateManicuristReceived(nombre: string, telefono: string, email: string) {
    
    try {
      
      const manicuristaExistente = await this.manicurista.findFirst({
        where: {
          nombre,
          telefono,
        },
      });
  
      if (manicuristaExistente) {
        const manicuristaActualizado = await this.manicurista.update({
          where: {
            id: manicuristaExistente.id,
          },
          data: {
            telefono,
            email,
            nombre
          },
        });
  
        console.log(manicuristaActualizado);
        return 'Manicurista actualizado con éxito';
      } else {
        const manicuristaNuevo = await this.manicurista.create({
          data: {
            nombre,
            telefono,
            email,
          },
        });
  
        console.log(manicuristaNuevo);
        return 'Manicurista creado con éxito';
      }
    } catch (error) {
      console.error('Error al crear o actualizar manicurista:', error);
      return 'Error al crear o actualizar manicurista';
    }
    
  }
  async onGetManicuristReceived() {
    try {
      const manicuristas = await this.manicurista.findMany();
      return manicuristas.map((manicurista) => {
        return {
          ...manicurista,
          id: manicurista.id.toString(),
        };
      });
    } catch (error) {
      console.error('Error al obtener manicuristas:', error);
      return 'Error al obtener manicuristas';
    }
  }
  async onCreateInventaryReceived(nombre_producto: string, cantidad: number, costo_unitario: number, precio_venta: number) { 
    try {
      const inventarioExistente = await this.inventario.findFirst({
        where: {
          nombre_producto,
        },
      });
  
      if (inventarioExistente) {
        const inventarioActualizado = await this.inventario.update({
          where: {
            id: inventarioExistente.id,
          },
          data: {
            cantidad,
            costo_unitario,
            precio_venta,
          },
        });
  
        console.log(inventarioActualizado);
        return 'Inventario actualizado con éxito';
      } else {
        const inventarioNuevo = await this.inventario.create({
          data: {
            nombre_producto,
            cantidad,
            costo_unitario,
            precio_venta,
          },
        });
  
        console.log(inventarioNuevo);
        return 'Inventario creado con éxito';
      }
    } catch (error) {
      console.error('Error al crear o actualizar inventario:', error);
      return 'Error al crear o actualizar inventario';
    }
  }
  async onGetAllInventaryReceived() {
    try {
      const inventarios = await this.inventario.findMany();
      return inventarios.map((inventario) => ({ ...inventario, id: inventario.id.toString() }));
    } catch (error) {
      console.error('Error al obtener inventarios:', error);
      return 'Error al obtener inventarios';
    }
  }
  async onGetInventaryReceived(nombre: string) {
    console.log(nombre);
    try {
      const inventarios = await this.inventario.findMany({
        where: {
          nombre_producto: {
            contains: nombre,
            mode: 'insensitive',
          },
        },
      });
  
      return inventarios.map((inventario) => ({ ...inventario, id: inventario.id.toString() }));
    } catch (error) {
      console.error('Error al obtener inventarios:', error);
      return 'Error al obtener inventarios';
    }
  }
  async onCreateClientReceived(nombre: string, telefono: string, email: string) {
    try {
      const clienteExistente = await this.cliente.findFirst({
        where: {
          nombre,
          telefono,
        },
      });
  
      if (clienteExistente) {
        const clienteActualizado = await this.cliente.update({
          where: {
            id: clienteExistente.id,
          },
          data: {
            nombre: nombre,
            telefono: telefono,
            email: email,
          },
        });
        return { ...clienteActualizado, id: clienteActualizado.id.toString() };
      } else {
        const clienteNuevo = await this.cliente.create({
          data: {
            nombre: nombre,
            telefono: telefono,
            email: email,
          },
        });
        return { ...clienteNuevo, id: clienteNuevo.id.toString() };
      }
    } catch (error) {
      console.error('Error al crear o actualizar cliente:', error);
      return 'Error al crear o actualizar cliente';
    }
      
  }
  async onGetClientsReceived() {
    try {
      const clientes = await this.cliente.findMany();
      return clientes.map((cliente) => ({ ...cliente, id: cliente.id.toString() }));
    } catch (error) {
      console.error('Error al obtener clientes:', error);
      return 'Error al obtener clientes';
    }
  }
  async onGetClientReceived(name: string) {
    try {
      const cliente = await this.cliente.findFirst({
        where: {
          nombre: name,
        },
      });
      if (cliente) {
        return { ...cliente, id: cliente.id.toString() };
      } else {
        return 'Cliente no encontrado';
      }
    } catch (error) {
      console.error('Error al obtener cliente:', error);
      return 'Error al obtener cliente';
    }
  }
  async onCreatehistoryReceived(cliente_id:number, manicurista_id:number, servicio_id:any,tipo_servicio_id:number, fecha:any, observaciones:any, tiene_hongos:boolean) {
   
    try {
      const historialUnas = await this.historialUnas.create({
        data: {
          cliente_id: cliente_id,
          manicurista_id: manicurista_id,
          servicio_id: servicio_id,
          tipo_servicio_id: tipo_servicio_id,
          fecha: fecha,
          observaciones: observaciones,
          tiene_hongos: tiene_hongos,
        },
      });
  
      return historialUnas;
    } catch (error) {
      console.error('Error al crear historial de unas:', error);
      return 'Error al crear historial de unas';
    }
  }
  async onGethistoryReceived() {
    try {
      const historialesUnas = await this.historialUnas.findMany({
        select: {
          id: true,
          fecha: true,
          observaciones: true,
          cliente: {
            select: {
              nombre: true,
              telefono: true,
            },
          },
          manicurista: {
            select: {
              nombre: true,
              telefono: true,
            },
          },
        },
      });
  
      return historialesUnas;
    } catch (error) {
      console.error('Error al obtener historiales de uñas:', error);
      return 'Error al obtener historiales de uñas';
    }
  }
  async onGetSpecificHistoryReceived(cliente_id: any) {
    try {
      const historialUnas = await this.historialUnas.findUnique({
        where: {
          cliente_id,
        },
        include: {
          cliente: true,
          manicurista: true,
          servicio: true,
          tipo_servicio: true,
        },
      });
  
      if (!historialUnas) {
        return 'Historial de uñas no encontrado';
      }
  
      return historialUnas;
    } catch (error) {
      console.error('Error al obtener historial de uñas:', error);
      return 'Error al obtener historial de uñas';
    }
  }
  async onCreateNewturnReceived(cliente_id: number, manicurista_id: number, fecha:Date, hora:string) {
  
    try {
      const turno = await this.turno.create({
        data: {
          cliente_id: cliente_id,
          manicurista_id: manicurista_id,
          fecha: fecha,
          hora: hora,
          estado: "pendiente",
        },
      });
  
      return turno;
    } catch (error) {
      console.error('Error al crear turno:', error);
      return 'Error al crear turno';
    }
  }
  async onGetTurnsReceived() {
    try {
      const turnos = await this.turno.findMany({
        include: {
          cliente: true,
          manicurista: true,
          ServiciosRealizados: true,
        },
      });
  
      return turnos;
    } catch (error) {
      console.error('Error al obtener turnos:', error);
      return 'Error al obtener turnos';
    }
  }
  async onGetSpecificTurnsReceived(cliente_id: any ) {
    
    try {
      const turno = await this.turno.findFirst({
        where: {
          cliente_id: cliente_id,
          estado: 'pendiente',
        },
        include: {
          cliente: true,
          manicurista: true,
          ServiciosRealizados: true,
        },
      });
  
      if (turno) {
        return turno;
      } else {
        return 'Turno no encontrado';
      }
    } catch (error) {
      console.error('Error al obtener turno:', error);
      return 'Error al obtener turno';
    }
  }
  async onCreateNewfinanceReportReceived(nombre_reporte: string, contenido:any ) {
    
    try {
      const reporteFinanciero = await this.reporteFinanciero.create({
        data: {
          nombre_reporte: nombre_reporte,
          contenido: contenido,
        },
      });
  
      return reporteFinanciero;
    } catch (error) {
      console.error('Error al crear reporte financiero:', error);
      return 'Error al crear reporte financiero';
    }
  }
  async onGetAllFinancesReportsReceived() {
    try {
      const reportesFinancieros = await this.reporteFinanciero.findMany();
  
      return reportesFinancieros;
    } catch (error) {
      console.error('Error al obtener reportes financieros:', error);
      return 'Error al obtener reportes financieros';
    }
  }
  async onGetFinancesReportReceived(id: any) {
    
    try {
      const reporteFinanciero = await this.reporteFinanciero.findUnique({
        where: {
         id
        },
      });
  
      if (reporteFinanciero) {
        return reporteFinanciero;
      } else {
        return 'Reporte financiero no encontrado';
      }
    } catch (error) {
      console.error('Error al obtener reporte financiero:', error);
      return 'Error al obtener reporte financiero';
    }
  }
 
  
  async init() {
    try {
      await this.$connect();
      console.log(`Conexión a la base de datos establecida correctamente.`);
    } catch (error) {
      console.error('Error al conectar con la base de datos:', error);
    }
  }

  async destroy() {
    await this.$disconnect();
  }
}

const prismaService = new PrismaService();

process.on('SIGINT', async () => {
  await prismaService.destroy();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prismaService.destroy();
  process.exit(0);
});

export default PrismaService;