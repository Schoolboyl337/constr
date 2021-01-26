 import image from './assets/image.png'
 import {textBlock,titleBlock,imageBlock,columnsBlock} from './classes/blocks'
 const text = `Сюда тоже можно что-то написать,при необходимости,пока что я заглушка`

 export const model = [
    new titleBlock('Конструктор Сайтов на чистом JS', {
        tag:'h3',
        styles: {
            background:'linear-gradient(to right,#ff0099,#493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new textBlock(text,{
        styles: {
            background: 'linear-gradient(to left,#f2994a,#f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new columnsBlock ([
        'Чистый JS, без использования библиотек',
        'Работа с Parcel',
        'Что-то ещё,я пока заглушка'
    ],{
        styles: {
            background: 'linear-gradient(to bottom,#8e2de2,#4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new imageBlock(image,{
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Утка'
    })
]