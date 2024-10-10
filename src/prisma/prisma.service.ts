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
    console.log(nombre, telefono, email);
    
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
  async onGetManicuristReceived(payload: any) {
    console.log("en getAllManicuristas");
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
  async onCreateInventaryReceived(payload: any) {
    //creara un nuevo inventario en la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onGetAllInventaryReceived(payload: any) {
    //obtiene todos los inventarios de la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onGetInventaryReceived(payload: any) {
    //obtiene todos los inventarios de la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onCreateClientReceived(payload: any) {
    //creara un nuevo cliente en la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onGetClientsReceived(payload: any) {
    //obtiene todos los clientes de la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onGetClientReceived(payload: any) {
    //obtiene todos los clientes de la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onCreatehistoryReceived(payload: any) {
    //creara un nuevo historial en la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onGethistoryReceived(payload: any) {
    //obtiene todos los historiales de la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onCreateNewturnReceived(payload: any) {
    //creara un nuevo turno en la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onGetTurnsReceived(payload: any) {
    //obtiene todos los turnos de la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onGetSpecificTurnsReceived(payload: any) {
    //obtiene todos los turnos de la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onCreateNewfinanceReportReceived(payload: any) {
    //creara un nuevo historial en la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onGetAllFinancesReportsReceived(payload: any) {
    //obtiene todos los historiales de la db
    console.log(payload);
    return 'Texto recibido';
  }
  async onGetFinancesReportReceived(payload: any) {
    //obtiene todos los historiales de la db
    console.log(payload);
    return 'Texto recibido';
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