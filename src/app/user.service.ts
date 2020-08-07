import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
  logout() {
    return JSON.parse(localStorage.getItem("cuser"));
  }
  
}
