import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login() {
    // tslint:disable-next-line: deprecation
    this.accountService.login(this.model).subscribe(respose => {
      this.router.navigateByUrl('/members');
    });
  }

  // tslint:disable-next-line: typedef
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
