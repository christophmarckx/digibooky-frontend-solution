import {Component, OnInit} from '@angular/core';
import {Router, PRIMARY_OUTLET} from '@angular/router';
import {BookService} from "../../serviceBook/book.service";
import {Book} from "../../model/Book"
import {MemberService} from "../../serviceMember/member.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  private _book: Book = <Book>{};
  private isbn: string;
  public role: any;
  public id: number = 0;
  public lendernames: number = 0;

  constructor(private bookService: BookService, private memberService: MemberService, private route: Router) {
    this.isbn = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[1].path;
    this.role = sessionStorage.getItem("role");
  }

  ngOnInit(): void {
    this.getBook();
    this.memberService.getMemberid(sessionStorage.getItem("email")).subscribe(id => this.id = id);
  }

  public getBook(): void {
    this.bookService.getBook(this.isbn).subscribe(book => {
      this._book = book
      this.lendernames = book.lendernames.length;
    });
  }

  get book(): Book {
    return this._book;
  }

  lendBook() {
    this.memberService.getMember(sessionStorage.getItem("email"))
      .subscribe(member => {
          this.memberService.lentbook(this.id, this.isbn, member.email, member.password).subscribe(iets => {
            this.route.navigate(["/books/" + this.id + "/" + this.isbn + "/lent"])
          });
        }
      )
  }
}
