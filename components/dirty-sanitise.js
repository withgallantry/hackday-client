const tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

const tagOrComment = new RegExp(
    '<(?:'
    + '!--(?:(?:-*[^->])*--+|-?)'
    + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
    + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
    + '|/?[a-z]'
    + ')>',
    'gi');

window.utils = window.utils || {};

window.utils.removeTags = (html) => {
  var oldHtml;
  do {
    oldHtml = html;
    html = html.replace(tagOrComment, '');
  } while (html !== oldHtml);
  return html.replace(/</g, '&lt;');
}
