/*
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = "menu-default";

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = "id";
export const localeOptions = [
  { id: "en", name: "English - LTR", direction: "ltr" },
  { id: "es", name: "Español", direction: "ltr" },
  { id: "id", name: "Indonesia", direction: "ltr" },
  // { id: "enrtl", name: "English - RTL", direction: "rtl" }
];

export const firebaseConfig = {
  apiKey: "AIzaSyB0eU31KIrpTKYBehc74qCiNvtix7qXz3Q",
  authDomain: "bridaya-7d697.firebaseapp.com",
  databaseURL: "https://bridaya-7d697.firebaseio.com",
  projectId: "bridaya-7d697",
  storageBucket: "bridaya-7d697.appspot.com",
  messagingSenderId: "695642081845",
  appId: "1:695642081845:web:ab6715b89c052dbe123f7c",
  measurementId: "G-FXS6Q3KHPE"
};

export const searchPath = "/app/pages/search";
export const servicePath = "https://api.coloredstrategies.com";
export const path = "http://localhost:8080";
export const version = "1.0";
export const apiPath = path + "/" + version + "/";
// items/1/list
/*
Color Options:
"light.purple", "light.blue", "light.green", "light.orange", "light.red", "dark.purple", "dark.blue", "dark.green", "dark.orange", "dark.red"
*/
export const themeColorStorageKey="__theme_color"
export const isMultiColorActive = false;
export const isDarkSwitchActive = true;
export const defaultColor = "light.blue";
export const defaultDirection = "ltr";
export const themeRadiusStorageKey = "__theme_radius";
export const isDemo = true;