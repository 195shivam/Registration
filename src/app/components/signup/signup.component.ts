import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  data={};
  // firstName:string=""
  // lastName:string=""
  // email:string=""
  // contactNo?:number
  password:string=""
  confirmPassword:string=""
  showPasswordError:boolean=false
handleSubmit(form:any){
  // console.log(form.value.firstName)
  this.data=form.value;
  Object.keys(this.data).forEach((keys)=>{
    console.log(keys+" "+this.data[keys])
  })

}
handlePasswordChange($event:any){
  this.password=$event.target.value
  console.log(this.password+" "+this.confirmPassword)
  if(this.confirmPassword.length>0){
    if(this.confirmPassword!=$event.target.value){
      this.showPasswordError=true;
    }
    else{
      this.showPasswordError=false
    }
  }
  else{
    this.showPasswordError=false
  }
}
handleConfirmPasswordChange($event:any){
  this.confirmPassword=$event.target.value;
  if(this.password.length>0){
    if(this.password!=$event.target.value){
      this.showPasswordError=true;
    }
    else{
      this.showPasswordError=false;
    }
  }
  else{
    this.showPasswordError=false
  }
}
}
