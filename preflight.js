process.stdin.setEncoding('utf8')
process.stdin.on('data', (data) => {
  const commitRegex = /^<((csh4017)|(pt3717)|(hl5617)|(st5317))> [A-Za-z0-9!"#$%&'()*+,.\r\n\/:;<=>?@\[\] ^_`{|}~-]+$/
  if (commitRegex.test(data)) {
    console.log('  \x1b[32m%s\x1b[0m %s', '✔', 'Commit Message is OK')
    process.exit(0)
  } else {
    console.log('  \x1b[31m%s\x1b[0m %s', '✘', 'Commit Message does not match predefined style:')
    let errcount = 0
    if (!/^<.+>/.test(data)) {
      console.log(`\t${++errcount}: Missing shortcode field`)
    }
    if (!/^<((csh4017)|(pt3717)|(hl5617)|(st5317))>/.test(data)) {
      console.log(`\t${++errcount}: Shortcode does not match any known repository master`)
    }
    process.exit(1)
  }
})