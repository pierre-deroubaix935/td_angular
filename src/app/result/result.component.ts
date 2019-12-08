import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public prenom;
  public age;
  public taille;
  public poid;
  public percent;

  constructor(private router: Router) {
  }

  ngOnInit() {
    // @ts-ignore
    let raw_data = sessionStorage.getItem("data");
    if (!raw_data) {
      this.router.navigate(["form"]);
    }
    // @ts-ignore
    let data = JSON.parse(raw_data);

    this.prenom = data.prenom;
    this.age = data.age;
    this.poid = data.poid;
    this.taille = data.taille;

    // @ts-ignore
    this.percent = (this.prenom == "Chris" || this.prenom == "Christopher") ? 0 : Math.round(((this.poid / this.taille) ** 2) * 100);
  }
}
