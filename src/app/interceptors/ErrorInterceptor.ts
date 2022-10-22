import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private loaderService: LoaderService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.statusText != "Bad Request") {
          switch (error.status) {
            case 500:
              Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `Error en la conexión al servidor`,
                text: `Status: ${error.status}`,
                showConfirmButton: false,
                timer: 1500,
              });
              break;
            case 400:
              Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `Validar la estructura de la petición`,
                text: `Status: ${error.status}`,
                showConfirmButton: false,
                timer: 1500,
              });
              break;
            case 404:
              Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'No existe la página',
                text: `Status: ${error.status}`,
                showConfirmButton: false,
                timer: 1500,
              });
              break;

          }
        }
        else {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: error.error,
            text: `Status: ${error.status}`,
            showConfirmButton: false,
            timer: 1500,
          });

        }
      
        this.loaderService.loaderState(false);
    throw error;
  })
    );
}
}
