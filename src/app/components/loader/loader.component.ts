import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
