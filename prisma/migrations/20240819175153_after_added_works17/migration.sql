-- AlterTable
ALTER TABLE "Phase" ADD COLUMN     "projectId" TEXT;

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "priority" TEXT,
    "dueDate" TIMESTAMP(3),
    "estimatedHours" DOUBLE PRECISION,
    "actualHours" DOUBLE PRECISION,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "budget" DECIMAL(65,30),
    "priority" TEXT,
    "progress" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,
    "clientId" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "companyName" TEXT,
    "website" TEXT,
    "industry" TEXT,
    "notes" TEXT,
    "billingAddress" TEXT,
    "billingEmail" TEXT,
    "taxId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3),
    "invoiceType" TEXT,
    "initialPayment" DOUBLE PRECISION,
    "paymentStatus" TEXT NOT NULL DEFAULT 'pedning',
    "clientId" TEXT NOT NULL,
    "clientName" TEXT,
    "clientAddress" TEXT,
    "clientContact" TEXT,
    "clientEmail" TEXT,
    "clientPhone" TEXT,
    "serviceId" INTEGER NOT NULL,
    "serviceDescription" TEXT NOT NULL,
    "quantity" INTEGER,
    "unitPrice" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,
    "taxRate" DOUBLE PRECISION,
    "subtotal" DOUBLE PRECISION,
    "taxAmount" DOUBLE PRECISION,
    "discountAmount" DOUBLE PRECISION,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "paymentTerms" TEXT,
    "paidAt" TIMESTAMP(3),
    "paymentMethod" TEXT,
    "notes" TEXT,
    "referenceNumber" TEXT,
    "termsAndConditions" TEXT,
    "attachments" TEXT[],
    "companyName" TEXT,
    "companyAddress" TEXT,
    "companyEmail" TEXT,
    "companyPhone" TEXT,
    "taxId" TEXT,
    "taxDetails" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "description" TEXT,
    "clientId" TEXT,
    "clientName" TEXT NOT NULL,
    "clientAddress" TEXT,
    "clientContact" TEXT,
    "clientEmail" TEXT,
    "clientPhone" TEXT,
    "serviceId" INTEGER NOT NULL,
    "quantity" INTEGER,
    "unitPrice" DOUBLE PRECISION,
    "estimatedCost" DOUBLE PRECISION,
    "subtotal" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,
    "taxRate" DOUBLE PRECISION,
    "taxAmount" DOUBLE PRECISION,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "paymentTerms" TEXT,
    "paidAt" TIMESTAMP(3),
    "paymentMethod" TEXT,
    "startDate" TIMESTAMP(3),
    "completionDate" TIMESTAMP(3),
    "notes" TEXT,
    "referenceNumber" TEXT,
    "termsAndConditions" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectManagerId" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillingInfo" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    CONSTRAINT "BillingInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToProject" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TaskToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToTool" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "Invoice"("invoiceNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProject_AB_unique" ON "_CategoryToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProject_B_index" ON "_CategoryToProject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TaskToUser_AB_unique" ON "_TaskToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TaskToUser_B_index" ON "_TaskToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTool_AB_unique" ON "_ProjectToTool"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTool_B_index" ON "_ProjectToTool"("B");

-- AddForeignKey
ALTER TABLE "Phase" ADD CONSTRAINT "Phase_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_projectManagerId_fkey" FOREIGN KEY ("projectManagerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillingInfo" ADD CONSTRAINT "BillingInfo_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProject" ADD CONSTRAINT "_CategoryToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProject" ADD CONSTRAINT "_CategoryToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToUser" ADD CONSTRAINT "_TaskToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TaskToUser" ADD CONSTRAINT "_TaskToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTool" ADD CONSTRAINT "_ProjectToTool_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTool" ADD CONSTRAINT "_ProjectToTool_B_fkey" FOREIGN KEY ("B") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;
