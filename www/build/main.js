webpackJsonp([1],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaderboardPage = /** @class */ (function () {
    function LeaderboardPage(navCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.firebaseProvider = firebaseProvider;
    }
    LeaderboardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseProvider.getTeams().subscribe(function (result) {
            _this.teams = result;
            _this.firebaseProvider.getHistory().subscribe(function (his) {
                _this.answerHistory = his;
                //this.getTotals().subscribe(x => this.teamTotals = x);
                _this.teams.forEach(function (team) {
                    team.score = _this.answerHistory.map(function (x) { return x.teamId === team.teamId ? x.correctInd : 0; }).reduce(function (sum, current) { return sum + current; }) * 10;
                });
            });
        });
    };
    LeaderboardPage.prototype.addItem = function () {
        //this.firebaseProvider.addTeam(this.newItem);
    };
    LeaderboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-leaderboard',template:/*ion-inline-start:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\leaderboards\leaderboards.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-title>\n\n        Leaderboard\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n   \n\n  <ion-content>   \n\n    <ion-list>\n\n      <ion-item-sliding *ngFor="let item of teams">\n\n        <ion-item>\n\n          {{ item.name }} <div style ="text-align: right">{{ item.score }}</div>\n\n        </ion-item>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\leaderboards\leaderboards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], LeaderboardPage);
    return LeaderboardPage;
}());

//# sourceMappingURL=leaderboards.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, firebaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.slidesOptions = { initialSlide: 0 };
        this.clickedAnswer = 0;
        this.timeInSeconds = 0;
        this.questionNumber = 1;
        this.currentQuestion = { question: "", category: "" };
        this.category = "";
        this.question = "";
        this.time = 0;
        this.qTimeInSeconds = 0;
        this.qTime = 0;
        this.displayTime = "0";
        this.questionDisplayTime = "0";
        this.runTimer = false;
        this.hasStarted = false;
        this.hasFinished = false;
        this.qRunTimer = false;
        this.questionTimeHasStarted = false;
        this.questionTimeHasFinished = false;
        this.answerIsRevealed = false;
        this.remainingTime = this.timeInSeconds;
        this.qRemainingTime = this.qTimeInSeconds;
        this.firebaseProvider.getQuestions(function (snapshot) {
            _this.questions = snapshot;
            _this.currentQuestion = _this.questions[_this.questionNumber];
            _this.category = _this.currentQuestion.category;
            _this.question = _this.currentQuestion.question;
        });
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.ionViewWillEnter = function () {
        this.slider.lockSwipes(true);
    };
    AdminPage.prototype.slideNext = function () {
        this.slider.lockSwipes(false);
        if (this.swiper) {
            this.swiper.unlockSwipes();
        }
        this.slider.slideNext();
        this.slider.lockSwipes(true);
    };
    AdminPage.prototype.startGame = function () {
        this.slider.lockSwipes(false);
        if (this.swiper) {
            this.swiper.unlockSwipes();
        }
        this.slider.slideNext();
        this.slider.lockSwipes(true);
        this.timeInSeconds = 180;
        this.initTimer();
        this.startTimer();
    };
    AdminPage.prototype.initTimer = function () {
        if (this.timeInSeconds == 0) {
            this.timeInSeconds = 180;
        }
        this.time = this.timeInSeconds;
        this.runTimer = false;
        this.hasStarted = false;
        this.hasFinished = false;
        this.remainingTime = this.timeInSeconds;
        this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
    };
    AdminPage.prototype.startTimer = function () {
        this.runTimer = true;
        this.hasStarted = true;
        this.timerTick();
    };
    AdminPage.prototype.startQuestionTimer = function () {
        if (!this.questionTimeHasStarted) {
            this.qTimeInSeconds = 15;
            this.initQuestionTimer();
            this.qRunTimer = true;
            this.questionTimerTick();
        }
    };
    AdminPage.prototype.pauseTimer = function () {
        this.runTimer = false;
    };
    AdminPage.prototype.resumeTimer = function () {
        this.startTimer();
    };
    AdminPage.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.runTimer) {
                return;
            }
            _this.remainingTime--;
            _this.displayTime = _this.getSecondsAsDigitalClock(_this.remainingTime);
            if (_this.remainingTime > 0) {
                _this.timerTick();
            }
            else {
                _this.hasFinished = true;
                _this.slideNext();
            }
        }, 1000);
    };
    AdminPage.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
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
    };
    AdminPage.prototype.initQuestionTimer = function () {
        if (this.qTimeInSeconds == 0) {
            this.qTimeInSeconds = 180;
        }
        this.qTime = this.qTimeInSeconds;
        this.qRunTimer = false;
        this.questionTimeHasStarted = true;
        this.qRemainingTime = this.qTimeInSeconds;
        this.questionDisplayTime = this.getSecondsAsDigitalClock(this.qRemainingTime);
    };
    AdminPage.prototype.questionTimerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.qRunTimer) {
                return;
            }
            _this.qRemainingTime--;
            _this.questionDisplayTime = _this.getSecondsAsDigitalClock(_this.qRemainingTime);
            if (_this.qRemainingTime > 0) {
                _this.questionTimerTick();
            }
            else {
                _this.questionTimeHasFinished = true;
                _this.questionTimeHasStarted = false;
            }
        }, 1000);
    };
    AdminPage.prototype.revealAnswer = function () {
        this.answerIsRevealed = true;
    };
    AdminPage.prototype.nextQuestion = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slider'),
        __metadata("design:type", Object)
    ], AdminPage.prototype, "slider", void 0);
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\admin\admin.html"*/'<ion-slides #slider pager (ionDrag)="onIonDrag($event)" options="slidesOptions">\n\n  <ion-slide style="background-color: lightgrey" padding>\n    <h2 style="color: dimgray;">START TIMER TO<br> BEGIN THE GAME</h2>\n    <button ion-button style="background-color: dimgray; color: whitesmoke" (click)="startGame()">START TIMER</button>\n  </ion-slide>\n\n  <ion-slide style="background-color: lightgrey" padding>\n    <h6 style="color: dimgray;">THE GAME WILL BEGIN IN</h6>\n    <h1 text-center>{{displayTime}}</h1>\n    <button ion-button style="background-color: dimgray; color: whitesmoke" (click)="slideNext()">START</button>\n  </ion-slide>\n\n <ion-slide style="background-color: lightgrey" padding>   \n    <label *ngIf="questionTimeHasStarted" text-center>{{questionDisplayTime}}</label>\n    <h2 style="color: dimgray;">Question {{questionNumber}}</h2>    \n    <h2 *ngIf="questionTimeHasFinished" style="color: dimgray;">TIME IS UP</h2>\n    <h6 style="color: dimgray;">{{category}}</h6>\n    <p>{{question}}</p>\n    <!-- [ngClass]="{\'btnChecked\' : clickedAnswer === 1, \'btnDefault\':clickedAnswer !== 1}"  (click)="clickedAnswer = 1"-->\n    <button ion-button class="btnDefault" round block> <div style="width: 100%"><label style="float: left; font-size: 30px;"> A </label><label style="float: left; margin-left: 20px; margin-top: 10px;">Answer</label></div></button><br>\n    <button ion-button class="btnDefault" round block> <div style="width: 100%"><label style="float: left; font-size: 30px;"> A </label><label style="float: left; margin-left: 20px; margin-top: 10px;">Answer</label></div></button><br>\n    <button ion-button class="btnDefault" round block> <div style="width: 100%"><label style="float: left; font-size: 30px;"> A </label><label style="float: left; margin-left: 20px; margin-top: 10px;">Answer</label></div></button><br>\n    <button ion-button class="btnDefault" round block> <div style="width: 100%"><label style="float: left; font-size: 30px;"> A </label><label style="float: left; margin-left: 20px; margin-top: 10px;">Answer</label></div></button><br>\n\n    <button ion-button style="background-color: dimgray; color: whitesmoke" *ngIf="!questionTimeHasFinished" (click)="startQuestionTimer()">START TIMER</button>\n    <button ion-button style="background-color: dimgray; color: whitesmoke" *ngIf="questionTimeHasFinished && !answerIsRevealed" (click)="revealAnswer()">REVEAL ANSWER</button>\n    <button ion-button style="background-color: dimgray; color: whitesmoke" *ngIf="answerIsRevealed" (click)="nextQuestion()">NEXT QUESTION</button>\n  </ion-slide>\n\n  <ion-slide style="background-color: lightgrey" padding>   \n    <h1 *ngIf="questionTimeHasStarted" text-center>{{questionDisplayTime}}</h1>\n    <h2 style="color: dimgray;">{{questionText}}</h2>\n    <h6 style="color: dimgray;">{{category}}</h6>\n    <p>{{question}}</p>\n    <!-- [ngClass]="{\'btnChecked\' : clickedAnswer === 1, \'btnDefault\':clickedAnswer !== 1}"  (click)="clickedAnswer = 1"-->\n    <button ion-button class="btnDefault" round block> <div style="width: 100%"><label style="float: left; font-size: 30px;"> A </label><label style="float: left; margin-left: 20px; margin-top: 10px;">Answer</label></div></button><br>\n    <button ion-button class="btnDefault" round block> <div style="width: 100%"><label style="float: left; font-size: 30px;"> A </label><label style="float: left; margin-left: 20px; margin-top: 10px;">Answer</label></div></button><br>\n    <button ion-button class="btnDefault" round block> <div style="width: 100%"><label style="float: left; font-size: 30px;"> A </label><label style="float: left; margin-left: 20px; margin-top: 10px;">Answer</label></div></button><br>\n    <button ion-button class="btnDefault" round block> <div style="width: 100%"><label style="float: left; font-size: 30px;"> A </label><label style="float: left; margin-left: 20px; margin-top: 10px;">Answer</label></div></button><br>\n    <button ion-button style="background-color: dimgray; color: whitesmoke" (click)="startQuestionTimer()">START TIMER</button>\n  </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		477,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.shoppingItems = this.firebaseProvider.getShoppingItems().valueChanges();
    }
    HomePage.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem);
    };
    HomePage.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Shopping List\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content>\n\n  <ion-row>\n\n    <ion-col col-9>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New Shopping item"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="addItem()">Add!</button>\n\n    </ion-col>\n\n  </ion-row>\n\n \n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of shoppingItems | async">\n\n      <ion-item>\n\n        {{ item.name }}\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger" icon-only (click)="removeItem(item)"><ion-icon name="trash"></ion-icon></button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntervalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderboards_leaderboards__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntervalPage = /** @class */ (function () {
    function IntervalPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.duration = 5 * 60;
        this.seconds = "--";
        this.minutes = "--";
    }
    IntervalPage.prototype.ngOnInit = function () {
        this.tickTick();
    };
    IntervalPage.prototype.tickTick = function () {
        var _this = this;
        setInterval(function () {
            if (_this.duration > 0) {
                _this.duration = _this.duration - 1;
                if (_this.duration <= 0) {
                    clearInterval(_this.interval);
                }
                if (_this.duration % 60 < 10) {
                    _this.seconds = "0" + _this.duration % 60;
                }
                else {
                    _this.seconds = (_this.duration % 60).toString();
                }
                if (_this.duration / 60 < 10) {
                    _this.minutes = "0" + parseInt("" + _this.duration / 60, 10);
                }
                else {
                    _this.minutes = "" + parseInt((_this.duration / 60).toString(), 10);
                }
                _this.clockDisplay = _this.minutes + " : " + _this.seconds;
            }
        }, 1000);
    };
    IntervalPage.prototype.fiveInterval = function () {
        this.duration = 5 * 60;
    };
    IntervalPage.prototype.tenInterval = function () {
        this.duration = 10 * 60;
    };
    IntervalPage.prototype.fifteenInterval = function () {
        this.duration = 15 * 60;
    };
    IntervalPage.prototype.resume = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__leaderboards_leaderboards__["a" /* LeaderboardPage */]);
    };
    IntervalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interval',template:/*ion-inline-start:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\interval\interval.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Interval\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item>\n\n    {{ clockDisplay }}\n\n  </ion-item>\n\n  <ion-col>\n\n    <button ion-button (click)="fiveInterval()">5 Minutes</button>\n\n  </ion-col>\n\n  <ion-col>\n\n    <button ion-button (click)="tenInterval()">10 Minutes</button>\n\n  </ion-col>\n\n  <ion-col>\n\n    <button ion-button (click)="fifteenInterval()">15 Minutes</button>\n\n  </ion-col>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\interval\interval.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], IntervalPage);
    return IntervalPage;
}());

//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(406);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_leaderboards_leaderboards__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_interval_interval__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_firebase_firebase__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseConfig = {
    apiKey: "AIzaSyDsHpg3ICEqk7pT7JNkvylAQTqXbwhznVI",
    authDomain: "pwapoc-89fc6.firebaseapp.com",
    databaseURL: "https://pwapoc-89fc6.firebaseio.com",
    projectId: "pwapoc-89fc6",
    storageBucket: "pwapoc-89fc6.appspot.com",
    messagingSenderId: "454291515188"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_leaderboards_leaderboards__["a" /* LeaderboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_interval_interval__["a" /* IntervalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_leaderboards_leaderboards__["a" /* LeaderboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_interval_interval__["a" /* IntervalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_firebase_firebase__["a" /* FirebaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_admin_admin__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_admin_admin__["a" /* AdminPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderboards_leaderboards__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interval_interval__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__leaderboards_leaderboards__["a" /* LeaderboardPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__interval_interval__["a" /* IntervalPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Leaderboard" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Interval" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Admin\Downloads\Visual Studio Code\PWAPOC\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    FirebaseProvider.prototype.getShoppingItems = function () {
        return this.afd.list('/shoppingItems');
    };
    FirebaseProvider.prototype.addItem = function (name) {
        this.afd.list('/shoppingItems/').push({ name: name });
    };
    FirebaseProvider.prototype.removeItem = function (id) {
        this.afd.list('/shoppingItems/').remove(id);
    };
    FirebaseProvider.prototype.getQuestions = function (calback) {
        //return this.afd.list('/question/');
        this.afd.database.ref('/question/').orderByChild("category").once('value').then(function (snapshot) {
            calback(snapshot.val());
        });
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map