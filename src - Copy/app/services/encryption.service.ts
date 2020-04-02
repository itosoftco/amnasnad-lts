import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  url = 'https://api.amnasnad.ir/check/newcheck/encrypte.php';
  constructor(private http: HttpClient) { }
  /*
    newcheck(checkid: string ,cost: string,toname: string,tocode: string,passcode: string,date: string,checkfor: string,back: string): {
    return this.http.get(`${this.url}?checkid=${encodeURI(checkid)}&cost=${encodeURI(cost)}&toname=${encodeURI(toname)}&tocode=${encodeURI(tocode)}&passcode=${encodeURI(passcode)}&date=${encodeURI(date)}&checkfor=${encodeURI(checkfor)}&back=${encodeURI(back)}`);
}*/


  newcheck(checkid,cost,toname,tocode,passcode,date,checkfor,back) {
    return this.http.get(`${this.url}?checkid=${checkid}&cost=${cost}&toname=${toname}&tocode=${tocode}&passcode=${passcode}&date=${date}&checkfor=${checkfor}&back=${back}`);
  }
}
