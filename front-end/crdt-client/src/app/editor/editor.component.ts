import { Component, OnInit } from '@angular/core';
import { SyncService } from '../sync.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  contents : any;

  constructor(private syncService : SyncService) { }

  ngOnInit(): void {
    this.syncService.getContents().subscribe((data) => {
      this.contents = data.content;
    })
  }

}
