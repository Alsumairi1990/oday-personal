-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "name_slug" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "icon" TEXT,
    "description" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "serviceId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("serviceId","categoryId")
);

-- AddForeignKey
ALTER TABLE "ServiceCategory" ADD CONSTRAINT "ServiceCategory_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceCategory" ADD CONSTRAINT "ServiceCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
