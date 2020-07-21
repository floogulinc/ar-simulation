import { Component, OnInit } from '@angular/core';
import { TeacherSessionService } from '../teacher-session.service';

@Component({
  selector: 'app-session-lobby',
  templateUrl: './session-lobby.component.html',
  styleUrls: ['./session-lobby.component.scss']
})
export class SessionLobbyComponent implements OnInit {

  sessionID: string;

  constructor(public teacherSessionService: TeacherSessionService) {
    this.sessionID = 'demo-session'; // Temporary until a way to get the session is implemented
  }

  ngOnInit(): void {
    // Temporary, teacher will likely join session immediately after creating it
    this.teacherSessionService.joinSession(this.sessionID);
  }
}