import { atom } from "recoil";

export const navleftHideState = atom({
  key: "navleftHideState",
  default: false,
});

export const registerSelectState = atom({
  key: "registerSelectState",
  default: "",
});

export const dataTableRegAState = atom({
  key: "dataTableRegAState",
  default: [{ subdomain: "webmail", domain: "pepito.com",ippurpose: "1.1.1.1" },
            { subdomain: "email", domain: "pepito.com",ippurpose: "2.2.2.2" },
            { subdomain: "site", domain: "pepito.com",ippurpose: "3.3.3.3" },],
});

export const dataTableRegAAAAState = atom({
  key: "dataTableRegAAAAState",
  default: [],
});

export const dataTableRegMXState = atom({
  key: "dataTableRegMXState",
  default: [],
});

export const dataTableRegCNAMEState = atom({
  key: "dataTableRegCNAMEState",
  default: [],
});

export const dataTableRegTXTState = atom({
  key: "dataTableRegTXTState",
  default: [],
});
