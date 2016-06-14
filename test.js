import test from 'ava'
import stylus from 'stylus'

import stylusResponsiveBreakpoints from './'

const render = (str) => {
  let actualCss
  stylus(str)
  .set('compress', true)
  .use(stylusResponsiveBreakpoints())
  .import('stylus-responsive-breakpoints')
  .render((err, css) => {
    if (err) {
      throw err
    }
    actualCss = css
  })

  return actualCss
}

const specs = [
  {
    code: `
      +srb-portrait()
        body
          color white
    `,
    expected: '@media (orientation:portrait){body{color:#fff}}'
  },
  {
    code: `
      +srb-landscape()
        body
          color white
    `,
    expected: '@media (orientation:landscape){body{color:#fff}}'
  },
  {
    code: `
      +srb-xs()
        body
          color white
    `,
    expected: '@media (max-width:599px){body{color:#fff}}'
  },
  {
    code: `
      +srb-sm()
        body
          color white
    `,
    expected: '@media (min-width:600px) and (max-width:959px){body{color:#fff}}'
  },
  {
    code: `
      +srb-md()
        body
          color white
    `,
    expected: '@media (min-width:960px) and (max-width:1279px){body{color:#fff}}'
  },
  {
    code: `
      +srb-lg()
        body
          color white
    `,
    expected: '@media (min-width:1280px) and (max-width:1919px){body{color:#fff}}'
  },
  {
    code: `
      +srb-xl()
        body
          color white
    `,
    expected: '@media (min-width:1920px){body{color:#fff}}'
  },
  {
    code: `
      +srb-gt-xs()
        body
          color white
    `,
    expected: '@media (min-width:600px){body{color:#fff}}'
  },
  {
    code: `
      +srb-gt-sm()
        body
          color white
    `,
    expected: '@media (min-width:960px){body{color:#fff}}'
  },
  {
    code: `
      +srb-gt-md()
        body
          color white
    `,
    expected: '@media (min-width:1280px){body{color:#fff}}'
  },
  {
    code: `
      +srb-gt-lg()
        body
          color white
    `,
    expected: '@media (min-width:1920px){body{color:#fff}}'
  },
  {
    code: `
      +srb-device-sm()
        body
          color white
    `,
    expected: '@media (max-device-width:480px){body{color:#fff}}'
  },
  {
    code: `
      +srb-device-md()
        body
          color white
    `,
    expected: '@media (min-device-width:481px) and (max-device-width:1024px){body{color:#fff}}'
  },
  {
    code: `
      +srb-device-lg()
        body
          color white
    `,
    expected: '@media (min-device-width:1025px){body{color:#fff}}'
  },
  {
    code: `
      +srb-gt-device-sm()
        body
          color white
    `,
    expected: '@media (min-device-width:481px){body{color:#fff}}'
  },
  {
    code: `
      +srb-gt-device-md()
        body
          color white
    `,
    expected: '@media (min-device-width:1025px){body{color:#fff}}'
  }
]

specs.forEach(spec => {
  test(t => {
    const {code, expected} = spec
    t.true(render(code) === expected)
  })
})
