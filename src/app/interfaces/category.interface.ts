import { IGame } from './game.interface';

export interface ICategory {
    '_embedded': {
        'games' : IGame[];
    };
    'name': string;
    'order': number;
    'slug': string;
};
