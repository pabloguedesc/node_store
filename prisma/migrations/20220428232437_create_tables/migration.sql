-- CreateTable
CREATE TABLE `compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DOUBLE NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tipo_pagamento` ENUM('dinheiro', 'debito', 'credito') NOT NULL,
    `status` ENUM('em_andamento', 'finalizada') NOT NULL DEFAULT 'em_andamento',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lista_de_produtos` (
    `id_compra` INTEGER NOT NULL,
    `id_produto` INTEGER NOT NULL,
    `unidade` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id_compra`, `id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_atualizacao` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lista_de_produtos` ADD CONSTRAINT `lista_de_produtos_id_compra_fkey` FOREIGN KEY (`id_compra`) REFERENCES `compra`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lista_de_produtos` ADD CONSTRAINT `lista_de_produtos_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
