import { OnInit, Component } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
    selector: 'cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
    
    cliente: Cliente;

    ngOnInit(): void {
        alert('Olá Mundo!!!');
    }


}