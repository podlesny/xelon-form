  
import {useState, useCallback} from 'react'

export const useHttp = () => {

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }
        let response

        response = await fetch(url, {method, body, headers})

        const data = await response.json()

        return data
    
  }, [])

    return { request }
}