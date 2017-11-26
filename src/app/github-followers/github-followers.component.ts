import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    // Use this to get the required params in the subscribe method
    this.route.paramMap.subscribe();
    // Use this to get the required params if you're going to stay in the same component
    let id = this.route.snapshot.paramMap.get('id');

    // Use this to get the optional params 
    this.route.queryParamMap.subscribe();
    let page = this.route.snapshot.queryParamMap.get('page');
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
