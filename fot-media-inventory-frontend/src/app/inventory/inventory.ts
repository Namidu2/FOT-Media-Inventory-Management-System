import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {
  searchText = '';

selectedCategory = 'All Category';

selectedStatus = 'All Status';



categories = [
  'All Category',
  'Camera',
  'Lens',
  'Drone',
  'Audio',
  'Lighting',
  'Laptop',
  'Projector'
];


statuses = [
  'All Status',
  'Available',
  'Damaged',
  'Maintain',
  'Issued'
];



equipment = [

{
 id:1,
 image:'assets/images/camera.jpg',
 name:'Sony A7RV Camera',
 category:'Camera',
 serialNo:'CAM-001',
 condition:'Excellent',
 status:'Available'
},


{
 id:2,
 image:'assets/images/drone.jpg',
 name:'DJI Mavic Air 3',
 category:'Drone',
 serialNo:'DRN-002',
 condition:'Good',
 status:'Issued'
},



];



get filteredEquipment(){


return this.equipment.filter(item=>{


const searchMatch =
item.name.toLowerCase()
.includes(this.searchText.toLowerCase());



const categoryMatch =
this.selectedCategory === 'All Category' ||
item.category === this.selectedCategory;



const statusMatch =
this.selectedStatus === 'All Status' ||
item.status === this.selectedStatus;



return searchMatch && categoryMatch && statusMatch;


});


}
}
