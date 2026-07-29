import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  userName = 'Kasun';

  totalInventoryItems = 12;
  issuedItems = 3;
  damagedItems = 2;
  users = 6;

  recentActivity = [
    {
      id: 1,
      name: 'Amaya Wickramasinghe',
      issueId: 'ISS 2001',
      itemCount: 2,
      issuedBy: 'Nimali Fernando',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Ruwan Herath',
      issueId: 'ISS-2002',
      itemCount: 1,
      issuedBy: 'Kasun Perera',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Media Unit Coverage',
      issueId: 'ISS 2003',
      itemCount: 1,
      issuedBy: 'Nimali Fernando',
      status: 'Returned'
    }
  ];
}