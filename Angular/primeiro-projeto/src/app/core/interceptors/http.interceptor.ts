import { HttpInterceptorFn } from "@angular/common/http";
import { tap, catchError, throwError } from "rxjs";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    const token = 'fake-jws-token';
    
    const novaRec = req.clone({
        setHeaders:{
            Authorization: `Bearen ${token}`,
        },
    });
    return next(novaRec).pipe(
        tap({
            next: (event) => console.log('RESPONSE:', event),
            error: (error) => console.log('ERRO', error)
        }),
        catchError((error) => {
            console.error('ERRO GLOBAL:', error);
            
            if (error.status === 401) {
                console.warn('Não autorizado!');
            }

            if (error.status === 500) {
                console.warn('Erro interno do servidor!');
            }
            return throwError(() => error);
        }),
    )
}