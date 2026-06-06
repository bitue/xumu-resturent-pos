import { PrismaService } from '../common/prisma/prisma.service';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUsers(): Promise<{
        success: boolean;
        data: {
            id: number;
            email: string;
            fullName: string;
            phone: string | null;
            enabled: boolean;
            provider: string;
            roles: string[];
            createdAt: Date;
        }[];
    }>;
    updateUserRoles(userId: number, roles: string[]): Promise<{
        success: boolean;
        message: string;
    }>;
    updateUserStatus(userId: number, enabled: boolean): Promise<{
        success: boolean;
        message: string;
    }>;
}
