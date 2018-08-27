/*export class Constant {

    private constantId: number = 0;
    private code: string = "";
    private description: string = "";
    private value: string = "";
  
    constructor(data: any = undefined) {
      if (data) {
        this.constantId = data.ConstantId;
        this.code = data.Code;
        this.description = data.Description;
        this.value = data.Value;
      }
    }
  
    public get ConstantId(): number { return this.constantId; }
    public set ConstantId(value: number) { this.constantId = value; }

    public get Code(): string { return this.code; }
    public set Code(value: string) { this.code = value; }
  
    public get Description(): string { return this.description; }
    public set Description(value: string) { this.description = value; }
  
    public get Value(): string { return this.value; }
    public set Value(value: string) { this.value = value; }
  }*/

  export interface Constant {

    constantId: number;
    code: string;
    description: string;
    value: string;
  }