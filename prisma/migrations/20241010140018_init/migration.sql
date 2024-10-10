-- CreateTable
CREATE TABLE "Manicurista" (
    "id" BIGSERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT,
    "email" TEXT,

    CONSTRAINT "Manicurista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" BIGSERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT,
    "email" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servicio" (
    "id" BIGSERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoServicio" (
    "id" BIGSERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "TipoServicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistorialUnas" (
    "id" BIGSERIAL NOT NULL,
    "cliente_id" BIGINT NOT NULL,
    "manicurista_id" BIGINT NOT NULL,
    "servicio_id" BIGINT NOT NULL,
    "tipo_servicio_id" BIGINT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "observaciones" TEXT,
    "tiene_hongos" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "HistorialUnas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turno" (
    "id" BIGSERIAL NOT NULL,
    "cliente_id" BIGINT NOT NULL,
    "manicurista_id" BIGINT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',

    CONSTRAINT "Turno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaccion" (
    "id" BIGSERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT,
    "cliente_id" BIGINT NOT NULL,

    CONSTRAINT "Transaccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiciosRealizados" (
    "id" BIGSERIAL NOT NULL,
    "turno_id" BIGINT NOT NULL,
    "servicio_id" BIGINT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ServiciosRealizados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" BIGSERIAL NOT NULL,
    "nombre_producto" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "costo_unitario" DOUBLE PRECISION NOT NULL,
    "precio_venta" DOUBLE PRECISION NOT NULL,
    "fecha_ultima_actualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReporteFinanciero" (
    "id" BIGSERIAL NOT NULL,
    "nombre_reporte" TEXT NOT NULL,
    "fecha_generacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contenido" TEXT,

    CONSTRAINT "ReporteFinanciero_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HistorialUnas_cliente_id_key" ON "HistorialUnas"("cliente_id");

-- CreateIndex
CREATE UNIQUE INDEX "Turno_cliente_id_key" ON "Turno"("cliente_id");

-- CreateIndex
CREATE UNIQUE INDEX "Transaccion_cliente_id_key" ON "Transaccion"("cliente_id");

-- AddForeignKey
ALTER TABLE "HistorialUnas" ADD CONSTRAINT "HistorialUnas_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialUnas" ADD CONSTRAINT "HistorialUnas_manicurista_id_fkey" FOREIGN KEY ("manicurista_id") REFERENCES "Manicurista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialUnas" ADD CONSTRAINT "HistorialUnas_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialUnas" ADD CONSTRAINT "HistorialUnas_tipo_servicio_id_fkey" FOREIGN KEY ("tipo_servicio_id") REFERENCES "TipoServicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_manicurista_id_fkey" FOREIGN KEY ("manicurista_id") REFERENCES "Manicurista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaccion" ADD CONSTRAINT "Transaccion_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiciosRealizados" ADD CONSTRAINT "ServiciosRealizados_turno_id_fkey" FOREIGN KEY ("turno_id") REFERENCES "Turno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiciosRealizados" ADD CONSTRAINT "ServiciosRealizados_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
