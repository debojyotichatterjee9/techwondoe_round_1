import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
import { CompanyDto } from "./modules/company/dtos/return-company.dto";


export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    console.log("Running before the handler");

    return handler.handle().pipe(
      map((data: any) => {
        console.log("Running before response is sent back");
        return plainToClass(CompanyDto, data, {
          excludeExtraneousValues: true
        });
      })
    )
  }
}
