import { Search } from './../../core/interfaces/search';
import { NotificationService } from './../../core/services/notification.service';
import { RequestService } from './../../core/services/request.service';
import { Router } from '@angular/router';
import { StorageService } from './../../core/services/storage.service';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../core/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss']
})
export class SearchesComponent {

  loadPage:boolean = false;
  iconSent  = faPaperPlane;
  SearchForm:FormGroup;
  Results:Search[] = [];
  suggestion:String = "";

  constructor(private user:UserService, private fb: FormBuilder, private storage:StorageService, private router:Router, private request: RequestService, private noti:NotificationService) {
    this.SearchForm = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3),
      ]],
      porcentaje: ['', [
        Validators.required,
      ]],
    });

  }

  ngOnInit(): void {
  }

  isValid() {
    return this.SearchForm.controls;
  }

  setSearch(){
    this.SearchForm.patchValue({
      "nombre": this.suggestion
    });
    this.onSubmit();
  }

  onSubmit(){
    this.loadPage = true;
    this.Results = [];
    this.request.get('similarity', this.SearchForm.value)
    .subscribe({
      next: (data:any)=> {
        if (data.status === 'success') {
          this.Results = data.data.results;
          if(this.suggestion !== data.data.similar_text){
            this.suggestion = data.data.similar_text;
          }else{
            this.suggestion = "";
          }
        }
      },
      error: () => { this.loadPage = false},
      complete: () => {this.loadPage = false}
    });
  }

}
