import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Excursion } from 'src/app/class/excursion';
import { ExcService } from 'src/app/services/exc.service';

@Component({
  selector: 'jed-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
lesexcursions:Excursion[]=[];
  constructor(private excService:ExcService,private router:Router) { }
  onListe(){
    this.router.navigate(['/liste']);
  }
  onWhyUs(){
    this.router.navigate(['/whyus']);
  }

  ngOnInit(): void {
    this.excService.getExcursion().subscribe(
      data => this.lesexcursions = data
    )
  }

}
