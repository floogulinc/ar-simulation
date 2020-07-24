import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayRoundComponent } from './play-round/play-round.component';
import { LargeDisplayComponent } from './large-display/large-display.component';
import { TimerTestComponent } from './timer-test/timer-test.component';
import { FlowerTestComponent } from './flower-test/flower-test.component';
import { HomeComponent } from './home/home.component';
import { JsonDataTestComponent } from './json-data-test/json-data-test.component';
import { SessionTestComponent } from './session-test/session-test.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { SessionLobbyComponent } from './session-lobby/session-lobby.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ar', component: PlayRoundComponent},
  {path: 'teacher', component: LargeDisplayComponent},
  {path: 'timer-test', component: TimerTestComponent},
  {path: 'json-data-test', component: JsonDataTestComponent},
  {path: 'session-test', component: SessionTestComponent},
  {path: 'json-data-test', component: JsonDataTestComponent},
  {path: 'session-lobby', component: SessionLobbyComponent},
  {path: 'join', component: StudentLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
