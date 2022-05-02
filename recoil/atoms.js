import { atom } from "recoil";

export const navleftHideState = atom({
  key: "navleftHideState",
  default: false,
});

export const usersState = atom({
  key: "usersState",
  default: [],
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {},
});

/* export const userState = atom({
  key: "userState",
  default: {},
}); */

export const initialFormState = atom({
  key: "initialFormState",
  default: { name: "", email: "", cel: "", area: "", isLeader: false },
});

export const domainState = atom({
  key: "domainState",
  default: "",
});

export const domainDataState = atom({
  key: "domainDataState",
  default: {},
});

export const registerSelectState = atom({
  key: "registerSelectState",
  default: "",
});

export const dataRegTableState = atom({
  key: "dataRegTableState",
  default: [],
});

export const dataTableRegAState = atom({
  key: "dataTableRegAState",
  default: [
    { subdomain: "web", domain: "pepito.com.co", ippurpose: "1.1.1.1" },
    { subdomain: "webmail", domain: "pepito.com.co", ippurpose: "2.2.2.2" },
    { subdomain: "mail", domain: "pepito.com.co", ippurpose: "3.3.3.3" },
  ],
});

export const dataTableRegAAAAState = atom({
  key: "dataTableRegAAAAState",
  default: [
    { subdomain: "web", domain: "pepito.com.co", ippurpose: "1.1.1.1" },
    { subdomain: "webmail", domain: "pepito.com.co", ippurpose: "2.2.2.2" },
  ],
});

export const dataTableRegMXState = atom({
  key: "dataTableRegMXState",
  default: [
    {
      subdomain: "web",
      domain: "pepito.com.co",
      priority: "10",
      purpose: "1.1.1.1",
    },
    {
      subdomain: "webmail",
      domain: "pepito.com.co",
      priority: "10",
      purpose: "2.2.2.2",
    },
    {
      subdomain: "mail",
      domain: "pepito.com.co",
      priority: "10",
      purpose: "3.3.3.3",
    },
  ],
});

export const dataTableRegCNAMEState = atom({
  key: "dataTableRegCNAMEState",
  default: [
    { subdomain: "web", domain: "pepito.com.co", purpose: "1.1.1.1" },
    { subdomain: "webmail", domain: "pepito.com.co", purpose: "2.2.2.2" },
    { subdomain: "mail", domain: "pepito.com.co", purpose: "3.3.3.3" },
  ],
});

export const dataTableRegTXTState = atom({
  key: "dataTableRegTXTState",
  default: [
    { subdomain: "web", domain: "pepito.com.co", purpose: "1.1.1.1" },
    { subdomain: "webmail", domain: "pepito.com.co", purpose: "2.2.2.2" },
  ],
});
