import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-producto-header',
  templateUrl: './producto-header.component.html',
  styleUrls: ['./producto-header.component.css']
})
export class ProductoHeaderComponent {
  @Output() columnsCountChange=new EventEmitter<number>();
  sort='desc';
  itemsShowCount=12;
  onSortUpdated(newSort:string):void{
    this.sort = newSort;
  }
  onItemsUpdated(count:number):void{
    this.itemsShowCount = count;
  }
  onColumnsUpdated(colsNum:number):void{
    this.columnsCountChange.emit(colsNum);   
  }
  
}
