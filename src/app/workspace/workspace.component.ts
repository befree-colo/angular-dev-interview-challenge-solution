import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {

  public running = false;

  public timerCounter = 0;

  public timerSubscription: Subscription;


  public startTimer(event: any) {
    this.running = true;
    this.timerSubscription = interval(1000).subscribe(() => {
      this.timerCounter++;
    });
  }

  public stopTimer(event: any) {
    this.running = false;
    this.timerCounter = 0;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}