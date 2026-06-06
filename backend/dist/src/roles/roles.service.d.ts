import { PrismaService } from '../common/prisma/prisma.service';
export declare class RolesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        role_permissions: ({
            permissions: {
                id: bigint;
                name: string;
                description: string | null;
            };
        } & {
            role_id: bigint;
            permission_id: bigint;
        })[];
    } & {
        id: bigint;
        name: string;
        description: string | null;
    })[]>;
    findAllPermissions(): Promise<{
        id: bigint;
        name: string;
        description: string | null;
    }[]>;
    createRole(name: string, description: string): Promise<({
        role_permissions: ({
            permissions: {
                id: bigint;
                name: string;
                description: string | null;
            };
        } & {
            role_id: bigint;
            permission_id: bigint;
        })[];
    } & {
        id: bigint;
        name: string;
        description: string | null;
    }) | null>;
    updateRolePermissions(roleId: bigint, permissionIds: bigint[]): Promise<({
        role_permissions: ({
            permissions: {
                id: bigint;
                name: string;
                description: string | null;
            };
        } & {
            role_id: bigint;
            permission_id: bigint;
        })[];
    } & {
        id: bigint;
        name: string;
        description: string | null;
    }) | null>;
}
