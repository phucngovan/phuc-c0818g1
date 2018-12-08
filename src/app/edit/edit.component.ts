import { Component, OnInit } from '@angular/core';
import {Awesome} from '../model/awesome.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AwesomeService} from '../awesome.service';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  awesome: Awesome;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private awesomeService: AwesomeService) { }

  ngOnInit() {
    const awesomeId = localStorage.getItem('editAwesomeId');
    if (!awesomeId) {
      alert('Invalid action.');
      this.router.navigate(['list-awesoome']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      tag: [],
      url: [],
      descriptions: []
    });
    this.awesomeService.getAwesomeById(awesomeId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.awesomeService.editAwesome(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-awesome']);
        },
        error => {
          alert(error);
        });
  }

}
