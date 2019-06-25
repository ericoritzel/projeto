import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { Estoque } from './estoque.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
    selector: 'estoque',
    templateUrl: './estoque.component.html',
    styleUrls: ['./estoque.component.css']
})

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [EstoqueComponent]
})

export class EstoqueComponent implements OnInit {

    estoque: Estoque;
    estoquesRef: AngularFireList<any>;
    estoques: any[];

    constructor(private db: AngularFireDatabase) { }

    ngOnInit(): void {
        this.estoque = new Estoque();
        this.listar();
    }

    salvar() {
       
       if (this.estoque.key == null) {
            this.db.list('estoques').push(this.estoque)
                .then((result: any) => {
                    console.log(result.key);
                });            
        } 
        else {
            console.log(this.estoque);
            this.db.list('estoques').update(this.estoque.key,this.estoque)
            .then((result: any) => {
                console.log(result);
            });  
        }           
    }
    carregar(estoque:Estoque) {
        this.estoque = new Estoque(estoque.key,
            estoque.tipo, estoque.quantidade);
    }

    listar() {        
        this.getAll().subscribe(
            estoques => this.estoques = estoques,
            error => alert(error),
            () => console.log("terminou")
          );        
    }

    excluir(key:string) {
        if (confirm('Deseja realmente excluir?')) {
            this.db.list('estoques').remove(key)
                .then((result: any) => {
                    console.log(key);
                });  
        }
    }

    getAll() : Observable<any[]> {
        return this.db.list('estoques')
          .snapshotChanges()
          .pipe(
            map(changes => {
              return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
      }
    }
    