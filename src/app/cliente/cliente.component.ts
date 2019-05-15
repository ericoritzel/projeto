import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { Cliente } from './cliente.model';
import { FormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common'

@Component({
    selector: 'cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})

@NgModule({
    imports: [FormsModule, CommonModule ],
    declarations: [ ClienteComponent ]    
  })

export class ClienteComponent implements OnInit {
    
    cliente: Cliente;
    clientes: Cliente[] = [];

    ngOnInit(): void {
        this.cliente = new Cliente();
    }

    salvar() {        
       this.clientes.push(this.cliente);
       this.cliente = new Cliente();
       console.log(this.clientes);
    }


}