import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {


  constructor(private http: HttpClient) { }
  
    newcheck(checkid: string ,cost: string,toname: string,tocode: string,passcode: string,date: string): Observable<any> {
    return this.http.get(`https://api.amnasnad.ir/check/newcheck/encrypte.php?checkid=${encodeURI(checkid)}&&cost=${encodeURI(cost)}&&toname=${encodeURI(toname)}&&tocode=${encodeURI(tocode)}&&passcode=${encodeURI(passcode)}&&date=${encodeURI(date)}`).pipe(
      map(results => results['Search'])
    );
  }
}
