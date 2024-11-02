-- CreateEnum
CREATE TYPE "BillingInterval" AS ENUM ('MONTHLY', 'SEMI_ANNUAL', 'YEARLY');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELED', 'EXPIRED');

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "descriptionAr" TEXT,
    "monthlyPrice" DECIMAL(65,30) NOT NULL DEFAULT 100.0,
    "semiAnnualPrice" DECIMAL(65,30) NOT NULL DEFAULT 500.0,
    "yearlyPrice" DECIMAL(65,30) NOT NULL DEFAULT 900.0,
    "features" TEXT,
    "featuresAr" TEXT,
    "limits" TEXT,
    "limitsAr" TEXT,
    "support" TEXT,
    "supportAr" TEXT,
    "purpose" TEXT,
    "image" TEXT,
    "icon" TEXT,
    "interval" "BillingInterval" NOT NULL DEFAULT 'MONTHLY',
    "duration" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "planId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nameAr" TEXT,
    "slug" TEXT NOT NULL,
    "image" TEXT,
    "title" TEXT,
    "TitleAr" TEXT,
    "SubTitle" TEXT,
    "SubTitleAr" TEXT,
    "icon" TEXT,
    "description" TEXT,
    "descriptionAr" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlanToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PlanToPlanCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Plan_slug_key" ON "Plan"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PlanCategory_slug_key" ON "PlanCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanToService_AB_unique" ON "_PlanToService"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanToService_B_index" ON "_PlanToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlanToPlanCategory_AB_unique" ON "_PlanToPlanCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_PlanToPlanCategory_B_index" ON "_PlanToPlanCategory"("B");

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanToService" ADD CONSTRAINT "_PlanToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanToService" ADD CONSTRAINT "_PlanToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanToPlanCategory" ADD CONSTRAINT "_PlanToPlanCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Plan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlanToPlanCategory" ADD CONSTRAINT "_PlanToPlanCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "PlanCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
