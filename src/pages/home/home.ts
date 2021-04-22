import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IcecastProvider } from '../../providers/icecast/icecast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showButton : boolean;

  constructor(
    public navCtrl: NavController,
    private ice: IcecastProvider,
    
    ) { 
      
      }

    playStreaming(){
      this.ice.playUrl();
    }

    pauseStreaming(){
      this.ice.pauseUrl();
    }

    

}
