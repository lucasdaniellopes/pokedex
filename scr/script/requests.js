export class Requests {
  static baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  static headers = {
    "Content-Type": "application/json",
  };

  static async getPokemon(id) {
    const pokemon = await fetch(`${this.baseUrl}${id}`, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    return pokemon;
  }
}
