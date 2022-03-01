import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private users=[
  {username:'admin',password:'1234', roles:['ADMIN','USER']},
  {username:'user1',password:'1234', roles:['USER']},
  {username:'user2',password:'1234', roles:['USER']}
];
public isAuthentificate:boolean=false;


  public userAuthentificated:any;


  constructor() {

  }
  public login(username:string,password:string){
    let user:any=undefined;
    this.users.forEach(u=>{
      if (u.username==username && u.password==password){
        user=u;
      }
      if(user){
this.isAuthentificate=true;
this.userAuthentificated=user;
      }else {
        this.isAuthentificate=false;
        this.userAuthentificated=undefined;

      }
    })
  }

}
