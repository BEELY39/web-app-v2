-- CreateTable
CREATE TABLE "DevisRequest" (
    "id" SERIAL NOT NULL,
    "age" TEXT NOT NULL,
    "entrepriseSize" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DevisRequest_pkey" PRIMARY KEY ("id")
);
