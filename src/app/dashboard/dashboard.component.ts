import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getlist();
  }

  displayedColumns: string[] = ['sl', 'id', 'name', 'status'];

  // myData: any;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  getlist(){
    const authToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJpZCI6MSwiYWRkZWRCeSI6bnVsbCwidXNlclR5cGUiOjEsIm5ld1JlZyI6IjAifSwiaWF0IjoxNjkwNTQ1MDY4LCJleHAiOjE2OTA1Nzc0Njh9.LLwitXaenIHm3pSsm25wDgNNl7IlLrzscb2ABgMuyx7Qvyp49BjOfS5syYPniiCyfHUh49YPttNgLg4_UXnR7co0Nax_zUcdkQiE3iim1mlOkqI2AaKwFc1GgUJgGAoyDdHjq40qiv91pQiw5SHYiMIUqaYOK8_yCxy8zc-f4d95o7Wq6gVjwynSnAn5hvUd3SbrHi65iKvNZM8H2o11ommNGb1mdX6vE0-geWrTYIPe3vaHe30A6pwMOZ5x9Ua2sBnP54fegLE_LlYswIi7IDUgA6ETTuluG_rXv0mOlmo5nY3TpFKRGIuEFR5Xf1N9TD4t_d-F_mAM9ALmoNMEAw';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + authToken);
    this.http.get<any>('http://65.0.155.254:5001/admin/department/list', { headers }).subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource<any>(data.data.rows);
        this.dataSource.paginator = this.paginator;
        // console.log(this.dataSource);
      },
      (error: any) => {
        
      }
    );
  }

}
