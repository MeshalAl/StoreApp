import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.client.get<Product[]>('../../assets/data.json');
  }
}
