import {Component, OnInit} from '@angular/core';
import {Router, PRIMARY_OUTLET} from '@angular/router';
import {BookService} from "../../serviceBook/book.service";
import {Book} from "../../model/Book"
import {MemberService} from "../../serviceMember/member.service";
import {AuthenticationService} from "../../serviceLogin/authentication.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  private _book: Book = <Book>{};
  private isbn: string;
  public lendernames: number = 0;

  constructor(private bookService: BookService,
              private memberService: MemberService,
              public authenticationService: AuthenticationService,
              private route: Router) {
    this.isbn = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments[1].path;
  }

  ngOnInit(): void {
    this.getBook();
  }

  public getBook(): void {
    this.bookService.getBook(this.isbn).subscribe(book => {
      this._book = book
      console.log(this.lendernames + " & " + book.lenderNames.length)
      this.lendernames = book.lenderNames.length;
    });
  }

  get book(): Book {
    return this._book;
  }

  lendBook() {
    this.memberService.lentbook(this.authenticationService.id!, this.isbn).subscribe(() => {
        this.route.navigate(["/books/" + this.authenticationService.id! + "/" + this.isbn + "/lent"])
      }
    );
  }
}
