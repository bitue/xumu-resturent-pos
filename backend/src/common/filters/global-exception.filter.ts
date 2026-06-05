import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let data = null;
    let errors = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse() as any;
      
      message = typeof res === 'string' ? res : res.message || exception.message;
      
      // Handle class-validator errors
      if (Array.isArray(res.message)) {
        errors = res.message.reduce((acc, msg) => {
          // just format simple string errors to an object if needed, or return as is
          acc.push({ field: "validation", message: msg });
          return acc;
        }, []);
        message = "Validation failed";
      }
    } else {
      this.logger.error('Unhandled exception: ', exception);
    }

    response.status(status).json({
      success: false,
      message,
      data,
      errors
    });
  }
}
