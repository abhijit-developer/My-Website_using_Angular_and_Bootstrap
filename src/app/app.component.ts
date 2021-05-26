import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;
  iactive = 'active';

  toggleSideBar(){
    this.navbarOpen = !this.navbarOpen;
  }


}
