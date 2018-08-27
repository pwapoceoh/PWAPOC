import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Team } from '../../models/team.model'
import { AnswerHistory } from '../../models/answer-history.model'

@Component({
  selector: 'page-main-screen',
  templateUrl: 'main-screen.html'
})
export class MainScreenPage implements OnInit {

  teams: Team[];
  answerHistory: AnswerHistory[];
  teamTotals: any[];

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {

   }
 
  ngOnInit(){
    this.firebaseProvider.getTeams().subscribe(result => 
      {
        this.teams = result;
        this.firebaseProvider.getHistory().subscribe(his => {
          this.answerHistory = his
          this.teams.forEach(team => {
            team.score = this.answerHistory.map(x => x.teamId === team.teamId ? x.correctInd : 0).reduce((sum, current) => sum + current) * 10;
          });
        });
      });  
  }
}
