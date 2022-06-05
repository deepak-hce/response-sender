import { Injectable } from '@angular/core';
import { EThemeColor } from 'src/app/base/enum/e-theme-color';

@Injectable({
    providedIn: 'root',
})
export class RasThemeService {
    public readonly ThemeColor = EThemeColor;

    public readonly themes = [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
    ];

    constructor() {}
}
