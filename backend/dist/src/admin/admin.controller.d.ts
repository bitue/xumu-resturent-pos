import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
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
    updateUserRoles(id: string, roles: string[]): Promise<{
        success: boolean;
        message: string;
    }>;
    updateUserStatus(id: string, enabled: boolean): Promise<{
        success: boolean;
        message: string;
    }>;
}
