import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {LibrarianService} from "../../../serviceLibrarian/librarian.service";
import {Librarian} from "../../../model/Librarian";
import {AdminService} from "../../../serviceAdmin/admin.service";

@Component({
  selector: 'app-register-librarian',
  templateUrl: './register-librarian.component.html',
  styleUrls: ['./register-librarian.component.css']
})
export class RegisterLibrarianComponent implements OnInit {
  private _librarianForm!: FormGroup;
  private librarians: Array<Librarian>;
  public errors: Array<string>;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private librarianService: LibrarianService, private route: Router) {
    this.librarians = [];
    this.librarianService.getLibrarians.subscribe(librarians => this.librarians = librarians);
    this.errors = [];
  }

  ngOnInit(): void {
    this._librarianForm = this.formBuilder.group({
      email: "",
      firstname: "",
      lastname: "",
      password: ""
    })
  }

  onSubmit(librarianvalues: any): void {
    // Process checkout data here
    this.errors = [];
    this.hasError(this._librarianForm.value);
    if (this.errors.length == 0) {
      this.adminService.getAnAdmin(sessionStorage.getItem("email")).subscribe(admin => {
        this.librarianService
          .addLibrarian(librarianvalues, admin).subscribe()
      })
      this.route.navigate(["/librarians"]).then(() => window.location.reload())
    }
  }

  hasError(librarian: Librarian) {
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
  }

  get librarianForm() {
    return this._librarianForm;
  }

  compare(email: string): boolean {
    if (sessionStorage.getItem("email") != null) {
      return email === sessionStorage.getItem("email");
    }
    return false;
  }

}
