-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT,
    "task" TEXT NOT NULL,
    "task_date" TIMESTAMP(3) NOT NULL,
    "descerption" TEXT,
    "registration_date" TIMESTAMP(3),
    "updated_date" TIMESTAMP(3),
    "deleted_date" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);
