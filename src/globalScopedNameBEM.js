import { parse } from 'path'

export default function globalScopedNameBEM(property, filename) {
  const moduleFileName = parse(filename)?.name?.replace(/\.module$/, '')
  const moduleName = moduleFileName
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()

  if (property.startsWith('root')) {
    const hasRootModifier = property[4] === '_'

    if (hasRootModifier) {
      return `${moduleName}${property.replace('root', '')}`
    }

    return `${moduleName}`
  }

  return `${moduleName}__${property}`
}
