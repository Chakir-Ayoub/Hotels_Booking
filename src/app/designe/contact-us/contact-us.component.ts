import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  implements OnInit {

  FormData: FormGroup;
constructor(private builder: FormBuilder) {

 }
 ngOnInit(): void {
  this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    Comment: new FormControl('', [Validators.required])
    })  }

}
