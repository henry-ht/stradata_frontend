import { Search } from './../../core/interfaces/search';
import { NotificationService } from './../../core/services/notification.service';
import { RequestService } from './../../core/services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-searches-results',
  templateUrl: './my-searches-results.component.html',
  styleUrls: ['./my-searches-results.component.scss']
})
export class MySearchesResultsComponent {
  id:String;

  loadPage:boolean = false;
  Results:Search[];
  busqueda:String = "";
  porcentaje:String = "";

  constructor(private route: ActivatedRoute, private router:Router, private request: RequestService, private noti:NotificationService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.onSubmit();
  }

  onSubmit(){
    this.loadPage = true;
    this.Results = null;
    this.request.get('search/'+this.id)
    .subscribe({
      next: (data:any)=> {
        if (data.status === 'success') {
          this.busqueda = data.data.busqueda;
          this.porcentaje = data.data.porcentaje;
          this.Results = JSON.parse(data.data.coincidencias);
        }
      },
      error: () => { this.loadPage = false},
      complete: () => {this.loadPage = false}
    });
  }

}
