import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ngxLoadingAnimationTypes } from 'ngx-loading';

import { AuthorService } from './../../author-service/author.service';

const PRIMARY_COLOR = '#ffffff';
const SECONDARY_COLOR = '#3f51b5';

@Component({
  selector: 'blog-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {

  primaryColour = PRIMARY_COLOR;
  secondaryColour = SECONDARY_COLOR;
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  config = {
              animationType: ngxLoadingAnimationTypes.circle, 
              primaryColour: this.primaryColour, 
              secondaryColour: this.secondaryColour, 
              backdropBorderRadius: '3px',
              backdropBackgroundColour: 'rgba(255,255,255,0)'
          }
  loading = false;
  articleForm: FormGroup;
  image: File;
  imageFileName: string;

  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ){}

  setImageFile(file: File){
    this.image = file;
    this.imageFileName = file.name;
  }

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
    this.loading = true;
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
      })
      .subscribe(() => {
          this.loading = false;
          this.router.navigate(['/success']);
        }, err => {
          this.loading = false;
          alert('Erro! Consulte o console para mais informações')
          console.log(err);
        }
      );
  }}
}
