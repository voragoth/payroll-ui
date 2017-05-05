import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.css']
})
export class SpinnerLoaderComponent implements OnInit {

  @Input() public loadingMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
