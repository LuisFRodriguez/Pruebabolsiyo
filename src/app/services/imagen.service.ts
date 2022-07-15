import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {


  private url = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';


  constructor(private http: HttpClient ) { }


  getImagenes() {
    return this.http.get(`${ this.url }`)
          .pipe(
            map( (resp:any) =>resp['hits']
            
            )
          );
  }

  getImagenesByCategory(category : string){
    return this.http.get(`${ this.url }&category=${category }`)
    .pipe(
      map( (resp:any)=> resp['hits'])
    );
  }


  getImagenByQ( q: string ) {
    return this.http.get(`${ this.url }&lang=es&q=${ q }`)
          .pipe(
            map( (resp:any)=> resp['hits'])
          );
  }
}
