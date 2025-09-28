import classes from './Application.module.scss'
import classnames from '@bu0nq/utility.classnames'

/**
 * @param props
 * @returns {JSX.Element}
 */
export default function (props) {
  const { className, children } = props

  return <div className={classnames(classes.root, className)}>{children}</div>
}
