import { MySearch } from './../../core/interfaces/my-search';
import { NotificationService } from './../../core/services/notification.service';
import { RequestService } from './../../core/services/request.service';
import { Router } from '@angular/router';
import { StorageService } from './../../core/services/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-searches',
  templateUrl: './my-searches.component.html',
  styleUrls: ['./my-searches.component.scss']
})
export class MySearchesComponent {

  loadPage:boolean = false;
  Results:MySearch[] = [];
  suggestion:String = "";

  constructor(private storage:StorageService, private router:Router, private request: RequestService, private noti:NotificationService) {}

  redirectTo(id:Number){
    this.router.navigate(
      ['my-searches', id]
    );
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.loadPage = true;
    this.Results = [];
    this.request.get('search')
    .subscribe({
      next: (data:any)=> {
        if (data.status === 'success') {
          this.Results = data.data;
        }
      },
      error: () => { this.loadPage = false},
      complete: () => {this.loadPage = false}
    });
  }
}
