import {Role} from "./Login";

export class User {
  constructor(public id: string | null, public fullname: string | null, private role: Role | null) {
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
