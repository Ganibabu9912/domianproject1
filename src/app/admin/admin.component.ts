
  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

isSidePanelVisible:boolean =true;

coursesObj: any ={
  
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""

}

opensidepanel(){
  this.isSidePanelVisible=true;
}

closesidepanel(){
  this.isSidePanelVisible=false;
}

}


