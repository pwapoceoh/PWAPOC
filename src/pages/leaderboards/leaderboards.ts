import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Team } from '../../models/team.model'
import { AnswerHistory } from '../../models/answer-history.model'
/*import { Observable } from 'rxjs/Observable';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import * as Rx  from 'rxjs/Rx';
import * as _ from 'lodash';*/

@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboards.html'
})
export class LeaderboardPage implements OnInit {

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
          //this.getTotals().subscribe(x => this.teamTotals = x);
          this.teams.forEach(team => {
            team.score = this.answerHistory.map(x => x.teamId === team.teamId ? x.correctInd : 0).reduce((sum, current) => sum + current) * 10;
          });
        });
      });  
  }
  addItem() {
    //this.firebaseProvider.addTeam(this.newItem);
  }
  /*getTotals() {
    return Rx.Observable.from(this.answerHistory)
      .groupBy(x => x.teamId) // using groupBy from Rxjs
      .flatMap(group => group.toArray())// GroupBy dont create a array object so you have to flat it
      .map(g => {// mapping 
        return {
          teamId: g[0].teamId,//take the first name because we grouped them by name
          total: _.sumBy(g, 'correctInd'), // using lodash to sum quantity
        }
      })
      .toArray(); //.toArray because I guess you want to loop on it with ngFor
  }*/
}
