import { Component, OnInit } from '@angular/core';
import { SyncService } from '../sync.service';
import { Observable } from 'rxjs/Observable';
import { Subscription, timer, Subject } from 'rxjs';
import { switchMap, takeUntil, catchError, map, retry, share } from 'rxjs/operators';
import { UserContent } from '../UserContent';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  contents : any;
  subscription : Subscription;
  userContent$ : Observable<UserContent>
  private stopPolling = new Subject();

  constructor(private syncService : SyncService) { }
  

  ngOnInit(): void {
    this.userContent$ = timer(1,3000).pipe(
      switchMap( ()=> this.syncService.getContents() ),
      retry(),
      share(),
      takeUntil(this.stopPolling  )
    )
    this.subscription = this.userContent$.subscribe(
      data => { this.contents = data.content}
    )
  }

  ngOnDestroy(){
    this.stopPolling.next();
    this.subscription.unsubscribe();
  }
}
