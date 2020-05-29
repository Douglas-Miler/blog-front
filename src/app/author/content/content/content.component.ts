import { ArticleForm } from './../../author-service/article-form';
import { AuthorService } from './../../author-service/author.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'blog-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {

  articleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService
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
      content: ['', Validators.required]
    })
  }

  save(){
    this.authorService
      .save(this.articleForm.getRawValue())
      .subscribe(() => {
        console.log('salvei');
      },
      err => {
        console.log(err);
      });
  }
}
