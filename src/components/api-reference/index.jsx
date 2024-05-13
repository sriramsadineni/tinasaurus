import { ApiReferenceReact } from '@scalar/api-reference-react'
import React from 'react'

function ApiReference({url}) {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
            url:url
        },
      }}
    />
  )
}

export default ApiReference