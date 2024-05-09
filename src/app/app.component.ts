import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormBuilder,FormGroup} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule,NgIf, NgFor,CommonModule, NgbToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppMarket';
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


