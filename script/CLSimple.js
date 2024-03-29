function addLineNumber(addLines) {
    if (addLines === true) {
        var pre = document.getElementsByTagName('pre')
        for (var i = 0; i < pre.length; i++) {
            pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>'
            var num = pre[i].innerHTML.split(/\n/).length
            for (var j = 0; j < num; j++) {
                var lineNum = pre[i].getElementsByTagName('span')[0]
                lineNum.innerHTML += '<span>' + (j + 1) + '</span>'
            }
        }
    }
}

function changeCodeFontSize(fontSize) {
    if (fontSize == 0) { return }
    var elements = document.getElementsByTagName('pre')
    for (var i = 0; i < elements.length; i++) {
        elements[i].style['font-size'] = fontSize + 'px'
    }
}

function codeCopy(id) {
    var element = document.getElementById(id);
    var text = element.innerHTML;
    text.select;
    element.focus;

    try {
        copyCodeToClipboard(text, id);
    } catch (err) {
        console.error('Something went wrong to copy to clipboard', err);
    }
}

function copyCodeToClipboard(text, id) {
    var cb = navigator.clipboard;

    if (!cb) {
        console.warn('Re-try');
        codeCopy(id);
        return;
    }

    cb.writeText(text).then(function() {},
        function(err) {
            console.error('Could not copy text: ', err)
        });
}
function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Text has been copied!");
  }
}
