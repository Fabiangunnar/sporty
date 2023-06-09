import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  handleChangeScreen() {
    console.log('handleChangeScreen');
    this.router.navigate([''], { relativeTo: this.activatedRoute });
  }
}
