import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-warning text-center">
                <p>This website uses cookies to provide better user experience.</p>
              </div>`,
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #F2D3AC; text-align: center;}", "p{font-size: 14px;}"]
})
export class NotificationComponent {

}
