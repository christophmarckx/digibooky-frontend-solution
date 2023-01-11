import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {LibrarianService} from "../../../serviceLibrarian/librarian.service";
import {Librarian} from "../../../model/Librarian";
import {AdminService} from "../../../serviceAdmin/admin.service";
import {AuthenticationService} from "../../../serviceLogin/authentication.service";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-register-librarian',
  templateUrl: './register-librarian.component.html',
  styleUrls: ['./register-librarian.component.css']
})
export class RegisterLibrarianComponent implements OnInit {
  private _librarianForm = this.formBuilder.group({
    id: 0,
    email: "",
    firstname: "",
    lastname: "",
    password: ""
  });
  public errors: string[] = [];

  constructor(private authenticationService: AuthenticationService,
              private formBuilder: NonNullableFormBuilder,
              private adminService: AdminService,
              private librarianService: LibrarianService,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(librarianvalues: any): void {
    // Process checkout data here

    this.errors = this.getError(this._librarianForm.getRawValue());
    if (this.errors.length == 0) {
      this.librarianService.addLibrarian(librarianvalues)
        .pipe(
          mergeMap(() => this.route.navigate(["/librarians"]))
        )
        .subscribe()
    }
  }

  getError(librarian: Librarian) {
    let errors: string[] = [];
    if (librarian.email == "") {
      this.errors.push("E-mail is not filled in");
    }
    if (librarian.password == "") {
      this.errors.push("Password is not filled in");
    }
    if (librarian.firstname == "") {
      this.errors.push("Firstname is not filled in");
    }
    if (librarian.lastname == "") {
      this.errors.push("Lastname is not filled in");
    }
    return errors;
  }

  get librarianForm() {
    return this._librarianForm;
  }
}
