/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AppointmentResponseDto } from '../models/appointment-response-dto';
import { createAppointment } from '../fn/citas/create-appointment';
import { CreateAppointment$Params } from '../fn/citas/create-appointment';
import { getMyAppointments } from '../fn/citas/get-my-appointments';
import { GetMyAppointments$Params } from '../fn/citas/get-my-appointments';


/**
 * API para gestion de citas
 */
@Injectable({ providedIn: 'root' })
export class CitasService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createAppointment()` */
  static readonly CreateAppointmentPath = '/api/appointments';

  /**
   * Crear nueva cita(Cliente).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAppointment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAppointment$Response(params: CreateAppointment$Params, context?: HttpContext): Observable<StrictHttpResponse<AppointmentResponseDto>> {
    return createAppointment(this.http, this.rootUrl, params, context);
  }

  /**
   * Crear nueva cita(Cliente).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAppointment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAppointment(params: CreateAppointment$Params, context?: HttpContext): Observable<AppointmentResponseDto> {
    return this.createAppointment$Response(params, context).pipe(
      map((r: StrictHttpResponse<AppointmentResponseDto>): AppointmentResponseDto => r.body)
    );
  }

  /** Path part for operation `getMyAppointments()` */
  static readonly GetMyAppointmentsPath = '/api/appointments/my-appointments';

  /**
   * Obtener mis citas (Cliente).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMyAppointments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMyAppointments$Response(params?: GetMyAppointments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AppointmentResponseDto>>> {
    return getMyAppointments(this.http, this.rootUrl, params, context);
  }

  /**
   * Obtener mis citas (Cliente).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMyAppointments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMyAppointments(params?: GetMyAppointments$Params, context?: HttpContext): Observable<Array<AppointmentResponseDto>> {
    return this.getMyAppointments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AppointmentResponseDto>>): Array<AppointmentResponseDto> => r.body)
    );
  }

}
