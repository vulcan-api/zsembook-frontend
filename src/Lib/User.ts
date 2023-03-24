import Cookies from "cookie-ts";

export enum UserRole {
  Guest,
  User,
  Moderator,
  Faq
}

export default abstract class User {
  public static data: any;
  public static isLogged: boolean;
  public static role: UserRole;

  public static getUser() {
    this.data = {};
    this.isLogged = false;
    const user = Cookies.get('user_info');

    try {
      this.data = JSON.parse(user);
      if(this.data.id) 
        this.isLogged = true;
      switch(this.data.role) {
        case "USER": this.role = UserRole.User; break;
        case "MODERATOR": this.role = UserRole.Moderator; break;
        case "FAQ": this.role = UserRole.Faq; break;
        default: this.role = UserRole.Guest; break;
      }
    } catch {};
  }

  public static isItMe(id: number): boolean {
    return this.data.id === id
  }

  public static isFaq(): boolean {
    return this.role === UserRole.Moderator;
  }
}
