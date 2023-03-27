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
  public static roles: Array<UserRole>;

  public static getUser() {
    this.data = {};
    this.isLogged = false;
    const user = Cookies.get('user_info');
    this.roles = [];

    try {
      this.data = JSON.parse(user);
      if(this.data.id) 
        this.isLogged = true;

      // TODO: check if it is up-to-date
      for(const role of this.data.Roles) {
        switch(role) {
          case "MODERATOR": this.roles.push(UserRole.Moderator); break;
          case "FAQ": this.roles.push(UserRole.Faq); break;
        }
      }

      if(this.roles.length === 0)
        this.roles.push(UserRole.User);

    } catch {};

    if(this.roles.length === 0)
      this.roles.push(UserRole.Guest);
  }

  public static isItMe(id: number): boolean {
    return this.isLogged && this.data.id === id;
  }

  public static isFaq(): boolean {
    return this.roles.includes(UserRole.Faq);
  }

  public static isModerator(): boolean {
    return this.roles.includes(UserRole.Moderator);
  }

  public static isUser(): boolean {
    return this.roles.includes(UserRole.User);
  }
}
