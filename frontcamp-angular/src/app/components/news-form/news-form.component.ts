import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NewsService } from 'src/app/services/news.service';
import { News, NewsItem, Source } from 'src/app/models';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsFormComponent implements OnInit, OnDestroy {
  public radioButtonValue: boolean = false;
  public image: string;
  public alertData: string;
  public isVisible = true;
  public form: FormGroup;
  private newsSub: Subscription;
  private news: News;

  constructor(
    private location: Location,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit() {
    this.newsSub = this.newsService.items
      .subscribe((data: News[]) => {
        const id = this.route.snapshot.paramMap.get('id');
        this.news = data.find(item => item._id === id);

        this.createForm();
      });
  }

  public ngOnDestroy(): void {
    if (this.newsSub) {
      this.newsSub.unsubscribe();
    }
  }

  public click({ target: { value } }): void {
    this.radioButtonValue = value === "file" ? true : false;
    console.log(this.radioButtonValue);
  }

  public save(): void {
    if (this.news) {
      this.news.author = this.form.value.author;
      this.news.title = this.form.value.heading;
      this.news.content = this.form.value.content;
      this.news.description = this.form.value.description;
      this.news.publishedAt = this.form.value.date;
      this.news.urlToImage = this.form.value.image;
      this.news.source = new Source(this.form.value.source,
      this.getSourceId(this.form.value.source));

      this.newsService.updateNewsById(this.news._id, this.news)
        .subscribe(data => {
          this.alertData = data.status;
          this.isVisible = false;
          setTimeout(() => this.router.navigateByUrl('/dashboard'), 2000);
        });
    } else {
      const news = new NewsItem()
        .addAuthor(this.form.value.author)
        .addTitle(this.form.value.heading)
        .addContent(this.form.value.content)
        .addDescription(this.form.value.description)
        .addPublishDate(this.form.value.date)
        .addUrlToImage(this.form.value.image)
        .addSource(this.form.value.source, this.getSourceId(this.form.value.source));

      this.newsService.saveNewNews(news)
        .subscribe(data => {
          this.alertData = data.status;
          this.isVisible = false;
          setTimeout(() => this.router.navigateByUrl('/dashboard'), 2000);
        });
    }
  }

  public cancel() {
    this.location.back();
  }

  private createForm(): void {
    this.form = new FormGroup({
      heading: new FormControl(this.news ? this.news.title : '', Validators.required),
      description: new FormControl(this.news ? this.news.description : ''),
      content: new FormControl(this.news ? this.news.content : '', Validators.required),
      image: new FormControl(this.news ? this.news.urlToImage : ''),
      date: new FormControl(this.news ? this.news.publishedAt : new Date()),
      author: new FormControl(this.news ? this.news.author : ''),
      source: new FormControl(this.news ? this.news.source.name : '')
    });
  }

  private getSourceId(source: string): string {
    return source
      .toLowerCase()
      .replace(/\(.*$/, '')
      .trim()
      .replace(/\s/g, '-');
  }

  public change({ target: { value } }): void {
    this.image = value;
    console.log(value);
  }
}
