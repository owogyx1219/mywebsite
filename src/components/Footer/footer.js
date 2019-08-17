import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({footerClass}) => (
  <div className={`defaultFooter ${footerClass}`}>
    <p>View site source on <a href="https://github.com/rashmiap/personal-website-react">Github</a></p>
  </div>
)
Footer.propTypes = {
  footerClass: PropTypes.string,
}
export default Footer
