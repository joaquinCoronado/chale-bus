class ChalesApi {
  static createAcount(email, pass, name) {
    let body = {
      name: name,
      email: email,
      password: pass
    };

    console.log("body", body);
    return fetch("https://reqres.in/api/users", {
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
}

module.exports = ChalesApi;
