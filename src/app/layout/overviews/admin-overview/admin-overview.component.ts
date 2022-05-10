import { Component, OnInit } from '@angular/core';
import {Admin} from "../../../model/Admin";
import {AdminService} from "../../../serviceAdmin/admin.service";

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {
  private _admins: Array<Admin> = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAdmins();
  }

  public getAdmins(): void {
    this.adminService.getAdmins.subscribe(admins => this._admins = admins)
  }

  get admins(): Array<Admin> {
    return this._admins;
  }
}
