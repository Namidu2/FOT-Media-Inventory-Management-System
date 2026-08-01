import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-inventory',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {
  searchText = '';

  isCategoryDropdownOpen = false;
  isStatusDropdownOpen = false;

  selectedCategory = 'All Categories';

  selectedStatus = 'All Status';

  categories = [
    'All Categories',
    'Cameras',
    'Lenses',
    'Tripods',
    'Lighting Equipment',
    'Microphones',
    'Audio Equipment',
    'Drones',
    'Computers',
    'Accessories'
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.isCategoryDropdownOpen = false;
  }

  selectStatus(status: string) {
    this.selectedStatus = status;
    this.isStatusDropdownOpen = false;
  }

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
  category:'Cameras',
  serialNo:'CAM-001',
  condition:'Excellent',
  status:'Available'
 },


 {
  id:2,
  image:'assets/images/drone.jpg',
  name:'DJI Mavic Air 3',
  category:'Drones',
  serialNo:'DRN-002',
  condition:'Good',
  status:'Issued'
 },




 ];


 viewItem(item: any) {
   console.log('View:', item);
 }

 editItem(item: any) {
   console.log('Edit:', item);
 }

 deleteItem(item: any) {
   console.log('Delete:', item);
 }






  get filteredEquipment(){


    return this.equipment.filter(item=>{


      const searchMatch =
      item.name.toLowerCase()
      .includes(this.searchText.toLowerCase());



      const categoryMatch =
      this.selectedCategory === 'All Categories' ||
      item.category === this.selectedCategory;



        const statusMatch =
        this.selectedStatus === 'All Status' ||
        item.status === this.selectedStatus;



        return searchMatch && categoryMatch && statusMatch;


    });


  }

  showAddModal = false;

  openAddModel(){
    
    this.showAddModal = true;

  } 
  
  closeAddModel(){
    this.showAddModal = false;
    if (this.equipmentForm) {
      this.equipmentForm.reset({
        itemId: 'INV-1013', 
        category: 'Cameras',
        condition: 'Good',
        status: 'Available'
      });
    }
    this.imagePreview = null;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.equipmentForm.patchValue({ image: file }); 
      
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; 
      };
      reader.readAsDataURL(file);
    }
  }
  
  equipmentForm!:FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void{
    this.equipmentForm = this.fb.group({
      itemId: [{ value: 'INV-1013', disabled: true }],
      equipmentName: ['', Validators.required],
      category: ['Cameras'],
      brand: [''],
      model: [''],
      serialNumber: ['', Validators.required],
      condition: ['Good'],
      status: ['Available'],
      notes: [''],
      image: [null]
    });
  }
  onSubmit() {
    if (this.equipmentForm.valid) {
      
      const formData = this.equipmentForm.getRawValue(); 
      
      
      const newItem = {
        id: this.equipment.length + 1,
        image: this.imagePreview ? (this.imagePreview as string) : 'assets/images/camera.jpg', 
        name: formData.equipmentName,
        category: formData.category,
        serialNo: formData.serialNumber,
        condition: formData.condition,
        status: formData.status
      };

      
      this.equipment.push(newItem);

      
      this.closeAddModel();
      
    } else {
      
      this.equipmentForm.markAllAsTouched();
    }
  }
  



}



