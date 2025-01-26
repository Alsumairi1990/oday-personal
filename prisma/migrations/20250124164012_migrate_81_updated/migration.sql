-- CreateTable
CREATE TABLE "CompanyMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nameAr" TEXT,
    "url" TEXT NOT NULL,
    "slug" TEXT,
    "title" TEXT,
    "titleAr" TEXT,
    "image" TEXT,
    "icon" TEXT,
    "description" TEXT,
    "descriptionAr" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CompanyMenu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyMenu_url_key" ON "CompanyMenu"("url");

-- AddForeignKey
ALTER TABLE "CompanyMenu" ADD CONSTRAINT "CompanyMenu_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
