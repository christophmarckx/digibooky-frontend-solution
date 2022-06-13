import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/Book";
import {PRIMARY_OUTLET, Router} from "@angular/router";
import {BookService} from "../../serviceBook/book.service";
import {MemberService} from "../../serviceMember/member.service";
import {Member} from "../../model/member";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  public returnForm!: FormGroup;
  public book!: Book;
  public member!: Member;
  public lendingId: string;
  public damaged: boolean;

  constructor(public formBuilder: FormBuilder, private bookService: BookService, private memberService: MemberService, private route: Router) {
    this.lendingId = route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[2].path
    this.damaged = false;
  }

  ngOnInit(): void {
    this.memberService
      .getMember(sessionStorage.getItem("email")).subscribe(member => {this.member = member;})
    this.returnForm = this.formBuilder.group({
      damaged: false,
      brokenPart: ""
    })
  }

  setDamaged() {
    this.damaged = !this.damaged;
  }

  public returnBook() {
    this.memberService.returnBook(this.member.id, this.lendingId, this.member.email, this.member.password).subscribe(iets =>{
      this.route.navigate(["/members/"+this.member.id]).then(() => window.location.reload())
    })
  }
  public returnBookBroken() {
    this.memberService.returnBookDamaged(this.member.id, this.lendingId, this.member.email, this.member.password).subscribe(iets =>{
      this.route.navigate(["/members/"+this.member.id]).then(() => window.location.reload())
    }
    )
  }

}
