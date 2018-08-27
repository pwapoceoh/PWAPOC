import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Team } from '../../models/team.model';
import { AnswerHistory } from '../../models/answer-history.model';
import { Observable } from 'rxjs';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {
  
   constructor(public afd: AngularFireDatabase) { }
 
  getShoppingItems() {
    return this.afd.list('/shoppingItems');
  }
 
  addItem(name) {
    this.afd.list('/shoppingItems/').push({name: name});
  }
 
  removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }

<<<<<<< HEAD
  getQuestions(calback) {
    //return this.afd.list('/question/');
    this.afd.database.ref('/question/').orderByChild("category").once('value').then(function (snapshot) {
      calback(snapshot.val()); 
    });
  }

=======
  addTeam(team: Team) {
    this.afd.list('/team/').push(team);
  }
   
  getTeams(): Observable<Team[]> {
    return this.afd.list<Team>('/team').valueChanges();
  }

  getHistory(): Observable<AnswerHistory[]> {
    return this.afd.list<AnswerHistory>('/answerHistory').valueChanges();
  }
  addHistory(answerHistory: AnswerHistory) {
    this.afd.list('/answerHistory/').push(answerHistory);
  }
>>>>>>> b52e2dfdfb656292edac852451cc05da75a2534e
}

