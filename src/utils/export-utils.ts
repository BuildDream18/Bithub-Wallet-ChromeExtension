import { getRandomFileName } from './helper';

export function exportAsFile(filename: string, data: any, type = 'text/csv') {
  // eslint-disable-next-line no-param-reassign
  filename = filename || getRandomFileName();
  // source: https://stackoverflow.com/a/33542499 by Ludovic Feltz
  const blob = new window.Blob([data], { type });
  if ('msSaveOrOpenBlob' in window.navigator && 'msSaveBlob' in window.navigator && false) {
    // window.navigator.msSaveBlob(blob, filename);
  } else {
    const elem = window.document.createElement('a');
    elem.target = '_blank';
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}
