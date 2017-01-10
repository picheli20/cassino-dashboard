import { iGame } from './game.interface';

export interface iCategory {
    '_embedded': {
        'games' : iGame[];   
    };
    'name': string;
    'order': number;
    'slug': string;
};
