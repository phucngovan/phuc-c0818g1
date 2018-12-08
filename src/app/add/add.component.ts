import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private awesomeService: AwesomeService) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      tag: [],
      url: [],
      descriptions: []
    });
  }
  onSubmit() {
    this.awesomeService.addAwesome(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-awesome']).then(function () {
            return alert(' tao thanh cong');
          }
        );
      });
  }

}
