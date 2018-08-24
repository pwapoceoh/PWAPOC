
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeaderboardPage } from '../leaderboards/leaderboards';
import * as Rx from 'rxjs/Rx';
import { root } from 'rxjs/internal/util/root';

@Component({
    selector: 'page-interval',
    templateUrl: 'interval.html'
})
export class IntervalPage implements OnInit {
    timeString: string;
    duration = 5*60;
    seconds = "--";
    minutes = "--";
    clockDisplay: string;
    interval: number;

    constructor(public navCtrl: NavController) {

    }

    ngOnInit() {
        this.tickTick();
    }

    tickTick() {
        
            setInterval(() => {
                if (this.duration > 0) {
            this.duration = this.duration - 1;
                if (this.duration <= 0) {
                    clearInterval(this.interval)
                }

                if (this.duration % 60 < 10) {
                    this.seconds = "0" + this.duration % 60;
                } else {
                    this.seconds = (this.duration % 60).toString();
                }

                if (this.duration / 60 < 10) {
                    this.minutes = "0" + parseInt("" + this.duration / 60, 10);
                } else {
                    this.minutes = "" + parseInt((this.duration / 60).toString(), 10);
                }

                this.clockDisplay = this.minutes + " : " + this.seconds;
            }
            }, 1000);


    }

    fiveInterval() {
        this.duration = 5*60;
    }
    tenInterval() {
        this.duration = 10*60;
    }
    fifteenInterval() {
        this.duration = 15*60;
    }
    resume() {
        this.navCtrl.push(LeaderboardPage);
    }
}