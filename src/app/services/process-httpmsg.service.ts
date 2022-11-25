import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  public handleError(error: HttpErrorResponse | any){
    let errorMsg: string
    if(error.error instanceof ErrorEvent){
      errorMsg = error.error.message
    }else{
      errorMsg = `${error.status} - ${error.statusText || ''} ${error.error}`
    }
    return throwError(() => new Error(errorMsg))
  }
}
