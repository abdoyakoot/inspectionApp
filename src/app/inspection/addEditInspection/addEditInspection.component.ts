import { Component, Input, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'appaddeditinspection',
  templateUrl: './addEditInspection.component.html',
  styleUrls: ['./addEditInspection.component.css'],
})
export class AddEditInspectionComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  constructor(private service: InspectionApiService) {}

  //Declare Some Variable To Assign Data Into It
  @Input() inspection: any;
  id: number = 0;
  status: string = '';
  comments: string = '';
  inspectionTypeId!: number;

  ngOnInit(): void {
    this.id=this.inspection.id;
    this.status=this.inspection.status;
    this.comments=this.inspection.comments;
    this.inspectionTypeId=this.inspection.inspectionTypeId;
    this.statusList$=this.service.getStatusList();
    this.inspectionList$=this.service.getInspectionList();
    this.inspectionTypesList$=this.service.getInspectionTypesList();

  }

  addInspection(){
    var inspection ={
      status:this.status,
      comments:this.comments,
      inspectionTypeId:this.inspectionTypeId
    }
    this.service.addInspection(inspection).subscribe(res=>{
      var closeModalBtn=document.getElementById("addEditModalClose");
      if(closeModalBtn)
      {
        closeModalBtn.click();
      }

      var showAddSuccess=document.getElementById("addSuccessAlert");
      if(showAddSuccess)
      {
        showAddSuccess.style.display="block";
      }

      setTimeout(function(){
        if(showAddSuccess)
        {
          showAddSuccess.style.display="none";
        }
      },4000)
    })
  }
  updateInspection(){
    var inspection ={
      id:this.id,
      status:this.status,
      comments:this.comments,
      inspectionTypeId:this.inspectionTypeId
    }
    var id:number=this.id;
    this.service.updateInspection(id,inspection).subscribe(res=>{
      var closeModalBtn=document.getElementById("addEditModalClose");
      if(closeModalBtn)
      {
        closeModalBtn.click();
      }

      var showUpdateSuccess=document.getElementById("updateSuccessAlert");
      if(showUpdateSuccess)
      {
        showUpdateSuccess.style.display="block";
      }

      setTimeout(function(){
        if(showUpdateSuccess)
        {
          showUpdateSuccess.style.display="none";
        }
      },4000)
    })
  }
}
