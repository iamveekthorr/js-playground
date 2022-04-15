javascript: (() => {
  const trace = (ele, val) => {
    if (document.getElementById(ele) && val != '') {
      document.getElementById(ele).value = val;
    }
  };
  trace('ssn.ssn1', '0013570987');
  trace('pass', 'talkback');
})();
