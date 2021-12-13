import { Component, OnInit } from '@angular/core';
import { ExcService } from 'src/app/services/exc.service';
import { ActivatedRoute } from '@angular/router';

import { Excursion } from 'src/app/class/excursion';
@Component({
  selector: 'jed-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  lesexcursions:Excursion[]=[];
  rech:any;
  constructor(private excService:ExcService) { }

  ngOnInit(): void {
    this.excService.getExcursion().subscribe(
      data => this.lesexcursions = data
    )  }
    onRech(){
      if(this.rech == ""){
        this.ngOnInit();
      }else{
      this.lesexcursions=this.lesexcursions.filter(exc => {
        return exc.lib.toLocaleLowerCase().match(this.rech.toLocaleLowerCase());
    })
  }
    }
    

}
