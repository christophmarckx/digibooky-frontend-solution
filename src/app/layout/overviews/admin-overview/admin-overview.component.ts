import { Component, OnInit } from '@angular/core';
import {Admin} from "../../../model/Admin";
import {AdminService} from "../../../serviceAdmin/admin.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {
  private _admins$!: Observable<Admin[]>;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAdmins();
  }

  public getAdmins(): void {
    this._admins$ = this.adminService.getAdmins();
  }

  get admins$() {
    return this._admins$;
  }
}
