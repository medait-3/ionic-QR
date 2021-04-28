import { Component } from '@angular/core';
import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
  
@Component({
selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss'],
})
export class HomePage {
zbarOptions:any; scannedResult:any;
constructor(
private zbar: ZBar, private callNumber: CallNumber
){
this.zbarOptions = { flash: 'off', drawSight: false
}
}
scanQR(){ this.zbar.scan(this.zbarOptions)
    .then(result => { console.log(result); this.scannedResult = result;
    })
    .catch(error => {
    alert(error);
     
    }); }
call(number) {
    this.callNumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
    }

}
