/*export class Question {

    private questionId: number = 0;
    private difficulty: number = 0;
    private category: string = "";
    private question: string = "";
    private optionA: string = "";
    private optionB: string = "";
    private optionC: string = "";
    private optionD: string = "";
    private answer: string = "";
  
    constructor(data: any = undefined) {
      if (data) {
        this.questionId = data.QuestionId;
        this.difficulty = data.Difficulty;
        this.category = data.Category;
        this.question = data.Question;
        this.optionA = data.OptionA;
        this.optionB = data.OptionB;
        this.optionC = data.OptionC;
        this.optionD = data.OptionD;
        this.answer = data.Answer;
      }
    }
  
    public get QuestionId(): number { return this.questionId; }
    public set QuestionId(value: number) { this.questionId = value; }
  
    public get Difficulty(): number { return this.difficulty; }
    public set Difficulty(value: number) { this.difficulty = value; }

    public get Category(): string { return this.category; }
    public set Category(value: string) { this.category = value; }
  
    public get Question(): string { return this.question; }
    public set Question(value: string) { this.question = value; }
  
    public get OptionA(): string { return this.optionA; }
    public set OptionA(value: string) { this.optionA = value; }
  
    public get OptionB(): string { return this.optionB; }
    public set OptionB(value: string) { this.optionB = value; }

    public get OptionC(): string { return this.optionC; }
    public set OptionC(value: string) { this.optionC = value; }
  
    public get OptionD(): string { return this.optionD; }
    public set OptionD(value: string) { this.optionD = value; }
  
    public get Answer(): string { return this.answer; }
    public set Answer(value: string) { this.answer = value; }
  }*/

  export interface Question {

    questionId: number;
    difficulty: number;
    category: string;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    answer: string;
  }