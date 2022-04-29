/*
  Warnings:

  - The primary key for the `lista_de_produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id_produto]` on the table `lista_de_produtos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `lista_de_produtos` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id_compra`);

-- CreateIndex
CREATE UNIQUE INDEX `lista_de_produtos_id_produto_key` ON `lista_de_produtos`(`id_produto`);
