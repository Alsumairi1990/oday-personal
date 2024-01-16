import prisma from "./prismaClient";


export const queryData = async () => {
    
    try {
        
        const queryOutput = await prisma.User.findMany();
        return queryOutput;
    } catch (error) {
        console.log(error);
    };
}

export const storeUser = async () => {
    
    try {
        const user = await prisma.User.create({
            data: {
              name: 'Alice',
              email: 'alice@prisma.io',
            },
          });
          console.log(user);
        return user;
    } catch (error) {
        console.log(error);
    };
}