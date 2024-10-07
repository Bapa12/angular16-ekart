import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = "Women's watch";

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  } 
}