import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthorService } from './../../author-service/author.service';

@Component({
  selector: 'blog-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {

  articleForm: FormGroup;
  image: File;

  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      category: ['', Validators.required],
      title:['', 
        [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      secondaryTitle: ['', 
        [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      introduction: ['', 
        [
          Validators.required, 
          Validators.maxLength(1000)
        ]
      ],
      content: ['', Validators.required],
      image:['', Validators.required]
    })
  }

  save(){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.image);
    fileReader.onload = () => {
      this.authorService.saveForm({
        title: this.articleForm.get('title').value,
        secondaryTitle: this.articleForm.get('secondaryTitle').value,
        category: this.articleForm.get('category').value,
        introduction: this.articleForm.get('introduction').value,
        content: this.articleForm.get('content').value,
        userId: 1,
        creationDate: new Date(),
        image: fileReader.result
      }).subscribe(() => {
        this.router.navigate(['/success']);
      }, err => {
        alert('Erro! Consulte o console para mais informações')
        console.log(err);
      });
  }}
}
