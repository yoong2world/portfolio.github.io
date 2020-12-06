import anime from '../vendor/anime.es.js';

export function fadeElement({toggle, element, duration}){
  if(toggle == 'in'){
    element.velocity({ opacity: 1, display: 'block' }, { duration: duration })
  }else if(toggle == 'out'){
    element.velocity({ opacity: 0 }, { display: 'none' }, { duration: duration })
  }else{
    console.error('unknown type string, use \'in\' or \'out\'')
  }
}