import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FakeSessionItemService],
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
