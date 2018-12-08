import { Component, OnInit } from '@angular/core';
import {Awesome} from '../model/awesome.model';
import {Router} from '@angular/router';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-list-awesome',
  templateUrl: './list-awesome.component.html',
  styleUrls: ['./list-awesome.component.scss']
})
export class ListAwesomeComponent implements OnInit {
  awesomes: Awesome[];


  constructor(private router: Router, private awesomeService: AwesomeService) { }

  ngOnInit() {
    this.awesomeService.getAwesomes().subscribe(data => { this.awesomes = data; });
  }
  deleteAwesome(awesome: Awesome): void {
    this.awesomeService.deleteAwesome(awesome)
      .subscribe( data => {
        this.awesomes = this.awesomes.filter(u => u !== awesome);
      });
  }
  editAwesome(awesome: Awesome): void {
    localStorage.removeItem('editAwesomeId');
    localStorage.setItem('editAwesomeId', awesome.id.toString());
    this.router.navigate(['edit-awesome']);
  }

}
