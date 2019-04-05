import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // lastUpdate = new Date();
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  @Input() postLoveIts: number;



  constructor() { }

  ngOnInit() {
  }

  getLikes() {
    this.postLoveIts = this.postLoveIts + 1;
  }

  getDontLikes() {
    this.postLoveIts = this.postLoveIts - 1;
  }

}
