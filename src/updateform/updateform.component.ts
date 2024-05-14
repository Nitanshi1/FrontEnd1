import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorFn,Validators,Validator } from '@angular/forms';

import { FormGroup, FormBuilder,AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-updateform',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule, ReactiveFormsModule,RouterOutlet,NgbToastModule,NgbNavModule ],
  templateUrl: './updateform.component.html',
  styleUrl: './updateform.component.css'
})
export class UpdateformComponent {
  active = 'top';
  show:boolean=false;
  autohide:boolean=true;
  get appname(){
    return this.form.get('appname');
  }
  get description(){
    return this.form.get('description');
  }
  get releaseDate(){
    return this.form.get('releaseDate');
  }
  get version(){
    return this.form.get('version');
  }
  get genre(){
    return this.form.get('genre');
  }
  get DownloadCount(){
    return this.form.get('DownloadCount');
  }
  get avgRating(){
    return this.form.get('avgRating');
  }
 
  status=false;
 form!:FormGroup;
  isTrue() {
    this.status = !this.status;
    this.form.patchValue({
      visibility:this.status
    })
   
  }
  constructor(private fb: FormBuilder) {}
  
    
  ngOnInit(): void {
    this.form = this.fb.group({
      appName: ['Leetcode', [Validators.required, Validators.minLength(3)]],
      description: ['',[Validators.required, Validators.minLength(10)]],
      version: ['', Validators.required],
      releaseDate: ['13/05/2024',this.releaseDateValidator()],
      genre: ['',Validators.required],
      DownloadCount:['3'],
      avgRating:['4'],
      visibility:[this.status, Validators.required]
    });
  }
  releaseDateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const releaseDate = control.value;
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); 

      if (releaseDate && releaseDate >= currentDate) {
        return { 'invalidReleaseDate': true };
      }
      return null;
    };
  }

 

  onSubmit() {
   
      console.log(this.form.value);
      this.form.reset();
      this.show = true;
    }
    
    
    close() {
      this.show = false;
      setTimeout(() => (this.show = true), 3000);
    }
  }






