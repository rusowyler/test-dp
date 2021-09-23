import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {Observable} from "rxjs";
import {User} from "../user";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  users$: Observable<User[]>;

  constructor(private searchService: SearchService, private detectorRef: ChangeDetectorRef) {
    this.users$ = searchService.search();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.detectorRef.detach();
    setTimeout(() => this.detectorRef.reattach(), 5000);
  }
}
