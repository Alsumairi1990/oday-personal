-- CreateTable
CREATE TABLE "EmployeeProfile" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "firstNameSlug" TEXT,
    "lastName" TEXT,
    "mobile" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "bio" TEXT,
    "sex" TEXT,
    "image" TEXT,
    "avatar" TEXT,
    "jobTitle" TEXT,
    "dateOfJoining" TEXT,
    "employmentType" TEXT,
    "reportsTo" TEXT,
    "salary" DECIMAL(65,30),
    "address" TEXT,
    "country" TEXT,
    "city" TEXT,
    "postalCode" TEXT,
    "degree" TEXT,
    "institution" TEXT,
    "yearOfPassing" TEXT,
    "specialization" TEXT,
    "yearsOfExperience" INTEGER,
    "nationality" TEXT,
    "languages" TEXT[],
    "maritalStatus" TEXT,
    "socialNetworkId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployeeProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeSkill" (
    "employeeProfileId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeSkill_pkey" PRIMARY KEY ("employeeProfileId","skillId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "icon" TEXT,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialNetwork" (
    "id" SERIAL NOT NULL,
    "linkedin" TEXT,
    "github" TEXT,
    "x" TEXT,
    "facebook" TEXT,
    "youtube" TEXT,
    "website" TEXT,
    "instgram" TEXT,
    "pinterest" TEXT,
    "reddit" TEXT,
    "tikTok" TEXT,
    "snapchat" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SocialNetwork_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeProfile_socialNetworkId_key" ON "EmployeeProfile"("socialNetworkId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_slug_key" ON "Skill"("slug");

-- AddForeignKey
ALTER TABLE "EmployeeProfile" ADD CONSTRAINT "EmployeeProfile_socialNetworkId_fkey" FOREIGN KEY ("socialNetworkId") REFERENCES "SocialNetwork"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeSkill" ADD CONSTRAINT "EmployeeSkill_employeeProfileId_fkey" FOREIGN KEY ("employeeProfileId") REFERENCES "EmployeeProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeSkill" ADD CONSTRAINT "EmployeeSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
