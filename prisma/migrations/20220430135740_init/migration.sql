/*
  Warnings:

  - Added the required column `preco` to the `lista_de_produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lista_de_produtos` ADD COLUMN `preco` DOUBLE NOT NULL;
