import { Component, OnInit } from '@angular/core';
import { EncryptionService } from '../services/encryption.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
//import {DpDatePickerModule} from 'ng2-jalali-date-picker';

@Component({
  selector: 'app-newcheck',
  templateUrl: './newcheck.page.html',
  styleUrls: ['./newcheck.page.scss'],
})
export class NewcheckPage implements OnInit {

 information = null;

  checkid: string = '';
    cost: string = '';
	  toname: string = '';
	    tocode: string = '';
		  passcode: string = '';
		    date: string = '';
			checkfor: string='';
			back:string='';
  qrpath="https://plink.ir/6ORVe/qr";
  constructor(private encryptionService: EncryptionService ,private router: Router) { }

  ngOnInit() {
    document.getElementById('spiner').hidden = true;
  }
  submit_newcheck()
  {
    document.getElementById('spiner').hidden = false;
  this.encryptionService.newcheck(this.checkid,this.cost,this.toname,this.tocode,this.passcode,this.date ,this.checkfor,this.back).subscribe(result => {
//https://plink.ir/6ORVe
	  this.information=result;
	        alert(this.information.Title);
			 this.router.navigate(['/newcheck/'+this.information.slang]);
    });


	
}

}