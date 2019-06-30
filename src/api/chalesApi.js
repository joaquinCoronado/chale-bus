import { API_CONSTANTS } from "../constants/api.json";

class ChalesApi {
  static createAcount(email, pass, name) {
    let body = {
      name: name,
      email: email,
      password: pass
    };

    return fetch(`${API_CONSTANTS.jsonServer}users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .catch(err => console.warn(err));
  }

  static login(email, pass) {
    return fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .catch(err => console.warn(err));
  }
}

module.exports = ChalesApi;
