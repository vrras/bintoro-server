export class UserData {
  id: number;
  name: string;
  email: string;
  emailVerified: number;
  telepon: string;

  constructor(id: number, name: string, email: string, emailVerified: number, telepon: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.emailVerified = emailVerified;
    this.telepon = telepon;
  }
}
