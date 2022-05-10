import { Component, OnInit } from '@angular/core';
import {Librarian} from "../../../model/Librarian";
import {LibrarianService} from "../../../serviceLibrarian/librarian.service";

@Component({
  selector: 'app-librarian-overview',
  templateUrl: './librarian-overview.component.html',
  styleUrls: ['./librarian-overview.component.css']
})
export class LibrarianOverviewComponent implements OnInit {
  private _librarians: Array<Librarian> = [];

  constructor(private librarianService: LibrarianService) { }

  ngOnInit(): void {
    this.getLibrarians()
  }

  public getLibrarians(): void {
    this.librarianService.getLibrarians.subscribe(librarians => this._librarians = librarians)
  }

  get librarians(): Array<Librarian> {
    return this._librarians;
  }
}
