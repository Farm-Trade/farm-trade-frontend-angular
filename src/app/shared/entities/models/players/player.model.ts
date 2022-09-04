import {Team} from "../teams/team.model";

export class Player {

  constructor(
    public id: number,
    public fullName: string,
    public dateOfBirth: string,
    public startOfCareer: string,
    public team : Team
  ) {
  }

  public static fromObject(player : Player): Player {
    return new Player(
      player.id,
      player.fullName,
      player.dateOfBirth,
      player.startOfCareer,
      player.team
    )
  }

}
