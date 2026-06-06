import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    findAll(): Promise<{
        success: boolean;
        data: {
            id: string;
            name: string;
            description: string | null;
            permissions: {
                id: string;
                name: string;
                description: string | null;
            }[];
        }[];
    }>;
    findAllPermissions(): Promise<{
        success: boolean;
        data: {
            id: string;
            name: string;
            description: string | null;
        }[];
    }>;
    createRole(name: string, description: string): Promise<{
        success: boolean;
        data: {
            id: string | undefined;
            name: string | undefined;
            description: string | null | undefined;
            permissions: never[];
        };
    }>;
    updateRolePermissions(id: string, permissionIds: string[]): Promise<{
        success: boolean;
        data: {
            id: string | undefined;
            name: string | undefined;
            description: string | null | undefined;
        };
    }>;
}
