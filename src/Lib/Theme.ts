import User from "./User";

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

export function executeTheme() {
  if(getTheme() === true)
    setDark();
}

export function getTheme(): boolean {
  return User.theme;
}

export function toggleTheme() {
  if(User.theme) {
    //User.updateUser({theme: false});
    setLight();
  }
  else {
    //User.updateUser({theme: true});
    setDark();
  }

}