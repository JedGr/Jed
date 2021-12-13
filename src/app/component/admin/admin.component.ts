import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Excursion } from 'src/app/class/excursion';
import { ExcService } from 'src/app/services/exc.service';
@Component({
  selector: 'jed-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
lesexcursions:Excursion[]=[];
rech:any;

excursionForm:FormGroup=new FormGroup({});
private basePath = '/images';
file: File | undefined;
  constructor(private excService:ExcService,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.excursionForm=this.fb.group({
     
lib :["ffg"],
photo:[""],
prix :[12544],
prixAvant :[500],
duree:["12h30mn"],
promo:[true],
nouv:[true],
coupDeCoeur:[true],
dateDep :new Date ("22/22/2011"),
datePay :new Date ("21/22/2011"),
description:["jed grira"]


    })
    this.excService.getExcursion().subscribe(
      data => this.lesexcursions = data
    )
  }
  onAjouterExcursion(){
  this.excService.addExcursion(this.excursionForm.value).subscribe(
    data => this.lesexcursions.push(data)
  ) }
  onRech(){
    if(this.rech == ""){
      this.ngOnInit();
    }else{
    this.lesexcursions=this.lesexcursions.filter(exc => {
      return exc.lib.toLocaleLowerCase().match(this.rech.toLocaleLowerCase());
  })
}
  }
  onModifierExcursion(id:number){
    this.excService.updateExcursion(id, this.excursionForm.value)
    .subscribe(
      excursion => {
        let p = this.lesexcursions.findIndex(l =>l.id == excursion.id);
        this.lesexcursions[p]= excursion;
      }      
    )
  }
  onSupprimerExcursion(id:number){
    this.excService.deleteExcursion(id)
    .subscribe(
      ()=>
      this.lesexcursions = this.lesexcursions.filter(exc=>exc.id !=id)
    )
  }

}
