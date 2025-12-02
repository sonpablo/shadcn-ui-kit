const fs = require('fs').promises
const camelcase = require('camelcase')
const svgr = require('@svgr/core').default
const babel = require('@babel/core')
const { dirname } = require('path')

const transform = async (svg, componentName, format) => {
  let component = await svgr(svg, { ref: true, titleProp: true }, { componentName })
  let { code } = await babel.transformAsync(component, {
    plugins: [[require('@babel/plugin-transform-react-jsx'), { useBuiltIns: true }]],
  })

  if (format === 'esm') {
    return code
  }

  return code
    .replace('import * as React from "react"', 'const React = require("react")')
    .replace('export default', 'module.exports =')
}

async function getIcons(style) {
  let files = await fs.readdir(`./dist/${style}`)
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./dist/${style}/${file}`, 'utf8'),
      componentName: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true,
      })}Icon`,
    })),
  )
}

function exportAll(icons, format, includeExtension = true) {
  return icons
    .map(({ componentName }) => {
      let extension = includeExtension ? '.js' : ''
      if (format === 'esm') {
        return `export { default as ${componentName} } from './${componentName}${extension}'`
      }
      return `module.exports.${componentName} = require("./${componentName}${extension}")`
    })
    .join('\n')
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true })
  await fs.writeFile(file, text, 'utf8')
}

async function buildIcons(style, format) {
  let outDir = `./dist/${style}`
  if (format === 'esm') {
    outDir += '/esm'
  }

  let icons = await getIcons(style)
  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      let content = await transform(svg, componentName, format)

      /** @type {string[]} */
      let types = []

      types.push(`import * as React from 'react';`)
      types.push(
        `declare const ${componentName}: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;`,
      )
      types.push(`export default ${componentName};`)

      return [
        ensureWrite(`${outDir}/${componentName}.js`, content),
        ...(types ? [ensureWrite(`${outDir}/${componentName}.d.ts`, types.join('\n') + '\n')] : []),
      ]
    }),
  )

  await ensureWrite(`${outDir}/index.js`, exportAll(icons, format))

  await ensureWrite(`${outDir}/index.d.ts`, exportAll(icons, 'esm', false))
}

async function main() {
  console.log(`Building icon package...`)

  await Promise.all([
    buildIcons('outline', 'cjs'),
    buildIcons('outline', 'esm'),
    buildIcons('filled', 'cjs'),
    buildIcons('filled', 'esm'),
  ])
  return console.log(`Finished building icon package.`)
}

main()

