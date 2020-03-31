import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../services/encryption.service';
import { Observable } from 'rxjs';
//import {DpDatePickerModule} from 'ng2-jalali-date-picker';

@Component({
  selector: 'app-newcheck',
  templateUrl: './newcheck.page.html',
  styleUrls: ['./newcheck.page.scss'],
})
export class NewcheckPage implements OnInit {


  results: Observable<any>;
  checkid: string = '';
    cost: string = '';
	  toname: string = '';
	    tocode: string = '';
		  passcode: string = '';
		    date: string = '';
  qrpath="https://plink.ir/6ORVe/qr";
  constructor(private encryptionService: EncryptionService) { }

  ngOnInit() {
    document.getElementById('spiner').hidden = true;
  }
  submit_newcheck()
  {
    document.getElementById('spiner').hidden = false;
  this.results = this.encryptionService.newcheck(this.checkid,this.cost,this.toname,this.tocode,this.passcode,this.date );
alert('ddd');
  }

   goto()
  {
   alert("goto");
  }

}
