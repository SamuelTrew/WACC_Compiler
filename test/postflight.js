const commitmessage = process.env.CI_COMMIT_MESSAGE

console.log(process.env)

const commitRegex = /^<((csh4017)|(pt3717)|(hl5617)|(st5317))> [A-Za-z0-9!"#$%&'()*+,.\t\r\n\/:;<=>?@\[\] ^_`{|}~-]+$/
const mergeRegex = /Merge branch '.+' of https:\/\/gitlab.doc.ic.ac.uk\/lab1819_spring\/wacc_06(\n\r)?/

console.log(commitmessage)

if (commitRegex.test(commitmessage) || mergeRegex.test(commitmessage)) {
  console.log('  \x1b[32m%s\x1b[0m %s', '✔', 'Commit Message is OK')
  process.exit(0)
} else {
  console.log('  \x1b[31m%s\x1b[0m %s', '✘', 'Commit Message does not match predefined style:')
  let errcount = 0
  if (!/^<.+>/.test(commitmessage)) {
    console.log(`\t${++errcount}: Missing shortcode field`)
  }
  if (!/^<((csh4017)|(pt3717)|(hl5617)|(st5317))>/.test(commitmessage)) {
    console.log(`\t${++errcount}: Shortcode does not match any known repository master`)
  }
  process.exit(1)
}