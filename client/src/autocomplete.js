/* eslint import/prefer-default-export: 0 */
import { bindable, inject, bindingMode } from 'aurelia-framework';

function emitEvent(type, element, detail) {
  const event = new CustomEvent(type, { 
    detail,
    bubbles: true
  });
  
  element.dispatchEvent(event);
}

@inject(Element)
export class AutocompleteCustomElement {
  @bindable placeholder = 'Enter text';
  @bindable suggestions = [];
  @bindable minCharacters = 2;
  @bindable suggestionTemplate=null;
  @bindable valueKey = null;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) selectedValue;

  constructor(element) {
    this.value = null;
    this.element = element;
  }

  keyUp() {
    if (this.value && this.value.length >= this.minCharacters) {
      emitEvent('change', this.element, this.value);
    }

    return true;
  }

  select(index) {
    this.selectedValue = this.suggestions[index];
    this.value = this.valueKey ? this.selectedValue[this.valueKey] : this.selectedValue;
    emitEvent('select', this.element, this.selectedValue);
    this.suggestions = [];
  }

  clear() {
    this.selectedValue = null;
    this.value = null;
    this.suggestions = [];
  }
}
