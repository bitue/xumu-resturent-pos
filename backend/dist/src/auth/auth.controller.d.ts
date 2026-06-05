import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import type { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto, res: Response): Promise<{
        success: boolean;
        data: {
            accessToken: string;
            refreshToken: string;
            user: {
                id: number;
                email: string;
                fullName: string;
                roles: string[];
            };
        };
    }>;
    refresh(req: Request, res: Response): Promise<{
        success: boolean;
        data: {
            accessToken: string;
        };
    }>;
    getMe(req: Request): Promise<{
        success: boolean;
        data: {
            id: number;
            email: string;
            fullName: string;
            roles: string[];
            permissions: string[];
        };
    }>;
    logout(res: Response): Promise<{
        success: boolean;
        message: string;
    }>;
}
