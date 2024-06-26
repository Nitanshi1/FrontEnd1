import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbNav, NgbNavModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, ReactiveFormsModule, FormsModule, CommonModule, NgbToastModule, NgbNavModule],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyformComponent {
  active = 'top';
  show:boolean=false;
  autohide:boolean=true;
  constructor(private fb: FormBuilder) {}
  form!: FormGroup;

    
  ngOnInit(): void {
    this.form = this.fb.group({
      appName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['',[Validators.required, Validators.minLength(10)]],
      version: ['', Validators.required],
      releaseDate: ['',this.releaseDateValidator()],
      genre: ['',Validators.required]
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




