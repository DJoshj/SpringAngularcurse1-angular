import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pagos',
  standalone: false,
  templateUrl: './pagos.html',
  styleUrl: './pagos.css',
})
export class Pagos implements OnInit{

   public pagos:any;
   public dataSource:any;
   public displayedColumns = ['id','fecha','cantidad','tipo','status','nombre'];

   //componentes
    //@View child es un decorardo que permite acceder a un componente del hijo DOM
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild (MatSort) sort!: MatSort;

  constructor(private http:HttpClient){
       
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/pagos").subscribe({
      next: data => {
        this.pagos = data;
        this.dataSource = new MatTableDataSource(this.pagos);
        this.dataSource.paginator= this.paginator;
        this.dataSource.sort = this.sort;
      }, error: err=> {console.log(err);}
    })
  }

}
