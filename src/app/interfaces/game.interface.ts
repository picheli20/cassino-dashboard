import { iCreated } from './created.interface';
import { iMeta } from './meta.interface';
import { iThumbnails } from './thumbnails.interface';

export interface iGame {
    "background": string;
    "cols": number;
    "description": string;
    "game_stakes": any;
    "height": string;
    "label": string;
    "name": string;
    "rows": number;
    "slug": string;
    "thumbnail": string;
    "vendor": string;
    "vendor_properties": any;
    "width": "800";
    "id": "amaya-judge-dredd";
    "url": any;
    "created_at": iCreated;
    "screenshot": any;
    "homepage_image": any;
    "meta": iMeta;
    "enabled": true;
    "volatility": number;
    "rating": number;
    "backgrounds": string[];
    "screenshots": string[];
    "thumbnails": iThumbnails;
    "pos_x": any;
    "pos_y": any;
    "jurisdiction": string;
    "_links": {
        "self": {
            "href": string
        }
    }
}