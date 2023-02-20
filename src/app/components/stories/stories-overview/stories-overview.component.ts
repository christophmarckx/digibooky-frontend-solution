import {Component} from '@angular/core';

@Component({
  selector: 'app-stories-overview',
  templateUrl: './stories-overview.component.html',
  styleUrls: ['./stories-overview.component.css']
})
export class StoriesOverviewComponent {
  stories = [{
    title: 'Story1: Get all books',
    description: 'Gives the possibility to get an overview of all the available books.',
    link: 'story1'
  }, {
    title: 'Story2: Show detail of book',
    description: 'Gives the possibility to get one specific book and get more information about this book.',
    link: 'story2'
  }, {
    title: 'Story3: Search a book by ISBN',
    description: 'Gives the possibility to filter the books, in order to get only the asked books with a specific ISBN-part',
    link: 'story3'
  }, {
    title: 'Story4: Search a book by title',
    description: 'Gives the possibility to filter the books, in order to get only the asked books with a specific title-part',
    link: 'story4'
  }, {
    title: 'Story5: Search a book by author',
    description: 'Gives the possibility to filter the books, in order to get only the asked books with a specific author-part',
    link: 'story5'
  }, {
    title: 'Story6A: Register as member',
    description: 'Gives the possibility to create a new member.',
    link: 'story6A'
  }, {
    title: 'Story7: View members as Admin',
    description: 'Gives the Admin the possibility to view all the existing members.',
    link: 'story7'
  }, {
    title: 'Story8: Register Admin',
    description: 'Gives the possibility to create new Admins.',
    link: 'story8'
  }, {
    title: 'Story9: Register Librarian',
    description: 'Gives the possibility to create new Librarians.',
    link: 'story9'
  }, {
    title: 'Story10A: Register a new book',
    description: 'Gives the possibility to create a new book (By a Librarian).',
    link: 'story10A'
  }, {
    title: 'Story10B: Update a book',
    description: 'Gives the possibility to update a book (By a Librarian).',
    link: 'story10B'
  }, {
    title: 'Story10C: Delete a book',
    description: 'Gives the possibility to delete a book (By a Librarian).',
    link: 'story10C'
  }, {
    title: 'Story11: Lending a book',
    description: 'Gives the possibility to a member to borrow a book for a specific duration (3 weeks).',
    link: 'story11'
  }, {
    title: 'Story12: Return a book',
    description: 'Gives the possibility to return a members borrowed book.',
    link: 'story12'
  }, {
    title: 'Story13: Lent books',
    description: 'Gives the librarian the possibility to get an overview of all the books that a member has borrowed.',
    link: 'story13'
  }, {
    title: 'Story14: Overdue books',
    description: 'Gives the librarian the possibility to get an overview of all the books that are overdue.',
    link: 'story14'
  }, {
    title: 'Story15: Enhance book details',
    description: 'Story2:',
    link: 'story15'
  }, {
    title: 'Story16: ISBN validation',
    description: 'When the ISBN format is wrong, there should be an ERROR message thrown.',
    link: 'story16'
  }, {
    title: 'Story17: Overdue Fines',
    description: 'When a book is returned too late, you should receive a fine.',
    link: 'story17'
  }, {
    title: 'Story18: Enhance members overview with fines',
    description: 'There should be a possibility to see the fines in the members overview page.',
    link: 'story18'
  }, {
    title: 'Story19: Damage Fines',
    description: 'Get a fine, when you return your book damaged.',
    link: 'story19'
  }, {
    title: 'Story20: Multiple copies of a book',
    description: 'Gives multiple members the possibility to borrow the same book at the same time.',
    link: 'story20'
  }, {
    title: 'Story21: Lending history',
    description: 'Gives the Librarians the possibility to get an overview of who has borrowed a specific book from -> until.',
    link: 'story21'
  }];
}
