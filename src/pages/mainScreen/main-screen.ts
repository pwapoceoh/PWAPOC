import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Question } from '../../models/question.model'
import { Constant } from '../../models/constant.model'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-main-screen',
  templateUrl: 'main-screen.html'
})
export class MainScreenPage implements OnInit {

  questions: Question[];
  currentQuestion: Question;
  questionNumber = 1;
  currentQuestionId: Constant;
  revealAnswer = 0;

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.firebaseProvider.getQuestions(snapshot => {
      this.questions = snapshot;
      this.firebaseProvider.getSystemConstant().subscribe(syscon => {
        this.currentQuestionId = syscon.find(res => res.code == "CQID");
        this.questionNumber = parseInt(this.currentQuestionId.value);
        this.currentQuestion = this.questions[this.questionNumber];
        this.revealAnswer = parseInt(syscon.find(res => res.code == "REVA").value);
  
      });
    });
  }
 
  ngOnInit(){
    
  }
}
