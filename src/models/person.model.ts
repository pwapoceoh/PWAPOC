/*export class Person {

    private personId: number = 0;
    private name: string = "";
    private surname: string = "";
    private email: string = "";
    private userName: string = "";
    private teamId: number = 0;
  
    constructor(data: any = undefined) {
      if (data) {
        this.personId = data.PersonId;
        this.name = data.Name;
        this.surname = data.Surname;
        this.email = data.Email;
        this.userName = data.UserName;
        this.teamId = data.TeamId;
      }
    }
  
    public get PersonId(): number { return this.personId; }
    public set PersonId(value: number) { this.personId = value; }
  
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }
  
    public get Surname(): string { return this.surname; }
    public set Surname(value: string) { this.surname = value; }
  
    public get Email(): string { return this.email; }
    public set Email(value: string) { this.email = value; }
  
    public get UserName(): string { return this.userName; }
    public set UserName(value: string) { this.userName = value; }
  
    public get TeamId(): number { return this.teamId; }
    public set TeamId(value: number) { this.teamId = value; }
  }*/

  export interface Person {

    personId: number;
    name: string;
    surname: string;
    email: string;
    userName: string;
    teamId: number;
  }