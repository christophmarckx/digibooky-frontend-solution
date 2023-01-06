export interface Login {
  id: string;
  role: Role;
  fullname: string;
}

export enum Role {
  MEMBER = 'member',
  LIBRARIAN = 'librarian',
  ADMIN = 'admin'
}
