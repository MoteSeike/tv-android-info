/*
  Warnings:

  - You are about to drop the column `deleted_date` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "deleted_date",
ALTER COLUMN "task_date" SET DATA TYPE TEXT,
ALTER COLUMN "registration_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_date" SET DEFAULT CURRENT_TIMESTAMP;
