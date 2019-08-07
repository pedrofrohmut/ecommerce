import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Tag from "../globals/tags/Tag"

const TagList = ({ tags }) => (
  <TagListStyles className="TagList">
    {tags.length > 0 && (
      <ul>
        {tags.map(({ href, text }) => (
          <Tag href={href} text={text} />
        ))}
      </ul>
    )}
  </TagListStyles>
)

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

const TagListStyles = styled.div``

export default TagList
