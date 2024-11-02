/*
  Warnings:

  - You are about to drop the column `SubTitle` on the `PlanCategory` table. All the data in the column will be lost.
  - You are about to drop the column `SubTitleAr` on the `PlanCategory` table. All the data in the column will be lost.
  - You are about to drop the column `TitleAr` on the `PlanCategory` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `PlanCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PlanCategory" DROP COLUMN "SubTitle",
DROP COLUMN "SubTitleAr",
DROP COLUMN "TitleAr",
ADD COLUMN     "subTitle" TEXT,
ADD COLUMN     "subTitleAr" TEXT,
ADD COLUMN     "titleAr" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanCategory" ADD CONSTRAINT "PlanCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
