import React from "react"
import AppContainer from "../AppContainer"
import { graphql, useStaticQuery } from "gatsby"

/**
 * @description 目录解析
 * @param {nodes} 文件信息
 * @reference
 */

const MenuLayout = ({ children }) => {
  //nodes 是文档list的相关信息, 文档的详细路由是  /documents/{name}
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      allFile(filter: { sourceInstanceName: { eq: "examples" }, extension: { eq: "json" }, ctime: {} }) {
        edges {
          node {
            id
            name
            parent {
              id
              ... on Directory {
                id
                name
              }
            }
            relativePath
            ctime
            modifiedTime
          }
        }
      }
    }
  `)

  return (
    <AppContainer data={data} category="/examples/json">
      {children}
    </AppContainer>
  )
}

export default MenuLayout
