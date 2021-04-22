import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IcecastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IcecastProvider {

  icecastUrl:string ='http://188.166.234.48:8000/radiocristy';
  stream:any;

  constructor(public http: HttpClient) {
    console.log('Hello IcecastProvider Provider');

    this.stream = new Audio(this.icecastUrl);
  }

  playUrl(){
    this.stream.play();

  }

  pauseUrl(){
    this.stream.pause();
  }

}
