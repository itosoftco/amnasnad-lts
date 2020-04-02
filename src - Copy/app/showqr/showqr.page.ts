import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showqr',
  templateUrl: './showqr.page.html',
  styleUrls: ['./showqr.page.scss'],
})
export class ShowqrPage implements OnInit {
  information = null;

   constructor(private activatedRoute: ActivatedRoute) { }
 imgaeurl: string="https://cdn-media-1.freecodecamp.org/images/1*cun5ECRCb1_QS4BcQI-r7A.png";


 
    ngOnInit() {
 
    let id = this.activatedRoute.snapshot.paramMap.get('id');
let qrs="https://plink.ir/".concat(id).concat("/qr");
this.imgaeurl=qrs;
  }
 


}
