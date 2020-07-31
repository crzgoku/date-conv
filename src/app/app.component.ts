import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  utcDate = new Date();
  indiaTimeInMilliSeconds = new Date(this.indiaTime).getTime();

  convMilli = new Date(this.indiaTimeInMilliSeconds);
  convDate = this.convMilli.toString();

  tomo = new Date(+new Date() + 86400000);
  tomoInMillis = this.tomo.getTime();
}
