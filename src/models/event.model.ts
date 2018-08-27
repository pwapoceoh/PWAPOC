/*export class Evevnt {

    private eventId: number = 0;
    private name: string = "";
    private eventDate: Date = new Date();
  
    constructor(data: any = undefined) {
      if (data) {
        this.eventId = data.EventId;
        this.name = data.Name;
        this.eventDate = data.EventDate;
      }
    }
  
    public get EventId(): number { return this.eventId; }
    public set EventId(value: number) { this.eventId = value; }
  
    public get Name(): string { return this.name; }
    public set Name(value: string) { this.name = value; }
  
    public get EventDate(): Date { return this.eventDate; }
    public set EventDate(value: Date) { this.eventDate = value; }
  }*/

  export interface Evevnt {
    eventId: number;
    name: string;
    eventDate: Date;
  }