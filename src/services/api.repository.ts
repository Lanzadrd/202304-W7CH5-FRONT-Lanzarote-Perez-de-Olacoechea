import { Navigate } from "react-router-dom";

export class ApiRepository<T extends { id: string | number }> {
  constructor(public url: string) {}

  async getAll(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    return response.json();
  }

  async get(id: T["id"]): Promise<T> {
    const response = await fetch(this.url + (id as string));
    return response.json() as Promise<T>;
  }

  async getFiltered(filter: string) {
    const response = await fetch((this.url + filter) as string);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    return response.json();
  }

  async login(data: object) {
    const loginUrl = this.url + `user/login`;
    const response = await fetch(loginUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // if (response.status !== 200) {
    //   return (<p>"Usuario y/o contraseña incorrectas"</p>)
    // } else {
    //   return
    //     <Navigate replace to="/Home" />;
    // }
    const result = await response.json();
    console.log(result);
  }
}
