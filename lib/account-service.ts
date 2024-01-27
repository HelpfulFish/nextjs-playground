import { prisma } from "@/lib/database"

export type User = {
    id: string;
    name: string | null;
    createdAt: Date;
    updatedAt: Date;
    lastLoginAt: Date;
}

export const generateUser = async (): Promise<User> => {
    const user =  await prisma.user.create({
        data: {},
    });

    return user as User;
}

export const getUserById = async (userId: string): Promise<User | null> => {
    try {
        const user = await prisma.user.findUniqueOrThrow({ where: {
            id: userId
        } }) as User;

        if (user) return user;
        return null;
         
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const updateUserLoginAtById = async (userId: string): Promise<User | null> => {
    try {
        const user = await prisma.user.update({ data: {
            lastLoginAt: new Date()
        }, where: {
            id: userId
        } }) as User;

        if (user) return user;
        return null;
         
    } catch (error) {
        console.error(error);
        return null;
    }
}