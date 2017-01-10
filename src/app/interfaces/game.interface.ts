import { ICreated } from './created.interface';
import { IMeta } from './meta.interface';
import { IThumbnails } from './thumbnails.interface';

export interface IGame {
    'id' : string;
    'name' : string;
    'background' : string;
    'cols' ?: number;
    'description' ?: string;
    'game_stakes' ?: any;
    'height' ?: string;
    'label' ?: string;
    'rows' ?: number;
    'slug' ?: string;
    'thumbnail' ?: string;
    'vendor' ?: string;
    'vendor_properties' ?: any;
    'width' ?: '800';
    'url' ?: any;
    'created_at' ?: ICreated;
    'screenshot' ?: any;
    'homepage_image' ?: any;
    'meta' ?: IMeta;
    'enabled' ?: true;
    'volatility' ?: number;
    'rating' ?: number;
    'backgrounds' ?: string[];
    'screenshots' ?: string[];
    'thumbnails' ?: IThumbnails;
    'pos_x' ?: any;
    'pos_y' ?: any;
    'jurisdiction' ?: string;
    '_links' ?: {
        'self' ?: {
            'href' ?: string
        }
    };
}
