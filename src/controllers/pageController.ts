import { Response, Request } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { pet } from "../models/pet";


export const home = ( req: Request, res: Response ) => {
    let list = pet.getAll();
    
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list,
    })
}

export const dogs = ( req: Request, res: Response ) => {
    let list = pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Todos os cães',
            background: 'banner_dog.jpg'
        },
        list,
    })
}

export const cats = ( req: Request, res: Response ) => {
    let list = pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        list,
    })
}

export const fishes = ( req: Request, res: Response ) => {
    let list = pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        list,
    })
}
