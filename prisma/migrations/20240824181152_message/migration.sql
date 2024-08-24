/*
  Warnings:

  - Added the required column `message` to the `DevisRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DevisRequest" ADD COLUMN     "message" TEXT NOT NULL;
