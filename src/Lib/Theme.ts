import Cookie from "cookie-ts";

export default abstract class Theme {
  public static theme: boolean;

  public static get(): boolean {
    this.theme = Cookie.get('theme') ? true : false;
    return this.theme;
  }

  public static set(theme: boolean) {
    theme ? Cookie.set('theme', '1', 60 * 60 * 24 * 365) : Cookie.clear('theme');
  }

  public static toggle() {
    if(this.theme) {
      this.set(false);
      setLight();
    }
    else {
      this.set(true);
      setDark();
    }
  }

  public static execute() {
    if(this.theme === undefined)
      this.get();
    if(this.theme === true)
      setDark();
  }
}

const updateMains = (dark: boolean) => {
  const mainColor = dark ? 'light-' : 'black-';
  for(let i = 1; i < 6; i++) {
    setVariable(`main-${i}00`, mainColor+i+'00'); 
  }
}

const setVariable = (name: string, value: string, isDirect?: boolean) => {
    document.documentElement.style.setProperty(`--${name}`, isDirect? value : `var(--${value})`);
}

const setLight = () => {
  setVariable('bg-clr', 'light');
  setVariable('txt-clr', 'dark');
  updateMains(false);
}

const setDark = () => {
  setVariable('bg-clr', 'dark');
  setVariable('txt-clr', 'light');
  updateMains(true);
}