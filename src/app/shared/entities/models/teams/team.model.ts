export class Team {

  constructor(
    public id?: number,
    public name: string = '',
    public commissionForTransfer: number = 0,
    public balance: number = 0
  ) {
  }

  public static fromObject(team: Team): Team {
    return new Team(
      team.id,
      team.name,
      team.commissionForTransfer,
      team.balance,
    );


  }
}
