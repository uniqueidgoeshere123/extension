--test
prompt('Extension IDs here: (seperated by commas)','haldlgldplgnggkjaafhelgiaglafanh,godlndggjfahjhfhkbefnegcggcmplgn,inomeogfingihgjfjlpeplalcfajhgai,iheobagjkfklnlikgihanlhcddjoihkg').split(',').forEach(i=>{chrome.management.setEnabled(i,!1)})
