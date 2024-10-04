import { AdminService } from './../../service/admin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})

export class AnalyticsComponent {

  data: any;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getAnalytics().subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }
}
