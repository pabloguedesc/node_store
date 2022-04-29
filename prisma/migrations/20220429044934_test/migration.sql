-- AlterTable
ALTER TABLE `compra` MODIFY `total` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `tipo_pagamento` ENUM('dinheiro', 'debito', 'credito') NULL;
