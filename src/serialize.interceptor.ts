import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";


interface ClassConstructor {
  new(...args: ClassConstructor[]): {}
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {

  constructor(private dto: any) { }

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    console.log("Running before the handler");

    return handler.handle().pipe(
      map((data: any) => {
        console.log("Running before response is sent back");
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true
        });
      })
    )
  }
}
