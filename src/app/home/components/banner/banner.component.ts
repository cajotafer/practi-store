import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Image } from '../../../image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  images: Image[] = [
    {
      src: 'assets/images/banner-1.jpg',
      alt: 'Banner personalizado 1'
    },
    {
      src: 'assets/images/banner-2.jpg',
      alt: 'Banner personalizado 2'
    },
    {
      src: 'assets/images/banner-3.jpg',
      alt: 'Banner personalizado 3'
    }
  ];

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
