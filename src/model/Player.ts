export class Player {
  private player_folder: string = '/assets/img/players/';

  id: number;
  picture: string;
  lastname: string;
  firstname: string;
  current_team: string;
  position : string;
  country: string;

  constructor(
    id: number,
    picture: string,
    lastname: string,
    firstname: string,
    current_team: string,
    position : string,
    country: string) {
    this.id = id;
    this.picture = picture;
    this.lastname = lastname;
    this.firstname = firstname;
    this.current_team = current_team;
    this.position = position;
    this.country = country;
  }

  getPlayerUrl() {
    let external: boolean = this.picture.substr(0,4) == 'http';
    return external ? this.picture : this.player_folder + this.picture;
  }
}

