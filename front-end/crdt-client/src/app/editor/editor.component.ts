import { Component, OnInit } from '@angular/core';
import { SyncService } from '../sync.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  contents : String;

  constructor(private syncService : SyncService) { }

  ngOnInit(): void {
    // this.contents = this.syncService.getContents();
    this.contents = "haha !";
    this.syncService.showContents();
  }

}
