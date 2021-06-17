import { Component, OnInit } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';

@Component({
  selector: 'app-delete-crop',
  templateUrl: './delete-crop.component.html',
  styleUrls: ['./delete-crop.component.scss']
})
export class DeleteCropComponent implements OnInit {
  searchCrop = {cropId:''};
  searchCropModel = new TableModel();

  constructor() { }

  ngOnInit(): void {
  }

  isSearchFormInvalid() {
    return !this.searchCrop || this.searchCrop.cropId === '';
  }

  findCrop() {
    this.searchCropModel.header = [
      new TableHeaderItem({data: "ID"}),
      new TableHeaderItem({data: 'Name'}),
      new TableHeaderItem({data: 'Planted Season'}),
      new TableHeaderItem({data: 'Harvest Time'})
    ];

    this.searchCropModel.data = [
      [
        new TableItem({data: "1"}), 
        new TableItem({data: "Sugar"}), 
        new TableItem({data: "June"}), 
        new TableItem({data: "Oct"})
      ]
    ];
  }

  isTableNotEmpty() {
    return this.searchCropModel.totalDataLength > 0;
  }

  deleteCrop() {

  }

  isItemSelected() {
    return this.searchCropModel.selectedRowsCount() > 0;
  }

  isItemNotSelected() {
    return !this.isItemSelected();
  }
}