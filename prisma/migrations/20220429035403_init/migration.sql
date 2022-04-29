/*
  Warnings:

  - You are about to drop the column `unidade` on the `lista_de_produtos` table. All the data in the column will be lost.
  - Added the required column `valor` to the `lista_de_produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lista_de_produtos` DROP COLUMN `unidade`,
    ADD COLUMN `quantidade` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `valor` DOUBLE NOT NULL;
