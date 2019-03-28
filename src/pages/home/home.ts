import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpService} from '../../services/http.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    httpString : string = "tata";
    imgSrc="http://fail18.com/upload/20190327154529uid1.jpg";

    constructor(public navCtrl: NavController, private httpService: HttpService) {

        //this.httpService.getContent('https://api.github.com/users')
         this.httpService.getContent('http://www.bastok.fr/oops/?page=1&json')
            .then((data: string[]) => {
                    console.log(data);
                    this.httpString = data[0];
                    this.imgSrc = data[0];
                }
            )
            .catch(
                (error: string) => {this.httpString = "error : " + error}
            );
    }




}
