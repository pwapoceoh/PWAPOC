export class Team {

    private teamId: number = 0;
    private captainId: number = 0;
    private status: number = 0;
    private name: string = "";
    private logo: string = "";
    private color: string = "";
    private deviceToken: string = "";
  
    constructor(data: any = undefined) {
      if (data) {
        this.teamId = data.TeamId;
        this.captainId = data.CaptainId;
        this.status = data.Status;
        this.name = data.Name;
        this.logo = data.Logo;
        this.color = data.Color;
        this.deviceToken = data.DeviceToken;
      }
    }
  
    public get TeamId(): number { return this.teamId; }
    public set TeamId(value: number) { this.teamId = value; }
  
    public get CaptainId(): number { return this.captainId; }
    public set CaptainId(value: number) { this.captainId = value; }
    
    public get Status(): number { return this.status; }
    public set Status(value: number) { this.status = value; }

    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }
  
    public get Logo(): string { return this.logo; }
    public set Logo(value: string) { this.logo = value; }
  
    public get Color(): string { return this.color; }
    public set Color(value: string) { this.color = value; }
  
    public get DeviceToken(): string { return this.deviceToken; }
    public set DeviceToken(value: string) { this.deviceToken = value; }
  }