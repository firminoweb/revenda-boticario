import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})

// ${config.apiUrl}

export class RevendedorService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/users');
    }

    register(user: User) {
        return this.http.post('/users/register', user);
    }

    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}
