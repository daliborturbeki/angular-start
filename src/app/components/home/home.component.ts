import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse } from 'src/app/models/apiResonse';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string = "";
  public users: Array<User> = [];

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=> {
        this.searchUsers();
  });
  }

  searchUsers(): void{
    this.httpService.getUsersList().subscribe((usersList: User[]) => {
      this.users = usersList;
      console.log(usersList);
    });
  }
}
