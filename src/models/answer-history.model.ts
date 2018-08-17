export class AnswerHistory {

    private teamId: number = 0;
    private eventId: number = 0;
    private questionId: number = 0;
    private selectedAnswer: string = "";
    private correctInd: number = 0;
  
    constructor(data: any = undefined) {
      if (data) {
        this.teamId = data.TeamId;
        this.eventId = data.EventId;
        this.questionId = data.QuestionId;
        this.selectedAnswer = data.SelectedAnswer;
        this.correctInd = data.CorrectInd;
      }
    }
  
    public get TeamId(): number { return this.teamId; }
    public set TeamId(value: number) { this.teamId = value; }
    
    public get EventId(): number { return this.eventId; }
    public set EventId(value: number) { this.eventId = value; }
    
    public get QuestionId(): number { return this.questionId; }
    public set QuestionId(value: number) { this.questionId = value; }

    public get SelectedAnswer(): string { return this.selectedAnswer; }
    public set SelectedAnswer(value: string) { this.selectedAnswer = value; }

    public get CorrectInd(): number { return this.correctInd; }
    public set CorrectInd(value: number) { this.correctInd = value; }
  }