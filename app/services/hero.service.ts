import {Injectable} from 'angular2/core';
import {HeroModel} from '../models/hero.model';
import {DATA_MOCK_HEROES} from '../data-mocks/hero.data-mock';

@Injectable()
export class HeroService {
    getHeroes() {
        return new Promise<HeroModel[]>(resolve => setTimeout(()=>resolve(DATA_MOCK_HEROES), 2000));
    }
}