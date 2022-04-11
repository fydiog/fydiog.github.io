import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  FormData!:FormGroup;

  emailSent:boolean = false;

  constructor(private builder: FormBuilder, private contactService:ContactService) {
    
   }

  ngOnInit(): void {
      this.FormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', [Validators.required])
      })
    }

    sendMail(FormValues:any){
      this.contactService.postEmail(FormValues)
      .subscribe(
        (res)=>{
          if (res.ok) {
            this.emailSent = true;
            // setTimeout(() => this.hideAlert(), 3000);
          }
        }, 
        err=>console.log(err))
    }

    hideAlert(){
      this.emailSent = false;
    }
  }



