export class ApiClient {
  constructor(token) {
    this.url = process.env.REACT_APP_BRASTLEWARK_ENDPOINT;
  }

  async fetchHeroes() {
    const { url } = this;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(`server responded with a ${response.status} code`);
    }
    const { Brastlewark } = await response.json();
    return Brastlewark;
  }

}
