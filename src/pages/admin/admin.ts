import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})

export class AdminPage {

  questions: Observable<any[]>;

  swiper: any;
  @ViewChild('slider') slider: any;
  slidesOptions = { initialSlide: 0 }
  clickedAnswer = 0;
  timeInSeconds = 0;
  questionNumber = 1;
  currentQuestion = {question: "", category: ""};
    category = "";
    question = "";
 
  time = 0;
  qTimeInSeconds = 0;
  qTime = 0;
  displayTime = "0";
  questionDisplayTime = "0";
  runTimer = false;
  hasStarted = false;
  hasFinished = false;
  qRunTimer = false;
  questionTimeHasStarted = false;
  questionTimeHasFinished = false;
  answerIsRevealed = false;
  remainingTime = this.timeInSeconds;
  qRemainingTime = this.qTimeInSeconds;

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseProvider: FirebaseProvider) {
    this.firebaseProvider.getQuestions( snapshot => {
      this.questions = snapshot;
      this.currentQuestion = this.questions[this.questionNumber];
      this.category = this.currentQuestion.category;
      this.question = this.currentQuestion.question;
  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  ionViewWillEnter() {
    this.slider.lockSwipes(true);
  }

  slideNext() {
    this.slider.lockSwipes(false);
    if (this.swiper) {
      this.swiper.unlockSwipes();
    }
    this.slider.slideNext();
    this.slider.lockSwipes(true);
  }

  startGame() {
    this.slider.lockSwipes(false);
    if (this.swiper) {
      this.swiper.unlockSwipes();
    }
    this.slider.slideNext();
    this.slider.lockSwipes(true);
    this.timeInSeconds = 180;
    this.initTimer();
    this.startTimer();
  }

  initTimer() {
    if (this.timeInSeconds == 0) {
      this.timeInSeconds = 180;
    }

    this.time = this.timeInSeconds;
    this.runTimer = false;
    this.hasStarted = false;
    this.hasFinished = false;
    this.remainingTime = this.timeInSeconds;
    this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
  }

  startTimer() {
    this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
  }

  startQuestionTimer() {
    if(!this.questionTimeHasStarted)
    {
      this.qTimeInSeconds = 15;
      this.initQuestionTimer();
      this.qRunTimer = true;
      this.questionTimerTick();
    }   
  }

  pauseTimer() {
    this.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {

      if (!this.runTimer) { return; }
      this.remainingTime--;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
      if (this.remainingTime > 0) {
        this.timerTick();
      }
      else {
        this.hasFinished = true;
        this.slideNext();
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return minutesString + 'm : ' + secondsString + 's';
  }

  initQuestionTimer() {
    if (this.qTimeInSeconds == 0) {
      this.qTimeInSeconds = 180;
    }

    this.qTime = this.qTimeInSeconds;
    this.qRunTimer = false;
    this.questionTimeHasStarted = true;
    this.qRemainingTime = this.qTimeInSeconds;
    this.questionDisplayTime = this.getSecondsAsDigitalClock(this.qRemainingTime);
  }

  questionTimerTick() {
    setTimeout(() => {

      if (!this.qRunTimer) { return; }
      this.qRemainingTime--;
      this.questionDisplayTime = this.getSecondsAsDigitalClock(this.qRemainingTime);
      if (this.qRemainingTime > 0) {
        this.questionTimerTick();
      }
      else {
        this.questionTimeHasFinished = true;
        this.questionTimeHasStarted = false;
      }
    }, 1000);
  }

  revealAnswer(){
    this.answerIsRevealed = true;
  }

  nextQuestion(){


  }
}
