import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
year: any;
month: any;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   this.year =  this.route.snapshot.paramMap.get('year');
   this.month =  this.route.snapshot.paramMap.get('month');

  }

  viewAll(){
    console.log('clicked');
    this.router.navigate(['/']);

  }

}
