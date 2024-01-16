import prisma from "./prismaClient";


export const queryData = async () => {
    
    try {
        
        const queryOutput = await prisma.User.findMany();
        return queryOutput;
    } catch (error) {
        console.log(error);
    };
}