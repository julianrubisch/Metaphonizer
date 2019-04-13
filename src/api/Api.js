export default class Api {
  static async fetchUsers() {
    return await (await fetch(`/users`)).json();
  }
}
