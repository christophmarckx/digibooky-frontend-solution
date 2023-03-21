import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Health} from "../../../model/Health";
import {HealthCheckService} from "../../../services/serviceHealth/health-check.service";

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {
  backendUp!: Observable<Health>;

  constructor(private healthCheckService: HealthCheckService) {

  }

  ngOnInit(): void {
    this.backendUp = this.healthCheckService.getHealth();
  }

}
