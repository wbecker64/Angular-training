import {Injectable} from '@angular/core';
import {Leader, LEADERS} from "../shared/leader";
import {DISHES} from "../shared/dishes";
import {delay, firstValueFrom, Observable, of} from "rxjs";
import {randomDelay} from "./dish.service";

@Injectable({
    providedIn: 'root'
})
export class LeaderService {

    constructor() { }

    getLeaders(): Observable<Leader[]> {
        return of(LEADERS).pipe(delay(randomDelay()))
    }

    getLeader(id: string): Observable<Leader> {
        return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(randomDelay()))
    }

    getFeaturedLeader(): Observable<Leader> {
        return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(randomDelay()))
    }
}
