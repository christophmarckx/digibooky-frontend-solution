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

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private librarianService: LibrarianService, private route: Router) {
    this.librarians = [];
    this.librarianService.getLibrarians.subscribe(librarians => this.librarians = librarians);
  }

  ngOnInit(): void {
    this._librarianForm = this.formBuilder.group({
      email: "",
      firstName: "",
      lastName: "",
      password: ""
    })
  }

  onSubmit(librarianvalues: any): void {
    // Process checkout data here
    this.adminService.getAnAdmin(sessionStorage.getItem("email")).subscribe(admin => {
      this.librarianService
        .addLibrarian(librarianvalues, admin).subscribe()
    })
    console.warn('Librarian was added.', this._librarianForm.value);
    this._librarianForm.reset();
    this.route.navigate(["/librarians"]).then(() => window.location.reload())
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
