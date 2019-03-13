function read() {
  if (typeof _buf !== undefined) { _write() }
  if ((typeof process !== 'undefined') && (process.release.name === 'node')) {
    try {
      var rls = require('readline-sync');
      return rls.prompt()
    } catch (error) {
      console.error('Readline Sync not installed!')
    }
  } else {
    return prompt('stdin:')
  }
}