import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  contents : String;
  
  onKeyPress(evt: any) {
    if (evt.key == "Enter") this.contents = this.contents + '<br/>';
    else {
      this.contents += evt.key;
    }
    
    console.log(evt.key);
  }
  constructor() { }

  ngOnInit(): void {
    this.contents = "";
  }

}
