import { el } from 'redom';
import { Menu } from './menu/index';
import { Content } from './content/index';
import { Debug } from './debug';

export class App {
  constructor (data) {
    this.el = el('.app',
      this.menu = new Menu(),
      this.content = new Content(),
      this.debug = new Debug(this)
    );

    this.data = data;
  }
  update () {
    this.menu.update(this.data);
    this.content.update(this.data);
    this.debug.update(this.data);

    window.localStorage && window.localStorage.setItem('redom-state', JSON.stringify(this.data));
  }
  recoverData () {
    const savedData = window.localStorage && window.localStorage.getItem('redom-state');

    if (savedData) {
      this.data = JSON.parse(savedData);
      this.update();
    }
  }
}
