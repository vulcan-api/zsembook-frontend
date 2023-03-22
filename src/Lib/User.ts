import Cookies from "cookie-ts";

export default abstract class User {
  public static data: any;
  public static isLoggined: boolean;
  public static theme: boolean;

  public static getUser = () => {
    this.data = {};
    this.isLoggined = false;
    this.theme = false;
    const user = Cookies.get('user_info');

    try {
      this.data = JSON.parse(user);
      console.log(this.data)
      this.theme = this.data.theme; 
      if(this.data.id)
      this.isLoggined = true;
    } catch {

    }
  }

  public static updateUser = (toUpdate: any) => {
    let user = this.data;
    user = {
      ...toUpdate,
      user
    }
    Cookies.set('user_info', user.toString(), 365);
  }

  public static isItMe = (id: number): boolean => {
    return this.data.id === id
  }
}
