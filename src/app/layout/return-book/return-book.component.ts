import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/Book";
import {PRIMARY_OUTLET, Router} from "@angular/router";
import {BookService} from "../../serviceBook/book.service";
import {MemberService} from "../../serviceMember/member.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../serviceLogin/authentication.service";

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  public returnForm!: FormGroup;
  public book!: Book;
  public lendingId: string;
  public damaged: boolean;
  public id: string;

  constructor(public formBuilder: FormBuilder,
              private bookService: BookService,
              private memberService: MemberService,
              private authenticationService: AuthenticationService,
              private route: Router) {
    this.lendingId = route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[2].path
    this.damaged = false;
    this.id = this.authenticationService.id!;
  }

  ngOnInit(): void {
    this.returnForm = this.formBuilder.group({
      damaged: false,
      brokenPart: ""
    })
  }

  setDamaged() {
    this.damaged = !this.damaged;
  }

  public returnBook() {
    this.memberService.returnBook(this.authenticationService.id!, this.lendingId).subscribe(() => {
      this.route.navigate(["/members/" + this.authenticationService.id!]).then(() => window.location.reload())
    })
  }

  public returnBookBroken() {
    this.memberService.returnBookDamaged(this.authenticationService.id!, this.lendingId).subscribe(() => {
        this.route.navigate(["/members/" + this.authenticationService.id!]).then(() => window.location.reload())
      }
    )
  }

}
