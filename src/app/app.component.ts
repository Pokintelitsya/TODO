import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [{number: 1, name: "Angular 4"},
           {number: 2, name: "Cngular 4"},
           {number: 3, name: "Bngular 4"}
           ];
  sortProp = {direction: 'desc', field: 'name'};
  newItem = "";
  pushNewItem = function () {
      let self = this;
      if(self.newItem) {
          let newObjItem  = {name: self.newItem, number: self.items.length + 1};
          self.items.push(newObjItem);
          self.newItem = "";
      }
  }
  removeItem = function (index) {
      let self = this;
      self.items.splice(index, 1);
  }

  sortItems = function (sortBy) {
      let self = this;

      self.sortProp.field = sortBy;
      let compare = function(a,b) {
        if (a[self.sortProp.field] < b[self.sortProp.field])
            return -1;
          if (a[self.sortProp.field] > b[self.sortProp.field])
            return 1;
          return 0;
      }
      if( self.sortProp.direction == 'asc') {
             self.items.sort(compare);
             self.sortProp.direction = 'desc';
          } else if ( self.sortProp.direction == 'desc') {
             self.items.sort( compare).reverse();
             self.sortProp.direction = 'asc';
          }
  }

}
