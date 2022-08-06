import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ecsact-system-impl',
  templateUrl: './system-impl.component.html',
  styleUrls: ['./system-impl.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemImplComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
