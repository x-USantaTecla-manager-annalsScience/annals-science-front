import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoryInputMap } from 'src/app/models/interfaces/category.interface';

@Component({
  selector: 'app-category-create-edit',
  templateUrl: './category-create-edit.component.html',
  styleUrls: ['./category-create-edit.component.css']
})
export class CategoryCreateEditComponent implements OnInit {

  categoryForm: FormGroup;
  categoryData = [ {
    "id": 5,
    "name": "casii5l5a9",
    "parentId": null
  }];

  categoryInput: categoryInputMap = {
    name: ''
  }
  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.formBuilder();
  }

  
  formBuilder(){
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      parentCategoryList: ['']
    });
  }

  onSubmit(){
    this
  }


}
