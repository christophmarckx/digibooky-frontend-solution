import {Role} from "./Login";

export class User {
  constructor(public id: string, public fullname: string, private role: Role) {
  }


  isLibrarian() {
    return this.role === Role.LIBRARIAN;
  }

  isAdmin() {
    return this.role === Role.ADMIN;
  }

  isMember() {
    return this.role === Role.MEMBER
  }

  isLoggedIn() {
    return this.id !== null;
  }
}
