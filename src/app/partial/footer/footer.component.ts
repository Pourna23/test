import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
searchQuery: any;
onSearch() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

}
