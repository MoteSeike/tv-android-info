/*
  Warnings:

  - You are about to drop the column `descerption` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "descerption",
ADD COLUMN     "descrption" TEXT;
