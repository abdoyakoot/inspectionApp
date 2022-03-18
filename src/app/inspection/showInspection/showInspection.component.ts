import { Component, OnInit } from '@angular/core';
import { map, Observable, observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './showInspection.component.html',
  styleUrls: ['./showInspection.component.css'],
})
export class ShowInspectionComponent implements OnInit {
  inspectionList!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  inspectionTypesList: any = [];

  //map to display data with associate foreign key
  inspectionTypesMap: Map<number, string> = new Map();

  constructor(private service: InspectionApiService) {}

  ngOnInit(): void {
    //List Of Inspections Component
    this.inspectionList = this.service.getInspectionList();

    //List Of Inspections Types Component
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
    this.refreshInspectionTypesMap();

  }

  // Varibales

  modalTitle = '';
  activeAddEditInspectionComponent: boolean = false;
  inspection: any;

  modalAdd() {
    this.inspection = {
      id: 0,
      status: null,
      comments: null,
      inspectionTypeId: null,
    };
    this.modalTitle = 'Add Inspection';
    this.activeAddEditInspectionComponent = true;
  }

  modalEdit(item:any)
  {
    this.inspection=item;
    this.modalTitle="Edit Inspection";
    this.activeAddEditInspectionComponent=true;
  }

  // Event To Delete 

  modalDelete( item:number)
  {
    if(confirm(`Are You Sure You Want To Delete Inspection ${item} `))
    {
      this.service.deleteInspection(item).subscribe(res=>{
        var closeModalBtn=document.getElementById("addEditModalClose");
        if(closeModalBtn)
        {
          closeModalBtn.click();
        }
  
        var showDeleteSuccess=document.getElementById("deleteSuccessAlert");
        if(showDeleteSuccess)
        {
          showDeleteSuccess.style.display="block";
        }
  
        setTimeout(function(){
          if(showDeleteSuccess)
          {
            showDeleteSuccess.style.display="none";
          }
        },4000)
        this.inspectionList=this.service.getInspectionList();
      })
    }
  }

// After The Add Or Edit Inspection Get Refresh Of The Data
  
modalClose(){
    this.activeAddEditInspectionComponent=false;
   this.inspectionList=this.service.getInspectionList();
  }

  // Make Function To Replace The Type Id With The Type Name

  refreshInspectionTypesMap() {
    this.service.getInspectionTypesList().subscribe((data) => {
      this.inspectionTypesList = data;
      for (let i = 0; i < data.length; i++) {
        this.inspectionTypesMap.set(
          this.inspectionTypesList[i].id,
          this.inspectionTypesList[i].inspectionName
        );
      }
    });
  }
}
